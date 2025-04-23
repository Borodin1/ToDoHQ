import { useDispatch } from "react-redux";
import { Modal } from "../../shared/components/Modal";
import { isOpen } from "../../entities/todos/model/todosSlice";
import { Button, Input } from "../../shared/components";
import { PickerDate } from "../../shared/components/PickerDate";

interface ITodoModal {
  mode: "create" | "edit";
}

export const TodoModal: React.FC<ITodoModal> = ({ mode }) => {
  const dispatch = useDispatch();
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
          <form>
            <Input type="text" name="title" label="Title" />
            <PickerDate />
            <div className="flex flex-col text-left my-3">
              <h4 className="text-sm font-semibold">Priority</h4>
              <div className="flex justify-around w-[500px] items-stretch text-[#A1A3AB]">
                <Input
                  type="radio"
                  name="priority"
                  className="capitalize"
                  label="extreme"
                  wrappedStyle="text-[#F21E1E] font-black"
                />
                <Input
                  type="radio"
                  name="priority"
                  className="capitalize"
                  label="moderate"
                  wrappedStyle="text-[#3ABEFF] font-black"
                />
                <Input
                  type="radio"
                  name="priority"
                  className="capitalize"
                  label="low"
                  wrappedStyle="text-[#05A301] font-black"
                />
              </div>
              </div>
              <Input
                type="textarea"
                label="Task Description"
                className="w-[500px] h-[180px] border-1 border-gray-400 rounded-[5px] p-2 text-start resize-none"
                placeholder="Start writing here..."
              />
          </form>
        </div>
        <Button title='Done' className='w-[90px] h-[34px] my-3 bg-[#FF9090] rounded-[5px] text-white'/>
      </div>
    </Modal>
  );
};
