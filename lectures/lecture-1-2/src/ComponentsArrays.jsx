import React from 'react';

const ComponentArrays = () => {
    const arr = ["alptuğ", "osman"];

    // array methods
    // map
    const mapFn = (text) => {
        // String içerisinde değişken kullanımı
        return `İsim: ${text}`;
    }

    console.log(arr.map(mapFn));

    // filter
    // filtre içerisinde arama yapar
    const persons = [
        {
            id: 0,
            firstname: "Alptuğ",
            lastname: "Okan",
            age: 39
        },
        {
            id: 1,
            firstname: "Ayşe",
            lastname: "Aslım",
            age: 29
        },
    ];

    console.log(persons.filter(person => person.age < 30));

    // birde çok element render ederken key kullanımı zorunludur.
    return (
        <div id="persons">{
            persons.map(person => (
                <div key={person.id}>
                    <p>İsim: {person.firstname}</p>
                    <p>Soyisim: {person.lastname}</p>
                </div>
            ))
        }</div>
    );
};

export default ComponentArrays;