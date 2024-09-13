# Golang Web Scraping

This list contains Golang libraries related to web scraping and data processing

* [Golang Web Scraping](#javascript-web-scraping)
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
   * [Other Golang Lists](#other-Golang-lists)

## Network
* General
  * [net](https://golang.org/pkg/net/) - built-in package manipulating networking
  * [net/http](https://golang.org/pkg/net/http/) - build-in package capable of HTTP programming
* Asynchronous
  * [goroutine](https://tour.golang.org/concurrency/1) - primitive green thread in Golang

## Web-Scraping Frameworks
* Full Featured Crawlers
  * [Pholcus](https://github.com/henrylee2cn/pholcus) - Pholcus is a distributed, high concurrency and powerful web crawler software.
  * [go_spider](https://github.com/hu17889/go_spider) - An flexible, modular and expansible Go concurrent Crawler(spider) framework.
  * [ants-go](https://github.com/wcong/ants-go) - A distributed, restful crawler engine in golang.
* Full Featured Scrapers
  * [geziyor](https://github.com/geziyor/geziyor) - Geziyor, a blazing fast web scraping framework, supports JS rendering.
  * [colly](https://github.com/gocolly/colly) - Fast and elegant scraping framework
  * [dataflow kit](https://github.com/slotix/dataflowkit) - Dataflow Kit - extract structured data from web sites.
  * [flyscrape](https://github.com/philippta/flyscrape) - flyscrape is a standalone and scriptable web scraper.
  * [goscrapy](https://github.com/tech-engine/goscrapy) - Scrapy inspired webscraping framework.
* Other
  * [ferret](https://github.com/MontFerret/ferret) - A web scraping tool with a declarative query language.

## HTML/XML Parsing

* [encoding/xml](https://golang.org/pkg/encoding/xml/) - A built-in package implements a simple XML 1.0 parser.

## Text Processing

*Libraries for parsing and manipulating plain texts.*

* General
  * [regexp](https://golang.org/pkg/regexp/) - A built-in package implements regular expression search.

## Specific Formats Processing

*Libraries for parsing and manipulating specific text formats.*

* General
  * [encoding/json](https://golang.org/pkg/encoding/json/) - A built-in package implements encoding and decoding of JSON as defined in RFC 4627.
  * [allot](https://github.com/sbstjn/allot) - Placeholder and wildcard text parsing for CLI tools and bots
  * [bbConvert](https://github.com/CalebQ42/bbConvert) - Converts bbCode to HTML that allows you to add support for custom bbCode tags
  * [blackfriday](https://github.com/russross/blackfriday) - Markdown processor in Go
  * [bluemonday](https://github.com/microcosm-cc/bluemonday) - HTML Sanitizer
  * [editorconfig-core-go](https://github.com/editorconfig/editorconfig-core-go) - Editorconfig file parser and manipulator for Go
  * [enca](https://github.com/endeveit/enca) - Minimal cgo bindings for [libenca](http://cihar.com/software/enca/).
  * [genex](https://github.com/alixaxel/genex) - Count and expand Regular Expressions into all matching Strings
  * [github_flavored_markdown](https://godoc.org/github.com/shurcooL/github_flavored_markdown) - GitHub Flavored Markdown renderer (using blackfriday) with fenced code block highlighting, clickable header anchor links.
  * [go-humanize](https://github.com/dustin/go-humanize) - Formatters for time, numbers, and memory size to human readable format.
  * [go-nmea](https://github.com/adrianmo/go-nmea) - NMEA parser library for the Go language.
  * [go-runewidth](https://github.com/mattn/go-runewidth) - Functions to get fixed width of the character or string.
  * [go-slugify](https://github.com/mozillazg/go-slugify) - Make pretty slug with multiple languages support.
  * [go-vcard](https://github.com/emersion/go-vcard) - Parse and format vCard
  * [gofeed](https://github.com/mmcdole/gofeed) - Parse RSS and Atom feeds in Go
  * [gographviz](https://github.com/awalterschulze/gographviz) - Parses the Graphviz DOT language.
  * [gommon/bytes](https://github.com/labstack/gommon/tree/master/bytes) - Format bytes to string.
  * [gonameparts](https://github.com/polera/gonameparts) - Parses human names into individual name parts
  * [GoQuery](https://github.com/PuerkitoBio/goquery) - GoQuery brings a syntax and a set of features similar to jQuery to the Go language.
  * [goregen](https://github.com/zach-klippenstein/goregen) - A library for generating random strings from regular expressions.
  * [gotext](https://github.com/leonelquinteros/gotext) - GNU gettext utilities for Go.
  * [guesslanguage](https://github.com/endeveit/guesslanguage) - Functions to determine the natural language of a unicode text.
  * [inject](https://github.com/facebookgo/inject) - Package inject provides a reflect based injector.
  * [mxj](https://github.com/clbanning/mxj) - Encode / decode XML as JSON or map[string]interface{}; extract values with dot-notation paths and wildcards. Replaces x2j and j2x packages.
  * [sh](https://github.com/mvdan/sh) - A shell parser and formatter
  * [slug](https://github.com/gosimple/slug) - URL-friendly slugify with multiple languages support.
  * [Slugify](https://github.com/avelino/slugify) - A Go slugify application that handles string.
  * [toml](https://github.com/BurntSushi/toml) - TOML configuration format (encoder/decoder with reflection).
  * [xpath](https://github.com/antchfx/xpath) - XPath package for Go.
  * [xquery](https://github.com/antchfx/xquery) - XQuery lets you extract data from HTML/XML documents using XPath expression.

## Natural Language Processing

*Libraries for working with human languages.*

* [dpar](https://github.com/danieldk/dpar/) - Transition-based statistical dependency parser.
* [go-eco](https://github.com/ThePaw/go-eco) - Similarity, dissimilarity and distance matrices; diversity, equitability and inequality measures; species richness estimators; coenocline models.
* [go-i18n](https://github.com/nicksnyder/go-i18n/) - A package and an accompanying tool to work with localized text.
* [go-mystem](https://github.com/dveselov/mystem) - CGo bindings to Yandex.Mystem - russian morphology analyzer.
* [go-nlp](https://github.com/nuance/go-nlp) - Utilities for working with discrete probability distributions and other tools useful for doing NLP work.
* [go-stem](https://github.com/agonopol/go-stem) - Implementation of the porter stemming algorithm.
* [go-unidecode](https://github.com/mozillazg/go-unidecode) - ASCII transliterations of Unicode text.
* [go2vec](https://github.com/danieldk/go2vec) - Reader and utility functions for word2vec embeddings.
* [gojieba](https://github.com/yanyiwu/gojieba) - This is a Go implementation of [jieba](https://github.com/fxsjy/jieba) which a Chinese word splitting algorithm.
* [golibstemmer](https://github.com/rjohnsondev/golibstemmer) - Go bindings for the snowball libstemmer library including porter 2
* [gounidecode](https://github.com/fiam/gounidecode) - Unicode transliterator (also known as unidecode) for Go
* [icu](https://github.com/goodsign/icu) - Cgo binding for icu4c C library detection and conversion functions. Guaranteed compatibility with version 50.1.
* [libtextcat](https://github.com/goodsign/libtextcat) - Cgo binding for libtextcat C library. Guaranteed compatibility with version 2.2.
* [MMSEGO](https://github.com/awsong/MMSEGO) - This is a GO implementation of [MMSEG](http://technology.chtsai.org/mmseg/) which a Chinese word splitting algorithm.
* [paicehusk](https://github.com/rookii/paicehusk) - Golang implementation of the Paice/Husk Stemming Algorithm
* [porter](https://github.com/a2800276/porter) - This is a fairly straightforward port of Martin Porter's C implementation of the Porter stemming algorithm.
* [porter2](https://github.com/zhenjl/porter2) - Really fast Porter 2 stemmer.
* [prose](https://github.com/jdkato/prose) - A library for text processing that supports tokenization, part-of-speech tagging, named-entity extraction, and more.
* [RAKE.go](https://github.com/Obaied/RAKE.go) - A Go port of the Rapid Automatic Keyword Extraction Algorithm (RAKE)
* [segment](https://github.com/blevesearch/segment) - A Go library for performing Unicode Text Segmentation as described in [Unicode Standard Annex #29](http://www.unicode.org/reports/tr29/)
* [sentences](https://github.com/neurosnap/sentences) - A sentence tokenizer:  converts text into a list of sentences.
* [snowball](https://github.com/goodsign/snowball) - Snowball stemmer port (cgo wrapper) for Go. Provides word stem extraction functionality [Snowball native](http://snowball.tartarus.org/).
* [stemmer](https://github.com/dchest/stemmer) - Stemmer packages for Go programming language. Includes English and German stemmers.
* [textcat](https://github.com/pebbe/textcat) - A Go package for n-gram based text categorization, with support for utf-8 and raw text
* [whatlanggo](https://github.com/abadojack/whatlanggo) - A natural language detection package for Go. Supports 84 languages and 24 scripts (writing systems e.g. Latin, Cyrillic, etc).
* [when](https://github.com/olebedev/when) - A natural EN and RU language date/time parser with pluggable rules

## Browser automation and emulation

* [chromedp](https://github.com/chromedp/chromedp) - A faster, simpler way to drive browsers supporting the Chrome DevTools Protocol

## Multiprocessing

* TODO

## Asynchronous

*Libraries for asynchronous networking programming.*

* TODO

## Queue

* [NSQ](https://github.com/nsqio/nsq) - A realtime distributed messaging platform.
* [NATS](https://github.com/nats-io/go-nats) - Golang client for NATS, the cloud native messaging system.

## Email

*Libraries for parsing email.*

* [douceur](https://github.com/aymerick/douceur) - CSS inliner for your HTML emails.
* [email](https://github.com/jordan-wright/email) - A robust and flexible email library for Go.
* [go-dkim](https://github.com/toorop/go-dkim) - A DKIM library, to sign & verify email.
* [go-imap](https://github.com/emersion/go-imap) - An IMAP library for clients and servers
* [go-message](https://github.com/emersion/go-message) - A streaming library for the Internet Message Format and mail messages
* [Gomail](https://github.com/go-gomail/gomail/) - Gomail is a very simple and powerful package to send emails.
* [Hectane](https://github.com/hectane/hectane) - Lightweight SMTP client providing an HTTP API
* [hermes](https://github.com/matcornic/hermes) - Golang package that generates clean, responsive HTML e-mails
* [MailHog](https://github.com/mailhog/MailHog) - Email and SMTP testing with web and API interface
* [SendGrid](https://github.com/sendgrid/sendgrid-go) - SendGrid's Go library for sending email
* [smtp](https://github.com/mailhog/smtp) - SMTP server protocol state machine

## URL and Network Address Manipulation

*Libraries for parsing/modifying URLs and network addresses.*

* URL
  * [net/url](https://golang.org/pkg/net/url/)
* Network Address
  * TODO

## Web Content Extracting

*Libraries for extracting web contents.*

* Text and Meta Data from HTML pages
* [x/net/html](golang.org/x/net/html)

## WebSocket

*Libraries for working with WebSocket.*

* [gorilla/websocket](https://github.com/gorilla/websocket)

## DNS Resolving

* [net](https://golang.org/pkg/net/) - Built-in some DNS related functions.
* [miekg/dns](https://github.com/miekg/dns) - A DNS library in Go.

## Computer Vision

* TODO

## Proxy Server

* [gin](https://github.com/codegangsta/gin) - Live reload utility for Go web servers.
* [Caddy](https://github.com/caddyserver/caddy) - Fast, cross-platform HTTP/2 web server with automatic HTTPS, also can serve as a reverse proxy server.

## Other Golang lists

* TODO

* Something
  * TODO

## Natural Language Processing

*Libraries for working with human languages.*

* [dpar](https://github.com/danieldk/dpar/) - Transition-based statistical dependency parser.
* [go-eco](https://github.com/ThePaw/go-eco) - Similarity, dissimilarity and distance matrices; diversity, equitability and inequality measures; species richness estimators; coenocline models.
* [go-i18n](https://github.com/nicksnyder/go-i18n/) - A package and an accompanying tool to work with localized text.
* [go-mystem](https://github.com/dveselov/mystem) - CGo bindings to Yandex.Mystem - russian morphology analyzer.
* [go-nlp](https://github.com/nuance/go-nlp) - Utilities for working with discrete probability distributions and other tools useful for doing NLP work.
* [go-stem](https://github.com/agonopol/go-stem) - Implementation of the porter stemming algorithm.
* [go-unidecode](https://github.com/mozillazg/go-unidecode) - ASCII transliterations of Unicode text.
* [go2vec](https://github.com/danieldk/go2vec) - Reader and utility functions for word2vec embeddings.
* [gojieba](https://github.com/yanyiwu/gojieba) - This is a Go implementation of [jieba](https://github.com/fxsjy/jieba) which a Chinese word splitting algorithm.
* [golibstemmer](https://github.com/rjohnsondev/golibstemmer) - Go bindings for the snowball libstemmer library including porter 2
* [gounidecode](https://github.com/fiam/gounidecode) - Unicode transliterator (also known as unidecode) for Go
* [icu](https://github.com/goodsign/icu) - Cgo binding for icu4c C library detection and conversion functions. Guaranteed compatibility with version 50.1.
* [libtextcat](https://github.com/goodsign/libtextcat) - Cgo binding for libtextcat C library. Guaranteed compatibility with version 2.2.
* [MMSEGO](https://github.com/awsong/MMSEGO) - This is a GO implementation of [MMSEG](http://technology.chtsai.org/mmseg/) which a Chinese word splitting algorithm.
* [paicehusk](https://github.com/rookii/paicehusk) - Golang implementation of the Paice/Husk Stemming Algorithm
* [porter](https://github.com/a2800276/porter) - This is a fairly straightforward port of Martin Porter's C implementation of the Porter stemming algorithm.
* [porter2](https://github.com/zhenjl/porter2) - Really fast Porter 2 stemmer.
* [prose](https://github.com/jdkato/prose) - A library for text processing that supports tokenization, part-of-speech tagging, named-entity extraction, and more.
* [RAKE.go](https://github.com/Obaied/RAKE.go) - A Go port of the Rapid Automatic Keyword Extraction Algorithm (RAKE)
* [segment](https://github.com/blevesearch/segment) - A Go library for performing Unicode Text Segmentation as described in [Unicode Standard Annex #29](http://www.unicode.org/reports/tr29/)
* [sentences](https://github.com/neurosnap/sentences) - A sentence tokenizer:  converts text into a list of sentences.
* [snowball](https://github.com/goodsign/snowball) - Snowball stemmer port (cgo wrapper) for Go. Provides word stem extraction functionality [Snowball native](http://snowball.tartarus.org/).
* [stemmer](https://github.com/dchest/stemmer) - Stemmer packages for Go programming language. Includes English and German stemmers.
* [textcat](https://github.com/pebbe/textcat) - A Go package for n-gram based text categorization, with support for utf-8 and raw text
* [whatlanggo](https://github.com/abadojack/whatlanggo) - A natural language detection package for Go. Supports 84 languages and 24 scripts (writing systems e.g. Latin, Cyrillic, etc).
* [when](https://github.com/olebedev/when) - A natural EN and RU language date/time parser with pluggable rules

## Browser automation and emulation

* TODO

## Multiprocessing

* TODO

## Asynchronous

*Libraries for asynchronous networking programming.*

* TODO

## Queue

* [NSQ](https://github.com/nsqio/nsq) - A realtime distributed messaging platform.
* [NATS](https://github.com/nats-io/go-nats) - Golang client for NATS, the cloud native messaging system.

## Email

*Libraries for parsing email.*

* [douceur](https://github.com/aymerick/douceur) - CSS inliner for your HTML emails.
* [email](https://github.com/jordan-wright/email) - A robust and flexible email library for Go.
* [go-dkim](https://github.com/toorop/go-dkim) - A DKIM library, to sign & verify email.
* [go-imap](https://github.com/emersion/go-imap) - An IMAP library for clients and servers
* [go-message](https://github.com/emersion/go-message) - A streaming library for the Internet Message Format and mail messages
* [Gomail](https://github.com/go-gomail/gomail/) - Gomail is a very simple and powerful package to send emails.
* [Hectane](https://github.com/hectane/hectane) - Lightweight SMTP client providing an HTTP API
* [hermes](https://github.com/matcornic/hermes) - Golang package that generates clean, responsive HTML e-mails
* [MailHog](https://github.com/mailhog/MailHog) - Email and SMTP testing with web and API interface
* [SendGrid](https://github.com/sendgrid/sendgrid-go) - SendGrid's Go library for sending email
* [smtp](https://github.com/mailhog/smtp) - SMTP server protocol state machine

## URL and Network Address Manipulation

*Libraries for parsing/modifying URLs and network addresses.*

* URL
  * [net/url](https://golang.org/pkg/net/url/)
* Network Address
  * TODO

## Web Content Extracting

*Libraries for extracting web contents.*

* Text and Meta Data from HTML pages
* [x/net/html](golang.org/x/net/html)

## WebSocket

*Libraries for working with WebSocket.*

* [gorilla/websocket](https://github.com/gorilla/websocket)

## DNS Resolving

* [net](https://golang.org/pkg/net/) - Built-in some DNS related functions.
* [miekg/dns](https://github.com/miekg/dns) - A DNS library in Go.

## Computer Vision

* TODO

## Proxy Server

* [gin](https://github.com/codegangsta/gin) - Live reload utility for Go web servers.
* [Caddy](https://github.com/mholt/caddy) - Fast, cross-platform HTTP/2 web server with automatic HTTPS, also can serve as a reverse proxy server.

## Other Golang lists
* TODO
