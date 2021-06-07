#### The following was part of the previous notes but it fits better here

---

#### Lengths

There are different types of 'length' units/types in css of which some are absolute and some are relative.

- Absolute lengths - Fixed to a physical measurement

  - `px`  -  Pixel

    There is the notion of a display having a specific number of **pixels per inch** which is the amount of physical pixels that cover one inch of screen real-estate and may vary between lower and higher viewing devices.

- Relative lengths - Rely on the length of some other measurement/object

  - `%`  -  Percentages
    In order to set an axis of an elements size using percentages, we need to know the dimensions of the parent element, this selected element is nested in.

    So a style like:

    ```css
    .col {
      width: 50%;
    }
    ```

    Sets the element with the class attribute value `col` to 50% width of the element it is nested in, i.e. it's parent element.

  - `em`
    This one is calculated based on an element's font size.
    So if an element has a `font-size` of `11` and a `width` of `7`, then the total width of that object ends up being `em x font-size = 7 x 11 ==> 77`.

    **Note**: If no font-size is explicitly stated for a particular object using the `em` unit for some css property, then the **font-size of the closest parent with a defined font-size is used as the basis for `em`** using the same formula as mentioned above.



#### Relative units

---

The principal relative units to use are

- `em`

  - **Proportional** to the `calculated font size`

  - **NOT consistent in a documents** because they **compound**
    ![](res/em_compounds.png)

    

  - The `calculated font size`  is the **height of the current font in pixels**

  - Example: If the `calculated font size = 20px` then `1.5em = 30px` because `20px * 1.5 = 30px`

-  `rem`

  - **Proportional** to the `root font size`
  - **Consistent** meaning **anywhere in the document** i.e. `1.5rem` is **always** the same value based on the specified `root font size`
    ![](res/rem_is_consistend.png)
  - The `root font size` is the **height of the base font for the document** which is the font size designated to the`html` element
  - Example: If the `root font size = 16px` then `1.5rem = 24px` because `16px * 1.5 = 24px`
  
  **Note**: Just use the `px` unit to specify the `root font size`
  
  **Note**: If I do want to use a  `rem` unit as the `root font size` you **must use a fallback of unit `px` to account for old/buggy browsers**
  
  ```css
  p {
    font-size: 20px; font-size: 1.25rem;
  }
  ```
  
  
  
  **Note**: To account for bugs in older browsers set the `root font size` on **both the html and body element using the `px` unit**
  
- `%`  -  *Technically is not a length value*
  Can be used to define a size based on the containing elements (the container) available content region.

  Using `100%` on as an element's width or height can be trick because:

  - `100%` for a nested element **does not consider the margins** so the element **may end up extending beyond the container bounds**
  - additionally to ignoring the margin, the browser also **ignores the padding, border and margin when the box model is set to `content-box`**

  

  The way I understand this is that `100%` bases the fitting of the nested element on the bounding box and when:

  - the box model is `border-box`, padding and border are inside the bounding box and **only the margin is ignored**
  - the box model is `content-box`, padding, border and margin are outside the bounding box and **all three of them are ignored**

  which causes the nested boxes to extend beyond the container in different ways

  

  ![](res/percent_and_auto_quirks.png)

  

  ![](res/hundred_percent_box_model_quirks.png)

  

  **Note**: `width` and `height` have not effect on `inline` elements **with the exception of `img` elements!**

- `auto`  -  Is not a length value and how it works **depends on exactly where it is used**.
  `auto` used as value for:

  - `width` or `height` makes the browser **try** to fit the entire element **including it's margin** into it's surrounding container
    **including it's padding, margin and border!**
  - `left-margin` or `right-margin` on a **block element** makes the browser **push the element all the way right or left inside it's surrounding container**. 
    When both the `left` and `right` margins are set to `auto`  on a **block** element, the browser centers the element in the container.
    ![](res/auto_centering_and_pushing_to_side.png)
  - `auto` as a `top-margin` or `bottom-margon` is **equivalent to** `0`
  - **Padding does not accept `auto`**



**Note**:  Margin centering only works on `block` elements!



#### Random HTML and CSS notes - Find a b

---

- The CSS `vertical-align` property can vertically align adjacent `inline` and `inline-block` elements in different way.

- CSS property values that are set to zero should **not have a unit because they are ignored**

- `img` elements are **not `inline-block`** by **default** elements** but **they are `inline`** elements **by default**!

  

#### Box model related vocabulary and questions from LS course

---


- **Containers**
  A term typically used for block elements that group other elements by nesting them.

- **CSS pseudo elements**  -  A **keyword added to a selector** that enables us to **style a specific part of the selected element** like for instance `p::first-line { /* style first lines */ }`



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