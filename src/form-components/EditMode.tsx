import React, { useState } from "react";
import { Form, FormGroup, FormLabel } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [canEdit, setCanEdit] = useState<boolean>(false);
    const [person, setPerson] = useState({
        name: "Your Name",
        isStudent: true,
    });
    return (
        <div>
            <Form.Check
                type="switch"
                label="Editable"
                checked={canEdit}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setCanEdit(event.target.checked);
                }}
            ></Form.Check>

            {canEdit && (
                <FormGroup>
                    <FormLabel>Name and Student?</FormLabel>
                    <Form.Control
                        as="textarea"
                        value={person.name}
                        onClick={() => {
                            setPerson({ ...person, name: "" });
                        }}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setPerson({ ...person, name: event.target.value });
                        }}
                    ></Form.Control>
                    <Form.Check
                        id="student-checkbox"
                        type="checkbox"
                        label="student"
                        checked={person.isStudent}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setPerson({
                                ...person,
                                isStudent: event.target.checked,
                            });
                        }}
                    ></Form.Check>
                </FormGroup>
            )}
            <p>
                {person.name}{" "}
                {person.isStudent ? "is a student." : "is not a student."}
            </p>
        </div>
    );
}
