import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(2);
    return (
        <div>
            <div>
                <Button
                    style={{ margin: 5 }}
                    onClick={() => {
                        setLeftDie(d6());
                    }}
                >
                    Roll Left
                </Button>
                <Button
                    style={{ margin: 5 }}
                    onClick={() => {
                        setRightDie(d6());
                    }}
                >
                    {" "}
                    Roll Right
                </Button>
            </div>
            <span data-testId="left-die">Left: {leftDie} </span>{" "}
            <span data-testId="right-die">Right: {rightDie}</span>
            {(leftDie === rightDie ? true : false) && (
                <p>{rightDie === 1 ? "Lose" : "Win"}</p>
            )}
        </div>
    );
}
