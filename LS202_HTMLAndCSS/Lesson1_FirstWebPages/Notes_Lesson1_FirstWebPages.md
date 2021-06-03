### Lesson 1 - Your first web pages

---

#### Getting started

- ### Getting to know CSS

  - #### The cascade

    - **General**
      All styles cascade from the top to the bottom of the stylesheet where the most recents property values overwrite previous ones.

    - **Scope**  -  I call it scope because it reminds me of scope
      CSS attributes like `class` can be used in any elements because they are `global`, but **most html attributes are specific to certain type of tag/elements**.

    - **Cascading properties**
      The latest/bottommost property definition is the one retained / overwrites previous ones / has precedence.
      **Note**: This is the case if no styling conflicts occur, i.e the selector type specificity does not need to be considered and does not affect this precedence.

    - **Calculating specificity**
      Different selector types have different specificity weights:

      1. `type selectors`
         - `specificity weight` - lowest of all at `point value 0-0-1`
      2. `class selectors`
         - `specificity weight` - medium at `point value 0-1-0`
      3. `id selectors`
         - `specificity weight` - highest of all at `point value 1-0-0`
      
      
        Specificity points are computed using **three colums** where:
      
        1. the first / leftmost column **counts** `id` selectors
        2. the second / middle column **counts** `class` selectors
              3. the third / rightmost column **counts** `type` selectors
      
      
        **Important selector specificity rules**:
      
        - **id selector** has **higher specificity weight** than **class selector**
        - **class selector** has **higher specificity weight** than **type selector**
      
        When a specific element is selected using different types of CSS selectors at different points/cascades in the CSS stylesheet, the selector with the highest specificity weight has precedence over all the others, even if the lower ranking selectors (in terms of specificity weight) precedes the higher ranking selectors in the stylesheet.
      
        Example
      
        ```html
        <!-- paragraph element can be selected using a type selector of type 'p' or an id selector of value 'food' -->
        <p id="food">...</p>
        ```
      
        ```css
        /* two different types of selectors select the paragraph element */
        /* and the ID selector #food has precedence over the type selector 'p' */
        #food {
          background: green;
        }
        p {
          background: orange;
        }
        ```
      
        **Note**: These precedence issues are a common problem when a stylesheet is not interpreted as expected
      
    - **Combined selectors**
      Combined selectors should be **read from right to left** where:

      - The rightmost selector is referred to as the `key selector` which defines which exact elements the style is applied to
      - All selectors left of the key selector are referred to as `prequalifier` which define the 'way to get to the key selected element(s)'
      
      Examples and how to read them using the 'read right to left ' trick:
      
      - ```css
        .hotdog p {
          background: brown;
        }
        ```
      
        The combined selector consists of **two selectors** where:
      
        - a `class selector` named `hotdog` `->` `type selector` of type `p`.
        - Key selector: `p`
        - Prequalifiers: `hotdog`
      
        **Result:** The elements `selected are paragraph elements residing withing an element of class hotdog`.
      
      - ```css
        .hotdog p.mustard {
          background: yellow;
        }
        ```
      
        The combined selector consists of **three selectors** where:
      
        - a `class selector` named `hotdog` `->` a `type selector` of type `p `->`class selector` named `mustard`
        - Key selector: `mustard`
        - Prequalifiers: `hotdog` and `p`
      
        **Result:** The elements `selected are paragraph elements of class mustard which reside in an element of class hotdog`
      
      - Trying to define the behaviour of combined selectors for intuition:
      
        - **Read** combined selectors from **right to left**
      
        - Rightmost selector in the chain is the `key selector`
      
        - `Key selector`  defines the type of elements that are selected where:
      
          - `some_class`  -  selects elements with class attribute value `some_class`
          - `some_type.some_class`  -  selects elements of type `some_type` with class attribute value `some_class`
          - `gen_class spec_class`  -  selects elements with class attribute value `spec_class` that **reside inside an element with class attribute value `gen_class`**
      
        - So both different notations to be aware of are:
      
          1. `a b c`  -  combination of 3 selectors that selects elements defined by `c`
          2. `a b.c`  -  combination of 3 selectors that selects elements defined by `b.c`
      
          **Note**: The differentiating factor here is the space separated selectors that act differently than when connecting them!
      
      - Specificity in combined selectors
      
        - The total specificity weight of a combined selector is done by:
      
          1. Initialize specificity weight as `0-0-0`
          2. Add the number of times each type of selector occurs in the combined selector and add this sum to the corresponding specificity weight cell.
      
        - Determining combined selector precedence
      
          ```text
          1) inline (1-0-0-0)
          2) id     (0-1-0-0)
          3) class  (0-0-1-0)
          4) type   (0-0-0-1)
          ```
      
          Leading with examples here:
      
          - **Higher ranking selectors always have precedence over lower ranking selectors** **no matter** how high **the point value** is for the lower ranking selector:
      
            ```text
               0.0.9.0 (class selector)
            VS 0.1.0.0 (id    selector)
            ----------
               0.1.0.0 has precedence
            ```
      
          - The point value comes into play when no highest ranking selector exists and the precedence is decided on the highest point value:
      
            ```text
               0.4.0.1 (4x id & 1x type)
            VS 0.7.0.1 (7x id & 1x type)
            ----------
               0.7.0.1 has precedence
            ```
      
        Example:
      
        ```css
        /* 2x class selectors         */
        /* 1x type  selector          */
        /* specificity weight = 0-2-1 */
        .hotdog p.mustard {
          background: yellow;
        }
        
        /* 1x class selector */
        /* 1x type  selector */
        /* specificity weight = 0-1-1 */
        .hotdog p {
          background: brown;
        }
        ```
      
        
      
      - Tips on combined selectors
      
        - Make the selectors as specific as necessary but do not go over the top - a few visual example:
          - `good`  -  `ul#summer-drinks li.favorite`
          - `too complicated`  - `html body div#pagewrap ul#summer-drinks li.favorite`
        - The higher the specificity weights go the more likely things are to break in terms of the expected result
    
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

  - HTML style guide:

    - always write standards-compliant markup despite HTML's forgiving nature

    - use semantics elements as much as possible

    - always use the proper, standards-compliant  document structure using `doctype`, `html`, `head`, `body`

    - keep the syntax clean

      - element names; attributes and values should all be **lowercase letters**
      - properly indent nested elements
      - strictly use double quotes
      - **Remove the forwards slash** at the end of self-closing elements
      - omit values on boolean attributes
      - select practical `id` and `class` attribute values that are **not named after the style of the content** 
      - always define alternative text `alt` for images that are as descriptive as possible and can be a bit lengthy for that purpose
      - **never use inline styling**
      - keep the elements and nesting as simple as possible while keeping the semantics straight
      - do not overuse `div` rather user HTML5 `structural elements` whenever appropriate

    - refactor when necessary

    - max **two elements per line** like for instance `<li><p>Hello world!</p></li>`

    - indent by either two spaces, four spaces or a single tab, does not matter, but **stay consistent**!

    - do not indent the html tag

    - can close auto closing tags with either:

      - `<img .../>`
      - <img ... >

      Either way is fine but apparently the one with the `/` helps support older versions of HTML. **Just be consistent!**

    - When using Flex or Grid place the most significant blocks near the top of the file and least important at the bottom

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