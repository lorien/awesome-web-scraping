# Python Web Scraping Libraries

## Network Request
* [urllib](https://docs.python.org/3.4/library/urllib.html?highlight=urllib#module-urllib) - standard python network library
* [requests](http://www.python-requests.org/) - network library
* [grab](http://docs.grablib.org/en/latest/) - network library (pycurl based)
* [pycurl](http://pycurl.sourceforge.net/) - network library (binding to [libcurl](http://curl.haxx.se/libcurl/))
* [urllib3](https://github.com/shazow/urllib3) - network library
* [httplib2](https://github.com/jcgregorio/httplib2) - network library

## Web-Scraping Frameworks
* [grab](http://docs.grablib.org/en/latest/#grab-spider-user-manual) - web-scraping framework (pycurl/multicurl based)
* [scrapy](http://scrapy.org/) - web-scraping framework (twisted based). Does not support Python3.

## HTML/XML Parsing
* [lxml](http://lxml.de) - effective HTML/XML processing library. Supports XPATH. Written in C.
* [cssselect](https://pythonhosted.org/cssselect) - working with DOM tree with CSS selectors
* [pyquery](http://pythonhosted.org//pyquery/) - working with DOM tree with jQuery-like selectors
* [BeautifulSoup](http://www.crummy.com/software/BeautifulSoup/bs4/doc/) - slow HTML/XMl processing library, written in pure python
* [html5lib](http://html5lib.readthedocs.org/en/latest/) - building DOM of HTML/XML парсинг according to [WHATWG spec](url=http://www.whatwg.org/). That spec is used in all modern browsers.
* [feedparser](http://pythonhosted.org/feedparser/) - parsing of RSS/ATOM feeds.
* [Bleach](http://bleach.readthedocs.org/en/latest/) - cleaning of HTML (requires html5lib)

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

## Browser automation and emulation
* [selenium](http://selenium.googlecode.com/git/docs/api/py/api.html) - automating real browsers (Chrome, Firefox, Opera, IE)
* [Ghost.py](http://carrerasrodrigo.github.io/Ghost.py/) - wrapper of QtWebKit (requires PyQT)
* [Spynner](https://github.com/makinacorpus/spynner) - wrapper of QtWebKit QtWebKit (requires PyQT)

## Multiprocessing
* [threading](http://docs.python.org/2.7/library/threading.html) - standard python library to run threads. Effective for I/O-bound tasks. Useless for CPU-bound tasks because of python GIL.
* [multiprocessing](http://docs.python.org/2.7/library/multiprocessing.html) - standard python library to run processes.
* [celery](http://celery.readthedocs.org/en/latest/index.html) - task queue manager
* [RQ](http://python-rq.org/docs/) - lightweight task queue manager based on redis

## Cloud Computing
* [picloud](http://docs.picloud.com/) - executing python-code in cloud
* [dominoup.com](http://www.dominoup.com/) - executing R, Python и matlab code in cloud
