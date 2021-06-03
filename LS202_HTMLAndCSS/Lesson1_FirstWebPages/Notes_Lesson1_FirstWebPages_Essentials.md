 #### HTML Vocabulary and definitions

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



#### CSS Vocabulary and definitions

---

- `selector`
- `property`
- `id`
- `class`



#### HTML and CSS

---

HTML and CSS have different purposes:

- `HTML`  -  defines the **structure of the document**
- `CSS`  -  defines the **presentation of the document** 



#### HTML specifics

---

HTML documents are **plain text files** with the file extension `.html`.

A conformant HTML document must contain the following boilerplate **definitions and elements** so that the browser can interpret the document correctly.



**HTML fact list:**

- Every HTML element can only ever have a **single `id`** assigned to it, **or no `id` attribute at all** 



**HTML best practices**:

- Always specify the `name` attribute with an adequate value on `form` elements



#### CSS Specifics

---


**The three ways to specify CSS style**:

- `inline CSS`  -  specify style using the `style` `attribute` `style=""` on the element to be styled

  ```css
  <p style="color: hotpink;">Walls of text!</p>
  ```

- `internal CSS`  -  specifies style using the HTML `<style></style>` element **inside the `head` element**

- `external CSS`  -  specifies style using an external stylesheet file



**The three types of CSS selectors**:

- `type` selector (also referred to as `tag` selector)  -  based on the HTML tag type  
- `class` selector  -  based on the classes listed in the HTML `class` attribute value
- `id` selector  -  based on the id's listed in the HTML `id` attribute value



#### The Document Type Definition - `DOCTYPE`

---

The `DOCTYPE` tells the browser which type of markup to parse the document as.

The `<!DOCTYPE html>` tag is:

- **not** an HTML element
- is case in-sensitive but **should always be declared uppercase to support older HTML versions**
- must be at the **top of the file**



#### CSS Vocabulary

---



#### Flashcard questions - These are just a few - Check these notes fully

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