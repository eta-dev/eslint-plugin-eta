# eslint-plugin-eta

> Lint your embeddable Eta templates with ease

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