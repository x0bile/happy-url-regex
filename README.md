# happy-url-regex

A regular expression for matching URLs.

![](https://media.giphy.com/media/nXxOjZrbnbRxS/giphy.gif)

A fork of [url-regex](https://github.com/kevva/url-regex) by Kevin Mårtensson, which is based on a [gist](https://gist.github.com/dperini/729294) by Diego Perini.

## Why fork?

Because of a niche, client-side use case.

Webpack uglification would complain when using the original `url-regex` package as it contains ES6 arrow functions and template strings. I have opted to fork the repository and use babel rather than transpiling `url-regex` during webpack build.

## Install

```
$ npm install --save happy-url-regex
```

or

```
$ yarn add happy-url-regex
```

## Usage

```js
import happyUrlRegex from 'happy-url-regex'

happyUrlRegex().test('http://github.com foo bar')
// true

happyUrlRegex().test('www.github.com foo bar')
// true

happyUrlRegex({ exact: true }).test('http://github.com foo bar')
// false

happyUrlRegex({ exact: true }).test('http://github.com')
// true

happyUrlRegex({ strict: false }).test('github.com foo bar')
// true

happyUrlRegex({ exact: true, strict: false }).test('github.com')
// true

'foo http://github.com bar //google.com'.match(happyUrlRegex())
// ['http://github.com', '//google.com']
```

## API

### happyUrlRegex(options)

Returns a regex for matching URLs.

#### options

##### exact

Type: `boolean`<br>
Default: `false`

Only match an exact string. Useful with `RegExp#test` to check if a string is a URL.

##### strict

Type: `boolean`<br>
Default: `true`

Force URLs to start with a valid protocol or `www`. If set to `false` it'll match the TLD against a list of valid [TLDs](https://github.com/stephenmathieson/node-tlds).


## Related

- [get-urls](https://github.com/sindresorhus/get-urls) - Get all URLs in text
- [linkify-urls](https://github.com/sindresorhus/linkify-urls) - Linkify URLs in text


## License

MIT © [Kevin Mårtensson](https://github.com/kevva) and [Diego Perini](https://github.com/dperini)
