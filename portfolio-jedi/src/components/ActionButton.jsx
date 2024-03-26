import { useState } from "react";
import { useBeep } from "../providers/AudioProvider";

export function ActionButton({
    layout,
    action,
    purple
}) {

    const [isClicked, setIsClicked] = useState(false);
    const { playBeep } = useBeep();

    const handleMouseDown = () => {
        action && action();
        playBeep();
        setIsClicked(true);
    }

    const handleMouseUp = () => {
        setIsClicked(false)
    }

    return <>
        <div
            className={purple ? `action-button-purple` : `action-button`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            style={{
                paddingBottom: isClicked ? '0px' : '10px'
            }}
        >
            <div>
                {layout}
            </div>
        </div>
    </>
}