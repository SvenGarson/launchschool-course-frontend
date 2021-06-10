#### Random HTML and CSS notes - Find a b

---

- The CSS `vertical-align` property can vertically align adjacent `inline` and `inline-block` elements in different way.

- `img` elements are **not `inline-block`** by **default** elements** but **they are `inline`** elements **by default**!

  

#### Questions and answers

---

- How does a CSS fallback work in conjunction with functionality the browser does not support?
  In the following CSS snippet we want the browser to prioritize the `rem` property but if that is not supported it should fallback to `px`:

  ```css
  p {
    font-size: 20px; font-size: 1.25rem;
  }
  ```

  Is the rule maybe as easy as, along the lines of `if the rightmost property value is supported it takes precedence and if it is not  the the property value immediately to the left is used`?

- What are the exact rules for compounding `em` font heights? Does it have to do with nesting? Maybe just learn the basics and then use `rem`s all the way.

- Do block level elements always expand vertically to fit the content?

- How do `auto margins` work to center blocks horizontally?