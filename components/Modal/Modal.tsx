import React, { ReactNode } from "react";
import styles from '/styles/Modal.module.css'


interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}

export const Modal = (props: ModalType) =>  {
    return (
        <>
            {props.isOpen && (
                <div className={`modal-overlay ${styles.overlay}`} onClick={props.toggle}>
                    <div onClick={(e) => e.stopPropagation()} className={`modal-box ${styles.box}`}>
                        {props.children}
                        <video className="w-full h-full rounded-3xl"
                            src="https://drive.google.com/uc?id=1FVVbIb16jTw53CIcxusEUd9RErG8bg35" controls>
                        </video>
                    </div>
                </div>
            )}
        </>
    );
}

