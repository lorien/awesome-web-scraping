# Python Web Scraping Libraries

## Network Request
* [urllib](https://docs.python.org/3.4/library/urllib.html?highlight=urllib#module-urllib) - standard python network library
* [requests](http://www.python-requests.org/) - network library
* [grab](http://docs.grablib.org/en/latest/) - network library (pycurl based)
* [pycurl](http://pycurl.sourceforge.net/) - network library (binding to [libcurl](http://curl.haxx.se/libcurl/))
* [urllib3](https://github.com/shazow/urllib3) - network library
* [httplib2](https://github.com/jcgregorio/httplib2) - network library
* [treq](https://github.com/dreid/treq) - requests like API (twisted based)

## Stateful HTTP clients
* [grab](http://docs.grablib.org/en/latest/) - network library (pycurl based)
* [requests](http://www.python-requests.org/) - network library
* [RoboBrowser](https://github.com/jmcarp/robobrowser) - A simple, Pythonic library for browsing the web without a standalone web browser.
* [MechanicalSoup](https://github.com/hickford/MechanicalSoup) - A Python library for automating interaction with websites.
* [mechanize](http://wwwsearch.sourceforge.net/mechanize/) - Stateful programmatic web browsing.
* [cola](https://github.com/chineking/cola) - A distributed crawling framework.
* [pyspider](https://github.com/binux/pyspider) - A powerful spider system.

## Web-Scraping Frameworks
* [grab](http://docs.grablib.org/en/latest/#grab-spider-user-manual) - web-scraping framework (pycurl/multicurl based)
* [scrapy](http://scrapy.org/) - web-scraping framework (twisted based). Does not support Python3.
* [portia](https://github.com/scrapinghub/portia) - Visual scraping for Scrapy.

## HTML/XML Parsing
* [lxml](http://lxml.de) - effective HTML/XML processing library. Supports XPATH. Written in C.
* [cssselect](https://pythonhosted.org/cssselect) - working with DOM tree with CSS selectors
* [pyquery](http://pythonhosted.org//pyquery/) - working with DOM tree with jQuery-like selectors
* [BeautifulSoup](http://www.crummy.com/software/BeautifulSoup/bs4/doc/) - slow HTML/XMl processing library, written in pure python
* [html5lib](http://html5lib.readthedocs.org/en/latest/) - building DOM of HTML/XML парсинг according to [WHATWG spec](url=http://www.whatwg.org/). That spec is used in all modern browsers.
* [feedparser](http://pythonhosted.org/feedparser/) - parsing of RSS/ATOM feeds.
* [Bleach](http://bleach.readthedocs.org/en/latest/) - cleaning of HTML (requires html5lib)
* [MarkupSafe](https://github.com/mitsuhiko/markupsafe) - Implements a XML/HTML/XHTML Markup safe string for Python.
* [xmltodict](https://github.com/martinblech/xmltodict) - Working with XML feel like you are working with JSON.
* [xhtml2pdf](https://github.com/chrisglass/xhtml2pdf) - HTML/CSS to PDF converter.
* [untangle](https://github.com/stchris/untangle) - Converts XML documents to Python objects for easy access.

## Text Processing

*Libraries for parsing and manipulating plain texts.*

* General
    * [difflib](https://docs.python.org/2/library/difflib.html) - (Python standard library) Helpers for computing deltas.
    * [Levenshtein](https://github.com/ztane/python-Levenshtein/) - Fast computation of Levenshtein distance and string similarity.
    * [fuzzywuzzy](https://github.com/seatgeek/fuzzywuzzy) - Fuzzy String Matching.
    * [esmre](https://code.google.com/p/esmre/) - Regular expression accelerator.
    * [shortuuid](https://github.com/stochastic-technologies/shortuuid) - A generator library for concise, unambiguous and URL-safe UUIDs.
    * [ftfy](https://github.com/LuminosoInsight/python-ftfy) - Makes Unicode text less broken and more consistent automagically.
    * [unidecode](https://pypi.python.org/pypi/Unidecode) - ASCII transliterations of Unicode text.
    * [chardet](https://github.com/chardet/chardet) - Python 2/3 compatible character encoding detector.
    * [xpinyin](https://github.com/lxneng/xpinyin) - A library to translate Chinese hanzi (漢字) to pinyin (拼音).
    * [pangu.py](https://github.com/vinta/pangu.py) - Spacing texts for CJK and alphanumerics.
    * [pyfiglet](https://github.com/pwaller/pyfiglet) - An implementation of figlet written in Python.
    * [uniout](https://github.com/moskytw/uniout) - Print readable chars instead of the escaped string.
* Slugify
    * [awesome-slugify](https://github.com/dimka665/awesome-slugify) - A Python slugify library that can preserve unicode.
    * [python-slugify](https://github.com/un33k/python-slugify) - A Python slugify library that translates unicode to ASCII.
    * [unicode-slugify](https://github.com/mozilla/unicode-slugify) - A slugifier that generates unicode slugs with Django as a dependency.
* Parser
    * [PLY](http://www.dabeaz.com/ply/) - Implementation of lex and yacc parsing tools for Python
    * [phonenumbers](https://github.com/daviddrysdale/python-phonenumbers) - Parsing, formatting, storing and validating international phone numbers.
    * [python-user-agents](https://github.com/selwin/python-user-agents) - Browser user agent parser.
    * [sqlparse](https://sqlparse.readthedocs.org/) - A non-validating SQL parser.
    * [python-nameparser](https://github.com/derek73/python-nameparser) - Parsing human names into their individual components.
    * [pyparsing](http://pyparsing.wikispaces.com/) - A general purpose framework for generating parsers.
* CSS
    * [cssutils](https://pypi.python.org/pypi/cssutils/) - A CSS library for Python.
* ATOM/RSS
    * [feedparser](http://pythonhosted.org/feedparser/) - Universal feed parser.

## Specific Formats Processing

*Libraries for parsing and manipulating specific text formats.*

* General
    * [tablib](https://github.com/kennethreitz/tablib) - A module for Tabular Datasets in XLS, CSV, JSON, YAML.
* Office
    * [python-docx](https://github.com/python-openxml/python-docx) - Reads, queries and modifies Microsoft Word 2007/2008 docx files.
    * [xlwt](https://github.com/python-excel/xlwt) / [xlrd](https://github.com/python-excel/xlrd) - Writing and reading data and formatting information from Excel files.
    * [XlsxWriter](https://xlsxwriter.readthedocs.org/) - A Python module for creating Excel .xlsx files.
    * [xlwings](http://xlwings.org/) - A BSD-licensed library that makes it easy to call Python from Excel and vice versa.
    * [openpyxl](https://openpyxl.readthedocs.org/en/latest/) - A library for reading and writing Excel 2010 xlsx/xlsm/xltx/xltm files.
    * [Marmir](https://github.com/brianray/mm) - Takes Python data structures and turns them into spreadsheets.
* PDF
    * [PDFMiner](https://github.com/euske/pdfminer) - A tool for extracting information from PDF documents.
    * [PyPDF2](https://github.com/mstamy2/PyPDF2) - A library capable of splitting, merging and transforming PDF pages.
    * [ReportLab](http://www.reportlab.com/opensource/) - Allowing Rapid creation of rich PDF documents.
* Markdown
    * [Python-Markdown](https://github.com/waylan/Python-Markdown) - A Python implementation of John Gruber’s Markdown.
    * [Mistune](https://github.com/lepture/mistune) - Fastest and full featured pure Python parsers of Markdown.
* YAML
    * [PyYAML](http://pyyaml.org/) - YAML implementations for Python.

## Natural Language Processing

*Libraries for working with human languages.*

* [NLTK](http://www.nltk.org/) - A leading platform for building Python programs to work with human language data.
* [Pattern](http://www.clips.ua.ac.be/pattern) - A web mining module for the Python. It has tools for natural language processing, machine learning, among others.
* [TextBlob](http://textblob.readthedocs.org/) - Providing a consistent API for diving into common NLP tasks. Stands on the giant shoulders of NLTK and Pattern.
* [jieba](https://github.com/fxsjy/jieba) - Chinese Words Segmentation Utilities.
* [SnowNLP](https://github.com/isnowfy/snownlp) - A library for processing Chinese text.
* [loso](https://github.com/victorlin/loso) - Another Chinese segmentation library.
* [genius](https://github.com/duanhongyi/genius) - A Chinese segment base on Conditional Random Field.
* [langid.py](https://github.com/saffsd/langid.py) - Stand-alone language identification system.
* [Korean](https://korean.readthedocs.org/) - A library for [Korean](http://en.wikipedia.org/wiki/Korean_language) morphology.

## Downloader

*Libraries for downloading.*

* [s3cmd](https://github.com/s3tools/s3cmd) - A command line tool for managing Amazon S3 and CloudFront.
* [s4cmd](https://github.com/bloomreach/s4cmd) - Super S3 command line tool, good for higher performance.
* [youtube-dl](http://rg3.github.io/youtube-dl/) - A small command-line program to download videos from YouTube.
* [you-get](http://www.soimort.org/you-get/) - A YouTube/Youku/Niconico video downloader written in Python 3.
* [coursera](https://github.com/coursera-dl/coursera) - Script for downloading Coursera.org videos and naming them.
* [WikiTeam](https://github.com/WikiTeam/wikiteam) - Tools for downloading and preserving wikis.
* [subliminal](https://github.com/Diaoul/subliminal) - Library and command line tool to search and download subtitles.

## Browser automation and emulation
* [selenium](http://selenium.googlecode.com/git/docs/api/py/api.html) - automating real browsers (Chrome, Firefox, Opera, IE)
* [Ghost.py](http://carrerasrodrigo.github.io/Ghost.py/) - wrapper of QtWebKit (requires PyQT)
* [Spynner](https://github.com/makinacorpus/spynner) - wrapper of QtWebKit QtWebKit (requires PyQT)

## Multiprocessing
* [threading](http://docs.python.org/2.7/library/threading.html) - standard python library to run threads. Effective for I/O-bound tasks. Useless for CPU-bound tasks because of python GIL.
* [multiprocessing](http://docs.python.org/2.7/library/multiprocessing.html) - standard python library to run processes.
* [gevent](http://www.gevent.org/) - A coroutine-based Python networking library that uses [greenlet](https://github.com/python-greenlet/greenlet).
* [eventlet](http://eventlet.net/) - Asynchronous framework with WSGI support.
* [Tomorrow](https://github.com/madisonmay/Tomorrow) - Magic decorator syntax for asynchronous code.

## Queue
* [celery](http://www.celeryproject.org/) - An asynchronous task queue/job queue based on distributed message passing.
* [huey](https://github.com/coleifer/huey) - Little multi-threaded task queue.
* [mrq](https://github.com/pricingassistant/mrq) - Mr. Queue - A distributed worker task queue in Python using Redis & gevent.
* [RQ](http://python-rq.org/docs/) - lightweight task queue manager based on redis
* [simpleq](https://github.com/rdegges/simpleq) - A simple, infinitely scalable, Amazon SQS based queue.


## Cloud Computing
* [picloud](http://docs.picloud.com/) - executing python-code in cloud
* [dominoup.com](http://www.dominoup.com/) - executing R, Python и matlab code in cloud

## Email

*Libraries for parsing email.*

* [flanker](https://github.com/mailgun/flanker) - A email address and Mime parsing library.
* [Talon](https://github.com/mailgun/talon) - Mailgun library to extract message quotations and signatures.

## URL Manipulation

*Libraries for parsing URLs.*

* [furl](https://github.com/gruns/furl) - A small Python library that makes manipulating URLs simple.
* [purl](https://github.com/codeinthehole/purl) - A simple, immutable URL class with a clean API for interrogation and manipulation.

## Web Content Extracting

*Libraries for extracting web contents.*

* [newspaper](https://github.com/codelucas/newspaper) - News extraction, article extraction and content curation in Python.
* [html2text](https://github.com/Alir3z4/html2text) - Convert HTML to Markdown-formatted text.
* [python-goose](https://github.com/grangier/python-goose) - HTML Content/Article Extractor.
* [lassie](https://github.com/michaelhelmick/lassie) - Web Content Retrieval for Humans.
* [micawber](https://github.com/coleifer/micawber) - A small library for extracting rich content from URLs.
* [sumy](https://github.com/miso-belica/sumy) - A module for automatic summarization of text documents and HTML pages.
* [Haul](https://github.com/vinta/Haul) - An Extensible Image Crawler.
* [python-readability](https://github.com/buriy/python-readability) - Fast Python port of arc90's readability tool.
* [opengraph](https://github.com/erikriver/opengraph) - A Python module to parse the Open Graph Protocol
* [textract](https://github.com/deanmalmgren/textract) - Extract text from any document, Word, PowerPoint, PDFs, etc.
* [sanitize](https://github.com/Alir3z4/sanitize) - Bringing sanity to world of messed-up data.

## Asynchronous

*Libraries for asynchronous networking programming.*

* [asyncio](https://docs.python.org/3/library/asyncio.html) - (Python standard library in Python 3.4+) Asynchronous I/O, event loop, coroutines and tasks.
* [Twisted](https://twistedmatrix.com/trac/) - An event-driven networking engine.
* [Tornado](http://www.tornadoweb.org/) - A Web framework and asynchronous networking library.
* [pulsar](https://github.com/quantmind/pulsar) - Event-driven concurrent framework for Python.
* [diesel](https://github.com/jamwt/diesel) - Greenlet-based event I/O Framework for Python.

## WebSocket

*Libraries for working with WebSocket.*

* [Crossbar](https://github.com/crossbario/crossbar/) - Open-source Unified Application Router (Websocket & WAMP for Python on Autobahn).
* [AutobahnPython](https://github.com/tavendo/AutobahnPython) - WebSocket & WAMP for Python on Twisted and [asyncio](https://docs.python.org/3/library/asyncio.html).
* [WebSocket-for-Python](https://github.com/Lawouach/WebSocket-for-Python) - WebSocket client and server library for Python 2 and 3 as well as PyPy.
