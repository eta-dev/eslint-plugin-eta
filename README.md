# eslint-plugin-eta

> Lint your embeddable Eta templates with ease

<img src="https://img.shields.io/coveralls/github/eta-dev/eslint-plugin-eta?style=plastic" />

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