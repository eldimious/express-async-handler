# @dimosbotsaris/express-async-handler

<h1 align="center">Welcome to @dimosbotsaris/express-async-handler 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/@dimosbotsaris/express-async-handler" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@dimosbotsaris/express-async-handler.svg">
  </a>
  <img src="https://img.shields.io/badge/npm-%3E%3D7.13.0-blue.svg" />
  <a href="https://github.com/eldimious/express-async-handler#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/eldimious/express-async-handler/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>

  <a href="https://twitter.com/el_dimious" target="_blank">
    <img alt="Twitter: el_dimious" src="https://img.shields.io/twitter/follow/el_dimious.svg?style=social" />
  </a>
</p>

> Simple middle to handle exceptions and catch error within express routes in asynchronous and pass them to your express error handlers.


## Install

```sh
npm install --save @dimosbotsaris/express-async-handler
```

## Usage

```sh
const asyncWrapper = require('@dimosbotsaris/express-async-handler');

express.get('/', asyncWrapper(async (req, res, next) => {
  const baz = await foo.findAll();
  res.send(baz)
}))
```

## Run tests

```sh
npm run test
```

## Author

👤 **Dimos Botsaris**

* Website: https://www.eldimious.com
* Twitter: [@el_dimious](https://twitter.com/el_dimious)
* Github: [@eldimious](https://github.com/eldimious)
* LinkedIn: [@dimosthenis-botsaris-5ab16485](https://www.linkedin.com/in/dimosthenis-botsaris-5ab16485/)

## Support Me

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Y8Y797KCA)

## Show your support

Give a ⭐️ if this project helped you!
