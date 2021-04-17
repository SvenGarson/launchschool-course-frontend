#### Procedure when writing HTML and CSS code

---

1. Change code
2. Test result in development browser
3. Validate HTML and CSS on official sites
4. Test result in other supported browsers



#### Box model

---

Everything in CSS has a box around it.

**The box model properties are:**

![](res/chrome_box_model.png)

- `width` and `height`  - Defines the amount of horizontal and vertical space the box takes up
- `padding`  -  Defines the amount of spacing between the content-box and the border
- `border`  -  Boundary that surrounds the padding
- `margin`  -  Transparent are that surrounds the border and provides separation between elements.
  The margin is not counted towards the box itself but rather affects other content/elements that interacts with the margin boundings.



#### Visual formatting model

---

**Note**: The following discusses **outer box display types** and setting it is achieved using the CSS
`display` property.

In CSS we broadly work with two types of boxes which affects how the elements behave in terms of the flow of the page and other elements both horizontally and vertically. These two types and their principal differences are:

- Defined as outer display  type `block`
  - Breaks onto a new line
  - Takes up 100% of the available, horizontal parent space on the line it is located and leaves the space empty when the content is smaller than the 'line'.
  - The `width` and `height` box model properties are respected
  - Both horizontal and vertical padding; border and margin affect surrounding elements
- Defined as outer display type `inline`
  - Does not break onto a new line
  - The `width` and `height` box model properties are **not** respected
  - Horizontal padding; border and  margin work like in the `block` i.e. **do affect surrounding elements**
  - Vertical padding; border and margin are sized and positioned accordingly but **do not affect surrounding elements** i.e. they render but do not push other elements away.



#### Inner and outer display type

---

An element's outer display type defines whether the CSS box is of type block or inline. 
An element's inner CSS box display type defined how elements that are nested inside that box are laid out.

There are different types of inner display types (the following is just an excerpt, there are more):

- **by default**, i.e. when no other inner display type is defined, the nested boxes are laid out in **normal flow** which is just using `block` and `inline-block` like normal
- `flex` sets the outer display type to `block` and the inner display type to `flex` and any direct children of this element are then laid out according to the `flex` [spec](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox).
- `grid` ...


**Note:** Think of all boxes to be of type block or inline unless otherwise specified like `flex` for example.




#### Box model related vocabulary and questions

---

- **`Box model`**

  - **`Visual display/formatting model`**  and the CSS **`display`** property  -  (*Do not memorize which elements are what display model*)
    Defines how exactly the browser renderer lays out neighbouring elements relative to each other both horizontally and vertically.

    - **`inline-block`**

      Act like `block` elements **but does not take up all the horizontal space when the width property is less than the available width** but then instead flow like `inline` elements. This means that multiple `inline block` elements can flow in the same and onto other lines side-by-side with other `inline` and `inline-block` elements.

      

      **Differs from `inline` in that it considers the** `width`,  `height` and `vertical margin` attributes **too**. The box properties `padding`, `margin` and `border` work like they do in a `block` level element.

      Browser can vertically align **adjacent** `inline` and/or`inline-block` elements in different ways using the `vertical-align` CSS property.

        **Note**: When using the formula from the box-sizing model used **use all of the properties needed just as with the `block` visual display model**.

      - How and when can you change and element's display model?

      - **Other considerations**

        - `height` and `width` values **never**  include the `margin`
        - any element can be converted to `block` or `inline` element using the `display` CSS property:`display: block;` or `display: inline;`
        
        - always consider the default browser interpretation of the display type of an element and explicitly set it on startup for robust results across browsers
        - `block` and `inline-block` elements cannot be nested inside `inline` elements
        - more interesting and modern visual display models are: `flex` and `grid`

  - Box sizing model [MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)  -  This seems to be another terms for the `Box Model` but specifically in terms of the sizing of the boxes rather than the attributes that make it up!

    The following answers the answer `How does the visual display model interact with margins, borders and padding?`:

    - `box-sizing`  -  **CCS property** choose the method of box sizing **amongst the following two**

      - `content-box`  -  The default CSS behaviour where the size is calculated by adding the padding and border to the width/height. This model can result is boxes that are larger than the defined width/height.

        **Note:** When the size of this box needs to be accounted for, the formula of the actual box is: `size + padding + border`

      - `border-box`  -  This model keeps the element size to what is defined as width/height and **accounts for the padding and width** by **insetting the padding and border** rather then outsetting them.

        **Note:** When the size of this box needs to be accounted for the `size` i.e. the `width` or `height` can be used directly

      - `padding-box`  -  **Is being deprecated by CSS standard! Do not use!** 


  - Resetting or setting the model to use a specific model anywhere:
      **As I understand**, this reset **sets the box model to be used** and **automatically makes every selected element inherit the box model type from it's parent** which at the base of the relationships is the `html` element, from which I guess all the other inherit their box-model mode from.
      
      ```css
      html {
        box-sizing: border-box;
    }
      
    *, *::before, *::after {
        box-sizing: inherit;
    }
    ```
  
      
    
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

- **CSS pseudo elements**  -  A **keyword added to a selector** that enables us to **style a specific part of the selected element** like for instance `p::first-line { /* style first lines */ }`



#### Random HTML and CSS notes

---

- mind the fact that html collapes multiple whitespaces, including newlines into a single whitespace
  **this can cause working designs to fail when whitespace take up room when, for instance, a new line is added along with some indentation because that ends up being another whitespace added from newline+spc+spc+spc to single whitespace.**

  Whitespace character in terms of html seem to be the usual, non-printing characters like:
  space, tab and newline.

- A common technique to avoid additional space because of collapsed whitespace is to butt up html elements up against each other because then the tags are not separated by any whitespace.



#### Further reading

---

- [Block and inline layout in normal flow](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)



#### Everything is a box - Rendering a page

---

- Every element requires  box-shaped segment of a page
- Every character of text content also needs a box sized portion of a page
- Browser renderer computes the size of these boxes based on browser defaults and provided stylesheet



#### Questions answers and flashcards

---

- Flashcards with images that describe how CSS shortands work when 1, 2, 3 or 4 values for `padding` et Al. are provided, check at mdn [image source](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties)