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

    ![](res/chrome_box_model.png)
    These are the properties associated with each element' box.

    - **`width`** and **`height`**
      Box properties which define the amount of horizontal and vertical space is needed for the box content area.
      **This may or may not  include padding and borders.**
    - **`padding`**
      Area that surrounds the box content are and separates the content area from the border.
    - **`border`**
      Boundary that surrounds the `padding`.
    - **`margin`**
      Transparent area that surrounds the border which provides separation between elements.

  - **`Visual display/formatting model`**  and the CSS **`display`** property  -  (*Do not memorize which elements are what display model*)
    Defines how exactly the browser renderer lays out neighbouring elements relative to each other both horizontally and vertically.

    - **`block`**

      Occupies all horizontal space available by default and leaves nothing left and right of the block but if the block width is less than the available space the rest of the space is left empty.

      Uses all box properties: width, height, padding, border and margin to determine the element size.

    - **`inline`**
      Same behaviour as `block` for box properties: left/right padding and margin.
      When nested inside a `block` element only the left and right `inline` element factors affect the flow around while the top and bottom do not.

      Ignores:

      - the `width` and `height` properties unless the element is an `img`.
      - top and bottom margins

      Does **not** ignore:

      - borders but may have weird behaviour
      - top and bottom paddings

    - **`inline-block`**

      Act like `block` elements **but do not take up all the horizontal space when the width property is less than the available width** but then instead flow like `inline` elements. This means that multiple `inline block` elements can flow in the same and onto other lines side-by-side with other `inline` and `inline-block` elements.
      

      **Differs from `inline` in that it considers the** `width` and `height` properties.
      The box properties `padding`, `margin` and `border` work like they do in a `block` level element.


      Browser can vertically align **adjacent** `inline` and/or`inline-block` elements in different ways using the `vertical-align` CSS property.

    - How and when can you change and element's display model?

    - **How does the visual display model interact with margins, borders and padding?**

    - **Other considerations**

      - `height` and `width` values **never**  include the `margin`
      - any element can be converted to `block` or `inline` element using the `display` CSS property:
        - `display: block;` or `display: inline;m`
      - always consider the default browser interpretation of the display type of an element and explicitly set it on startup for robust results across browsers
      - `block` and `inline-block` elements cannot be nested inside `inline` elements
      - more interesting and modern visual display models are: `flex` and `grid`

  - Box sizing model

    - content-box
    - border-box
    - How and when can you change the box sizing model for an element

- Dimensions

  - absolute units
  - relative units
  - How do `auto margins` work to center blocks horizontally?

- **Containers**
  A term typically used for block elements that group other elements by nesting them.

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