import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ShoveBoxButton({
    position,
    setPosition,
}: {
    position: number;
    setPosition: (newPosition: number) => void;
}) {
    return (
        <Button
            onClick={() => {
                setPosition(4 + position);
            }}
        >
            Shove the Box
        </Button>
    );
}

function MoveableBox({ position }: { position: number }): React.JSX.Element {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: position + "px",
            }}
        ></div>
    );
}

export function ShoveBox(): React.JSX.Element {
    const [boxP, setBoxP] = useState<number>(10);
    const setPosition = (position: number) => {
        setBoxP(position);
    };

    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {boxP}</span>
            <div>
                <ShoveBoxButton
                    position={boxP}
                    setPosition={setPosition}
                ></ShoveBoxButton>
                <MoveableBox position={boxP}></MoveableBox>
            </div>
        </div>
    );
}
