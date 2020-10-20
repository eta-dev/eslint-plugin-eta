module.exports = {
    extends: ["eta-dev"],
    env: {
        jest: true,
        node: true
    },
    parser: "esprima",
    parserOptions: {
        sourceType: "script"
    }
}