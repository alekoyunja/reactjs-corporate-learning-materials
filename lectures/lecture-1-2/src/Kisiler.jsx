import React from 'react';

const Kisiler = ({kisiler}) => {
    return (
        <ul>
            {
                kisiler.map((kisi) => (
                    <li key={kisi.id} onClick={(e) => e.currentTarget.style.color = "red"}>
                        {kisi.firstname} {kisi.lastname} - {kisi.age}
                    </li>
                ))
            }
        </ul>
    );
};

export default Kisiler;