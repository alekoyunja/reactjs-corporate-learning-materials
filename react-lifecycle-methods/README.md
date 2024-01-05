# React JS Yaşam Döngüsü Metotları

## Class Components (Sınıf Bileşenleri) Yaşam Döngüsü Metotları

### `constructor()` 

constructor metodu, sınıfın ilk oluşturulduğu anda çalışır. Bu metot içerisinde state tanımlamaları yapılabilir.

```javascript
constructor(props) {
  super(props);
  this.state = {date: new Date()};
}
```

### `render()`

render metodu, bileşenin render edildiği anda çalışır. Bu metot içerisinde bileşenin HTML çıktısı oluşturulur.

```javascript
render() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```

### `componentDidMount()`

componentDidMount metodu, bileşenin ilk render edildiği anda çalışır. Bu metot içerisinde API çağrıları yapılabilir.

```javascript
componentDidMount() {
  console.log('komponent ilk kez render edildi');
}
```

### `componentWillUnmount()`

componentWillUnmount metodu, bileşenin kaldırıldığı anda çalışır. Bu metot içerisinde bileşenin kaldırılmasıyla ilgili işlemler yapılabilir.

```javascript
componentWillUnmount() {
  console.log('komponent kaldırıldı');
}
```

### `shouldComponentUpdate(nextProps, nextState, nextContext)`

shouldComponentUpdate metodu, bileşenin güncellenip güncellenmeyeceğini belirler. Bu metot içerisinde state ve props değerleri karşılaştırılabilir.

```javascript
shouldComponentUpdate(nextProps, nextState, nextContext) {
  if (this.state.date !== nextState.date) {
    return true;
  }
  return false;
}
```

### `getSnapshotBeforeUpdate(prevProps, prevState)`

getSnapshotBeforeUpdate metodu, bileşenin güncellenmeden önceki son halini yakalar. Bu metot içerisinde bileşenin son haline ait veriler yakalanabilir.

```javascript
getSnapshotBeforeUpdate(prevProps, prevState) {
  console.log('komponent güncellenmeden önceki son halini yakaladı');
  // Eğer bir değer döndürülürse, bu değer componentDidUpdate metotuna aktarılır.
  return null;
}
```

### `static getDerivedStateFromProps(props, state)`

getDerivedStateFromProps metodu, bileşenin props değerleri değiştiğinde çalışır. Bu metot içerisinde state değerleri güncellenebilir.

```javascript
static getDerivedStateFromProps(props, state) {
  if (props.date !== state.date) {
    return {
      date: props.date,
    };
  }
  return null;
}
```

## Functional Components (Fonksiyonel Bileşenler) Yaşam Döngüsü Metotları

### `useEffect()`

useEffect metodu, bileşenin render edildiği anda çalışır. Bu metot içerisinde API çağrıları yapılabilir.

```javascript
useEffect(() => {
  console.log('komponent ilk kez render edildi');
}, []);
```

```javascript
useEffect(() => {
  console.log('komponent her state değiştiğinde güncellenecek');
});
```

```javascript
useEffect(() => {
  console.log('value değiştiğinde çalışacak');
}, [value]);
```

```javascript
useEffect(() => {
  console.log('komponent her state değiştiğinde güncellenecek');
  return () => {
    console.log('komponent kaldırıldı');
  };
});
```

### `useMemo()`

useMemo metodu, bileşenin render edildiği anda çalışır. Bu metot içerisinde hesaplamalar yapılabilir.

```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### `useCallback()`

useCallback metodu, bileşenin render edildiği anda çalışır. Bu metot içerisinde fonksiyonlar tanımlanabilir.

```javascript
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

### `useState()`

useState metodu, bileşenin state değerlerini tanımlamak için kullanılır.

```javascript
const [count, setCount] = useState(0);
```

### `useRef()`

useRef metodu, bileşenin state değerlerini tanımlamak için kullanılır.

```javascript
const refContainer = useRef(initialValue);

// DOM Methodları kullanılabilir.
refContainer.setAttribute('name', 'value');
```

### `useId()`

useId metodu, uniq bir değer döndürür.

```javascript
// id değeri rastgele oluşturulur.
const id = useId();
```

### `useReducer()`

useReducer React Hook'u, daha karmaşık durum mantığına sahip bileşenler için useState'in alternatifi olarak kullanılır. Özellikle, birden çok alt değere sahip durumlar ve bu durumların birbiriyle bağlantılı güncellemeleri için idealdir. useReducer, Redux'da kullanılan reducer mantığına benzer şekilde çalışır.

```javascript
import React, { useReducer } from 'react';

// Reducer fonksiyonu
function counterReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

function Counter() {
    // useReducer kullanarak sayaç durumu ve dispatch fonksiyonunu tanımla
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    return (
        <div>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'increment' })}>Artır</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Azalt</button>
        </div>
    );
}

export default Counter;
```

### `useContext()`

useContext React Hook'u, Context API'nin bir parçasıdır ve bir bileşen içinde context değerlerini okumak için kullanılır. React'in Context API'si, prop drilling'i (bileşenler arası veri geçişini) önlemek ve uygulama genelinde kolayca erişilebilir veri sağlamak için kullanılır. useContext Hook'u, bu context verilerine daha kolay ve daha okunabilir bir şekilde erişim sağlar.

```javascript	
import React, { createContext, useState } from 'react';

// Context'in oluşturulması
export const MyContext = createContext();

// Sağlayıcı bileşeni
export const MyProvider = ({ children }) => {
    const [value, setValue] = useState('Hello World');

    return (
        <MyContext.Provider value={{ value, setValue }}>
            {children}
        </MyContext.Provider>
    );
};

import React, { useContext } from 'react';
import { MyContext } from './MyProvider';

function MyComponent() {
    const { value, setValue } = useContext(MyContext);

    return (
        <div>
            <p>{value}</p>
            <button onClick={() => setValue('Yeni Değer')}>Değeri Değiştir</button>
        </div>
    );
}
```

### `useLayoutEffect()`

`useLayoutEffect` Hook'u, React'te `useEffect` Hook'unun bir varyantıdır ve bileşenin DOM'a yansıtılmasından hemen sonra, tarayıcı tarafından herhangi bir boyama işlemi yapılmadan önce çalışır. `useLayoutEffect` ve `useEffect` arasındaki temel fark, `useLayoutEffect`'in DOM güncellemelerinden sonra, ama görsel çıktıların ekrana yansıtılmasından önce çalışmasıdır. Bu, belirli durumlarda önemli olabilir.

```javascript
import React, { useLayoutEffect, useRef } from 'react';

function FadeInComponent() {
    const ref = useRef(null);

    useLayoutEffect(() => {
        ref.current.style.opacity = 0;
        ref.current.style.transition = 'opacity 500ms';
        requestAnimationFrame(() => {
            ref.current.style.opacity = 1;
        });
    }, []);

    return <div ref={ref}>Yavaşça beliren metin</div>;
}
```	

### Custom Hooks (fetchData.js)

```javascript
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(url);
        const jsonData = await result.json();
        setData(jsonData);
      } catch (error) {
        console.error('Veri alınamadı:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading };
};

export default useFetch;
```

```javascript

## Kaynak

- [react.dev](https://react.dev/learn)