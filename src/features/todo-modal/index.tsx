import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { Modal } from "../../shared/components/Modal";
import { isOpen } from "../../entities/todos/model/todosSlice";
import { Button, Input } from "../../shared/components";
// import { PickerDate } from "../../shared/components/PickerDate";
import { createTask, updateTask } from "../../entities/todos/api/index";
import { useAppDispatch } from "../../app/store";
import { ITodoFetch } from "../../entities/todos/model/types";

interface ITodoModal {
  mode: "create" | "edit";
  task?: {
    id: number;
    title: string;
    description: string;
    priority: string;
    completed?: boolean;
  };
}

export const TodoModal: React.FC<ITodoModal> = ({ mode, task }) => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit, reset, formState } = useForm<ITodoFetch>();

  useEffect(() => {
    if (mode === "edit" && task) {
      reset({
        title: task.title || "",
        description: task.description || "",
        completed: task.completed || false,
        priority: ["extreme", "moderate", "low"].includes(task.priority)
          ? (task.priority as "extreme" | "moderate" | "low")
          : "low",
      });
    }
  }, [mode, task, reset]);

  const onSubmit = (data: ITodoFetch) => {
    if (mode === "edit" && task?.id) {
      const updateData = {
        title: data.title,
        description: data.description,
        priority: data.priority,
        completed: data.completed !== undefined ? data.completed : task.completed || false
      };
      dispatch(updateTask({ id: task.id, todoData: updateData }));
    } else {
      const newData = { ...data, completed: false };
      dispatch(createTask(newData));
    }
    console.log(data);
    dispatch(isOpen());
    reset();
  };


  return (
    <Modal onClose={() => dispatch(isOpen())}>
      <div className="p-8 text-left">
        <div className="flex justify-between mb-3.5">
          <h3 className="text-base font-semibold underline decoration-[#F24E1E]">
            {mode === "create" ? "Create Todo" : "Edit Todo"}
          </h3>
          <p
            className="cursor-pointer text-sm font-semibold underline"
            onClick={() => dispatch(isOpen())}>
            Go Back
          </p>
        </div>
        <div className="w-[810px] h-[500px] border-2 border-gray-300 p-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              label="Title"
              {...register("title", { required: "Title is required" })}
              name="title"
              error={formState.errors.title?.message}
            />

            {/* <PickerDate /> */}

            <div className="flex flex-col text-left my-3">
              <h4 className="text-sm font-semibold">Priority</h4>
              <div className="flex justify-around w-[500px] items-stretch text-[#A1A3AB]">
                <Input
                  type="radio"
                  label="extreme"
                  value="extreme"
                  wrappedStyle="text-[#F21E1E] font-black"
                  {...register("priority")}
                />
                <Input
                  type="radio"
                  label="moderate"
                  value="moderate"
                  wrappedStyle="text-[#3ABEFF] font-black"
                  {...register("priority")}
                />
                <Input
                  type="radio"
                  label="low"
                  value="low"
                  wrappedStyle="text-[#05A301] font-black"
                  {...register("priority")}
                />
              </div>
            </div>

            <Input
              type="textarea"
              label="Task Description"
              className="w-[500px] h-[180px] border-1 border-gray-400 rounded-[5px] p-2 text-start resize-none"
              placeholder="Start writing here..."
              {...register("description")}
            />
            <Button
              title="Done"
              type="submit"
              className="w-[90px] h-[34px] my-3 bg-[#FF9090] rounded-[5px] text-white"
              onClick={handleSubmit(onSubmit)}
            />
          </form>
        </div>
      </div>
    </Modal>
  );
};
