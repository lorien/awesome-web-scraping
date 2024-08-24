# PHP Web Scraping

This list contains PHP libraries related to web scraping and data processing

* [PHP Web Scraping](#php-web-scraping)
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
   * [URL Manipulation](#url-manipulation)
   * [Web Content Extracting](#web-content-extracting)
   * [Asynchronous](#asynchronous)
   * [WebSocket](#websocket)
   * [DNS Resolving](#dns-resolving)
   * [Computer Vision](#computer-vision)
   * [Geocoding](#geocoding)
   * [API Clients](#api-clients)
   * [Other PHP Lists](#other-php-lists)


## Network

* [Guzzle](https://github.com/guzzle/guzzle) - A comprehensive HTTP client.
* [Buzz](https://github.com/kriswallsmith/Buzz) - Another HTTP client.
* [Requests](https://github.com/rmccue/Requests) - A simple HTTP library.
* [HTTPFul](https://github.com/nategood/httpful) - A chainable HTTP client.
* [Goutte](https://github.com/fabpot/Goutte) - A simple web scraper.
* [PHP Spider](https://github.com/mvdbos/php-spider) - A comprehensive web spider.


## Web-Scraping Frameworks
* [Crawler](https://github.com/crwlrsoft/crawler) - (crwlr) - Library for Rapid (Web) Crawler and Scraper Development
* [Roach](https://github.com/roach-php/core) - It is port of the popular Scrapy package for Python. Include adapter to Laravel and Symfony


## HTML/XML Parsing
* [HTML5 PHP](https://github.com/Masterminds/html5-php) - An HTML5 parser and serializer library.
* [QueryPath](https://github.com/technosophos/querypath) - a jQuery-like library for working with XML and HTML documents in PHP. It now contains support for HTML5 via the HTML5-PHP project.
* [DiDOM](https://github.com/Imangazaliev/DiDOM) - super fast HTML parser (because it was build on top of plain PHP).
* [PHPScraper](https://github.com/spekulatius/phpscraper) - an highly opinionated web-interface.
* [DomCrawler](https://github.com/symfony/dom-crawler) - (Symfony) - The DomCrawler component eases DOM navigation for HTML and XML documents.


## Text Processing

*Libraries for parsing and manipulating plain texts.*

* General
  * [ANSI to HTML5](https://github.com/sensiolabs/ansi-to-html) - An ANSI to HTML5 converter library.
  * [Patchwork UTF-8](https://github.com/nicolas-grekas/Patchwork-UTF8) - A portable library for working with UTF-8 strings.
  * [Hoa String](https://github.com/hoaproject/Ustring) - Another UTF-8 string library.
  * [Stringy](https://github.com/danielstjules/Stringy) - A string manipulation library with multibyte support.
  * [Color Jizz](https://github.com/mikeemoo/ColorJizz-PHP) - A library for manipulating and converting colours.
  * [Text](https://github.com/kzykhys/Text) - A text manipulation library.
  * [Flux](https://github.com/selvinortiz/flux) - A regular expression building library.
* Transliteration
  * [Urlify](https://github.com/jbroadway/urlify) - A PHP port of Django's URLify.js.
  * [Slugify](https://github.com/cocur/slugify) - A library to convert strings to slugs.
* User-agent
  * [CrawlerDetect](https://github.com/JayBizzle/Crawler-Detect) - CrawlerDetect is a PHP class for detecting bots/crawlers/spiders via the user agent and http_from header.
  * [PHPUserAgent](https://github.com/donatj/PhpUserAgent) - A simple, streamlined PHP user-agent parser!
  * [AgentZero](https://github.com/hexydec/agentzero) - A library for extracting information from User-Agent strings very fast.
  * [Device Detector](https://github.com/piwik/device-detector) - Another library for parsing user agent strings.
  * [Mobile-Detect](https://github.com/serbanghita/Mobile-Detect) - A lightweight PHP class for detecting mobile devices (including tablets).
  * [UA Parser](https://github.com/ua-parser/uap-php) - A library for parsing user agent strings.
* Unites of measure
  * [ByteUnits](https://github.com/gabrielelana/byte-units) - A library to parse, format and convert byte units in binary and metric systems.
  * [PHP Units of Measure](https://github.com/triplepoint/php-units-of-measure) - A library for converting between units of measure.
  * [PHP Conversion](https://github.com/Crisu83/php-conversion) - Another library for converting between units of measure.
* Phone number
  * [LibPhoneNumber for PHP](https://github.com/giggsey/libphonenumber-for-php) - A PHP implementation of Google's phone number handling library.


## Specific Formats Processing

*Libraries for parsing and manipulating specific text formats.*

* CSV
  * [CSV](https://github.com/thephpleague/csv) - A CSV data manipulation library.
* Office
  * [PHPWord](https://github.com/PHPOffice/PHPWord) - A library for working with Microsoft Word documents.
  * [PHPExcel](https://github.com/PHPOffice/PHPExcel) - A library for working with Microsoft Excel documents.
  * [PHPPowerPoint](https://github.com/PHPOffice/PHPPowerPoint) - A library for working with Microsoft PowerPoint documents.
  * [ExcelAnt](https://github.com/Wisembly/ExcelAnt) - A library for manipulating Microsoft Excel documents.
* Markdown
  * [PHP Markdown](https://github.com/michelf/php-markdown) - A Markdown parser.
  * [CommonMark PHP](https://github.com/thephpleague/commonmark) - A Markdown parser which supports the full [CommonMark spec](http://spec.commonmark.org/).
  * [Parsedown](https://github.com/erusev/parsedown) - Another Markdown parser.
  * [Ciconia](https://github.com/kzykhys/Ciconia) - Another Markdown parser that supports Github flavoured Markdown.
  * [Cebe Markdown](https://github.com/cebe/markdown) - An fast and extensible Markdown parser.
* BBCode
  * [Decoda](https://github.com/milesj/decoda) - A lightweight lexical string parser for BBCode styled markup.
* JSON
  * [JsonMapper](https://github.com/netresearch/jsonmapper) - A library that maps nested JSON structures onto PHP classes.
* vCard
  * [vobject](https://github.com/fruux/sabre-vobject) - The VObject library allows you to easily parse and manipulate iCalendar and vCard objects.
* File Type Detection
  * [Hoa Mime](https://github.com/hoaproject/Mime) - Another MIME detection library.
  * [Canal](https://github.com/dflydev/dflydev-canal) - A library to determine internet media types.
  * [Apache MIME Types](https://github.com/dflydev/dflydev-apache-mime-types) - A library that parses Apache MIME types.
* GeoJSON
  * [GeoJSON](https://github.com/jmikola/geojson) - A GeoJSON implementation.


## Natural Language Processing

*Libraries for working with human languages.*

* [PHP NlpTools](https://github.com/angeloskath/php-nlp-tools) - Natural Language Processing Tools in PHP
* [nlpTools](https://github.com/atrilla/nlptools) - Natural Language Processing Toolkit for PHP


## Browser automation and emulation

* [php-webdriver](https://github.com/facebook/php-webdriver) - A php client for webdriver.
* [PHP PhantomJS](https://github.com/jonnnnyw/php-phantomjs) - Execute PhantomJS commands through PHP
* [Mink](https://github.com/minkphp/Mink) - universal API for multiple browser emulators (selenium, zombie.js, goutte)


## Multiprocessing

  * [Spork](https://github.com/kriswallsmith/spork) - A process forking library.

## Asynchronous

*Libraries for asynchronous networking programming.*

* [React](https://github.com/reactphp/react) - An event driven non-blocking I/O library.
* [Rx.PHP](https://github.com/asm89/Rx.PHP) - A reactive extension library.
* [Hoa EventSource](https://github.com/hoaproject/Eventsource) - An event source library.
* [Evenement](https://github.com/igorw/evenement) - An event dispatcher library.
* [Event](https://github.com/thephpleague/event) - An event library with a focus on domain events.
* [Broadway](https://github.com/qandidate-labs/broadway) - An event source and CQRS library.


## Queue

* [Pheanstalk](https://github.com/pda/pheanstalk) - A Beanstalkd client library.
* [PHP AMQP](https://github.com/videlalvaro/php-amqplib) - A pure PHP AMQP library.
* [Thumper](https://github.com/videlalvaro/Thumper) - A RabbitMQ pattern library.
* [Bernard](https://github.com/bernardphp/bernard) - A multibackend abstraction library.


## Cloud Computing
* TODO


## Email

*Libraries for parsing email.*

* [Email Reply Parser](https://github.com/willdurand/EmailReplyParser) - An email reply parser library.
* [Email Validator](https://github.com/nojacko/email-validator) - A small email address validation library.


## URL Manipulation

*Libraries for parsing URLs.*

* [Purl](https://github.com/jwage/purl) - A URL manipulation library.
* [PHP Domain Parser](https://github.com/jeremykendall/php-domain-parser) - A domain suffix parser library.
* [Uri](https://github.com/thephpleague/uri) (The PHP League) - A simple URL manipulation library (PSR-7 compatible).
* [Url](https://github.com/crwlrsoft/url) (crwlr) - Swiss Army knife for urls.


## Web Content Extracting

* Text and Meta Data from Web Documents
  * [Essence](https://github.com/felixgirault/essence) - A library for extracting web media.
  * [Embera](https://github.com/mpratt/Embera) - An Oembed consumer library.
  * [Embed](https://github.com/oscarotero/Embed) - An awesome library for getting useful information from a webpage.
* Video
  * [Youtube-Downloader](https://github.com/jeckman/YouTube-Downloader) - PHP script for downloading videos from youtube; also parsing youtube feed into RSS enclosures for podcatchers


## WebSocket

*Libraries for working with WebSocket.*

* [Ratchet](https://github.com/cboden/Ratchet) - A web socket library.
* [Hoa WebSocket](https://github.com/hoaproject/Websocket) - Another web socket library.
* [Elephant.io](https://github.com/Wisembly/Elephant.io) - Yet another web socket library.


## DNS Resolving

  * [Net_DNS2](https://github.com/mikepultz/netdns2) - Native PHP DNS Resolver and Updater


## Computer Vision

  * [OpenCV-for-PHP](https://github.com/mgdm/OpenCV-for-PHP) - An OpenCV binding for PHP


## Geocoding

* [GeoCoder](http://geocoder-php.org/) - A geocoding library.
* [GeoTools](https://github.com/php-loep/Geotools) - A library of geo-related tools.


## Other PHP lists

 * [awesome-php](https://github.com/ziadoz/awesome-php)
