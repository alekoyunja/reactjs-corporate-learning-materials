import React, { useState } from "react";
import Arttir from "../ArttirButton";
import Azalt from "../AzaltButton";

const Sayac = () => {
    const [sayac, setSayac] = useState(0);

    const checkNumberLessThenZero = (num, operand) => {
        if(operand === "-") {
            if(num > 0) setSayac(() => sayac - 1);
        }
        if(num < 0) setSayac(() => sayac);
        else setSayac(() => sayac + 1);
    };

    return (
        <seciton id="sayac">
            <Arttir arttirClicked={() => checkNumberLessThenZero(sayac, "+")} />
            <Azalt azaltClicked={() => checkNumberLessThenZero(sayac, "-")} />
            <div>{sayac}</div>
        </seciton>
    );
};

export default Sayac;