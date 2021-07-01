#### LS202 Questions and answers

---

- What is a CSS `pseudo-class` ? 
  A CSS keyword added to a selector to read special element state.

- What is a CSS `pseudo-element` ?
  CSS keyword added to a selector **to style a specific part** of an element **or to add new elements** to an HTML document.

- The difference in notation between CSS pseudo-classes and pseudo-elements i.e. what is the correct notation?

  ```css
  /* pseudo-class syntax */
  a:hover { /* style */ }
  
  /* pseudo-element syntax */
  input::before { /* style */ }
  ```

- What does the CSS `universal` selector `*` select?
  It selects all elements i.o.w elements of all types.

- What effect does the CSS `*` selector have on selector specificity?
  None.

- What is the reasoning of the following technique to specify the Box-Model when re-setting through CSS?

  ```css
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  ```

  1. specify `border-box` for the `html` element
  2. specify **all** elements to inherit the Box-Model based on the previous specification
  3. now all elements have the default Box-Model but we also have the ability to override if we need to

- How does CSS behave when it encounters a property-value definition that CSS itself does not recognize or understand?

  CSS simply ignores/skips that particular property/value specification and moves to the next one

- What can trigger CSS to skip a particular property/value specification?

  When the property/value pair or the property or value itself:

  - is not supported by the browser
  - does not exist
  - are misspelled

- For the following font specification:

  ```css
  p {
    font: normal 16px Helvetica, Arial, sans-serif;
  }
  ```

  - which font-family will the browser try to use first?
    Helvetica
  - which font-family will the browser try to use last when no other font-family could be used i.e.
    which font-family is the last fall-back font-family?
    sans-serif

- What are some ways to create 2 columns with the following requirements?

  - the left column has a fixed width
  - the right column  takes up the rest of the horizontal space to the right of the first column


  The  shared HTML markup:

  ```html
  <div class="container">
    <div class="left">Left</div><!--
  --><div class="right">Right</div>
  </div>
  ```

  

  1. Float the left column with a fixed width and trigger block-formatting context on the right column

     ```html
     .container {
       background-color: orange;
       width: 500px;
       height: 300px;
     }
     
     .left {
       background-color: red;
       height: 150px;
       
       width: 150px;
       float: left;
     }
     
     .right {
       background-color: green;
       height: 150px;
         
       overflow: hidden;
     }
     ```

  2. Specify the right column width based on the calculated width of the container minus the left column width. The visual formatting model must allow the elements to share one row off course.

     ```css
     .container {
       width: 500px;
     }
     
     div {
       display: inline-block;
     }
     
     .left {
       width: 150px;
     }
     
     .right {
       width: calc(100% - 150px);
     }
     ```

- Use cases for using `img` vs CSS `background-images`

  - Use `img` when
    - the image is part of the content presented to the user and is an important piece of the hole an
    - the image is to be printed by default
  - Use `background-image` when
    - the image is **not** part of the content presented to the used but rather decoration
    - when images are not to be included for printing by default
    - if only a portion of an image should be visible as in CSS sprites

  **Long story short, for now just use `img` if the image is an important piece of content and background otherwise**.

- What is the problem with the checkbox hack approach where the label wraps a checkbox input elements along with other, possibly non-inline elements?

  Standards enforce that `label` elements must contain only phrasing content.

- When adding a `pseudo-element` to an existing HTML element using the following CSS:

  ```css
  input:checked + div::before {
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: red;
  }
  ```

  **Why is this pseudo element not added to the HTML markup** ?


  Because the `content` property has not yet been defined. To fix this issue add the following line:

  ```css
  /* String can be empty or not */
  content: "";
  ```

  







#### Finishing up the course

---

- Work through this Q&A and make flashcards for it

