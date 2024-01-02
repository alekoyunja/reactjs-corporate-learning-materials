# React JS Core Library Oluşturma

Bir React JS projesini Core Library olarak oluşturmak ve Webpack kullanarak bileşenlerinizi diğer projelerde kullanılabilir hale getirmek, modüler ve yeniden kullanılabilir kod yazmanın harika bir yoludur. İşte "BTGMButton" adında bir React bileşenini kendi kitaplığınızda nasıl oluşturup başka bir projede kullanabileceğinizin adımları:

### 1. React Library Projesi Oluşturma
Öncelikle, yeni bir React projesi oluşturun ve gerekli bağımlılıkları kurun. Bu projeniz Core Library'niz olacak.

```bash
npx create-react-app my-react-library
cd my-react-library
```

Webpack ve diğer gerekli araçları yükleyin:

```bash
npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/preset-env @babel/preset-react
```

### 2. Webpack Konfigürasyonu
Webpack'i, React bileşenlerinizi paketlemek için yapılandırmanız gerekiyor. Ana dizinde `webpack.config.js` dosyası oluşturun ve aşağıdaki gibi yapılandırın:

```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js', // Giriş noktası
  output: {
    path: path.resolve(__dirname, 'dist'), // Çıktı dizini
    filename: 'index.js', // Çıktı dosya adı
    libraryTarget: 'umd', // Modül formatı
    library: 'myReactLibrary' // Kitaplık adı
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};
```

Bu yapılandırma, React bileşenlerinizi derlemek ve uyumlu bir paket oluşturmak için gereklidir.

### 3. Bileşenin Oluşturulması
Örneğin `BTGMButton` adında bir bileşen oluşturun. `src` klasörü içinde `BTGMButton.js` dosyası oluşturun ve bileşeninizi yazın:

```javascript
import React from 'react';

const BTGMButton = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);

export default BTGMButton;
```

Ardından, bu bileşeni `src/index.js` dosyasında dışa aktarın:

```javascript
import BTGMButton from './BTGMButton';

export { BTGMButton };
```

### 4. Library'nizi Derleyin
Webpack ile library'nizi derleyin:

```bash
webpack --mode production
```

Bu komut, `dist` klasöründe derlenmiş dosyanızı oluşturacaktır.

### 5. Başka Bir Projede Kullanım
Library'nizi başka bir projede kullanmak için, derlenmiş dosyanızı bu projeye kopyalayabilir veya bir npm paketi olarak yayınlayabilirsiniz. Eğer bir npm paketi olarak yayınlamak isterseniz, `package.json` dosyanızı güncelleyin ve npm'e yayınlayın.

Başka bir projede bu bileşeni kullanmak için:

```javascript
import { BTGMButton } from 'my-react-library';

// ...

<BTGMButton label="Click Me" onClick={handleClick} />
```

Bu adımlar, React JS bileşenlerinizi kendi Core Library'niz olarak oluşturmanıza ve bunları başka projelerde kullanmanıza olanak tanır. Bu süreç, kodunuzu modüler ve yeniden kullanılabilir hale getirir.

## Not
Yaptığınız pakedi bir npm regisrtysine yüklemek isterseniz, `package.json` dosyanızı güncelleyin ve npm'e yayınlayın.

```bash
npm publish
```

Eğer local bir paket olarak kullanmak isterseniz, `package.json` dosyanızı el ile `dist` klasörüne koplamanız gerekmektedir. İçerisinde `main`, `name` ve `version` olması gerekmektedir.

```json
{
  "name": "my-react-library",
  "version": "1.0.0",
  "main": "index.js"
}
```

Sonrasında:

```bash
npm run build
cp package.json dist/package.json
cd dist
npm pack
cd ..
npm link
```

komutlarını çalıştırmayı unutmayınız.

## Kaynak

- [npm](https://www.npmjs.com/)
- [webpack](https://webpack.js.org/)
- [Dev Server](https://webpack.js.org/configuration/dev-server/)