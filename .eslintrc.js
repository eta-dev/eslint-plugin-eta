module.exports = {
    extends: ["eta-dev"],
    env: {
        mocha: true,
        node: true
    },
    parser: "esprima",
    parserOptions: {
        sourceType: "script"
    }
}