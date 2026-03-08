import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

function ChangeColor({
    updColor,
}: {
    updColor: () => void;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                updColor();
            }}
        >
            Next Color
        </Button>
    );
}

function ColorPreview({ color }: { color: number }): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[color],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const [color, setColor] = useState<number>(DEFAULT_COLOR_INDEX);

    const updColor = () => {
        setColor((color + 1) % COLORS.length);
    };
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
            <div>
                <ChangeColor updColor={updColor}></ChangeColor>
                <ColorPreview color={color}></ColorPreview>
            </div>
        </div>
    );
}
