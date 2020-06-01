# CSS Selectors

* In CSS, selector are used to target the HTML elements on the web page
* CSS selectors allow for fine-grained precision when selecting elements to style

* CSS selector is a pattern of elements that tell the browser which HTML
elements should be selected to have the CSS property values inside the rule
applied to them.

```
h1 {
  color: blue;
  background-color: yellow;
}
```

* When writing HTML source code, you can define attributes on your HTML
elements. Then, once the browser parses your code, a corresponding DOM node will
be created. This node is an object, and therefore it has properties.


## Selector Lists

* If you have more than one thing which uses the same CSS then the individual
selectors can be combined into a selector list so that the rule is applied to
all of the individual selectors.

```
h1 {
  color: blue;
}

.special {
  color: blue;
}
```
* Or we can combine these into a selector list, by adding a comma between them

```
h1, .special {
  color: blue;
}

```

### Types of Selectors

* There are a few different groupings of selectors.

#### Type, class and ID selectors

* This group includes selectors that target an HTML element such as an `h1 {}`
* It also includes selectors which target a class `.box {}`
* or, an ID `#unique {}`

#### Attribute Selectors

* This group of selectors give you a way to select elements based on the
presence of a certain attribute on an element `a[title] {}`

* Or even make a selection based on the presence of an attribute with a
particular value `a[href="https://example.com"] {}`

#### Pseudo-classes and pseudo-elements

* This group of selectors includes pseudo-classes, which style certain states of
an element. 

* The `:hover` pseudo-class for example selects an element only when it is being
hovered over by the mouse pointer `:hover {}`.

* It also includes pseudo-elements, which select a certain part of an element
rather than the element itself. For example `::first-line` always selects the
first line of text inside an element `<p> e.g. p::first-line {}` 

#### Combinators

* The final group of selectors combine other selectors in order to target
elements within our documents. The following for example selects paragraph that
are direct children of `<article` elements using the child combinator `>`.
`article > p {}`

### Reference table of selectors

* https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors
