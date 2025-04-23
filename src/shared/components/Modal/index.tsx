import { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";

interface IModalProps {
  children: ReactNode;
  onClose: () => void;
}

export const Modal: React.FC<IModalProps> = ({ children, onClose }) => {
  const modalRoot = document.getElementById("modal-root");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return modalRoot
    ? ReactDOM.createPortal(
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center text-center items-center z-[1000] bg-gray-500/50 scroll-auto"
          onClick={onClose}>
          <div
            className="bg-white p-5 w-[918px] h-[670px] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>,
        modalRoot
      )
    : null;
};
