# eslint-plugin-eta

> Lint your embeddable Eta templates with ease

<span align="center">

[![Travis](https://img.shields.io/travis/com/eta-dev/eslint-plugin-eta/master.svg)](https://travis-ci.com/eta-dev/eslint-plugin-eta)
[![Coveralls](https://img.shields.io/coveralls/eta-dev/eslint-plugin-eta.svg)](https://coveralls.io/github/eta-dev/eslint-plugin-eta)

</span>

### Installation
Run `npm install --save-dev eslint-plugin-eta` to install this ESLint plugin.

### Usage
Add this to your ESLint config:
```javascript
module.exports = {
    ...
    plugins: [
        "eta"
    ],
    overrides: [
        {
            files: ["*.eta"],
            processor: "eta/eta"
        }
    ],
    ...
}
```