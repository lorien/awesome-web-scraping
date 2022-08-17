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
* [request](https://github.com/request/request) - Simplified HTTP request client.
* [socks5-http-client](https://github.com/mattcg/socks5-http-client) - SOCKS v5 HTTP client implementation in JavaScript for Node.js
* [rest](https://github.com/cujojs/rest) - RESTful HTTP client for JavaScript
* [wreck](https://github.com/hapijs/wreck) - HTTP Client Utilities
* [got](https://github.com/sindresorhus/got) - Simplified HTTP requests
* [node-fetch](https://github.com/bitinn/node-fetch) - A light-weight module that brings window.fetch to Node.js
* [bent](https://github.com/mikeal/bent) - Functional HTTP client for Node.js w/ async/await
* [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* [superagent](https://github.com/visionmedia/superagent) - Ajax for Node.js and browsers (JS HTTP client)
* [urllib](https://github.com/node-modules/urllib) - Request HTTP(s) URLs in a complex world
* [needle](https://github.com/tomas/needle) - Nimble, streamable HTTP client for Node.js. With proxy, iconv, cookie, deflate & multipart support

## Web-Scraping Frameworks
* [webparsy](https://github.com/joseconstela/webparsy) - NodeJS lib and cli for scraping websites using Puppeteer and YAML
* [node-crawler](https://github.com/sylvinus/node-crawler) - Web Crawler/Spider for NodeJS + server-side jQuery
* [node-simplecrawler](https://github.com/cgiffard/node-simplecrawler) - Flexible event driven crawler for node
* [Crawlee](https://github.com/apify/crawlee) - Node.js and TypeScript library that crawls with Cheerio, JSDOM, Playwright and Puppeteer while enhancing them with anti-blocking features, queue, storages and more.
* [Ayakashi](https://github.com/ayakashi-io/ayakashi) - The next generation web scraping framework. Features all the necessary tools to create reliable and maintainable scraping and automation systems.
* [pjscrape](https://github.com/nrabinowitz/pjscrape) - A web-scraping framework written in Javascript, using PhantomJS and jQuery

## HTML/XML Parsing
* General
  * [parse5](https://github.com/inikulin/parse5) - WHATWG HTML5 specification-compliant, fast and ready for production HTML parsing/serialization toolset for Node and io.js
  * [htmlparser2](https://github.com/fb55/htmlparser2) - forgiving html and xml parser
  * [sax-js](https://github.com/isaacs/sax-js) - A sax style parser for JS
  * [cheerio](https://github.com/cheeriojs/cheerio) - Fast, flexible, and lean implementation of core jQuery designed specifically for the server
* Sanitizing
  * [js-xss](https://github.com/leizongmin/js-xss) - Sanitize untrusted HTML (to prevent XSS) with a configuration specified by a Whitelist.
  * [surgeon](https://github.com/gajus/surgeon) - Declarative DOM extraction expression evaluator

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
* User Agent
  * [UAParser.js](https://github.com/faisalman/ua-parser-js) - Lightweight JavaScript-based User-Agent string parser. Supports browser & node.js environment. 
* Semantic Version
  * [node-semver](https://github.com/npm/node-semver) - The semver parser for node

## Specific Formats Processing

*Libraries for parsing and manipulating specific text formats.*

* General
  * [jBinary](https://github.com/jDataView/jBinary) - High-level I/O (loading, parsing, manipulating, serializing, saving) for binary files with declarative syntax for describing file types and data structures.
* Office
  * [js-xlsx](https://github.com/SheetJS/js-xlsx) - XLSX / XLSM / XLSB / XLS / SpreadsheetML (Excel Spreadsheet) / ODS parser and writer
* CSV
  * [BabyParse](https://github.com/Rich-Harris/BabyParse) - Fast and reliable CSV parser based on Papa Parse. Papa Parse is for the browser, Baby Parse is for Node.js.
  * [CSV](https://github.com/knrz/CSV.js) - A simple, blazing-fast CSV parser and encoder. Full RFC 4180 compliance.
* JSON
  * [json3](https://github.com/bestiejs/json3) - A modern JSON implementation compatible with nearly all JavaScript platforms.
* EXIF
  * [exif-js](https://github.com/exif-js/exif-js) - JavaScript library for reading EXIF image metadata
* CSS
  * [parse-css](https://github.com/tabatkins/parse-css) - Standards-based CSS Parser
  * [parser-lib CSS parser](https://github.com/CSSLint/parser-lib) - The ParserLib CSS parser is a CSS3 SAX-inspired parser written in JavaScript. By default, the parser only deals with standard CSS syntax and doesn't do validation (checking of property names and values).
* Torrent
  * [parse-torrent](https://github.com/feross/parse-torrent) - Parse a torrent identifier (magnet uri, .torrent file, info hash)
* SQL
  * [SQL Parser](https://github.com/forward/sql-parser) - SQL Parser is a lexer, grammar and parser for SQL written in JS. Currently it is only capable of parsing fairly basic SELECT queries.
* YAML
  * [JS-YAML](https://github.com/nodeca/js-yaml) - JavaScript YAML parser and dumper. Very fast.
* Markdown
  * [markdown-it](https://github.com/markdown-it/markdown-it) - Markdown parser, done right. 100% CommonMark support, extensions, syntax plugins & high speed
* Atom/RSS
  * [node-feedparser](https://github.com/danmactough/node-feedparser) - Robust RSS, Atom, and RDF feed parsing in Node.js
* Netscape Bookmarks(Firefox, Google Chrome, ...)
  * [node-bookmarks-parser](https://github.com/calibr/node-bookmarks-parser) - Parses Firefox/Chrome HTML bookmarks files

## Natural Language Processing

*Libraries for working with human languages.*

* General
  * [natural](https://github.com/NaturalNode/natural) - general natural language facilities for node
  * [nlp_compromise](https://github.com/spencermountain/nlp_compromise) - natural language processing
  * [Hanzi](https://github.com/nieldlr/Hanzi) - HanziJS is a Chinese character and NLP module for Chinese language processing for Node.js
  * [salient](https://github.com/nyxtom/salient) - Machine Learning, Natural Language Processing and Sentiment Analysis Toolkit for Node.js
  * [node-summary](https://github.com/jbrooksuk/node-summary) - Node module that summarizes text using a naive summarization algorithm
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
* [puppeteer](https://github.com/GoogleChrome/puppeteer) - Puppeteer is a Node library which provides a high-level API to control headless Chrome or Chromium over the DevTools Protocol. It can also be configured to use full (non-headless) Chrome or Chromium.
* [headless-chrome-crawler](https://github.com/yujiosaka/headless-chrome-crawler) - Distributed crawler powered by Headless Chrome
* [puppeteer-recorder](https://github.com/checkly/puppeteer-recorder) - Puppeteer recorder is a Chrome extension that records your browser interactions and generates a Puppeteer script.
* [wendigo](https://github.com/angrykoala/wendigo) - Test-oriented headless browser, built on top of Puppeteer.
* [Playwright](https://github.com/microsoft/playwright) - Node.js library to automate Chromium, Firefox and WebKit with a single API

## Multiprocessing
  * [nexpect](https://github.com/nodejitsu/nexpect) - spawn and control child processes in node.js with ease
  * [respawn](https://github.com/mafintosh/respawn) - Spawn a process and restart it if it crashes
  * [node-webworker](https://github.com/pgriess/node-webworker) - A WebWorkers implementation for NodeJS

## Asynchronous

*Libraries for asynchronous networking programming.*

  * [socket.io](https://github.com/socketio/socket.io) - Realtime application framework (Node.JS server)
  * [engine.io](https://github.com/socketio/engine.io) - Engine.IO is the implementation of transport-based cross-browser/cross-device bi-directional communication layer for Socket.IO
  * [async](https://github.com/caolan/async) - Async utilities for node and the browser

## Queue
  * [kue](https://github.com/Automattic/kue) - Kue is a priority job queue backed by redis, built for node.js
  * [bull](https://github.com/OptimalBits/bull) - A lightweight, robust and fast job processing queue. Carefully written for rock solid stability and atomicity.

## Email

*Libraries for parsing email.*

  * [mailparser](https://github.com/andris9/mailparser) - Decode mime formatted e-mails

## URL and Network Address Manipulation

*Libraries for parsing/modifying URLs and network addresses.*

* URL
  * [query-string](https://github.com/sindresorhus/query-string) - Parse and stringify URL query strings.
  * [URI.js](https://github.com/medialize/URI.js/) - Javascript URL mutation library.
  * [jsurl](https://github.com/Mikhus/jsurl) - Lightweight URL manipulation with JavaScript.
  * [arg.js](https://github.com/stretchr/arg.js) - Lightweight URL argument and parameter parser
* Network Address
  * [node-ip](https://github.com/indutny/node-ip) - IP address tools for node.js
  * [ip-address](https://github.com/beaugunderson/ip-address) - A library for parsing and manipulating IPv6 (and v4) addresses in JavaScript

## Web Content Extracting

*Libraries for extracting web contents.*

* [node-read](https://github.com/bndr/node-read) - Get Readable Content from any page. Based on Arc90's readability project using cheerio engine.
* [node-ytdl-core](https://github.com/fent/node-ytdl-core) - Youtube video downloader in javascript
* [ImageResolver](https://github.com/mauricesvay/ImageResolver) - Does its best to determine the main image on a URL without loading all images.

## WebSocket

*Libraries for working with WebSocket.*

  * [websocket.io](https://github.com/LearnBoost/websocket.io) - WebSocket.IO is an abstraction of the websocket server previously used by Socket.IO. It has the broadest support for websocket protocol/specifications and an API that allows for interoperability with higher-level frameworks such as Engine, Socket.IO's realtime core.
  * [WebScoket-Node](https://github.com/theturtle32/WebSocket-Node) - A WebSocket Implementation for Node.JS (Draft -08 through the final RFC 6455)

## DNS Resolving
  * [multicast-dns](https://github.com/mafintosh/multicast-dns) - Low level multicast-dns implementation in pure javascript
  * [node-dns](https://github.com/tjfontaine/node-dns) - Replacement dns module in pure javascript for node.js

## Computer Vision
* [tracking.js](https://github.com/eduardolundgren/tracking.js) - A modern approach for Computer Vision on the web.
* [ocrad.js](https://github.com/antimatter15/ocrad.js) - OCR in Javascript via Emscripten.

## Proxy Server
  * [toxy](https://github.com/h2non/toxy) - Hackable HTTP proxy to simulate server failure scenarios and unexpected network conditions
  * [proxy-chain](https://github.com/apifytech/proxy-chain) - Node.js implementation of a proxy server (think Squid) with support for SSL, authentication and upstream proxy chaining

## Data Structure
* [immutable](https://github.com/facebook/immutable-js) - Immutable persistent data collections for Javascript which increase efficiency and simplicity.
* [lodash](https://github.com/lodash/lodash) - More consistent cross-environment iteration support for arrays, strings, objects, and arguments objects

## Other JavaScript lists

 * [awesome-javascript](https://github.com/sorrycc/awesome-javascript)
