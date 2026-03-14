import React, { useState } from "react";
import { Button, Form, FormGroup, FormLabel } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [reqAttempts, setReqAttempts] = useState<string>("0");
    return (
        <div>
            <FormGroup>
                <FormLabel>Attempts</FormLabel>
                <Form.Control
                    type="number"
                    value={reqAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setReqAttempts(event.target.value);
                    }}
                ></Form.Control>
            </FormGroup>
            <p>You have {attempts} attempts</p>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts <= 0}
            >
                Use
            </Button>
            <Button
                onClick={() => {
                    setAttempts(
                        reqAttempts ? Number(reqAttempts) + attempts : attempts,
                    );
                }}
            >
                Gain
            </Button>
        </div>
    );
}
