### Lesson 1 - Your first web pages

---

#### Getting started

- ### Getting to know CSS

  - #### Lengths

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


  

  ### **Questions** and answers


- What does the body type selector actually select? The curriculum refers to the `body type selector` to `select most elements` so which ones are and which ones are  not selected?
- What exactly does the font attribute `normal` refer to? Is it an identifier to keep the currently set attribute value for that specific property in the shorthand version?
- What ar `rem` units in CSS?
- Inspiration websites


  - dribble.com