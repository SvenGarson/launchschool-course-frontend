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


  #### HTML and CSS style

  - CSS style guide:

    - use comments when appropriate for documentation

    - new line for every new selector and property as well as properly indent everything

    - class names should be lowercase and use hyphens a delimiters like so `.lean-and-mean { ... }`

    - use short selectors rather than long ones - long selectors raiser the specificity, which makes it more likely for things to break in unforeseen ways

    - keep the specificity of the selectors as low as possible i.e do not use many prequalifiers because:
      **keep them 2-3 levels deep!**

      > more prequalifiers means higher specificity means selectors are more likely to break the CSS cascade and cause issues

    - a class selector is usually more flexible and descriptive - when selectors are used and the html changes, the style also probably breaks.
      it is less of a pain in the ass and more specific, classes ftw!

    - use the shorthand properties and values when appropriate and the single ones when only that property needs to be set

    - use shorthand hexadecimal color values like `#ddd` over `#DDDDDD` when available using **lowercase characters**.

    - drop unit from zero values/constants because whatever the unit in context, zero is always zero!

    - the way to indent vendor prefixes apparently

      ```css
      div {
      background: -webkit-linear-gradient(#a1d3b0, #f6f1d3);
      background:    -moz-linear-gradient(#a1d3b0, #f6f1d3);
      background:         linear-gradient(#a1d3b0, #f6f1d3);
      -webkit-box-sizing: border-box;
         -moz-box-sizing: border-box;
              box-sizing: border-box;
      }
      ```

    - styles assigned to a class should be modular enough to be reused and shared among elements as necessary and the modularity should be reflected by the class name. If it is specific, then name it so, if it is more general, then name it so.
      This is about naming things clearly based on the intent and DRY.

    - **a single property per line** unless when defining a fallback, this should be defined on a single line and maybe even a comment added

    - format css selector curly brackets scope exactly like the following:

      ```css
      some_tag {
        /* css code */
      }
      ```

    - each css property/value dividing pair should contain a space after the `:`

      ```css
      p {
        really-bad:123;
        much-better: 123; /* : followed by a single space */
      }
      ```

    - do not lead a `; ` with whitespace

      ```css
      li {
        meep-deep: bad ;
        meep-eek: good;
      }
      ```

    - Watch the order of css properties. They do not have to be ordered in a certain way but they can have side unintentional side effects when more recent properties override previous ones like for example. Depending on the style there is either a **partial override** or a **complete override**:

      ``` css
      p {
        margin: 5px;
        margin-right: 10px; /* partially overrides the margin set on the previous line for the -right side from 5 to 10*/
      }
      
      h1 {
        margin-right: 15px;
        margin: 29px; /* completely overrides the margin set on the previous line for the -right side from 15 to 29 */
      }
      ```

    - Properties can **optionally** be ordered alphabetically

    - List the selectors in groups based on the elements they select

    


  ### General stuff and random things

  - HTML `id` and `class` attribute values should be named after the content they contain and **not the style they adhere to**!

  - HTML comments `<!-- there be dragons -->`

  - if something does not work as intended in terms of css styling check the following:

    1. css cascade
    2. specificity
    3. inheritance rules

    Some linters like `styleint` can help here

  - CSS comments `/* there be dragons, too! */`

  - If it is not clear which element to use, choose the element that is semantically closest to the content in question

  - When naming classes et Al. prefer semantic names, i.e. names that provide meaning rather that describe the look of things.
    `staff` would be a better, semantic name than `blue_border` etc.
    
  - In terms of CSS, **never type select** based on **an elements `name` attribute**!

  - In HTML5 , the **only elements that do not have semantic meaning are** `div` and `span`!

  - Again, HTML 5 is **all about semantics** so every object should be used for the proper reason, which sometimes means that elements have to be nested to achieve these semantics.

  - By default browser compress whitespace into a single space character

  - In what scope can/must/should html entities be used?

  - Do not use the `pre` tag to format text as it does not necessarily reproduce the same output in every browser and is in general a poor choice to format text

  - if a lone `&` is followed by non-whitespace character and an `;` it may be interpreted as html entity.
    to avoid this when we want to display the char `&` itself, simply avoid this problem by serving it as `&amp;` html entity in the first place so that there are no misunderstandings.
    
  - **Note**: html validators do not complain if character are not defined as html entities. We only find out once it causes problems on a page!

  - Again, like in the case of heading elements such as `h1` and `h2`, **do not use these elements to solely highlight/format text** but **use them for their semantic meaning**. Misusing these elements for non-semantic purposes means that search machines/ browsers and readers cannot properly interpret the web page.

  - use **`strong` over `b`** **if important text is to be highlighted using boldface** and **`em` over `i` if italics are desired to emphasize words**.

  - use the elements for their semantic meaning and adjust their look using CSS - never use an html element for the way it looks (apart from the ones that have this as semantic)

  - The CSS color property is inheritable, which means that a color is applied to every descendant of an element unless it is overriden. Links do not take over the color of their 'parents' however as they are style differently!

  - Websafe/Cross-browser and operating system fonts info: http://web.mit.edu/jmorzins/www/fonts.html

  - For some reason `assigning a label to something` means to add the text to act as label as content of a `strong` element.

  - When a font-family property value contains whitespace it should be quoted!
    - `font-family: Verdana;` is valid
    - `font-family: Trebuchet MS;` invalid since `Trebuchet MS` contains whitespace so should be
      quoted like so `font-family: "Trebuchet MS";`
    
  - Always set one of multiple fallback fonts in case the specified one does not work

  - apparently there is no real naming convention for naming html attribute values, so I willl be using lowercase snakecase as I do in ruby

  - css can select multiple type elements by separating them with a comma

  - Links have different default styling behaviour so sometimes they need to be explicitly accounted for.
    Specifically:

    - Browsers do not change the default `font-family` property for links but browsers ...
    - **do** change the default `color` of links which means it needs to be overriden

  - Crazy CSS operators

    - CSS `child combinator` `>` is placed **between two css selectors**. If the selector matches an element, the element is **not selected unless the right selector it is a direct child of the left selector **
    - `Adjacent sibling combinator` - just look it up!

  - `CSS` stands for `Cascading Style Sheets`

- #### CSS Diner for practice - https://flukeout.github.io/

- #### Chrome Dev tools  -  https://developer.chrome.com/docs/devtools/


- ### HTML - Special character encoding
  
  - format is the following `&some_code;`
  - example codes https://copypastecharacter.com/
  
- ### **Questions**
  
  - What does is mean for an HTML element to `wrap` another element?
    
  - What exactly is the difference between inline and block level elements?
    
  - What happens if an `id selector` is used more than once per page?
    By specification, a valid HTML **should not contain more than a single element** with an `id` attribute.
    My research showed that this is mostly because of javascript and what is seems to boil down to is that selection by id seems to be problematic with multiple id's since we don't know what to expect in terms of the returned elements. And javascript libraries in general seem to not play nicely with, rightfully, multiple id's per HTML page!
  
    So just don't do it and forget about the rest.
    
  - Semantics of elements, read this at least once http://html5doctor.com/i-b-em-strong-element/
  
  - what are the naming conventions for CSS and HTML?
  
  - How do HTML character entities work and how are they defined and interpreted?
  
  - When do I have to use HTML entities?
  
  - What does the body type selector actually select? The curriculum refers to the `body type selector` to `select most elements` so which ones are and which ones are  not selected?
  
  - What exactly does the font attribute `normal` refer to? Is it an identifier to keep the currently set attribute value for that specific property in the shorthand version?
  
  - What ar `rem` units in CSS?
  
- Inspiration websites


  - dribble.com