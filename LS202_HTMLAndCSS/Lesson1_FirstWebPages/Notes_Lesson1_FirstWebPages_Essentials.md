### HTML and CSS

---

HTML and CSS have different purposes:

- `HTML`  -  defines the **structure of the document**
- `CSS`  -  defines the **presentation of the document** 


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



#### Referencing a style for a particular HTML Document

```html
<head>
  <link rel="stylesheet" href="url_to_css_file">
</head>
```

- `href` specifies the URL to resolve the resource from
- `stylesheet` specifies the type of relationship **between the document and the resource**



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

  





#### HTML fact list - Where to put this?

- Every HTML element can only ever have a **single `id`** assigned to it, **or no `id` attribute at all**
- `block-level` elements **can wrap** `inline-level` elements **but not vice-versa**



#### HTML best practices

- Always specify the `name` attribute with an adequate value on `form` elements



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



##### The three ways to specify CSS style

- `inline CSS`  -  specify style using the `style` `attribute` `style=""` on the element to be styled

  ```css
  <p style="color: hotpink;">Walls of text!</p>
  ```

- `internal CSS`  -  specifies style using the HTML `<style></style>` element **inside the `head` element**

- `external CSS`  -  specifies style using an external stylesheet file



##### CSS Selectors

A CSS selector consists of **one or more** `qualifiers` :

```css
qualifier_1 qualifier_2 { style goes here }
```

where:

1. All but the rightmost qualifiers are referred to as `pre-qualifiers`
2. The rightmost qualifier is referred to as the `key qualifier`.


**There are three types of CSS selectors**:

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



##### CSS Reset

A technique that overrides all relevant default browser/user-agent style **before** any other style is applied.
A popular one is https://meyerweb.com/eric/tools/css/reset/



### CSS Vocabulary and definitions

---

![](res/css-syntax-outline.png)

- `selector`  -  designates which exact HTML elements to target for a particular style and associates a block of CSS code
- `property`  -  specifies which properties of the selected elements are to be applied
- `value`  -  specifies the value the `property` is to be set to for a particular



### The Document Type Definition - `DOCTYPE`

---

The `DOCTYPE` tells the browser which type of markup to parse the document as.

The `<!DOCTYPE html>` tag is:

- **not** an HTML element
- is case in-sensitive but **should always be declared uppercase to support older HTML versions**
- must be at the **top of the file**



### CSS Vocabulary

---

???


### Flashcard questions - These are just a few - Check these notes fully

---

- Show HTML and CSS code then ask what the terminology is and give adequate examples to avoid confusion what the question is about. Maybe just make a few images here

  - **Example**
    *What type of tag is the following `img` tag?* Disregard the type of HTML element.

    ```html
    <img src="some_image.png"/>
    ```

    **Answer**: an `self-closing tag`

- Which prominent web resource should not be used as reference for HTML and CSS?
  *`w3schools`*

- Understand the purpose of boilerplate HTML tags such as: `DOCTYPE`; `<html>`; `<head>`; `<body>` etc