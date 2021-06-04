### HTML and CSS

---

HTML and CSS have different purposes:

- `HTML`  -  **H**yper **T**ext **M**arkup **L**anguage  -  defines the **structure of the document**
- `CSS`  -  **C**ascading **S**tyle **S**heets  -  defines the **presentation of the document** 


### HTML specifics

---

HTML documents are **plain text files** with the file extension `.html`.

A conformant HTML document must contain the following boilerplate **definitions and elements** so that the browser can interpret the document correctly:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Page title</title>
  </head>
  <body>
    <!-- Body content here -->
  </body>
</html> 
```



### The Document Type Definition - `DOCTYPE`

---

The `DOCTYPE` tells the browser which type of markup to parse the document as.

The `<!DOCTYPE html>` tag is:

- **not** an HTML element
- is case in-sensitive but **should always be declared uppercase to support older HTML versions**
- must be at the **top of the file**



#### Referencing a style for a particular HTML Document

```html
<head>
  <link rel="stylesheet" href="url_to_css_file">
</head>
```

- `href` specifies the URL to resolve the resource from
- `stylesheet` specifies the type of relationship **between the document and the resource**



#### HTML Whitespace collapsing

In this context, whitespace is a string of characters that is composed of only:

- `space`s
- `line break`s
- `tab`s


HTML takes these whitespace-strings collapsed/replaces them with a **single space** in two ways:

- whitespace between words is replaces with a single space
  `<p>Hello    ,    Words</p>` becomes `Hello , Word`
- whitespace between start and end tags and the content are completely ignored
  `<p>     Meep     </p>` becomes `Meep`



**Note**: There are many more rules to this along with the type of elements used.



#### HTML Semantics

HTML is semantic when the proper HTML elements are used for their intended purpose/content.
These semantics enable other parties such as browsers, search machines, screen-readers and developers to interpret the content and it's intention correctly.

Only the HTML elements `div` and `span` **do not have semantics associated with them** but rather exist for **styling purposes**.

As a help use: http://html5doctor.com/downloads/h5d-sectioning-flowchart.pdf



#### Non-semantic HTML elements and their use-cases
The following two HTML elements are **solely used for styling** as **generic containers**.

- `div`  -  `block` element typically used to contain **large groupings of content** for layout and design
- `span`  -  `inline` element typically used to contain **small groupings of content** for layout and design



#### Text Based HTML Elements

- **Heading**  -  `h1` to `h6`
  **Semantics**: Used to break up page content into a hierarchy, **not to scale or bold text**.
                        Heading sizes should always be used in the number order and not skipped.
- **Paragraphs**
  **Semantics**: Used to add information to a page.
- **Bold Text**  - There are different semantical ways to bold text.
  - `strong`
    **Semantics**: Give strong importance to, i.e. emphasize a word.
    **Do not use with the purpose of bolding content.**
  - `b`
    **Semantics**: `stylistically offset` text where
    - `offset`  -  refers to make text stand out from the rest
    - `stylistically`  -  purely for stylistic reason - not because it has any importance over any other text
- **Italicize Text**  -  There are different semantical ways to emphasize text.
  - `em`
    **Semantics**: Give stressed emphasis to content
  - `i`
    **Semantics**: Convey in other tone/voice



#### Structural HTML Elements  -  [Documentation](https://dev.opera.com/articles/new-structural-elements-in-html5/)

These elements give the page structure more semantic meaning and are typically `block` level elements.

![](res/building-structure.png)


**Here the most important ones to know and apply semantically:**

- **Header**  -  `header`
  **Semantics:** Identifies the structural top of the page that may contain navigation, headings and introduction
- **Navigation**  -  `nav`
  **Semantics:**  Identifies a major section of **primary** navigational links.
  **Do not use for one-off links and links that do not provide navigation**.
- **Article**  -  `article`
  **Semantics:**  Identifies a chunk of **independent and self-contained content**.
  The content should make sense on it's own as stand-alone without any other context.
- **Section**  -  `section`
  **Semantics:** Identifies a **thematically similar group of content** that **generally includes a heading**,
  In other words, show that the content in the section is related and provide hierachy.
  Sections can be nested with the same semantics.
- **Aside**  -  `aside`
  **Semantics:** Identifies content that is **tangentially related**  to the content **surrounding it**.
  An aside could contain pointers, additional information, brief explanations about a tangentially related article.
- **Footer**  -  `footer`
  **Semantics:** Identifies the **bottom and closing portion** of a document where the **content should be relative to the content of the container that contains the footer, i.e. it's surrounding content**.
  Footers are typically the last elements inside a parent.
- **Small**  -  `small`
  **Semantics:** Identifies side comments and small-print, generally rendered smaller than all the other content.



#### Other HTML elements

**The `head` element**

The `head` elements contains all sorts of **machine-readable meta-information about the document** like for example scripts, title and stylesheets.


**The anchor element  - `a`**
The `a` element provides a hyperlink to a web resource such as web pages; mail addresses i.e. anything that a URL can represent.

**Note**: The `a` element is an `inline` element that **can, as an exception, contain `block`** elements, or **any display formatting type for that matter**. This means that **any content can be a clickable hyperlink**!



#### Types of hyperlinks

- **Absolute anchors**  -  Different URLs are interpreted differently

  - **Full URL**  -  Could also be referred to as `Explicit Domain`
    The specified URL includes a sub-domain; domain and top-level domain but there are many variations. This hyperlink can point to the same or other origins because it is explicitly defined.

    Example: `https://www.youtube.com`

  - **Implicit Domain**  -  By **starting the URL with a single `/`** and **not specifying the URL domain**, the domain is implicit and is in this case interpreted the **same origin/domain that served the document** so that:

    - if the domain that served the page is `www.meep.com`
    - and the implicit domain URL is `/folder/boxes`
    - the URL is interpreted as `implicit domain + URL = www.meep.com/folder/boxes` 

- **Relative anchors**  -  **Have no leading `/`**
  The specified URL is treated as relative to the currently loaded URL which means:

  - if the served page is `www.meep.com/shirts`
  - and the relative URL is `large`
  - the URL is interpreted as `www.meep.com/shirts + relative URL = www.meep.com/shirts/large`


  **Note**: The relative URL can also go back up the directory structure using the relative URL `../`

- **Page anchors**  -  Also referred to as `on-page link`.
  This type of hyperlink is associated to an HTML element on the served page through an element `id` attribute. To create one:

  1. Define an `id` attribute on the element the browser should scroll to for a particular page anchor with a specific value
  2. Create a hyperlink that points to the `id` `value` specified on the HTML element the browser should scroll to.

  ```html
  <!-- Index links to differents parts on the current page -->
  <!-- Note: The hyperlinks are made up of '#' + HTML element id -->
  <a href="#ch_1">Chapter 1</a>
  <a href="#ch_2">Chapter 2</a>
  <a href="#ch_3">Chapter 3</a>
  
  <!-- The content the page-links point to -->
  <!-- Note: These content element id's are used in the page links -->
  <p id="ch_1">I contain chapter 1</p>
  <p id="ch_2">I contain chapter 2</p>
  <p id="ch_3">I contain chapter 3</p>
  ```




#### HTML Entities

An HTML entity is text inside an HTML document that starts with an `&` and ends with an `;`.

These entities are used to display all sorts of characters based on their hexadecimal code in the format 
`&copy;` which renders as `©` in the browser.

**The typical use-cases are:**

- when the character is hard to type using a keyboard, the HTML entity just makes this easier and more consistent

- show reserved HTML character that would otherwise be interpreted as part of the HTML markup and
  cause issues.

  Some reserved HTML characters which have to be expressed as entities to be rendered are:

  - `&`  -  interpreted as the start of an HTML entity
    **Entity notation**: `&amp;`
  - `<` and `>`  -  interpreted as the beginning/ending of an HTML tag respectively.
    **Entity notation**: `&lt;` and `&gt;` respectively
  - `"`  -  interpreted as the beginning/end of an HTML element attribute value
    **Entity notation**: `&quot;`



**Note**: A `&` followed by non-whitespace characters and `;` may be interpreted as an HTML entity!

#### HTML random fact list

- Every HTML element can only ever have a **single `id`** assigned to it, **or no `id` attribute at all**.
  While HTML and browsers typically cope fine with multiple uses of a and `id`, the problem is that when we want to use JavaScript to select and element, we **cannot be sure what is returned because multiple elements of that id exist** .

  So just don't use id's more than once per page.
- `block-level` elements **can wrap** `inline-level` elements **but not vice-versa**.
  The `a` element is a notable exception to this rules as the `a`  element can wrap any sort and group of elements to act as link.
- Some facts about HTML elements
  - there are global HTML attributes that can be specified on any HTML element
  - most HTML attributes only apply to specific types of elements



#### HTML style guide and best practices

- **Generalities**

  - Write standards-compliant HTML markup
  - Strive for highly semantic markup
  - Always specify the `name` attribute with an adequate value on `form` elements
  - Like all programming, get working, refactor and document if needed
  - classes and id's should not be named after the style of an element, rather choose semantic names that **provide meaning**. `staff` would be a more semantic class name than `blue-border` for instance.
  - always specify a very detailed `alt` description for images
  - do not specify a value for boolean attributes
  - always use a safe fall-back font

- **HTML Syntax**

  - element names, attributes and values should be lowercase

  - indent properly and choose one of the following styles and stay consistent:

    - two spaces
    - four spaces or a single tab

  - strictly use double quotes

  - trailing slash on self-closing elements is great for visual cue that the element does not contain content but may be a problem in certain situations.
    **Use them** for now.

  - maximum of two HTML elements per line

  - do not indent the html tag

    



### HTML Vocabulary and definitions

---

![](res/html-syntax-outline.png)

- `element`  -  designator that defines the structure and content of a page.
- `element tag`  or `element name`  or `element type`  -  the type of HTML element such as `p` or `div`
- `tag`  -  the `element name` surrounded by `<>`. Both opening and closing tags are referred to as tags.
- `self-closing tag`  -  `tag` that does not consist of a closing tag such as `<img>` or `<img />`
- `document type definition`
- `attribute`  -  key-value pairs that provide additional information about an element.
  These are specified in the element's **opening tag** like so `<a href="some_url.com">`
- `element content`  -  the `content` that is situated **between the elements opening and closing tags** such as `<a>The Content</a>`



### CSS Specifics

---

#### The three ways to specify CSS style

- `inline CSS`  -  specify style using the `style` `attribute` `style=""` on the element to be styled

  ```css
  <p style="color: hotpink;">Walls of text!</p>
  ```

- `internal CSS`  -  specifies style using the HTML `<style></style>` element **inside the `head` element**

- `external CSS`  -  specifies style using an external stylesheet file




#### There are three types of CSS selectors:

- `type` selector (also referred to as `tag` selector)  -  based on the HTML tag type  
  This is the **most general selector type**.

  ```css
  /* select all elements of type a */
  a { color: yellow; }
  ```

- `class` selector  -  based on the classes listed in the HTML `class` attribute value
  This one is **more specific than `type` selectors and less specific than `id` selectors**.

  ```html
  <p class="hot">I am a hot pepper!</p>
  ```

  ```css
  /* select HTML elements with the class attribute value 'hot' */
  .hot { color: red; }
  ```

- `id` selector  -  based on the id's listed in the HTML `id` attribute value
  This one is the **most precise** selector, **more specific than any `type` and `class` selector**.

  ```html
  <p id="woofy"></p>
  ```

  ```css
  #woffy { /* some style */ }
  ```



#### A CSS selector consists of **one or more** `qualifiers` :

```css
qualifier_1 qualifier_2 { style goes here }
```

where:

1. All but the rightmost qualifiers are referred to as `pre-qualifiers`
2. The rightmost qualifier is referred to as the `key qualifier`.

Selectors that use **two or more qualifiers** are referred to as `combined selectors`, which should be read from **left to right** and the `key selector` defines **which exact element the style is to be applied to**.



#### CSS Combined Selector Rules through examples

- ```css
  .hotdog p { /* some style */ }
  ```

  **Key-selector i.e. selected element**: `paragraph`
  **Pre-qualifiers:** Selected element must be nested inside an element of class `hotdog`

- ```css
  p.hotdog { /* some style */ }
  ```

  **Key-selector i.e. selected element**: `hotdog class`
  **Pre-qualifiers:** Selected element must be of type `paragraph`

- ```css
  .hotdog p.mustard { /* some style */ }
  ```

  **Key-selector i.e. selected element**: `mustard class`
  **Pre-qualifiers:** Selected element must be of class `mustard` type `paragraph` and be nested inside an element of class `hotdog`



#### CSS Reset

A technique that overrides all relevant default browser/user-agent style **before** any other style is applied.
A popular one is https://meyerweb.com/eric/tools/css/reset/



#### CSS Dimension/Sizing types

CSS provides both `absolute` and `relative` units to size document content:




#### The CSS Cascade

---

- **When no styling conflicts occur** i.e. no element as more than a single style assigned to it, the stylesheet is interpreted and applied from **top to bottom** and **the latest/bottomost property value is retained**.
- When styling conflicts **do** occur, then **the style with the highest specificity is retained** 



#### CSS Specificity

Specificity is used by browsers to determine which property to apply in case styling conflicts occur.

**Different selector types have different specificity weights:**
![](./res/specificity.png)

**When an element is selected by different CSS selectors, single or combined, the selector with the highest specificity weight has precedence over all the others and thus that styling is used.**



#### Calculating specificity from used selectors

1. Initialize the specificity table for all selector types

   ```text
   | inline |   id   |  class |  type |
   +--------+--------+--------+-------+
   | 0      | 0      | 0      | 0     |
   ```

2. Add 1 to each column for every particular type of selector/qualifier, for example:

   ```css
   /* CSS */
   
   /* select paragraph elements of class bob that are nested in an element of id meep */
   #meep p.bob { /* style */ }
   ```

   - `+1` for `meep` id selector
   - `+1` for `bob` class selector
   - `+1` for `p` type selector

   ```text
   | inline |   id   |  class |  type |
   +--------+--------+--------+-------+
   | 0      | 1      | 1      | 1     |
   ```

3. Sum the specificity scores using powers of ten for the actual specificity score to compare

   ```text
   | inline |   id   |  class |  type |
   +--------+--------+--------+-------+
   | 10^3   | 10^2   | 10^1   | 10^0  |
   
   Becomes:
   
   | 1000   | 100    | 10     | 1     |
   
   The specificity sum is:
   
   <=> (1000 * 0) + (100 * 1) + (10 * 1 + (1 * 1)
   <=> 0 + 100 + 10 + 1
   <=> 111
   ```



**The above example is accurate, but a few selectors are missing**

Adding to the above rules, the selectors going from least to most specifics in a give point value category:

1. `type` + `pseudo-elements`
2. `class` + `attribute selectors` + `pseudo-classes`
3. `id` + nothing else
4. `inline` + nothing else


The following selectors have **no effect** on specificity:

- universal  selector `*`
- combinators such as `+`; `>`; `~`; `_` and `||`



#### When things don't work as intended in CSS

1. Check the CSS Cascade for errors
2. Check the CSS Specificity
3. Check CSS inheritance rules



#### CSS style guide and best practices

- **Generalities**

  - DRY by making CSS classes/id's modular so they can be mixed and matched

  - Make selectors only as specific as needed. **The more specific** selectors get, **the more likely** they are going to **break at some point** in terms of expected results **because new styles do not apply due to lack of specificity**.

    In other words, **start with the lowest specificity** and **increase specificity as need over time**.

    Keep the list of **total** qualifiers to a maximum of **three**

- **CSS Syntax**

  - one selector, single or combined, per line
  - single line per property-value pair **but put fall-back declarations on the same line**
  - class and id names should be lowercase with hyphens as word separators `.lean-and-mean`
  - proper indentation
  - use property shorthand syntax when appropriate
  - use brief hexadecimal color values in lowercase `#ddd` when adequate over `#DDDDDD`
  - zero constants should not be followed by a unit
  - order properties alphabetically
  - font-family values that contain whitespace should be quoted.
    `font-family: Trebuchet MS;` becomes `font-family: "Trebuchet MS";`



### CSS Vocabulary and definitions

---

![](res/css-syntax-outline.png)

- `selector`  -  designates which exact HTML elements to target for a particular style and associates a block of CSS code
- `property`  -  specifies which properties of the selected elements are to be applied
- `value`  -  specifies the value the `property` is to be set to for a particular
