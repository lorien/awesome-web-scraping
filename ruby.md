# Ruby Web Scraping

This list contains ruby libraries related to web scraping and data processing

* [Ruby Web Scraping](#ruby-web-scraping)
   * [Network](#network)
   * [Web-scraping Frameworks](#web-scraping-frameworks)
   * [HTML/XML Parsing](#htmlxml-parsing)
   * [Text processing](#text-processing)
   * [Specific Formats Processing](#specific-formats-processing)
   * [Natural Language Processing](#natural-language-processing)
   * [Browser automation and emulation](#browser-automation-and-emulation)
   * [Multiprocessing](#multiprocessing)
   * [Asynchronous](#asynchronous)
   * [Queue](#queue)
   * [Email](#email)
   * [URL Manipulation](#url-manipulation)
   * [Web Content Extracting](#web-content-extracting)
   * [WebSocket](#websocket)
   * [DNS Resolving](#dns-resolving)
   * [Computer Vision](#computer-vision)
   * [Geolocation](#geolocation)
   * [Other Ruby Lists](#other-Ruby-lists)

## Network

* [httparty](https://github.com/jnunemaker/httparty) Makes http fun again!
* [http](https://github.com/tarcieri/http) A simple Ruby DSL for making HTTP requests
* [excon](https://github.com/excon/excon) Usable, fast, simple HTTP(S) 1.1 for Ruby
* [nestful](https://github.com/maccman/nestful) Simple Ruby HTTP/REST client with a sane API
* [EM-HTTP-Request](https://github.com/igrigorik/em-http-request) - EventMachine based asynchronous HTTP client
* [excon](https://github.com/excon/excon) - Usable, fast, simple Ruby HTTP 1.1. It works great as a general HTTP(s) client and is particularly well suited to usage in API clients.
* [Faraday](https://github.com/lostisland/faraday) - an HTTP client lib that provides a common interface over many adapters (such as Net::HTTP) and embraces the concept of Rack middleware when processing the request/response cycle.
* [Http Client](https://github.com/nahi/httpclient) - Gives something like the functionality of libwww-perl (LWP) in Ruby.
* [HTTP](https://github.com/httprb/http.rb) - The HTTP Gem: a simple Ruby DSL for making HTTP requests.
* [Http-2](https://github.com/igrigorik/http-2) - Pure Ruby implementation of HTTP/2 protocol
* [Patron](https://github.com/toland/patron) - Patron is a Ruby HTTP client library based on libcurl.
* [RESTClient](https://github.com/rest-client/rest-client) - Simple HTTP and REST client for Ruby, inspired by microframework syntax for specifying actions.
* [Savon](https://github.com/savonrb/savon) - Savon is a SOAP client for the Ruby programming language.
* [Sawyer](https://github.com/lostisland/sawyer) - Secret user agent of HTTP, built on top of Faraday.
* [Spyke](https://github.com/balvig/spyke) - Interact with REST services in an ActiveRecord-like manner.
* [Typhoeus](https://github.com/typhoeus/typhoeus) - Typhoeus wraps libcurl in order to make fast and reliable requests.
* [Mechanize](https://github.com/sparklemotion/mechanize) - Mechanize is a ruby library that makes automated web interaction easy.

## Web-Scraping Frameworks

  * [upton](https://github.com/propublica/upton) - A batteries-included framework for easy web-scraping
  * [Wombat](https://github.com/felipecsl/wombat) - Web scraper with an elegant DSL that parses structured data from web pages.
  * [Anemone](https://github.com/chriskite/anemone) - web spider framework that can spider a domain and collect useful information about the pages it visits
  * [Spidr](https://github.com/postmodern/spidr) - versatile Ruby web spidering library that can spider a site, multiple domains, certain links or infinitely. Spidr is designed to be fast and easy to use.
  * [kimuraframework](https://github.com/vifreefly/kimuraframework) - Modern web scraping framework written in Ruby which works out of box with Headless Chromium/Firefox, PhantomJS, or simple HTTP requests and allows to scrape and interact with JavaScript rendered websites
  * [arachnid2](https://github.com/samnissen/arachnid2) A simple, fast, framework-less crawler with sensible defaults and lots of options. Crawls the page and runs your code directly against either Typhoeus responses or a Watir browser.

## HTML/XML Parsing

* [nokogiri](https://github.com/sparklemotion/nokogiri) - HTML, XML, SAX, and Reader parser with XPath and CSS selector support
* [loofah](https://github.com/flavorjones/loofah) - HTML/XML manipulation and sanitization based on Nokogiri
* [HappyMapper](https://github.com/dam5s/happymapper) - allows you to parse XML data and convert it quickly and easily into ruby data structures.
* [HTML::Pipeline](https://github.com/jch/html-pipeline) - HTML processing filters and utilities.
* [Oga](https://github.com/YorickPeterse/oga) - An XML/HTML parser written in Ruby. Oga does not require system libraries such as libxml, making it easier and faster to install on various platforms.
* [Ox](https://github.com/ohler55/ox) - A fast XML parser and Object marshaller.
* [ROXML](https://github.com/Empact/roxml) - Custom mapping and bidirectional marshalling between Ruby and XML using annotation-style class methods, via Nokogiri or LibXML.
* [equivalent-xml](https://github.com/mbklein/equivalent-xml) - Easy tests of equivalency of XML documents for Nokogiri::XML
* [nokolexbor](https://github.com/serpapi/nokolexbor) - A performance-focused HTML5 parser for Ruby based on Lexbor. It supports both CSS selectors and XPath.

## Text Processing

*Libraries for parsing and manipulating plain texts.*

* General
  * [Kiba](https://github.com/thbar/kiba) - library for writing reliable, concise, well-tested & maintainable data-processing code
  * [diffy](https://github.com/samg/diffy) - a convenient way to generate a diff from two strings or files
  * [CommonRegexRuby](https://github.com/talyssonoc/CommonRegexRuby) - find a lot of kinds of common information in a string
* Phone number
  * [GlobalPhone](https://github.com/sstephenson/global_phone) - Parse, validate, and format phone numbers in Ruby using Google's libphonenumber database.
* Country names
  * [i18n_data](https://github.com/grosser/i18n_data) - country/language names and 2-letter-code pairs, in 85 languages, for country/language i18n.
  * [normalize_country](https://github.com/sshaw/normalize_country) - Convert country names and codes to a standard, includes a conversion program for XMLs, CSVs and DBs.
* User agent
  * [Device Detector](https://github.com/podigee/device_detector) - A precise and fast user agent parser and device detector, backed by the largest and most up-to-date user agent database.
* General parser
  * [Parslet](http://kschiess.github.io/parslet/) - A small Ruby library for constructing parsers in the PEG (Parsing Expression Grammar) fashion.
  * [Treetop](https://github.com/cjheath/treetop) - PEG (Parsing Expression Grammar) parser.
  * [rley](https://github.com/famished-tiger/Rley) - Ruby gem implementing a general context-free grammar parser based on Earley's algorithm
* Date & time
  * [Chronic](https://github.com/mojombo/chronic) - A natural language date/time parser written in pure Ruby.
  * [yymmdd](https://github.com/sshaw/yymmdd) - Tiny DSL for idiomatic date parsing and formatting.
  * [Chronic Between](https://github.com/jrobertson/chronic_between) - a simple Ruby natural language parser for date and time ranges
  * [Chronic Duration](https://github.com/hpoydar/chronic_duration) - a simple Ruby natural language parser for elapsed time
  * [Kronic](https://github.com/xaviershay/kronic) - a dirt simple library for parsing and formatting human readable dates
  * [Nickel](https://github.com/iainbeeston/nickel) - extracts date, time, and message information from naturally worded text
  * [Tickle](https://github.com/yb66/tickle) - a natural language parser for recurring events
* Human Names
  * [nameable](https://github.com/chorn/nameable) - A Ruby gem that provides parsing and output of person names, as well as Gender & Ethnicity matching
* N-grams
  * [N-Gram](https://github.com/reddavis/N-Gram) - N-Gram generator in Ruby
  * [ngram](https://github.com/tkellen/ruby-ngram) - break words and phrases into ngrams
  * [raingrams](https://github.com/postmodern/raingrams) - a flexible and general-purpose ngrams library written in Ruby
* Text Similarity
  * [FuzzyMatch](https://github.com/seamusabshere/fuzzy_match) - find a needle in a haystack based on string similarity and regular expression rules
  * [fuzzy-string-match](https://github.com/kiyoka/fuzzy-string-match) - fuzzy string matching library for ruby
  * [FuzzyTools](https://github.com/brianhempel/fuzzy_tools) - In-memory TF-IDF fuzzy document finding with a fancy default tokenizer tuned on diverse record linkage datasets for easy out-of-the-box use
  * [Going the Distance](https://github.com/schneems/going_the_distance) - contains scripts that do various distance calculations
  * [hotwater](https://github.com/colinsurprenant/hotwater) - Fast Ruby FFI string edit distance algorithms
  * [levenshtein-ffi](https://github.com/dbalatero/levenshtein-ffi) - fast string edit distance computation, using the Damerau-Levenshtein algorithm
  * [TF-IDF](https://github.com/reddavis/TF-IDF) - Term Frequency - Inverse Document Frequency in Ruby
  * [tf-idf-similarity](https://github.com/jpmckinney/tf-idf-similarity) - calculate the similarity between texts using tf*idf

## Specific Formats Processing

*Libraries for parsing and manipulating specific text formats.*

* General
  * [markup](https://github.com/github/markup) — GitHub library to convert mardown, rst, creole, etc into HTML
* Office
  * [Yomu](https://github.com/Erol) - Read text and metadata from files and documents (.doc, .docx, .pages, .odt, .rtf, .pdf)
  * [spreadsheet](https://github.com/zdavatz/spreadsheet) - The Spreadsheet Library is designed to read and write Spreadsheet Documents.
  * [roo](https://github.com/Empact/roo) - Roo implements read access for all spreadsheet types and read/write access for Google spreadsheets.
  * [google-spreadsheet-ruby](https://github.com/gimite/google-spreadsheet-ruby) - This is a library to read/write Google Spreadsheet.
  * [rubyXL](https://github.com/weshatheleopard/rubyXL) - rubyXL is a gem which allows the parsing, creation, and manipulation of Microsoft Excel (.xlsx/.xlsm) Documents
  * [remote_table](https://github.com/seamusabshere/remote_table) - Open local or remote XLSX, XLS, ODS, CSV (comma separated), TSV (tab separated), other delimited, fixed-width files, and Google Docs.
  * [sheets](https://github.com/bspaulding/Sheets) - Work with spreadsheets easily in a native ruby format.
  * [workbook](https://github.com/murb/workbook) - Workbook contains workbooks, as in a table, contains rows, contains cells, reads/writes excel, ods and csv and tab separated files...
  * [oxcelix](https://github.com/gbiczo/oxcelix) - A fast Excel 2007/2010 (.xlsx) file parser that returns a collection of Matrix objects
  * [wrap_excel](https://github.com/tomiacannondale/wrap_excel) - WrapExcel is to wrap the win32ole, and easy to use Excel operations with ruby. Detailed description please see the README.
* libpcap
  * [PacketFul](https://github.com/packetfu/packetfu) - A library for reading and writing packets to an interface or to a libpcap-formatted file.
* JSON
  * [JsonCompare](https://github.com/a2design-company/json-compare) - Returns the difference between two JSON files
  * [JSON](https://github.com/flori/json) — includes pure Ruby and C implementation for JSON.
  * [JSON::Stream](https://github.com/dgraham/json-stream) — a streaming JSON parser that generates SAX-like events.
  * [YAJL](https://github.com/brianmario/yajl-ruby) — a streaming JSON parsing and encoding library for Ruby (C bindings to YAJL).
  * [OJ](https://github.com/ohler55/oj) — Optimized JSON, as the name implies, was written to provide speed optimized JSON handling. So far it has achieved that, and is about 2 times faster than any other Ruby JSON parser, and 3 or more times faster at serializing JSON.
* Markdown
  * [kramdown](https://github.com/gettalong/kramdown) - Kramdown is yet-another-markdown-parser but fast, pure Ruby, using a strict syntax definition and supporting several common extensions.
  * [Maruku](https://github.com/bhollis/maruku) - A pure-Ruby Markdown-superset interpreter.
  * [Redcarpet](https://github.com/vmg/redcarpet) - A fast, safe and extensible Markdown to (X)HTML parser.
* ATOM/RSS
  * [Feed normalizer](https://github.com/aasmith/feed-normalizer) - Extensible Ruby wrapper for Atom and RSS parsers.
  * [Feedjira](https://github.com/feedjira/feedjira) - A feed fetching and parsing library.
  * [Ratom](https://github.com/seangeo/ratom) - A fast, libxml based, Ruby Atom library.
  * [Simple rss](https://github.com/cardmagic/simple-rss) - A simple, flexible, extensible, and liberal RSS and Atom reader.
* BSON
  * [BSON](https://github.com/mongodb/bson-ruby) — Ruby implementation of the BSON Specification (2.0.0+), http://bsonspec.org
* MessagePack
  * [MessagePack](https://github.com/msgpack/msgpack-ruby) — an efficient binary serialization format. It lets you exchange data among multiple languages like JSON but it's faster and smaller. For example, small integers (like flags or error code) are encoded into a single byte, and typical short strings only require an extra byte in addition to the strings themselves. See http://msgpack.org
* Protobuf
  * [Protobuf](https://github.com/localshred/protobuf) — Ruby implementation for Protocol Buffers.
* RDF
  * [rdf](https://github.com/ruby-rdf/rdf) - pure-Ruby library for working with Resource Description Framework (RDF) data

## Natural Language Processing

*Libraries for working with human languages.*

* General
  * [Treat](https://github.com/louismullie/treat) - Treat is a toolkit for natural language processing and computational linguistics in Ruby
  * [Pragmatic Segmenter](https://github.com/diasks2/pragmatic_segmenter) - Pragmatic Segmenter is a rule-based sentence boundary detection gem that works out-of-the-box across many languages.
  * [Text](https://github.com/threedaymonk/text) - A collection of text algorithms including Levenshtein distance, Metaphone, Soundex 2, Porter stemming & White similarity.
  * [whatlanguage](https://github.com/peterc/whatlanguage) - a language detection library for Ruby that uses bloom filters for speed
  * [nlp](https://github.com/knife/nlp) - NLP tools for the Polish language
  * [NlpToolz](https://github.com/LeFnord/nlp_toolz) - Basic NLP tools, mostly based on OpenNLP, at this time sentence finder, tokenizer and POS tagger implemented, plus Berkeley Parser
  * [Open NLP (Ruby bindings)](https://github.com/louismullie/open-nlp)
  * [Stanford Core NLP (Ruby bindings)](https://github.com/louismullie/stanford-core-nlp)
  * [ve](https://github.com/Kimtaro/ve) - a linguistic framework that's easy to use
  * [zipf](https://github.com/pks/zipf) - a collection of various NLP tools and libraries
  * [ruby-ner](https://github.com/mblongii/ruby-ner) - named entity recognition with Stanford NER and Ruby
  * [ruby-nlp](https://github.com/tiendung/ruby-nlp) - Ruby Binding for Stanford Pos-Tagger and Name Entity Recognizer
  * [linkparser](https://github.com/ged/linkparser) - a Ruby binding for the Abiword version of CMU's Link Grammar, a syntactic parser of English
* Part-of-Speech Tagger
  * [engtagger](https://github.com/yohasebe/engtagger) - English Part-of-Speech Tagger Library; a Ruby port of Lingua::EN::Tagger
  * [rbtagger](http://rbtagger.rubyforge.org/) - a simple ruby rule-based part of speech tagger
  * [TreeTagger for Ruby](https://github.com/LeFnord/rstt) - Ruby based wrapper for the TreeTagger by Helmut Schmid
* Sentence segmentation
  * [Pragmatic Segmenter](https://github.com/diasks2/pragmatic_segmenter)
  * [Punkt Segmenter](https://github.com/lfcipriani/punkt-segmenter)
  * [TactfulTokenizer](https://github.com/zencephalon/Tactful_Tokenizer)
  * [Scapel](https://github.com/louismullie/scalpel)
  * [SRX English](https://github.com/apohllo/srx-english)
* Stemmers
  * [Greek stemmer](https://github.com/skroutz/greek_stemmer) - a Greek stemmer
  * [Ruby-Stemmer](https://github.com/aurelian/ruby-stemmer) - Ruby-Stemmer exposes the SnowBall API to Ruby
  * [Turkish stemmer](https://github.com/skroutz/turkish_stemmer) - a Turkish stemmer
  * [uea-stemmer](https://github.com/ealdent/uea-stemmer) - a conservative stemmer for search and indexing
* Summarization
  * [Epitome](https://github.com/McFreely/epitome) - A small gem to make your text shorter; an implementation of the Lexrank algorithm
  * [ots](https://github.com/deepfryed/ots) - Ruby bindings to open text summarizer
  * [summarize](https://github.com/ssoper/summarize) - Ruby C wrapper for Open Text Summarizer
* Tokenizers
  * [Jieba](https://github.com/mimosa/jieba-jruby) - Chinese tokenizer and segmenter (jRuby)
  * [MeCab](https://github.com/markburns/mecab) - Japanese morphological analyzer [[MeCab Heroku buildpack](https://github.com/diasks2/heroku-buildpack-mecab)]
  * [NLP Pure](https://github.com/parhamr/nlp-pure) - natural language processing algorithms implemented in pure Ruby with minimal dependencies
  * [rseg](https://github.com/yzhang/rseg) - a Chinese Word Segmentation (中文分词) routine in pure Ruby
  * [thailang4r](https://github.com/veer66/thailang4r) - Thai tokenizer
  * [tiny_segmenter](https://github.com/6/tiny_segmenter) - Ruby port of TinySegmenter.js for tokenizing Japanese text
  * [tokenizer](https://github.com/arbox/tokenizer) - a simple multilingual tokenizer
* Word Count
  * [wc](https://github.com/thesp0nge/wc) - a rubygem to count word occurrences in a given text
  * [word_count](https://github.com/AtelierConvivialite/word_count) - a word counter for String and Hash in Ruby
  * [Word Count Analyzer](https://github.com/diasks2/word_count_analyzer) - analyzes a string for potential areas of the text that might cause word count discrepancies depending on the tool used
  * [WordsCounted](https://github.com/abitdodgy/words_counted) - a highly customisable Ruby text analyser

## Browser automation and emulation
* [selenium](https://github.com/seleniumhq/selenium) - A browser automation framework and ecosystem
* [Watir](https://github.com/watir/watir) - Watir implementation built on WebDriver's Ruby bindings
* [capybara-webkit](https://github.com/thoughtbot/capybara-webkit) - A Capybara driver for headless WebKit to test JavaScript web apps
* [poltergeist](https://github.com/teampoltergeist/poltergeist) - A PhantomJS driver for Capybara

## Multiprocessing

* [Celluloid](https://github.com/celluloid/celluloid) - Actor-based concurrent object framework for Ruby
* [Parallel](https://github.com/grosser/parallel) - Run any code in parallel Processes (> use all CPUs) or Threads (> speedup blocking operations).
* [Concurrent Ruby](https://github.com/ruby-concurrency/concurrent-ruby) - Modern concurrency tools including agents, futures, promises, thread pools, supervisors, and more.
* [childprocess](https://github.com/jarib/childprocess) - Cross-platform ruby library for managing child processes.
* [forkoff](https://github.com/ahoward/forkoff) - brain-dead simple parallel processing for ruby.
* [posix-spawn](https://github.com/rtomayko/posix-spawn) - Fast Process::spawn for Rubys >= 1.8.7 based on the posix_spawn() system interfaces.
* [thread](https://github.com/meh/ruby-thread) — extensions to the thread library (includes thread pool).
* [Sprawling](https://github.com/dreikanter/ruby-bookmarks) — spawn gem for Rails to easily fork or thread long-running code blocks.


## Asynchronous

*Libraries for asynchronous networking programming.*

* [EventMachine](https://github.com/eventmachine/eventmachine) - event-driven I/O and lightweight concurrency library

## Queue

  * [Resque](https://github.com/resque/resque) A Redis-backed Ruby library for creating background jobs, placing them on multiple queues.
  * [Delayed::Job](https://github.com/tobi/delayed_job) — Database backed asynchronous priority queue.
  * [Qu](https://github.com/bkeepers/qu) A Ruby library for queuing and processing background jobs.
  * [Sidekiq](http://sidekiq.org) - A full-featured background processing framework for Ruby. It aims to be simple to integrate with any modern Rails application and much higher performance than other existing solutions.
  * [Sneakers](https://github.com/jondot/sneakers) - A fast background processing framework for Ruby and RabbitMQ
  * [Backburner](https://github.com/nesquena/backburner) - Backburner is a beanstalkd-powered job queue that can handle a very high volume of jobs.
  * [Delayed::Job](https://github.com/collectiveidea/delayed_job) - Database backed asynchronous priority queue.
  * [Que](https://github.com/chanks/que) - A Ruby job queue that uses PostgreSQL's advisory locks for speed and reliability.
  * [Shoryuken](https://github.com/phstc/shoryuken) - A super efficient AWS SQS thread based message processor for Ruby.
  * [Sucker Punch](https://github.com/brandonhilkert/sucker_punch) - A single process background processing library using Celluloid. Aimed to be Sidekiq's little brother.

## Email

*Libraries for parsing email.*

  * [mail](https://github.com/mikel/mail) A Really Ruby Mail Library

## URL Manipulation

*Libraries for parsing URLs.*

* [addressable](https://github.com/sporkmonger/addressable) - Addressable is a replacement for the URI implementation that is part of Ruby's standard library. It more closely conforms to RFC 3986, RFC 3987, and RFC 6570 (level 4), providing support for IRIs and URI templates.

## Web Content Extracting

*Libraries for extracting web contents.*

* [Metainspector](https://github.com/jaimeiniesta/metainspector) - scrapes a given URL, and returns its title, meta description, meta keywords, an array with all the links, all the images in it, etc
* [LinkThumbnailer](https://github.com/gottfrois/link_thumbnailer) - Ruby gem that generates thumbnail images and videos from a given URL. Much like popular social website with link preview.
* [docsplit](http://documentcloud.github.io/docsplit/) - Docsplit is a command-line utility and Ruby library for splitting apart documents into their component parts
* [Ruby Readability](https://github.com/cantino/ruby-readability) - a tool for extracting the primary readable content of a webpage

## WebSocket

*Libraries for working with WebSocket.*

* [em-websocket](https://github.com/igrigorik/em-websocket) - EventMachine based WebSocket server
* [Faye](http://faye.jcoglan.com/ruby.html) - A set of tools for simple publish-subscribe messaging between web clients.
* [Firehose](https://github.com/polleverywhere/firehose) - Build realtime Ruby web applications.
* [Slanger](https://github.com/stevegraham/slanger) - Open Pusher implementation compatible with Pusher libraries.

## DNS Resolving
* [em-resolve-replace](https://github.com/mperham/em-resolv-replace) - EventMachine-aware pure Ruby DNS resolution
* [Celluloid::DNS](https://github.com/celluloid/celluloid-dns) - a high-performance DNS client resolver and server which can be easily integrated into other projects or used as a stand-alone daemon. It was forked from RubyDNS which is now implemented in terms of this library.

## Computer Vision

* [ruby-opencv](https://github.com/ruby-opencv/ruby-opencv) - An OpenCV wrapper for Ruby.

## Geolocation

  * [geocoder](https://github.com/alexreisner/geocoder) - A complete geocoding solution for Ruby. With Rails it adds geocoding (by street or IP address), reverse geocoding (find street address based on given coordinates), and distance queries.
  * [Geokit](https://github.com/geokit/geokit) - Geokit gem provides geocoding and distance/heading calculations.
  * [geoip](https://github.com/cjheath/geoip) - Searches a GeoIP database for a given host or IP address, and returns information about the country where the IP address is allocated, and the city, ISP and other information.

## Other Ruby Lists

* [awesome-ruby](https://github.com/markets/awesome-ruby/blob/master/README.md) by markets
* [awesome-ruby](https://github.com/Sdogruyol/awesome-ruby) by Sdogruyol
* [ruby-nlp](https://github.com/diasks2/ruby-nlp) - a collection of Natural Language Processing (NLP) Ruby libraries, tools and software
