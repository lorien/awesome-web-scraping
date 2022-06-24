#!/usr/bin/env python3
from pprint import pprint
import json
import re

from jinja2 import Template
from mistletoe import Document
from mistletoe.ast_renderer import get_ast

HTML_RESULT = """
<h1>{{ result.name }}</h1>
<p>{{ result.comment }}</p>
<h2>Contents</h2>
<ul>
    {% for item in result.toc %}
    <li><a href="#{{ item.target }}">{{ item.text }}</a></li>
    {% endfor %}
</ul>
{% for cat in result.cats %}
<h2><a name="{{ cat.tag }}">{{ cat.name }}</h2>
<ul>
{% for cat_item in cat["items"] %}
<li>
    <a href="{{ cat_item.link_url }}">{{ cat_item.link_text }}</a>
    <span>&ndash;</span>
    <span>{{ cat_item.comment }}</span>
</li>
{% endfor %}
</ul>
{% for subcat in cat["subcats"] %}
    <h3><a name="{{ subcat.tag }}">{{ subcat.name }}</h3>
    <ul>
    {% for subcat_item in subcat["items"] %}
    <li>
        <a href="{{ subcat_item.link_url }}">{{ subcat_item.link_text }}</a>
        <span>&ndash;</span>
        <span>{{ subcat_item.comment }}</span>
    </li>
    {% endfor %}
    </ul>
{% endfor %}
{% endfor %}
"""


def test_node(node, cond):
    return all(node[key] == val for key, val in cond.items())


def pull_nodes_until(items, cond):
    ret = [items.pop(0)]
    while items and not test_node(items[0], cond):
        ret.append(items.pop(0))
    return ret


def pull_nodes(items, cond):
    ret = []
    while items and test_node(items[0], cond):
        ret.append(items.pop(0))
    return ret


def get_nodes_text(nodes):
    ret = []
    for node in nodes:
        for child in node["children"]:
            if child["type"] == "RawText":
                ret.append(child["content"])
    return " ".join(ret) if ret else None


def process_head(result, items):
    heading = pull_nodes(items, {"type": "Heading", "level": 1})
    comment = pull_nodes(items, {"type": "Paragraph"})
    result["name"] = get_nodes_text(heading)
    result["comment"] = get_nodes_text(comment)


def process_toc_node(node):
    p_node = node["children"][0]  # paragraph
    link_node = p_node["children"][0]  # link
    return {
        "target": link_node["target"].lstrip("#"),
        "text": get_nodes_text([link_node]),
    }


def process_toc(result, items):
    heading = pull_nodes(items, {"type": "Heading", "level": 2})
    lst = pull_nodes(items, {"type": "List"})
    result["toc"] = []
    for node in lst[0]["children"]:
        result["toc"].append(process_toc_node(node))


class InvalidDocument(Exception):
    def __init__(self, msg, items):
        verbose_msg = "{} Tree fragment: {}".format(
            msg, json.dumps(items)[:300] if items else "NA"
        )
        super().__init__(verbose_msg)
        self.brief_msg = msg
        self.items = items


def process_cat_item_node(node):
    p_node = node["children"][0]  # paragraph
    link_node = p_node["children"][0]  # link
    if len(p_node["children"]) > 1:
        comment = p_node["children"][1]["content"].lstrip(" -")
    else:
        comment = None
    pprint(link_node)
    return {
        "link_url": link_node["target"],
        "link_text": get_nodes_text([link_node]),
        "comment": comment,
    }


def build_tag(val):
    val = val.lower()
    val = re.sub(r"\s+", "-", val)
    val = re.sub(r"[^-a-zA-Z0-9]", "", val)
    return val


def process_cat(result, items):
    heading = pull_nodes(items, {"type": "Heading", "level": 2})
    comment = pull_nodes(items, {"type": "Paragraph"})
    cat_name = get_nodes_text(heading)
    cat = {
        "name": cat_name,
        "tag": build_tag(cat_name),
        "comment": get_nodes_text(comment),
        "items": [],
        "subcats": [],
    }
    while items:
        cat_items_lst = pull_nodes(items, {"type": "List"})
        if not cat_items_lst:
            # it means heading of level 3 goes here
            subheading = pull_nodes(items, {"type": "Heading", "level": 3})
            if not subheading:
                raise InvalidDocument("Could not pull neither h2 or h3", items)
            else:
                subcomment = pull_nodes(items, {"type": "Paragraph"})
                subcat_items_lst = pull_nodes(items, {"type": "List"})
                if not subcat_items_lst:
                    raise InvalidDocument("Could not pull list for h3", items)
                subcat_name = get_nodes_text(subheading)
                subcat = {
                    "name": subcat_name,
                    "tag": build_tag(subcat_name),
                    "comment": get_nodes_text(subcomment),
                    "items": [],
                    "subcats": [],
                }
                for node in subcat_items_lst[0]["children"]:
                    subcat["items"].append(process_cat_item_node(node))
                cat["subcats"].append(subcat)
        else:
            for node in cat_items_lst[0]["children"]:
                cat["items"].append(process_cat_item_node(node))
    result["cats"].append(cat)


def main(**kwargs):
    with open("python.md") as inp:
        data = inp.read()

    result = {"cats": []}
    md_tree = get_ast(Document(data))
    with open("tree.json", "w") as out:
        out.write(json.dumps(md_tree))
    items = md_tree["children"]
    process_head(result, pull_nodes_until(items, {"type": "Heading", "level": 2}))
    process_toc(result, pull_nodes_until(items, {"type": "Heading", "level": 2}))
    while items:
        process_cat(result, pull_nodes_until(items, {"type": "Heading", "level": 2}))
    pprint(result["cats"])
    with open("python.html", "w") as out:
        out.write(Template(HTML_RESULT).render(result=result))


if __name__ == "__main__":
    main()
