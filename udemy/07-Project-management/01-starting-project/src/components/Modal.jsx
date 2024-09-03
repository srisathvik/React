import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle } from "react";
const Modal =  forwardRef(function Modal({children}, refs){
    return(
        <dialog>
            {children}
        </dialog>,
        document.getElementById("modal-root")
    )
});
export default Modal;