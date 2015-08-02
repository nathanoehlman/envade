# envade

Cross-platform environment variable utility.
I recommend including it as a dependency and using it in your `npm` scripts:

```sh
$ npm install --save envade
```

```json
"scripts": {
  "dev": "envade NODE_ENV=development -- node index.js"
},
```

It can also be used as a command-line tool on Windows and Linux:

```sh
$ npm install -g envade
$ envade -- node -e "console.log(process.env.NODE_ENV)"
undefined
$ envade NODE_ENV=production -- node -e "console.log(process.env.NODE_ENV)"
production
```
