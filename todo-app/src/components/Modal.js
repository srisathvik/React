import { useEffect, useRef } from "react";
import "./modal.css";

function Modal({ openModal, closeModal, item }) {
  const ref = useRef();

  useEffect(() => {
    
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog
      ref={ref}
      onCancel={closeModal}
    >
      <div className="modal-container" onClick={(e) =>{e.stopPropagation()}}>
                
                <h3 className="task-title">{item.title}</h3>
                <p className="task-desription">Description: {item.description}</p>
                <p className="task-completed">Task completed: {item.completed? "Yes" : "No"}</p>

            </div>
      <button onClick={closeModal} className="close-button">
        Close
      </button>
    </dialog>
  );
}

export default Modal;