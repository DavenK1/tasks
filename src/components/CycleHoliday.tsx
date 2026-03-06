import React, { useState } from "react";
import { Button } from "react-bootstrap";

//5 holidays: New Years, Christmas, Halloween, 4th of July, Easter
export const year: Record<string, string> = {
    "New Years": "Easter",
    Easter: "4th of July",
    "4th of July": "Halloween",
    Halloween: "Christmas",
    Christmas: "New Years",
};

export const alpha: Record<string, string> = {
    "4th of July": "Christmas",
    Christmas: "Easter",
    Easter: "Halloween",
    Halloween: "New Years",
    "New Years": "4th of July",
};
export const emoji: Record<string, string> = {
    "New Years": "🐣",
    Easter: "💥",
    "4th of July": "🎃",
    Halloween: "🎄",
    Christmas: "🎊",
};
export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("New Years");
    return (
        <div>
            <p> Holiday: {emoji[holiday]}</p>
            <Button
                onClick={() => {
                    setHoliday(alpha[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(year[holiday]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
