### What to focus on

---

**Note**: This topics are complex and harder to learn. Know the basics and use them. Don't go deeper for now

I should know how to use the following:

- float elements and clear element floats
- positioning using `position: absolute`
- basic media queries
- liquid and fluid layouts



### Floats

---

Floats are an easy way to place elements side-by-side and collapse any in-between element whitespace without hacks like comments or HTML placing **if they fir on the same line/row**.

Floats are used to push element to the far left or right **in their immediate container** which define the maximum left/right boundaries the element can be pushed to.

The space beside floated elements left and right are usable to other elements just as normal.

**Note**: Floats can be used to swap the position of elements:

```html
<!-- HTML -->
<div class="primary">
  <p>Main Content</p>
</div>

<div class="secondary">
  <p>Sidebar 1</p>
</div>
```

```css
/* Primary is positioned left */
.primary {
  float: left;
}

.secondary {
  float: left;
}
```

**Result**:
![](./res/float_left_and_right.png)

**Changin the side using the floats**:

```css
/* Primary is positioned left */
.primary {
  float: right;
}
.secondary {
  float: left;
}
```

![](./res/float_right_and_left.png)

**Floats have complex rules which is why we should keep styling with floats as minimal as possible**.

In order to get expected styling when using floats:

- Keep the height of the floated objects the same 
- Keep the float direction of the grouped elements (the ones in the same row!?) to a single direction, **either** left **or** right.

**Note**: In general floats seems like something to be avoided and there are typically better options such as Flex, Grid and Frameworks.



### Clearing floats

---

Floating elements often causes the `containing floats problem`:
![](./res/containing_floats_problem.png)

The problem is that the nested and floated elements are **removed from the normal document flow** which means that the **gray container does not contain the floated items anymore**. So the **browser cannot properly determine the size of the nested, floated elements** anymore!

**Note**: Floated elements **typically do not affect the dimensions of their parents** but **can overlap other content in terms of rendering**.



**There are two solutions to fix this problem**:

- Use `overflow: hidden;` or `overflow: auto`
  **Must be applied to the element containing the floating elements** which forces the container to expand in order to contain and render the floated elements as defined.

  There are two edge cases though for each overflow type:

  1. `overflow: hidden;` can clip content that does not fit if the defined container dimensions if the container has dimensions defined
  2. `overflow: auto;` can add undesired scrollbars and this is browser specific

  ```css
  .container {
    overflow: auto; /* or overflow: hidden; */
  }
  ```

  ![](./res/float_fix_overflow.png)

  **This fix works because the `overflow` property uses a `block formatting context` which includes floated elements**.
  **This means that the floated elements can now be considered when determining the size of the parent container.**

- Use a `clearfix`:
  A `clearfix` is a **technique** that forces a container to contain it's floated children by appending an empty block-level element **after** the floated elements, in other words, we **trick the container into considering the floated elements** by adding an **empty marker element** **as last container child** on which the **container can base it's calculations to contain all the floated children**.

  
  **Here a more intuitive, visual illustration:**

  1. The `containing floats problem` without applying any fix  -  Container cannot consider the floated children for the final container dimensions.
     ![](./res/containing_floats_problem.png)



Intuitive notes as we go:

- the CSS `clear` property defines if the cleared element must be moved **below** **previous** floating elements.

- both floated and non-floated elements can be `clear`ed from previous floats

- floating elements have special behavior in terms of vertical margin collapsing etc, so look up for details

- In general, use `clear: both;` unless others are specifically needed

- when an element is cleared from preceding elements using:

  - `clear: both;`  -  the cleared element is moved down until it's top edge is under the **lowest** floated element edge.
    ![](./res/clear_both.png)

  - `clear: left;`  -  the cleared element is moved down the same way until it is under the **left** floated elements.
    ![](./res/clear_left.png)

  - `clear: right;` does the same as left but for right floated elements.
    **Note**: In this case clearing right and both is the same.

    ![](./res/clear_right.png)



### Notes for next lesson which is ???

---

**Is the following correct?**

>  **Note**: Absolute and Fixed elements typically **do not affect the dimensions of their parents**.



### Valuable CSS

---

- float, it's ...
- `overflow`  -  defines how an elements overflow i.e. the **content that does not fit into the elements content region**  is treated
- clear, it's types and intuition



### Questions and answers

---

- what are the following and do they all exist or are some terms the 'same'?

  - pseudo class
  - pseudo element
  - pseudo selector

  **Two of these exist:**

  - `pseudo classes`  -  keyword **added to a selector** that reads special state of the selected elements

    ```css
    selector:hover { /* style */ }
    ```

    **Note**: Use **single colon** for pseudo classes!

  - `pseudo elements`  -  keyword **added to a selector** to style a specific part of the selected element

    ```css
    selector::before { /* style */ }
    ```

    **Note**: Use **two colons** for pseudo elements!

- What is a `block formatting context` at awareness level?
  The important thing to understand is that the `block formatting context` contains **everything** inside the element to which it applies, **including floated elements**!