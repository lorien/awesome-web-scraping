# Python Web Scraping

This list contains python libraries related to web scraping and data processing

## Contents

* [Network](#network)
* [Web Scraping](#web-scraping)
* [HTML/XML](#htmlxml)
* [Text processing](#text-processing)
* [Structured Formats](#structured-formats)
* [Serialization](#serialization)
* [Natural Language Processing](#natural-language-processing)
* [Browser Automation](#browser-automation)
* [Multiprocessing](#multiprocessing)
* [Job Queue](#job-queue)
* [Message Queue](#message-queue)
* [Cloud Computing](#cloud-computing)
* [URL and Network Address](#url-and-network-address)
* [Web Automation](#web-automation)
* [Asynchronous](#asynchronous)
* [WebSocket](#websocket)
* [DNS Resolving](#dns-resolving)
* [Computer Vision](#computer-vision)
* [Proxy Server](#proxy-server)
* [Whois](#whois)
* [JavaScript Engine Bindings](#javascript-engine-bindings)
* [Captcha Solving](#captcha-solving)
* [Other Python Lists](#other-python-lists)

## Network

### Network : General

* [urllib](https://docs.python.org/3.4/library/urllib.html?highlight=urllib#module-urllib) - network library (stdlib)
* [requests](https://github.com/kennethreitz/requests) - network library
* [pycurl](https://github.com/pycurl/pycurl) - network library (binding to [libcurl](http://curl.haxx.se/libcurl/))
* [urllib3](https://github.com/shazow/urllib3) - Python HTTP library with thread-safe connection pooling, file post support, sanity friendly, and more.
* [httplib2](https://github.com/httplib2/httplib2) - Small, fast HTTP client library. Features persistent connections, cache, and Google App Engine support.
* [RoboBrowser](https://github.com/jmcarp/robobrowser) - A simple, Pythonic library for browsing the web without a standalone web browser.
* [MechanicalSoup](https://github.com/hickford/MechanicalSoup) - A Python library for automating interaction with websites.
* [mechanize](https://github.com/python-mechanize/mechanize) - Stateful programmatic web browsing.
* [socket](https://docs.python.org/3/library/socket.html) low-level networking interface (stdlib)
* [Unirest for Python](https://github.com/Mashape/unirest-python) - Unirest is a set of lightweight HTTP libraries available in multiple languages
* [hyper](https://github.com/Lukasa/hyper) - HTTP/2 Client for Python
* [PySocks](https://github.com/Anorov/PySocks) - Updated and actively maintained version of SocksiPy, with bug fixes and extra features. Acts as a drop-in replacement to the socket module.

### Network : Asynchronous

* [treq](https://github.com/dreid/treq) - requests like API (twisted based)
* [aiohttp](https://github.com/KeepSafe/aiohttp) - http client/server for asyncio (PEP-3156)

### Network : Low Level

* [dpkt](https://github.com/kbandla/dpkt) - fast, simple packet creation / parsing, with definitions for the basic TCP/IP protocols
* [pyOpenSSL](https://github.com/pyca/pyopenssl) - A Python wrapper around the OpenSSL library
* [tlslite-ng](https://github.com/tomato42/tlslite-ng) - TLS implementation in pure python
* [scapy](https://github.com/secdev/scapy) - powerful Python-based interactive packet manipulation program and library
* [impacket](https://github.com/SecureAuthCorp/impacket/) - low-level programmatic access to the packets of network protocols

## Web Scraping

### Web Scraping : Frameworks

* [scrapy](https://github.com/scrapy/scrapy) - web-scraping framework (twisted based).
* [pyspider](https://github.com/binux/pyspider) - A powerful spider system.
* [autoscraper](https://github.com/alirezamika/autoscraper) - A smart, automatic and lightweight web scraper
* [ruia](https://github.com/howie6879/ruia) - Async Python 3.6+ web scraping micro-framework based on asyncio
* [cola](https://github.com/chineking/cola) - A distributed crawling framework.
* [frontera](https://github.com/scrapinghub/frontera) - A scalable frontier for web crawlers
* [dude](https://github.com/roniemartinez/dude) - A simple framework for writing web scrapers using decorators.
* [ScrapegrphAI](https://github.com/ScrapeGraphAI/Scrapegraph-ai) - Web scraping framework that uses AI for extracting data

### Web Scraping : Tools

* [portia](https://github.com/scrapinghub/portia) - Visual scraping for Scrapy.
* [restkit](https://github.com/benoitc/restkit) - HTTP resource kit for Python. It allows you to easily access to HTTP resource and build objects around it.
* [requests-html](https://github.com/kennethreitz/requests-html) - Pythonic HTML Parsing for Humans.
* [ScrapydWeb](https://github.com/my8100/scrapydweb) - A full-featured web UI for Scrapyd cluster management, which supports Scrapy Log Analysis & Visualization, Auto Packaging, Timer Tasks, Email Notice and so on.
* [Starbelly](https://github.com/HyperionGray/starbelly) - Starbelly is a user-friendly and highly configurable web crawler front end.
* [Gerapy](https://github.com/Gerapy/Gerapy) - Distributed Crawler Management Framework Based on Scrapy, Scrapyd, Django and Vue.js

### Web Scraping : Bypass Protection

* [cloudscraper](https://github.com/venomous/cloudscraper) - A Python module to bypass Cloudflare's anti-bot page.

## HTML/XML

### HTML/XML : General

* [lxml](https://github.com/lxml/lxml/) - effective HTML/XML processing library. Supports XPATH. Written in C.
* [cssselect](https://github.com/scrapy/cssselect) - working with DOM tree with CSS selectors
* [pyquery](https://github.com/gawel/pyquery) - working with DOM tree with jQuery-like selectors
* [BeautifulSoup](http://www.crummy.com/software/BeautifulSoup/bs4/doc/) - slow HTML/XMl processing library, written in pure python
* [html5lib](https://github.com/html5lib/html5lib-python) - builds DOM of HTML/XML document according to [WHATWG spec](url=http://www.whatwg.org/). That spec is used in all modern browsers.
* [feedparser](https://github.com/kurtmckee/feedparser) - parsing of RSS/ATOM feeds.
* [MarkupSafe](https://github.com/mitsuhiko/markupsafe) - Implements a XML/HTML/XHTML Markup safe string for Python.
* [xmltodict](https://github.com/martinblech/xmltodict) - Working with XML feel like you are working with JSON.
* [xhtml2pdf](https://github.com/chrisglass/xhtml2pdf) - HTML/CSS to PDF converter.
* [untangle](https://github.com/stchris/untangle) - Converts XML documents to Python objects for easy access.
* [hodor](https://github.com/CompileInc/hodor) - Configuration driven wrapper around lxml and cssselect.
* [chopper](https://github.com/jurismarches/chopper) - Tool to extract a part from HTML page with corresponding CSS rules and preserving correct HTML.
* [selectolax](https://github.com/rushter/selectolax) - Python bindings to Modest engine (fast HTML5 parser with CSS selectors).
* [parsel](https://github.com/scrapy/parsel) - Lets you extract data from XML/HTML documents using XPath or CSS selectors.
* [html5-parser](https://github.com/kovidgoyal/html5-parser) - Fast C based HTML 5 parsing for python.
* [gazpacho](https://github.com/maxhumber/gazpacho/) - A simple, fast, and modern web scraping library. 

### HTML/XML : Sanitizing

* [Bleach](https://github.com/mozilla/bleach) - cleaning of HTML (requires html5lib)
* [sanitize](https://github.com/Alir3z4/sanitize) - Bringing sanity to world of messed-up data.

### HTML/XML : Metadata

* [extruct](https://github.com/scrapinghub/extruct) - A library for extracting embedded metadata from HTML markup.

## Text Processing

Libraries for parsing and manipulating plain texts.

### Text Processing : General

* [difflib](https://docs.python.org/3/library/difflib.html) - (Python standard library) Helpers for computing deltas.
* [Levenshtein](https://github.com/ztane/python-Levenshtein/) - Fast computation of Levenshtein distance and string similarity.
* [fuzzywuzzy](https://github.com/seatgeek/fuzzywuzzy) - Fuzzy String Matching.
* [esmre](https://code.google.com/p/esmre/) - Regular expression accelerator.
* [ftfy](https://github.com/LuminosoInsight/python-ftfy) - Makes Unicode text less broken and more consistent automagically.

### Text Processing : Transliteration

* [unidecode](https://pypi.python.org/pypi/Unidecode) - ASCII transliterations of Unicode text.

### Text Processing : Character Encoding

* [uniout](https://github.com/moskytw/uniout) - Print readable chars instead of the escaped string.
* [chardet](https://github.com/chardet/chardet) - Python 2/3 compatible character encoding detector.
* [xpinyin](https://github.com/lxneng/xpinyin) - A library to translate Chinese hanzi (漢字) to pinyin (拼音).
* [pangu.py](https://github.com/vinta/pangu.py) - Spacing texts for CJK and alphanumerics.
* [cchardet](https://github.com/PyYoshi/cChardet) - cChardet is high speed universal character encoding detector. - binding to uchardet.

### Text Processing : Slugify

* [awesome-slugify](https://github.com/dimka665/awesome-slugify) - A Python slugify library that can preserve unicode.
* [python-slugify](https://github.com/un33k/python-slugify) - A Python slugify library that translates unicode to ASCII.
* [unicode-slugify](https://github.com/mozilla/unicode-slugify) - A slugifier that generates unicode slugs.
* [pytils](https://github.com/j2a/pytils) - Simple tools for processing strings in russian (including pytils.translit.slugify)

### Text Processing : General Parser

* [PLY](http://www.dabeaz.com/ply/) - Implementation of lex and yacc parsing tools for Python
* [pyparsing](https://github.com/pyparsing/pyparsing) - A general purpose framework for generating parsers.

### Text Processing : Human Names

* [python-nameparser](https://github.com/derek73/python-nameparser) - Parsing human names into their individual components.

### Text Processing : Phone Number

* [phonenumbers](https://github.com/daviddrysdale/python-phonenumbers) - Parsing, formatting, storing and validating international phone numbers.

### Text Processing :: User-Agent strings

* [HTTP Agent Parser](https://github.com/shon/httpagentparser) - Python HTTP Agent Parser
* [uap-python](https://github.com/ua-parser/uap-python) - Python implementation of ua-parser
* [python-user-agents](https://github.com/selwin/python-user-agents) - Browser user agent parser.
* [fake-useragent](https://github.com/hellysmile/fake-useragent) - Python user agent string faker, based on world statistic of browsers
* [user_agent](https://github.com/lorien/user_agent) - Generator of User-Agent data

### Text Processing : robots.txt

* [reppy](https://github.com/seomoz/reppy) - Modern robots.txt Parser for Python

### Text Processing :: Date and Time

* [dateutil](https://github.com/dateutil/dateutil) - Useful extensions to the standard Python datetime features
* [dateparser](https://github.com/scrapinghub/dateparser) - python parser for human readable dates
* [ciso8601](https://github.com/closeio/ciso8601) - converts ISO 8601 or RFC 3339 date time strings into Python datetime objects

### Text Processing :: Price and Currency

* [price-parser](https://github.com/scrapinghub/price-parser) - a small library for extracting price and currency from raw text strings.

## Structured Formats

Libraries for parsing and manipulating specific text formats.

### Structured Formats : General

* [tablib](https://github.com/kennethreitz/tablib) - A module for Tabular Datasets in XLS, CSV, JSON, YAML.
* [textract](https://github.com/deanmalmgren/textract) - Extract text from any document, Word, PowerPoint, PDFs, etc.
* [messytables](https://github.com/okfn/messytables) - Tools for parsing messy tabular data
* [rows](https://github.com/turicas/rows) - A common, beautiful interface to tabular data, no matter the format (currently CSV, HTML, XLS, TXT -- more coming!)

### Structured Formats : Office

* [python-docx](https://github.com/python-openxml/python-docx) - Reads, queries and modifies Microsoft Word 2007/2008 docx files.
* [xlwt](https://github.com/python-excel/xlwt) / [xlrd](https://github.com/python-excel/xlrd) - Writing and reading data and formatting information from Excel files.
* [XlsxWriter](https://xlsxwriter.readthedocs.org/) - A Python module for creating Excel .xlsx files.
* [xlwings](http://xlwings.org/) - A BSD-licensed library that makes it easy to call Python from Excel and vice versa.
* [openpyxl](https://openpyxl.readthedocs.org/en/latest/) - A library for reading and writing Excel 2010 xlsx/xlsm/xltx/xltm files.
* [Marmir](https://github.com/brianray/mm) - Takes Python data structures and turns them into spreadsheets.

### Structured Formats : PDF

* [PDFMiner](https://github.com/euske/pdfminer) - A tool for extracting information from PDF documents.
* [PyPDF2](https://github.com/mstamy2/PyPDF2) - A library capable of splitting, merging and transforming PDF pages.
* [ReportLab](http://www.reportlab.com/opensource/) - Allowing Rapid creation of rich PDF documents.
* [pdftables](https://pypi.python.org/pypi/pdftables) - Extract tables from PDF files directly

### Structured Formats : Markdown

* [Python-Markdown](https://github.com/waylan/Python-Markdown) - A Python implementation of John Gruber’s Markdown.
* [Mistune](https://github.com/lepture/mistune) - Fastest and full featured pure Python parsers of Markdown.
* [markdown2](https://pypi.python.org/pypi/markdown2) - A fast and complete Python implementation of Markdown
* [mistletoe](https://github.com/miyuchina/mistletoe) - A fast, extensible and spec-compliant Markdown parser in pure Python

### Structured Formats : YAML

* [PyYAML](https://github.com/yaml/pyyaml) - YAML implementations for Python.

### Structured Formats : CSS

* [cssutils](https://pypi.python.org/pypi/cssutils/) - A CSS library for Python.

### Structured Formats : ATOM/RSS

* [feedparser](http://pythonhosted.org/feedparser/) - Universal feed parser.

### Structured Formats : SQL

* [sqlparse](https://sqlparse.readthedocs.org/) - A non-validating SQL parser.

### Structured Formats : HTTP

* [http-parser](https://github.com/benoitc/http-parser) - HTTP request/response parser for python in C
* [httptools](https://github.com/MagicStack/httptools) - a Python binding for nodejs HTTP parser

### Structured Formats : Microformats

* [opengraph](https://github.com/erikriver/opengraph) - A Python module to parse the Open Graph Protocol tags

### Structured Formats :  Portable Executable

*  [pefile](https://github.com/erocarrera/pefile) - A multi-platform module to parse and work with Portable Executable (aka PE) files.

### Structured Formats : PSD

* [psd-tools](https://github.com/kmike/psd-tools) - reading Adobe Photoshop PSD files (as described in [specification](https://www.adobe.com/devnet-apps/photoshop/fileformatashtml/PhotoshopFileFormats.htm)) to Python data structures.

### Structured Formats : Bookmarks File

* [bookmarks-parser](https://github.com/bookmarks-tools/bookmarks-parser) - Parses Firefox/Chrome HTML bookmarks files

### Structured Formats : JavaScript Object

* [chompjs](https://github.com/Nykakin/chompjs) - Parsing JavaScript objects into Python dictionaries

### Structured Formats : Email

* [flanker](https://github.com/mailgun/flanker) - A email address and Mime parsing library.
* [Talon](https://github.com/mailgun/talon) - Mailgun library to extract message quotations and signatures.

## Serialization

* [orjson](https://github.com/ijl/orjson) - Fast, correct Python JSON library supporting dataclasses and datetimes
* [ujson](https://github.com/esnme/ultrajson) - Ultra fast JSON decoder and encoder written in C with Python bindings
* [msgspec](https://github.com/jcrist/msgspec) - A fast serialization and validation library, with builtin support for JSON, MessagePack, YAML, and TOML
* [msgpack](https://github.com/msgpack/msgpack-python) - MessagePack serializer implementation for Python
* [padantic](https://github.com/pydantic/pydantic) - Data validation using Python type hints
* [cloudpickle](https://github.com/cloudpipe/cloudpickle) - Extended pickling support for Python objects

## Natural Language Processing

Libraries for working with human languages.

* [NLTK](http://www.nltk.org/) - A leading platform for building Python programs to work with human language data.
* [spacy](https://github.com/explosion/spaCy) - Enables using State-of-the-Art Deep Learning models for common NLP tasks.
* [fastai](https://github.com/fastai/fastai) - Deep Learning library with free video tutorials + active forum community, downside of lib: GPU needed
* [gensim](https://github.com/RaRe-Technologies/gensim) -  library for topic modeling, document indexing and similarity retrieval with large corpora
* [Pattern](https://github.com/clips/pattern) - A web mining module for the Python. It has tools for natural language processing, machine learning, among others.
* [TextBlob](http://textblob.readthedocs.org/) - Providing a consistent API for diving into common NLP tasks. Stands on the giant shoulders of NLTK and Pattern.
* [jieba](https://github.com/fxsjy/jieba) - Chinese Words Segmentation Utilities.
* [SnowNLP](https://github.com/isnowfy/snownlp) - A library for processing Chinese text.
* [loso](https://github.com/victorlin/loso) - Another Chinese segmentation library.
* [genius](https://github.com/duanhongyi/genius) - A Chinese segment base on Conditional Random Field.
* [langid.py](https://github.com/saffsd/langid.py) - Stand-alone language identification system.
* [Korean](https://korean.readthedocs.org/) - A library for [Korean](http://en.wikipedia.org/wiki/Korean_language) morphology.
* [pymorphy2](https://github.com/kmike/pymorphy2) - Morphological analyzer (POS tagger + inflection engine) for Russian language.
* [PyPLN](https://github.com/NAMD/pypln.backend) - A distributed pipeline for natural language processing, made in Python. he goal of the project is to create an easy way to use NLTK for processing big corpora, with a Web interface.
* [langdetect](https://github.com/Mimino666/langdetect) - Port of Google's language-detection library to Python

## Browser Automation

### Browser Automation : Drivers

* [selenium](http://selenium-python.readthedocs.io/) - automating real browsers (Chrome, Firefox, Opera, IE)
* [Ghost.py](http://carrerasrodrigo.github.io/Ghost.py/) - wrapper of QtWebKit (requires PyQT)
* [Spynner](https://github.com/makinacorpus/spynner) - wrapper of QtWebKit QtWebKit (requires PyQT)
* [Splinter](https://github.com/cobrateam/splinter) - universal API to browser emulators (selenium webdrivers, django client, zope)
* [Requestium](https://github.com/tryolabs/requestium) - Integration layer between Requests and Selenium for automation of web actions.
* [Splash](https://github.com/scrapinghub/splash) - Lightweight, scriptable browser as a service with an HTTP API.
* [pyppeteer](https://github.com/miyakogi/pyppeteer) - Headless chrome/chromium automation library (unofficial port of puppeteer)
* [Playwright](https://github.com/microsoft/playwright-python) - Playwright is a Python library to automate Chromium, Firefox and WebKit browsers with a single API
* [seleniumbase](https://github.com/seleniumbase/SeleniumBase) - Python framework for Web/UI testing + RPA. 🤖 🏰 Fast, easy, and reliable.

### Browser Automation : Frameworks

* [botasaurus](https://github.com/omkarcloud/botasaurus) - all-in-one web scraping framework
* [crawlee](https://github.com/apify/crawlee-python) - A web scraping and browser automation library for Python to build reliable crawlers

### Browser Automation : Tools

* [xvfbwrapper](https://github.com/cgoldberg/xvfbwrapper) - Python wrapper for running a display inside X virtual framebuffer (Xvfb)

## Multiprocessing

* [threading](http://docs.python.org/3/library/threading.html) - standard python library to run threads. Effective for I/O-bound tasks. Useless for CPU-bound tasks because of python GIL.
* [multiprocessing](http://docs.python.org/3/library/multiprocessing.html) - standard python library to run processes.
* [concurrent-futures](https://docs.python.org/3/library/concurrent.futures.html) - The concurrent.futures module provides a high-level interface for asynchronously executing callables.

## Asynchronous

Libraries for asynchronous networking programming.

* [asyncio](https://docs.python.org/3/library/asyncio.html) - (Python standard library in Python 3.4+) Asynchronous I/O, event loop, coroutines and tasks.
* [Twisted](https://twistedmatrix.com/trac/) - An event-driven networking engine.
* [Tornado](http://www.tornadoweb.org/) - A Web framework and asynchronous networking library.
* [pulsar](https://github.com/quantmind/pulsar) - Event-driven concurrent framework for Python.
* [diesel](https://github.com/jamwt/diesel) - Greenlet-based event I/O Framework for Python.
* [gevent](http://www.gevent.org/) - A coroutine-based Python networking library that uses [greenlet](https://github.com/python-greenlet/greenlet).
* [eventlet](http://eventlet.net/) - Asynchronous framework with WSGI support.
* [Tomorrow](https://github.com/madisonmay/Tomorrow) - Magic decorator syntax for asynchronous code.
* [grequests](https://github.com/kennethreitz/grequests) - Make asynchronous HTTP Requests easily.

## Job Queue

* [celery](http://www.celeryproject.org/) - An asynchronous task queue/job queue based on distributed message passing.
* [huey](https://github.com/coleifer/huey) - Little multi-threaded task queue.
* [mrq](https://github.com/pricingassistant/mrq) - Mr. Queue - A distributed worker task queue in Python using Redis & gevent.
* [RQ](https://github.com/rq/rq) - lightweight task queue manager based on redis
* [simpleq](https://github.com/rdegges/simpleq) - A simple, infinitely scalable, Amazon SQS based queue.
* [python-gearman](https://github.com/Yelp/python-gearman) - python API for Gearman

## Message Queue

* [kombu](https://github.com/celery/kombu) - Messaging library for Python

## Cloud Computing

* [picloud](http://docs.picloud.com/) - executing python-code in cloud
* [dominoup.com](http://www.dominoup.com/) - executing R, Python и matlab code in cloud
* [minigun-requests](https://github.com/umihico/minigun-requests) - Web scraping API to outsource tons of GET & xpath to cloud computing
* [pythonista-chromeless](https://github.com/umihico/pythonista-chromeless) - AWS lambda which execute given python code on selenium

## URL and Network Address

Libraries for parsing/modifying URLs, network addresses, domain names.

### URL and Network Address : URL

* [furl](https://github.com/gruns/furl) - A small Python library that makes manipulating URLs simple.
* [purl](https://github.com/codeinthehole/purl) - A simple, immutable URL class with a clean API for interrogation and manipulation.
* [urllib.parse](https://docs.python.org/3/library/urllib.parse.html) - interface to break URL strings up in components (addressing scheme, network location, path etc.), to combine the components back into a URL string, and to convert a “relative URL” to an absolute URL.
* [courlan](https://github.com/adbar/courlan) - Clean, filter and sample URLs to optimize data collection: Deduplication, spam, content and language filters

### URL and Network Address : Network Address

* [netaddr](https://github.com/drkjam/netaddr) - A Python library for representing and manipulating network addresses.
* [micawber](https://github.com/coleifer/micawber) - A small library for extracting rich content from URLs.

### Domain Names

* [tldextract](https://github.com/john-kurkowski/tldextract) - Accurately separate the TLD from the registered domain and subdomains of a URL, using the Public Suffix List.
* [find_domains](https://github.com/rushter/find_domains) - a library to search for domain names in text data

## Web Automation

Tools to automate multiple actions on a website.

### Web Automation :: Content Extraction

* [newspaper](https://github.com/codelucas/newspaper) - News extraction, article extraction and content curation in Python.
* [python-goose](https://github.com/grangier/python-goose) - HTML Content/Article Extractor.
* [scrapely](https://github.com/scrapy/scrapely) - Library for extracting structured data from HTML pages. Given some example web pages and the data to be extracted, scrapely constructs a parser for all similar pages.
* [htmldate](https://github.com/adbar/htmldate) - Find creation date using common structural patterns or text-based heuristics.
* [lassie](https://github.com/michaelhelmick/lassie) - Web Content Retrieval for Humans.
* [html2text](https://github.com/Alir3z4/html2text) - Convert HTML to Markdown-formatted text.
* [libextract](https://github.com/datalib/libextract) - Extract data from websites.
* [python-readability](https://github.com/buriy/python-readability) - Fast Python port of arc90's readability tool.
* [sumy](https://github.com/miso-belica/sumy) - A module for automatic summarization of text documents and HTML pages.
* [Haul](https://github.com/vinta/Haul) - An Extensible Image Crawler.
* [you-get](http://www.soimort.org/you-get/) - A YouTube/Youku/Niconico video downloader written in Python 3.
* [youtube-dl](http://rg3.github.io/youtube-dl/) - A small command-line program to download videos from YouTube.
* [WikiTeam](https://github.com/WikiTeam/wikiteam) - Tools for downloading and preserving wikis.
* [linkchecker](https://github.com/wummel/linkchecker) - check links in web documents or full websites
* [python-sitemap](https://github.com/c4software/python-sitemap) - Mini website crawler to make sitemap from a website.
* [trafilatura](https://github.com/adbar/trafilatura) - Gather text and metadata on the Web: Crawling, scraping, extraction, output as CSV, JSON, HTML, MD, TXT, XML.
* [advertools](https://github.com/eliasdabbas/advertools) - A customizable crawler to analyze SEO and content of pages and websites.
* [photon](https://github.com/s0md3v/Photon) - Incredibly fast crawler designed for OSINT
* [extractnet](https://github.com/currentsapi/extractnet) - Machine Learning based content and metadata extraction in Python 3

### Web Automation : Account Creation

* [ninjemail](https://github.com/david96182/ninjemail) - Python library for automated email account creation for different providers.


## WebSocket

Libraries for working with WebSocket.

* [Crossbar](https://github.com/crossbario/crossbar/) - Open-source Unified Application Router (Websocket & WAMP for Python on Autobahn).
* [AutobahnPython](https://github.com/tavendo/AutobahnPython) - WebSocket & WAMP for Python on Twisted and [asyncio](https://docs.python.org/3/library/asyncio.html).
* [WebSocket-for-Python](https://github.com/Lawouach/WebSocket-for-Python) - WebSocket client and server library for Python 2 and 3 as well as PyPy.

## DNS Resolving

* [dnspython](https://github.com/rthalley/dnspython) - a powerful DNS toolkit for python
* [dnsyo](https://github.com/samarudge/dnsyo) - Check your DNS against over 1500 global DNS servers.
* [pycares](https://github.com/saghul/pycares) -  interface to c-ares. c-ares is a C library that performs DNS requests and name resolutions asynchronously

## Computer Vision

* [OpenCV](https://github.com/Itseez/opencv) - Open Source Computer Vision Library.
* [SimpleCV](https://github.com/sightmachine/SimpleCV) - Concise, readable interface for cameras, image manipulation, feature extraction, and format conversion (based on OpenCV).
* [mahotas](https://github.com/luispedro/mahotas) - fast computer vision algorithms (all implemented in C++) operating over numpy arrays.

## Proxy Server

* [scylla](https://github.com/imWildCat/scylla) - Intelligent proxy pool for Humans
* [ProxyBroker](https://github.com/constverum/Proxybroker) - Proxy [Finder | Checker | Server]. HTTP(S) & SOCKS
* [shadowsocks](https://github.com/shadowsocks/shadowsocks) - A fast tunnel proxy that helps you bypass firewalls (TCP & UDP support, User management API, TCP Fast Open, Workers and graceful restart, Destination IP blacklist)
* [tproxy](https://github.com/benoitc/tproxy) - tproxy is a simple TCP routing proxy (layer 7) built on Gevent that lets you configure the routine logic in Python

## Whois

* [python-whois](https://github.com/joepie91/python-whois) - A python module for retrieving and parsing WHOIS data

## JavaScript Engine Bindings

* [Js2Py](https://github.com/PiotrDabkowski/Js2Py) - JavaScript to Python Translator & JavaScript interpreter written in 100% pure Python
* [v8eval](https://github.com/sony/v8eval/) - Multi-language bindings to JavaScript engine V8

## Captcha Solving
* [captcha_solver](https://github.com/lorien/captcha_solver) - Universal python API to captcha solving services
* [python-anticaptcha](https://github.com/ad-m/python-anticaptcha) - Client library for solve captchas with anti-captcha.com support
* [python3-anticaptcha](https://github.com/AndreiDrang/python3-anticaptcha) - Python library for anti-captcha services
* [unicaps](https://github.com/sergey-scat/unicaps) - a unified Python API for CAPTCHA solving services

## Other python lists

* [awesome-python](https://github.com/vinta/awesome-python)
* [pycrumbs](https://github.com/kirang89/pycrumbs)
* [pythonidae](https://github.com/svaksha/pythonidae)
