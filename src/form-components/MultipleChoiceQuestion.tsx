import React, { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [userChoice, setUserChoice] = useState<string>(options[0]);
    return (
        <div>
            <FormGroup>
                <Form.Select
                    name="options"
                    value={userChoice}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                        setUserChoice(event.target.value);
                    }}
                >
                    {options.map((o: string) => (
                        <option key={o} value={o}>
                            {o}
                        </option>
                    ))}
                </Form.Select>
            </FormGroup>
            <p>{expectedAnswer === userChoice ? "✔️" : "❌"}</p>
        </div>
    );
}
