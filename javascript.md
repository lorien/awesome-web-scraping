# JavaScript Web Scraping

This list contains JavaScript libraries related to web scraping and data processing. The content of that list is focused on libs that could be run in nodejs (without real web-browser).

* [JavaScript Web Scraping](#javascript-web-scraping)
   * [Network](#network)
   * [Web-scraping Frameworks](#web-scraping-frameworks)
   * [HTML/XML Parsing](#htmlxml-parsing)
   * [Text processing](#text-processing)
   * [Specific Formats Processing](#specific-formats-processing)
   * [Natural Language Processing](#natural-language-processing)
   * [Browser automation and emulation](#browser-automation-and-emulation)
   * [Multiprocessing](#multiprocessing)
   * [Queue](#queue)
   * [Cloud Computing](#cloud-computing)
   * [Email](#email)
   * [URL and Network Address Manipulation](#url-and-network-address-manipulation)
   * [Web Content Extracting](#web-content-extracting)
   * [Asynchronous](#asynchronous)
   * [WebSocket](#websocket)
   * [DNS Resolving](#dns-resolving)
   * [Computer Vision](#computer-vision)
   * [Proxy Server](#proxy-server)
   * [Other JavaScript Lists](#other-javascript-lists)
   * [Data Structure](#data-structure)

## Network
* [node-http2](https://github.com/molnarg/node-http2) - An HTTP/2 client and server implementation for node.js
* [httpinvoke](https://github.com/jakutis/httpinvoke) - A no-dependencies HTTP client library for browsers and Node.js with a promise-based or Node.js-style callback-based API to progress events, text and binary file upload and download, partial response body, request and response headers, status code. 
* [request](https://github.com/request/request) - Simplified HTTP request client.
* [socks5-http-client](https://github.com/mattcg/socks5-http-client) - SOCKS v5 HTTP client implementation in JavaScript for Node.js
* [rest](https://github.com/cujojs/rest) - RESTful HTTP client for JavaScript
* [wreck](https://github.com/hapijs/wreck) - HTTP Client Utilities

## Web-Scraping Frameworks
* [node-crawler](https://github.com/sylvinus/node-crawler) - Web Crawler/Spider for NodeJS + server-side jQuery
* [node-simplecrawler](https://github.com/cgiffard/node-simplecrawler) - Flexible event driven crawler for node

## HTML/XML Parsing
  * General
    * TODO
  * Sanitizing
    * [js-xss](https://github.com/leizongmin/js-xss) - Sanitize untrusted HTML (to prevent XSS) with a configuration specified by a Whitelist.

## Text Processing

*Libraries for parsing and manipulating plain texts.*

* General
  * [string.js](https://github.com/jprichardson/string.js) - Extra JavaScript string methods.
  * [accounting.js](https://github.com/openexchangerates/accounting.js) - A lightweight JavaScript library for number, money and currency formatting - fully localisable, zero dependencies.
  * [validator.js](https://github.com/chriso/validator.js) - String validation and sanitization.
* Date and time
  * [moment](https://github.com/moment/moment) - Parse, validate, manipulate, and display dates in javascript.
    * [moment-timezone](https://github.com/moment/moment-timezone) - Timezone support for moment.js.
  * [date](https://github.com/MatthewMueller/date) - Date() for humans.
  * [ms.js](https://github.com/guille/ms.js) - Tiny millisecond conversion utility.
* HTML entities
  * [he](https://github.com/mathiasbynens/he) - A robust HTML entity encoder/decoder written in JavaScript.
* Money
  * [money.js](https://github.com/openexchangerates/money.js) - Simple and tiny JavaScript library for realtime currency conversion and exchange rate calculation, from any currency, to any currency.
* Color
  * [chroma.js](https://github.com/gka/chroma.js) - JavaScript library for all kinds of color manipulations.
  * [color](https://github.com/harthur/color) - JavaScript color conversion and manipulation library.
  * [TinyColor](https://github.com/bgrins/TinyColor) - Fast, small color manipulation and conversion for JavaScript.

## Specific Formats Processing

*Libraries for parsing and manipulating specific text formats.*

* General
  * [jBinary](https://github.com/jDataView/jBinary) - High-level I/O (loading, parsing, manipulating, serializing, saving) for binary files with declarative syntax for describing file types and data structures.
* CSV
  * [BabyParse](https://github.com/Rich-Harris/BabyParse) - Fast and reliable CSV parser based on Papa Parse. Papa Parse is for the browser, Baby Parse is for Node.js.
* JSON
  * [json3](https://github.com/bestiejs/json3) - A modern JSON implementation compatible with nearly all JavaScript platforms.

## Natural Language Processing

*Libraries for working with human languages.*

* General
  * [natural](https://github.com/NaturalNode/natural) - general natural language facilities for node
  * [nlp_compromise](https://github.com/spencermountain/nlp_compromise) - natural language processing
  * [Hanzi](https://github.com/nieldlr/Hanzi) - HanziJS is a Chinese character and NLP module for Chinese language processing for Node.js
  * [salient](https://github.com/nyxtom/salient) - Machine Learning, Natural Language Processing and Sentiment Analysis Toolkit for Node.js
* Stemmer
  * [snowball-js](https://github.com/fortnightlabs/snowball-js) - javascript implementation of the popular snowball word stemming nlp algorithm
  * [porter-stemmer](https://github.com/jedp/porter-stemmer) - Martin Porter's stemmer for node.js
  * [Porter-Stemmer](https://github.com/kristopolous/Porter-Stemmer) - A Javascript Implementation of the Porter Stemmer
  * [lunr-languages](https://github.com/MihaiValentin/lunr-languages) - a collection of languages stemmers and stopwords for Lunr Javascript library
* Language detection
  * [franc](https://github.com/wooorm/franc) - Natural language detection
  * [guessLanguage.js](https://github.com/richtr/guessLanguage.js) - A natural language detection library based on trigram statistical analysis for Node.js

## Browser automation and emulation
* [phantomjs](https://github.com/ariya/phantomjs) - Scriptable Headless WebKit.
* [slimerjs](https://github.com/laurentj/slimerjs) - A PhantomJS-like tool running Gecko.
* [casperjs](https://github.com/n1k0/casperjs) - Navigation scripting & testing utility for PhantomJS and SlimerJS.
* [zombie](https://github.com/assaf/zombie) - Insanely fast, full-stack, headless browser testing using node.js.
* [nightmare](https://github.com/segmentio/nightmare) - Nightmare is a high level wrapper for PhantomJS that lets you automate browser tasks

## Multiprocessing
  * TODO

## Asynchronous

*Libraries for asynchronous networking programming.*

  * TODO

## Queue
  * TODO

## Email

*Libraries for parsing email.*

  * TODO

## URL and Network Address Manipulation

*Libraries for parsing/modifying URLs and network addresses.*

* URL
  * [query-string](https://github.com/sindresorhus/query-string) - Parse and stringify URL query strings.
  * [URI.js](https://github.com/medialize/URI.js/) - Javascript URL mutation library.
  * [jsurl](https://github.com/Mikhus/jsurl) - Lightweight URL manipulation with JavaScript.
* Network Address
  * TODO

## Web Content Extracting

*Libraries for extracting web contents.*

* Text and Meta Data from HTML pages
  * TODO

## WebSocket

*Libraries for working with WebSocket.*

  * TODO

## DNS Resolving
  * TODO

## Computer Vision
* [tracking.js](https://github.com/eduardolundgren/tracking.js) - A modern approach for Computer Vision on the web.
* [ocrad.js](https://github.com/antimatter15/ocrad.js) - OCR in Javascript via Emscripten.

## Proxy Server
  * TODO

## Data Structure
* [immutable](https://github.com/facebook/immutable-js) - Immutable persistent data collections for Javascript which increase efficiency and simplicity.
* [lodash](https://github.com/lodash/lodash) - More consistent cross-environment iteration support for arrays, strings, objects, and arguments objects

## Other JavaScript lists

 * [awesome-javascript](https://github.com/sorrycc/awesome-javascript)
