import React, { useLayoutEffect, useRef } from 'react';

export default function FadeInComponent() {
    const ref = useRef(null);

    useLayoutEffect(() => {
        ref.current.style.opacity = 0;
        ref.current.style.transition = 'opacity 2000ms';
        requestAnimationFrame(() => {
            ref.current.style.opacity = 1;
        });
    }, []);

    return <div ref={ref}>Yavaşça beliren metin</div>;
}