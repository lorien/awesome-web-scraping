# Python Web Scraping Libraries

## Network Request
* [urllib](https://docs.python.org/3.4/library/urllib.html?highlight=urllib#module-urllib) - standard python network library
* [requests](http://www.python-requests.org/) - network library
* [grab](http://github.com/lorien/grab) - network library (pycurl based)
* [pycurl](http://pycurl.sourceforge.net/) - network library (binding to [libcurl](http://curl.haxx.se/libcurl/))
* [urllib3](https://github.com/shazow/urllib3) - network library

## Web-Scraping Frameworks
* [grab](http://github.com/lorien/grab) - web-scraping framework (pycurl/multicurl based)
* [scrapy](http://scrapy.org/) - web-scraping framework (twisted based)

## HTML/XML Parsing
* [lxml](http://lxml.de) - effective HTML/XML processing library. Supports XPATH.
* [cssselect](https://pythonhosted.org/cssselect) - quering DOM tree with CSS expressions
* [pyquery](http://pythonhosted.org//pyquery/) - парсинг XML/HTML с помощью jquery-запросов (требует lxml)
* [BeautifulSoup](http://www.crummy.com/software/BeautifulSoup/bs4/doc/) - глючная тормозная библиотека для парсинга XML/HTML, не поддерживающая xpath запросы, плюсом является то, что она написана на чистом питоне.
* [WHATWG](http://html5lib.readthedocs.org/en/latest/]html5lib[/url] - парсинг и сериализация HTML по спецификации [url=http://www.whatwg.org/) (на неё ориентируются современные веб-браузеры). Возможно выбрать для построения DOM-дерева, как встроенные средства питона, так и библиотеки lxml или BeautifulSoup.
* [feedparser](http://pythonhosted.org/feedparser/) - парсинг RSS и ATOM фидов.
* [Bleach](http://bleach.readthedocs.org/en/latest/) - библиотека для очистки HTML (требует html5lib)

## Эмуляторы браузеров
* [selenium](http://selenium.googlecode.com/git/docs/api/py/api.html) - средство для тестирования веб-интерфейсов с помощью реальных браузеров: google chrome, opera, firefox, IE. Можно и сайты через него парсить. Есть некоторые неудобства, связанные с идеологией инструмента - он позволяет эмулировать внешние действия пользователя. Например, задать свой собственный Referer - это уже проблема. Не требует дополнительных зависимостей.
* [Ghost.py](http://carrerasrodrigo.github.io/Ghost.py/) - обёртка над QtWebKit (требует PyQt или PySide)
* [Spynner](https://github.com/makinacorpus/spynner) - ещё одна обёртка над QtWebKit, более ничего не знаю про эту либу :)

## Параллельная многозадачность
* [threading](http://docs.python.org/2.7/library/threading.html) - встроенный в python модуль для реализации многозадачности с помощью тредов (объекты языка, выполняющиеся в одном процессе). Минусы подхода в том, что вы не можете загрузить вычислениями более одного ядра.
* [multiprocessing](http://docs.python.org/2.7/library/multiprocessing.html) - встроенный в python модуль для реализации многозадачности с помощью процессов
* [celery](http://celery.readthedocs.org/en/latest/index.html) - навороченная реализация очереди задач, поддерживающая различные бэкенды для хранения этой самой очереди задач.
* [RQ](http://python-rq.org/docs/) - легковесная очередь задач, использующая redis

## Облачные вычислениях
* [picloud](http://docs.picloud.com/) - выполнение python-кода в облаке
* [dominoup.com](http://www.dominoup.com/) - выполнение R, Python и matlab кода в облаке
