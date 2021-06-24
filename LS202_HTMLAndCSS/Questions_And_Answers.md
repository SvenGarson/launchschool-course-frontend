### Questions and answers for LS202

---

- What are the following concepts?

  - `pseudo class`  -  A CSS keyword added to a selector to read special element state

    ```css
    selector:hover { /* style */ }
    ```

  - `pseudo element`  -  A CSS keyword added to a selector to style a specific part of an element or to 
        add new elements to an HTML document

    ```css
    /* adding an element to the document as last child of the following selector */
    selector::after {
      content: "Content by CSS!";
    }
    
    /* select and style the first letter of text content */
    p::first-letter {
      color: red;
    }
    ```

- What does the universal selector `*` actually select?

- What is the precedence of the `*` selector?

- Understand the reasoning behind the technique used to CSS reset the Box-Model so that I have the option to override the box-model when needed:

  - https://css-tricks.com/box-sizing/

  I think the reasoning here is that I should set the box-model on the html, **and then inherit the property value** because:

  1. the `html` selector is a type selector and thus less specific i.e. we can intuitively override it if needed

  2. the universal `*` selector seems to have higher precedence (is that true?) at all times and so cannot simply be overriden later (is this correct? do some research)

  3. Doing the following:

     ```css
     html {
       box-sizing: border-box;
     }
     *, *:before, *:after {
       box-sizing: inherit;
     }
     ```

     Gives us the ability to override the property later and still default/reset the Box-Model for every element! 

- How come the fallback font is defined:

  ```css
  normal 16px Helvetica, Arial, sans-serif
  ```

  and the fallback font size, **unless I just got the following part wrong?** is

  ```css
  font-size: 16px; font-size: 1rem;
  ```

  The fallback value is on the left and on the right, are both correct for some reason or is one wrong?

- What are some ways to create **a fixed width left column and right column that takes up the rest?**
  **Note**: Make some flashcards to force myself to implements the css and state some dis-/ adv-antages

  - Making an element take up the rest of the horizontal space can be done by triggering the `block formatting context` as follows for two columns:

    ```html
    <div class="container">
      <div class="left">Left</div>
      <div class="right">Right</div>
    </div>
    ```


    ```css
    .left {
      float: left;
      width: 225px;
    }
    
    .right {
      /* triggers the block formatting context */
      overflow: hidden;
    }
    ```

  - another solution using calculated width for the second columns using the same HTML as above

    ```css
    .left {
      display: inline-block;
      width: 225px;
      float: left;
    }
    
    .right {
      float: left;
      display: inline-block;
      width: calc(100% - 225px);
    }
    ```

- When the visual formatting model is set to `block` implicitly **by floating an  element** , can the display type be reset manually or does the fact that the element is floated lock the element is as a block-level element?

- How does font resolving work through an HTML  `link` element? What else can be used?

- Read up on the basic mechanism of importing CSS style

  