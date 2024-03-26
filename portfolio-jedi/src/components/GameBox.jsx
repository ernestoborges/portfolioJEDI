import { useState } from "react";
import { ActionButton } from "./ActionButton";
import { AudioBeep } from "./AudioBeep";

export function GameBox({
    slideArray,
}) {

    const [selectedSlide, setSelectedSlide] = useState(0)
    const [selectedOption, setSelectedOption] = useState(0)

    const moveOptionLeft = () => {
        if(selectedOption <= 0) return;
        setSelectedOption(selectedOption - 1)
    }

    const moveOptionRight = () => {
        if(selectedOption >= slideArray.length - 1) return;
        setSelectedOption(selectedOption + 1)
    }

    const selectSlide = () => {
        setSelectedSlide(selectedOption)
    }

    return <div className="gb-container">
        <div className="gb-wrapper">
            <div className="gb-display-border">
                <div className="gb-display">
                    <div className="slide-container">
                        <div className="slide-wrapper">
                            <div className="slide" >
                                {slideArray[selectedSlide].component()}
                            </div>
                        </div>
                    </div>
                    <div className="navbar">
                        {
                            slideArray.map((slide, index) =>
                                <div
                                    key={index}
                                    className={`navbar-item ${selectedOption === index ? 'selected-item' : ''}`}
                                >
                                    {slide.name}
                                </div>
                            )
                        }
                    </div>
                    <div className="overlay"/>
                </div>
            </div>
            <div className="logo">
                portfolio <span>GAMEBOY</span> 1.0
            </div>
            <div className="buttons-container">
                <div className="directionals-container">
                    <div>
                        <ActionButton layout="<" action={moveOptionLeft} />
                    </div>
                    <div>
                        <ActionButton layout=">" action={moveOptionRight} />
                    </div>
                </div>
                <div className="actions-container">
                    <ActionButton layout="A" action={selectSlide} purple />
                </div>
            </div>
            <div className="audio-bars">
                <AudioBeep />
                <div>
                    <div><div></div></div>
                    <div><div></div></div>
                    <div><div></div></div>
                    <div><div></div></div>
                </div>
            </div>
        </div>
    </div>
}