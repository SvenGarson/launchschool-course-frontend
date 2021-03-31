#### Testing an validating web sites when during development

---

1. Change the code
2. Test results in development browser
3. Validate HTML
4. Validate CSS
5. Test results in other browsers
   Cross browser issues are easier to fix when handled early in development.
6. Repeat
   


#### Box model related vocabulary and questions

---

- **`Box model`**
  Describes how the browser renderer determines the box size for any given element.
  - **`Box properties`**
    These are the properties associated with each element' box.
    - **`width`** and **`height`**
    - padding and margins
    - borders
    - How does the visual display model interact with margins, borders and padding?
  - Visual display models (Do not memorize which elements are what display model)
    - block
    - inline
    - **`inline-block`**
      Laid out side by side up to the page width and when one inline-block does not on the same line into the page width anymore, the renderer starts a new line using the same approach.
    - How and when can you change and element's display model?
  - Box sizing model
    - content-box
    - border-box
    - How and when can you change the box sizing model for an element
- Dimensions
  - absolute units
  - relative units
  - How do `auto margins` work to center blocks horizontally?
- Container
- Why do we need to consider `reference pixels` and `physical pixels` in the wild?
  Why is this important?
- CSS reference pixels



#### Everything is a box - Rendering a page

---

- Every element requires  box-shaped segment of a page
- Every character of text content also needs a box sized portion of a page
- Browser renderer computes the size of these boxes based on browser defaults and provided stylesheet





#### Questions and answers

---

