import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [uAnswer, setUAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group>
                <Form.Label>Short Answer Question</Form.Label>
                <Form.Control
                    as="textarea"
                    value={uAnswer}
                    onChange={updateAnswer}
                />
            </Form.Group>
            <p>{expectedAnswer === uAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}
