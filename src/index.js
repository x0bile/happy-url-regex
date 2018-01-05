import ipRegex from 'ip-regex'
import tlds from 'tlds'

export default opts => {
  const options = Object.assign({ strict: true }, opts)

  const protocol = `(?:(?:[a-z]+:)?//)${options.strict ? '' : '?'}`
  const auth = '(?:\\S+(?::\\S*)?@)?'
  const ip = ipRegex.v4().source
  const host = '(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)'
  const domain = '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*'
  const tld = `(?:\\.${options.strict ? '(?:[a-z\\u00a1-\\uffff]{2,})' : `(?:${tlds.sort((a, b) => b.length - a.length).join('|')})`})\\.?`
  const port = '(?::\\d{2,5})?'
  const path = '(?:[/?#][^\\s"]*)?'
  const regex = `(?:${protocol}|www\\.)${auth}(?:localhost|${ip}|${host}${domain}${tld})${port}${path}`

  return options.exact
    ? new RegExp(`(?:^${regex}$)`, 'i')
    : new RegExp(regex, 'ig')
}
