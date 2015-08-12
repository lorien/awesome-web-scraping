.PHONY: html

html:
	python -m markdown README.md > html/README.html
	python -m markdown python.md > html/python.html
