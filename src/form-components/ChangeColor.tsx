import React, { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const COLORS = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black",
    ];
    const [color, setColor] = useState<string>(COLORS[0]);

    return (
        <div>
            <FormGroup>
                <span>
                    {COLORS.map((c: string) => (
                        <Form.Check
                            inline
                            key={c}
                            type="radio"
                            name="colors"
                            id={c}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                setColor(event.target.value);
                            }}
                            label={c}
                            value={c}
                            checked={c === color}
                        />
                    ))}
                </span>
            </FormGroup>
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                Selected color:{color}
            </div>
        </div>
    );
}
