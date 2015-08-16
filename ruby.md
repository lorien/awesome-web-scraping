# Ruby Web Scraping

This list contains ruby libraries related to web scraping and data processing

* [Ruby Web Scraping](#ruby-web-scraping)
   * [Network](#network)
   * [Web-scraping Frameworks](#web-scraping-frameworks)
   * [HTML/XML Parsing](#htmlxml-parsing)
   * [Text processing](#text-processing)
   * [Specific Formats Processing](#specific-formats-processing)
   * [Natural Language Processing](#natural-language-processing)
   * [Downloader](#downloader)
   * [Browser automation and emulation](#browser-automation-and-emulation)
   * [Multiprocessing](#multiprocessing)
   * [Queue](#queue)
   * [Cloud Computing](#cloud-computing)
   * [Email](#email)
   * [URL Manipulation](#url-manipulation)
   * [Web Content Extracting](#web-content-extracting)
   * [Asynchronous](#asynchronous)
   * [WebSocket](#websocket)
   * [DNS Resolving](#dns-resolving)
   * [Computer Vision](#computer-vision)
   * [Geolocation](#geolocation)
   * [Other Ruby Lists](#other-Ruby-lists)

## Network

* [httparty](https://github.com/jnunemaker/httparty) Makes http fun again!
* [faraday](https://github.com/lostisland/faraday) Simple, but flexible HTTP client library, with support for multiple backends.
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

## HTML/XML Parsing

* [nokogiri](https://github.com/sparklemotion/nokogiri) - HTML, XML, SAX, and Reader parser with XPath and CSS selector support
* [loofah](https://github.com/flavorjones/loofah) - HTML/XML manipulation and sanitization based on Nokogiri
* [HappyMapper](https://github.com/dam5s/happymapper) - allows you to parse XML data and convert it quickly and easily into ruby data structures.
* [HTML::Pipeline](https://github.com/jch/html-pipeline) - HTML processing filters and utilities.
* [Oga](https://github.com/YorickPeterse/oga) - An XML/HTML parser written in Ruby. Oga does not require system libraries such as libxml, making it easier and faster to install on various platforms.
* [Ox](https://github.com/ohler55/ox) - A fast XML parser and Object marshaller.
* [ROXML](https://github.com/Empact/roxml) - Custom mapping and bidirectional marshalling between Ruby and XML using annotation-style class methods, via Nokogiri or LibXML.


## Text Processing

*Libraries for parsing and manipulating plain texts.*

* General
  * [Kiba](https://github.com/thbar/kiba) - library for writing reliable, concise, well-tested & maintainable data-processing code
  * [diffy](https://github.com/samg/diffy) - a convenient way to generate a diff from two strings or files
* Phone number
  * [GlobalPhone](https://github.com/sstephenson/global_phone) - Parse, validate, and format phone numbers in Ruby using Google's libphonenumber database.
* Country names
  * [i18n_data](https://github.com/grosser/i18n_data) - country/language names and 2-letter-code pairs, in 85 languages, for country/language i18n.
  * [normalize_country](https://github.com/sshaw/normalize_country) - Convert country names and codes to a standard, includes a conversion program for XMLs, CSVs and DBs.
* Date & time
  * [Chronic](https://github.com/mojombo/chronic) - A natural language date/time parser written in pure Ruby.
  * [yymmdd](https://github.com/sshaw/yymmdd) - Tiny DSL for idiomatic date parsing and formatting.
* User agent
  * [Device Detector](https://github.com/podigee/device_detector) - A precise and fast user agent parser and device detector, backed by the largest and most up-to-date user agent database.
* General parser
  * [Parslet](http://kschiess.github.io/parslet/) - A small Ruby library for constructing parsers in the PEG (Parsing Expression Grammar) fashion.
  * [Treetop](https://github.com/cjheath/treetop) - PEG (Parsing Expression Grammar) parser.
## Specific Formats Processing

*Libraries for parsing and manipulating specific text formats.*

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
    [PacketFul](https://github.com/packetfu/packetfu) - A library for reading and writing packets to an interface or to a libpcap-formatted file.
  * JSON
    * [JsonCompare](https://github.com/a2design-company/json-compare) - Returns the difference between two JSON files
  * Markdown
    * [kramdown](https://github.com/gettalong/kramdown) - Kramdown is yet-another-markdown-parser but fast, pure Ruby, using a strict syntax definition and supporting several common extensions.
    * [Maruku](https://github.com/bhollis/maruku) - A pure-Ruby Markdown-superset interpreter.
    * [Redcarpet](https://github.com/vmg/redcarpet) - A fast, safe and extensible Markdown to (X)HTML parser.
  * ATOM/RSS
    * [Feed normalizer](https://github.com/aasmith/feed-normalizer) - Extensible Ruby wrapper for Atom and RSS parsers.
    * [Feedjira](https://github.com/feedjira/feedjira) - A feed fetching and parsing library.
    * [Ratom](https://github.com/seangeo/ratom) - A fast, libxml based, Ruby Atom library.
    * [Simple rss](https://github.com/cardmagic/simple-rss) - A simple, flexible, extensible, and liberal RSS and Atom reader.

## Natural Language Processing

*Libraries for working with human languages.*

* [Treat](https://github.com/louismullie/treat) - Treat is a toolkit for natural language processing and computational linguistics in Ruby
* [Pragmatic Segmenter](https://github.com/diasks2/pragmatic_segmenter) - Pragmatic Segmenter is a rule-based sentence boundary detection gem that works out-of-the-box across many languages.
* [Text](https://github.com/threedaymonk/text) - A collection of text algorithms including Levenshtein distance, Metaphone, Soundex 2, Porter stemming & White similarity.

## Downloader

*Libraries for downloading.*

* TODO

## Browser automation and emulation
* TODO

## Multiprocessing

* [Celluloid](https://github.com/celluloid/celluloid) - Actor-based concurrent object framework for Ruby 
* [Parallel](https://github.com/grosser/parallel) - Run any code in parallel Processes (> use all CPUs) or Threads (> speedup blocking operations).
* [Concurrent Ruby](https://github.com/ruby-concurrency/concurrent-ruby) - Modern concurrency tools including agents, futures, promises, thread pools, supervisors, and more. 
* [childprocess](https://github.com/jarib/childprocess) - Cross-platform ruby library for managing child processes.
* [forkoff](https://github.com/ahoward/forkoff) - brain-dead simple parallel processing for ruby.
* [posix-spawn](https://github.com/rtomayko/posix-spawn) - Fast Process::spawn for Rubys >= 1.8.7 based on the posix_spawn() system interfaces.


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

## Cloud Computing
* TODO

## Email

*Libraries for parsing email.*

  * [mail](https://github.com/mikel/mail) A Really Ruby Mail Library

## URL Manipulation

*Libraries for parsing URLs.*

* TODO

## Web Content Extracting

*Libraries for extracting web contents.*

* [Metainspector](https://github.com/jaimeiniesta/metainspector) - scrapes a given URL, and returns its title, meta description, meta keywords, an array with all the links, all the images in it, etc
* [LinkThumbnailer](https://github.com/gottfrois/link_thumbnailer) - Ruby gem that generates thumbnail images and videos from a given URL. Much like popular social website with link preview.

## WebSocket

*Libraries for working with WebSocket.*

* [em-websocket](https://github.com/igrigorik/em-websocket) - EventMachine based WebSocket server
* [Faye](http://faye.jcoglan.com/ruby.html) - A set of tools for simple publish-subscribe messaging between web clients.
* [Firehose](https://github.com/polleverywhere/firehose) - Build realtime Ruby web applications.
* [Slanger](https://github.com/stevegraham/slanger) - Open Pusher implementation compatible with Pusher libraries.

## DNS Resolving
* TODO

## Computer Vision

* [ruby-opencv](https://github.com/ruby-opencv/ruby-opencv) - An OpenCV wrapper for Ruby.

## Geolocation

  * [geocoder](https://github.com/alexreisner/geocoder) - A complete geocoding solution for Ruby. With Rails it adds geocoding (by street or IP address), reverse geocoding (find street address based on given coordinates), and distance queries.
  * [Geokit](https://github.com/geokit/geokit) - Geokit gem provides geocoding and distance/heading calculations.
  * [geoip](https://github.com/cjheath/geoip) - Searches a GeoIP database for a given host or IP address, and returns information about the country where the IP address is allocated, and the city, ISP and other information.
  
## Other Ruby Lists

* [awesome-ruby](https://github.com/markets/awesome-ruby/blob/master/README.md) by markets
* [awesome-ruby](https://github.com/Sdogruyol/awesome-ruby) by Sdogruyol
