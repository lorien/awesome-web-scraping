#!/usr/bin/env python3
from mistletoe import Document


def main(**kwargs):
    with open("python.md") as inp:
        data = inp.read()

    doc = Document(data)
    print(doc)


if __name__ == "__main__":
    main()
