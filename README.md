# envade

Cross-platform environment variable utility

```sh
$ export NODE_ENV=development
$ node index.js -- node -e 'console.log(process.env.NODE_ENV);'
development
$ node index.js NODE_ENV=production -- node -e 'console.log(process.env.NODE_ENV);'
production
```
