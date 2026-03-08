import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Doubler({ double }: { double: () => void }): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                double();
            }}
        >
            Double
        </Button>
    );
}

function Halver({ half }: { half: () => void }): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                half();
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    const double = () => {
        setDhValue(dhValue * 2);
    };
    const half = () => {
        setDhValue(dhValue * 0.5);
    };
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler double={double}></Doubler>
            <Halver half={half}></Halver>
        </div>
    );
}
