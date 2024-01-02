# React JS Sass İle Çalışmak

## Kurulum

```bash
npm install sass-loader sass --save-dev
```

```bash
{
    test: /\.s[ac]ss$/i, // .sass or .scss
    use: ["style-loader", "css-loader", "sass-loader"],
},
```

## Kaynak

- [sass-loader](https://webpack.js.org/loaders/sass-loader/)