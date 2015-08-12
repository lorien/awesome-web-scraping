# Python Web Scraping Libraries

## Network Request
* [urllib](https://docs.python.org/3.4/library/urllib.html?highlight=urllib#module-urllib) - standard python network library
* [requests](http://www.python-requests.org/) - network library
* [grab](http://docs.grablib.org/en/latest/) - network library (pycurl based)
* [pycurl](http://pycurl.sourceforge.net/) - network library (binding to [libcurl](http://curl.haxx.se/libcurl/))
* [urllib3](https://github.com/shazow/urllib3) - network library

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
