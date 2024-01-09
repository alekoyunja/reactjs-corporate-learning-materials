import React, { useState, useEffect, useLayoutEffect, useRef, useId } from "react";
1
// arrow function
const FunctionButton = (props) => {
    // object destructuring
    const { title, type, arttirClicked } = props;
    const [count, setCount] = useState(0);
    // elementin referansını tutar
    const buttonDOM = useRef(null);
    const uniqueId = useId();

    // useEffect, componentDidMount, componentDidUpdate ve componentWillUnmount' ın birleşimi
    // Servisten veri isteyeceğimiz zaman kullanılabilir
    useEffect(() => {
        console.log("useEffect çalıştı");
        console.log(buttonDOM);
        console.log(uniqueId);
        buttonDOM.current.setAttribute("data-type", "button");
        return () => {
            //component kaldırılmadan önce çalışır
            console.log("componentWillUnmount çalıştı");
        }
    }, [count]);

    useLayoutEffect(() => {
        // render edilmeden hemen önce çalışır
        console.log("useLayoutEffect çalıştı");
        document.title = count;
        buttonDOM.current.setAttribute("id", uniqueId);
    });

    return (
        <button id="yeni-button" ref={buttonDOM} type={type} onClick={() => {
            setCount(() => count+1);
            arttirClicked();
        }}>{title}</button>
    );
};

export default FunctionButton;