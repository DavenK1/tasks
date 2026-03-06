import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [answerVisible, setAnswerVisible] = useState<boolean>(false);
    return (
        <div>
            <Button
                onClick={() => {
                    {
                        setAnswerVisible(!answerVisible);
                    }
                }}
            >
                Reveal Answer
            </Button>
            {answerVisible && <p>The answer is 42.</p>}
        </div>
    );
}
