import React, { useState, useMemo, useEffect, memo } from 'react';

const MemorizedComponent = memo(({ inilialList }) => {
    const [list, setList] = useState(inilialList);
    const [anotherState, setAnotherState] = useState(0);

    useEffect(() => {
        console.log('functional komponent yüklendi');
    }, []);

    console.log('functional komponent render ediliyor');

    // useMemo ile listeyi toplama işlemi
    const total = useMemo(() => {
        console.log('Liste toplamı hesaplanıyor...');
        return list.reduce((sum, current) => sum + current, 0);
    }, [list]);

    return (
        <div>
            <h1>Memorized Component</h1>
            <h2>Liste Toplamı: {total}</h2>
            <button onClick={() => setList([...list, list.length + 1])}>
                Listeye Ekle
            </button>
            <button onClick={() => setAnotherState(anotherState + 1)}>
                Başka State'i Değiştir
            </button>
        </div>
    );
});

export default MemorizedComponent;
