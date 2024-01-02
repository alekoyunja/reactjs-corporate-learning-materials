# React JS Manuel Olarak Kurulumu ve Webpack

## Node JS Nedir?

Node JS, Google Chrome'un V8 JavaScript motoru üzerine inşa edilmiş, açık kaynaklı, çok platformlu bir çalışma zamanı ortamıdır. Node JS, JavaScript'i sunucu tarafında çalıştırmak için kullanılır.

## npm Nedir?

npm, Node.js paketlerini yönetmek için kullanılan varsayılan paket yöneticisidir. npm, Node.js ortamında çalışan JavaScript paketlerini yönetmek için kullanılan en büyük paket yöneticisidir.

### npm package.json Dosyası

package.json dosyası, Node.js projesinin kök dizininde bulunan bir dosyadır. Bu dosya, Node.js projesinin adını, versiyonunu, açıklamasını, geliştiricilerini, bağımlılıklarını ve diğer bilgilerini içerir. Bu dosya, npm tarafından otomatik olarak oluşturulur.

### package.json Dosya Yapısı

```json
{
  "name": "react-manually-installation",
  "version": "1.0.0",
  "description": "React JS Manuel Olarak Kurulumu ve Webpack",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server --mode development --open",
    "build": "webpack --mode production"
  },
  "repository": {
    "type": "git",
    "url": "git+"
  },
  "private": true, // npm publish komutu ile paketin npmjs.com üzerinde yayınlanmasını engeller.
  "keywords": [
    "react",
    "webpack"
  ],
  "author": "Alptuğ Türkiş",
  "license": "MIT",
  "dependencies": {
    "react": "^16.13.1",
    "react-dom": "^16.13.1"
  },
  "devDependencies": {
    "@babel/core": "^7.10.5",
    "@babel/preset-env": "^7.10.4",
    "@babel/preset-react": "^7.10.4",
    "babel-loader": "^8.1.0",
    "html-webpack-plugin": "^4.3.0",
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.0"
  }
}
```

### Temel npm Komutları

- `npm init` : Proje oluşturmak için kullanılır.
- `npm install` : Proje bağımlılıklarını yüklemek için kullanılır.
- `npm install <package_name>` : Proje bağımlılıklarını yüklemek için kullanılır.
- `npm install <package_name> --save` : Proje bağımlılıklarını yüklemek için kullanılır ve package.json dosyasına kaydeder.
- `npm install <package_name> --save-dev` : Proje bağımlılıklarını yüklemek için kullanılır ve package.json dosyasına kaydeder. Bu komut ile yüklenen paketler sadece geliştirme ortamında kullanılır.
- `npm install <package_name> -g` : Proje bağımlılıklarını yüklemek için kullanılır ve global olarak yükler.
- `npm install <package_name> --save-exact` : Proje bağımlılıklarını yüklemek için kullanılır ve package.json dosyasına kaydeder. Bu komut ile yüklenen paketlerin versiyonları sabitlenir. 
- `npm install <package_name> --no-save` : Proje bağımlılıklarını yüklemek için kullanılır ve package.json dosyasına kaydetmez.
- `npm install <package_name> --dry-run` : Proje bağımlılıklarını yüklemek için kullanılır ve yüklenen paketleri gösterir.
- `npm install <package_name> --force` : Proje bağımlılıklarını yüklemek için kullanılır ve yüklenen paketleri zorlar.
- `npm install <package_name> --no-package-lock` : Proje bağımlılıklarını yüklemek için kullanılır ve package-lock.json dosyasını yükler.
- `npm install <package_name> --production` : Proje bağımlılıklarını yüklemek için kullanılır ve sadece üretim ortamında kullanılan paketleri yükler.
- `npm install <package_name> --quiet` : Proje bağımlılıklarını yüklemek için kullanılır ve sessizce yükler.
- `npm pack <package_name>` :   Projeyi paketlemek için kullanılır.

### npm Private Registry

npm, varsayılan olarak npmjs.com üzerindeki paketleri kullanır. Ancak, npmjs.com üzerindeki paketlerin yanı sıra kendi paketlerimizi de kullanabiliriz. Bunun için npmjs.com üzerinde bir hesap oluşturup, kendi paketlerimizi yayınlamamız gerekmektedir.
Özellikle Nexus gibi bir private registry kullanıyorsak, npmjs.com üzerindeki paketleri kullanmak yerine kendi private registry'mizdeki paketleri kullanmak daha mantıklı olacaktır.

```bash	
npm set registry "<private registry endpoint>"
```	

## webpack Nedir?

webpack, JavaScript uygulamaları için bir modül paketleyicisidir. webpack, uygulamamızda kullanılan tüm modülleri birleştirerek tek bir dosya haline getirir. Bu sayede, uygulamamızın performansı artar. Yöetimsel olarak projelerinizin daha kolay ve efektif olarak yönetilmesini sağlar.

### webpack.config.js Dosyası

webpack.config.js dosyası, webpack tarafından kullanılan yapılandırma dosyasıdır. Bu dosya, webpack tarafından otomatik olarak oluşturulmaz. Bu dosyayı biz oluştururuz.

### webpack.config.js Dosya Yapısı

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Uygulamanın giriş noktası
  output: { // Uygulamanın çıkış noktası
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js'
  },
  module: { // Uygulamada kullanılacak modüller
    rules: [
      {
        test: /\.js$/, // Uygulamada kullanılacak modüllerin uzantıları
        exclude: /node_modules/, // Uygulamada kullanılacak modüllerin dışarıda tutulacak klasörleri
        use: {
          loader: 'babel-loader' // Uygulamada kullanılacak modüllerin yükleyicileri
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
```
