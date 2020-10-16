<h1 align="center">eslint-plugin-eta</h1>
<h2 align="center">Lint your Eta templates with ease</h2>

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