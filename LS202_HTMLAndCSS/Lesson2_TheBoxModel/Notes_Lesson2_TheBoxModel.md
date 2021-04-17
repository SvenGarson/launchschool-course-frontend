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
      The marting **does not affect the size of the box itself** but **affects other content that interacts with the margin bounding**.

  - **`Visual display/formatting model`**  and the CSS **`display`** property  -  (*Do not memorize which elements are what display model*)
    Defines how exactly the browser renderer lays out neighbouring elements relative to each other both horizontally and vertically.

    - **`block`**

      Occupies all horizontal space available by default and leaves nothing left and right of the block but if the block width is less than the available space the rest of the space is left empty.

      Uses all box properties: width, height, padding, border and margin to determine the element size.

      **Note**: When using the formula from the box-sizing model used **use all of the properties needed**
    
    - #### **`inline`** - also referred to as `outer display type inline`
  
      Same behaviour as `block` for box properties: left/right padding and margin.
      
      Makes the browser and box-sizing model **ignore** the following css attributes:
      
        - the `width` and `height` properties unless the element is an `img`.
        - top and bottom margins
      
      Does **not** ignore:   
      
        - borders (but may have weird behaviour)
      
        - top and bottom paddings
      
      **Note**: When using the formula from the box-sizing model used **ignore the previously mentioned properties**
      
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



#### Everything is a box - Rendering a page

---

- Every element requires  box-shaped segment of a page
- Every character of text content also needs a box sized portion of a page
- Browser renderer computes the size of these boxes based on browser defaults and provided stylesheet



#### Questions answers and flashcards

---

- Flashcards with images that describe how CSS shortands work when 1, 2, 3 or 4 values for `padding` et Al. are provided, check at mdn [image source](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties)