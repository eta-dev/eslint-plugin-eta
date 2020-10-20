const Eta = require('eta')

module.exports = {
  preprocess: (text, filename) => {
    let result = Eta.parse(text, {
      parse: {
        exec: '',
        interpolate: '=',
        raw: '~'
      },
      tags: ['<%', '%>']
    })

    result = result.filter(
      (res) => res.t === 'r' || res.t === 'i' || res.t === 'e'
    )

    result = result.map((res) => res.val)

    result = result.join('\n')

    return [{ text: result, filename }]
  },

  postprocess: (messages, filename) => {
    return [].concat(...messages)
  }
}
