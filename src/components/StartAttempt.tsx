import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);
    return (
        <div>
            <Button
                disabled={inProgress || attempts <= 0}
                onClick={() => {
                    {
                        setAttempts(attempts - 1);
                        setInProgress(true);
                    }
                }}
            >
                Start Quiz
            </Button>
            <Button
                disabled={!inProgress}
                onClick={() => {
                    {
                        setInProgress(false);
                    }
                }}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts + 1);
                }}
                disabled={inProgress}
            >
                Mulligan
            </Button>
            <p>You have {attempts} attempts.</p>
        </div>
    );
}
