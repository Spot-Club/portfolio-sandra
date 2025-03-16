import { useEffect, useRef } from "react";
import "./modal.scss";

function useEscape(callback, disableCallback = false) {
    useEffect(() => {
        const handleClick = (event) => {
            if (!disableCallback && event.key === "Escape") {
                return callback();
            }
        };
        document.addEventListener("keydown", handleClick, true);
        return () => document.removeEventListener("keydown", handleClick, true);
    });
}

export function Modal({ visible, onClose, children, className = "" }) {
    const elementRef = useRef();
    useEscape(onClose, !visible);
    const handleOnBackDropClick = (e) => {
        if (e.target.id === "backdrop") {
            onClose();
        }
    };

    if (!visible) return <></>;
    return (
        <div
            id="backdrop"
            ref={elementRef}
            data-testid="backdrop"
            onClick={handleOnBackDropClick}
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 ${className}`}
        >

            {children}
        </div>
    );
}
