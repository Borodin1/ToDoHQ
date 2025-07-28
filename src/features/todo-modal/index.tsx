import React from "react";

import { Modal } from "../../shared/components/Modal";
import { Button, Input } from "../../shared/components";
// import { PickerDate } from "../../shared/components/PickerDate";
import { ITodoModal } from "./types";
import { useTodoModal } from "./useTodoModal";

export const TodoModal: React.FC<ITodoModal> = ({ mode, task }) => {
  const { dispatch, isOpen, handleSubmit, onSubmit, register, formState } =
    useTodoModal({ mode, task });

  return (
    <Modal onClose={() => dispatch(isOpen())}>
      <div className="p-1 text-left">
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
        <div className="w-full h-full border-2 border-gray-300 p-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              label="Title"
              {...register("title", { required: "Title is required" })}
              name="title"
              error={formState.errors.title?.message}
            />

            <div className="flex flex-col text-left my-3">
              <h4 className="text-sm font-semibold">Priority</h4>
              <div className="flex justify-around w-[500px] items-stretch text-[#A1A3AB] max-sm:flex-col max-sm:w-full max-sm:items-center">
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
              className="w-[500px] h-[180px] border-1 border-gray-400 rounded-[5px] p-2 text-start resize-none max-sm:w-full"
              placeholder="Start writing here..."
              {...register("description")}
            />
            <Button
              title="Done"
              type="submit"
              className="w-[90px] h-[34px] my-3 dark:bg-[#FF6A6A] bg-[#FF9090] rounded-[5px] text-white transition-transform duration-700 ease-in-out hover:scale-110"
              onClick={handleSubmit(onSubmit)}
            />
          </form>
        </div>
      </div>
    </Modal>
  );
};
