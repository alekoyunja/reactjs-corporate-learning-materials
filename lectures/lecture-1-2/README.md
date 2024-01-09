# React JS Components, Props ve States

## Components

- React JS ile birlikte gelen en önemli özelliklerden birisi de componentlerdir.
- Componentler, birbirinden bağımsız ve tekrar kullanılabilir yapılar oluşturmamızı sağlar.
- Componentler, birbirinden bağımsız olduğu için bir componentin içerisindeki bir hata diğer componentleri etkilemez.
- Componentler, birbirinden bağımsız olduğu için bir componenti tekrar kullanmak istediğimizde kolaylıkla kullanabiliriz.

### Components Yapıları

1. Class Component
2. Function Component

### 1. Class Component

- Class componentler, React.Component sınıfından türetilir.
- Class componentler, state kullanımı için kullanılır.
- Class componentler, lifecycle methodlarını kullanabilmemizi sağlar.

#### Örnek

```js
import React, { Component } from 'react';

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>Class Component</h1>
      </div>
    );
  }
}
```

### 2. Function Component 💪💪💪

- React 16.8 sürümüyle tanıtılan Hook'lar sayesinde, Function Component'ler de durum (state) ve diğer React özelliklerini kullanabilir hale gelmiştir.
- Function Component'ler, adından da anlaşılacağı gibi, JavaScript fonksiyonları olarak tanımlanır. Bu fonksiyonlar, props (özellikler) alabilir ve JSX kullanarak UI döndürebilir. Basitçe, bir Function Component, React elementleri döndüren bir JavaScript fonksiyonudur.
- Sınıf tabanlı bileşenlere kıyasla daha az sözdizimi gerektirir ve okunması daha kolaydır.
- React Hook'larını kullanarak durum yönetimi, yaşam döngüsü metodları ve diğer React özelliklerine erişim sağlar.
- Genellikle sınıf tabanlı bileşenlere göre daha hafif ve hızlıdır.
- Custom Hook'lar yoluyla işlevsellik kolayca yeniden kullanılabilir hale getirilebilir.

#### Örnek

```js
import React from 'react';

function FunctionComponent() {
  return (
    <div>
      <h1>Function Component</h1>
    </div>
  );
}

export default FunctionComponent;
```	

## Props

- Props, componentler arasında veri iletişimini sağlayan bir yapıdır.
- Props, parent componentten child componentlere veri iletişimini sağlar.
- Props, child componentten parent componentlere veri iletişimini sağlamaz.
- Props, bir componentin içerisindeki verilerin değiştirilmesini sağlamaz.
- Props, bir componentin içerisindeki verilerin değiştirilmesini sağlamak için state kullanılır.

### Class Component Props Kullanımı

```js
import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default ClassComponent;
```

### Function Component Props Kullanımı

```js
import React from 'react';

function FunctionComponent(props) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}

export default FunctionComponent;
```

## States

- State, React'te bileşenlerin veri kaynağıdır ve bir bileşenin yaşam döngüsü boyunca değişebilen veriyi ifade eder. Bir bileşenin state'i, o bileşenin o anki durumunu temsil eder ve kullanıcı etkileşimleri, ağ istekleri veya diğer faktörler sonucunda zamanla değişebilir.
- Bir bileşenin state'i, yalnızca o bileşene özeldir ve doğrudan diğer bileşenlerle paylaşılamaz (ancak state verilerini props olarak geçirmek mümkündür).
- State, bileşenin ömrü boyunca değişebilir. Örneğin, bir form elemanının içeriği veya bir sayacın değeri bir state olarak saklanabilir.
- State değiştiğinde, React bileşeni otomatik olarak yeniden render eder, böylece kullanıcı arayüzü güncel durumu yansıtır.

### Class Component State Kullanımı

```js
import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Class Component',
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}

export default ClassComponent;
```
### Function Component State Kullanımı

```js
import React, { useState } from 'react';

function FunctionComponent() {
  // [state, setState] bir state ve state'i güncellemek için kullanılacak bir fonksiyon döndürür.
  const [title, setTitle] = useState('Function Component');

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default FunctionComponent;
```

## Kaynak

- [react.dev](https://react.dev/learn)
- [react.dev](https://react.dev/learn)