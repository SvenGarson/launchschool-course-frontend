### What to focus on and what to learn by the end of the lesson

---

- using the following elements
  - forms
  - input
  - textarea
- difference between checkboxes, radio buttons and selection lists
- understand the `type` attribute on the following `input`  type tags:
  - checkbox, radio
  - text, email, tel, password
  - submit,
  -  reset
  - hidden
- know how to construct lists
- how to use labels in a form with both container and `for` formats
- use description lists to help format forms



### Forms overview and tags

---

All that forms do is to gather input from the user/front-end, initiates request-response cycles and executes some optional rudimentary validation.

**Following are the form-related tags/elements**

- `form`  -  The parent for all form-related tags/elements.
  Controls **how** and **where** the browser should send the data and should contain **at least one** `input` or `textarea` or `select` element.


  Important `form` attributes are:

  - `method`  -  Defines the HTTP Method,`GET` or `POST`, to use when sending data to the server:

    - `method="get"`  to fetch data from the server
    - `method="post"`  to update data on server

    **Note**: Raw HTML is limited to `GET` and `POST` requests, the other must be used through Javascript

  - `action`  -  Defines the URL to send the HTTP request to.

    **Note**: Individual form actions items such as buttons and submission can override the `action` attribute value using the `formaction` attribute!

- `fieldset`  -  Optional `form` element that groups together multiple control and label form elements to a set of related data. A form can include multiple `fieldset` elements:

  ```html
  <form action="/login" method="post">
    <fieldset>
      <input type="text" name="username" />
      <input type="password" name="password" />
    </fieldset>
    <fieldset>
      <input type="submit" value="Save" />
      <input type="submit" value="Forgot Password" formaction="/forgot" />
    </fieldset>
  </form>
  ```

  **Note**: The `fieldset` element draws a border around the grouped form elements by default.

- `input`  -  Defines a type of control/widget to be used so that the user can input data that is to be sent to the server.

  **Requires that the `type` attribute is defined to one of the supported types** like for example:

  - `type="text"`  -  provides a way to enter text
  - `type="submit"`  -  provides a button that submits the form to server

  **Additionally** the `input`  element **typically requires that the `name` attribute is defined** so that the server can use the value of `name` to find the associated value for that particular widget.

  ```html
  <input type="text" name="city" />
  <input type="password" name="password" />
  <input type="submit" value="Save" />
  ```

- `label`  -  Defines a caption that is associated with a specific input field.
  There are two variants to associate a label to a specific input field:

  1. The label is associated to some field by setting the label `for` attribute to some existing input `id` value like so:

     ```html
     <label for="phone">Phone</label>
     <input type="text" id="phone" name="phone_number" />
     ```

  2.  The field to be associated to the label can be nested inside the label element directly.
     This is easier to use because we can omit the label `for`,and the fields `id` attribute.
     This is referred to as `container syntax`.

     ```html
     <label>
       Phone
       <input type="text" name="phone" />
     </label>
     ```



### Use case for the `formaction` attribute

---

This attribute can be used for instance to make different submit buttons override the URL the form is sent to by overriding the `form` `action` value like so:

```html
<form action="#" method="post">
  <input type="submit" value="Log In" />
    <input type="submit" value="Delete account"
           formaction="/account/delete" />
    <input type="submit" value="Forgot password"
           formaction="/account/password" />
    <input type="reset" value="Reset" />
  </fieldset>
</fieldset>
</form>
```



### Input types

---

The most widely used form of widget is the `input` widget and most controls are `input` widgets.
When defining an `input`element **always defined the input type** using the `type` attribute.

The most commonly used are:

- `type="text"`  -  defines a text entry field in which the user can enter anything, so **this input should always be checked client and/or server side**.

  **Note:**  This input type disregards some whitespace characters such as carriage returns/newlines.

  The `maxlength` caps the length of the input that can be entered:

  ```html
  <input type="text" maxlength="7" name="first_name" id="first_name" value="Meep" />
  ```

- `type="password"`  -  defines a single line text field with obscured text value.
  This is typically used for password and other sensitive information.

  Again, use `maxlength` to specify the maximum length of the text that can be input.

  ```html
  <input type="password" name="password" id="password"  size="35" maxlength="9" />
  ```

- `type="email"`  - defines a field that allows a mail address to be entered in the format `someone@domain`. When the browser supports this type, it tries to prevents invalid addresses to be entered. 
  **Note:** Obviously always check the data server side and also how different browsers handle this.

  ```html
  <input type="email" name="email" placeholder="username@domain" />
  ```

- `type="tel"`  -  define a field to enter a phone number but the field **is not validated because phone number vary so much worldwide**.

  ```html
  <input type="tel" name="phone" placeholder="(###) ###-####" />
  ```

- `type="checkbox"`  -  defines a set of checkboxes the user can check/uncheck.

  Here how the checkbox attributes should be used and what is sent to the server:

  - `value`  -  attribute defines the value the form sends to the server for that particular checkbox
  - `checked `  -  attribute defines the checkbox to be pre-selected
  - `name`  - attribute defines the name of the `key` of the sent key-value pair
    **Note**: This is typically the same name for a set of options!


  How CSS properties interact:

  - `:checked` pseudo class lets us define the style for a checked checkbox
    **Note**: CSS does not selected based on the `checked` attribute but **based on the checkbox state!**


  The browser **sends one key-value pair for each selected checkbox** in the format `key=value` where:

  - `key`  is the value of the `name` attribute
  - ` value` is the value of the `value` attribute.
    If the `value` attribute is not defined, then the browser sends the value `on` by default.

  **Note**: The browser **does not send** key-value pairs for unchecked boxes.

  ```html
  <label>
    <input type="checkbox" name="choice" value="google" checked />
    Search on Google
  </label>
  ```

- `type="radio"`  -  defines a list of options that lets the user choose **zero or one** option at a time.

  Here how the radio attributes should be used and what is sent to the server:

  - `value`  -  attribute defines the form sends to the server for that particular radio button
  - `checked`  -  attribute defines which radio button is checked by default
  - `name`  -  attribute defines the name of the `key` of the sent key-value pair
    **Note**: This is typically the same name for a set of options!
  - `required`  -  attribute that enforces the user to choose a button **if there is no default button**
    **Note**: Every radio button must have the `required` defined it for this mechanism to work!?

  If no button is pre-selected and no button is required, then the user can submit a form **without making a choice**, but if any button is pre-selected the the user must choose one!

  ```html
  <label>
        <input type="radio" name="color" value="blue" />
        Blue
      </label>
  ```

  **Note** The CSS `:checked` works the same for radio buttons as it does for the checkboxes.

- `type="submit"`  -  defines a button that initiates the form data to be sent to the server.

  - The `formaction` attribute can override the forms original `action` attribute 
  - The `value` attribute sets the name displayed on the submit button

  ```html
  <input type="submit" value="Save" />
  ```

- `type="reset"`  -  defines a button that re-sets the contents of the form to the default **without initiating a request-response cylce**, in other words, on the client side.

  - the `value` attribute sets the name displayed on the submit button

  ```html
  <input type="reset" value="Clear Form" />
  ```



### Input attributes in general - Probably contains duplicate notes

---

The following attributes work different for every input type or not at all. This is a list of attributes that are good to memorize:

- `value` attribute  -  can be used by *most* input element, but the functionality varies with the `type`:

  - For text based type like `text`, `email` and `number` the `value` defines the default value for the element and if none is provided, the browser uses an empty string.

    ```html
    <input type="tel" name="phone" value="503-555-1212" />
    ```

  - For `checkbox` and `radio button` types, the `value`  defines the value of the key-value pair sent to the server for a selected box/button

  - For button types `submit`, `reset`and `button` the `value` attribute defines the value of the label on the button
  
- `size` and `maxlength` attributes  -  apply to most of the text input types
  The `size` attribute hints the browser to have at least that many characters visible but apparently , the typical behaviour is that more or less characters are displayed.

  **Note**: The CSS `width` property overrides the `size` attribute for a given element.

  `maxlength` just limits the number of characters that can be entered into the input field.

- `placeholder`  -  applies to most text based input types
  This defines the data to be displayed when the input element is empty and is not shown when any input occurs in the element.

- `disable`  -  disables any input element and makes it not respond to anything
  In terms of selecting through CSS:

  - `disable` d element are selectable through the `:disabled` pseudo class
  - non-disabled elements are selectable through the `:enabled` pseudo class

- `require`  -  defines that the input element must be filled before the form can be submitted to server
  until  the user fills all required field of a form.

  In terms of CSS, required fields can be selected using the `:selected` pseudo class.

- `autocomplete`  -  defines whether the browser should re-use previously entered input data:
  This can be turned on and off explicitly using ` autocomplete="on"` or `autocomplete="off"`.

  **Note**: The `autocomplete` attribute **does not affect** `type"password"` input types!



### The Textarea input element

---

`textarea`  lets the user enter whitespace formatted text and does support carriage returns/newlines.
This input type **has an opening and closing tag** and **does not use the `value` attribute** to provide default text but rather goes between the two tags:

```html
<textarea name="tweet">Default text here instead of value attribute!</textarea>
```

**Note**: Since `textarea` regards whitespace, the opening and closing tags are typically butted to avoid any unwanted whitespace bleeding into the page content.

`textarea` used the attributes `rows` and `cols` to control the dimensions in number of lines and width as characters. **As with the `size`** attribute, these are **typically not precise**!

Furthermore:

- While the size can be defined through CSS using the `width` and `height` properties.
- The scrolling bar appears when the content extends over the dimensions of the textarea
- The CSS `resize` property defines whether the user can drag adjust the field or not



### The Select input element

---

`select`  creates a drop-down list of predefines options the **user can select zero or more** of.

A `select` can only have `option` and `optgroup` as child elements and uses the `name` attribute like other form input elements and **lets the user choose one option by default**.

If the `select` element `multiple` attribute is defined, the user can select multiple options by shift or control clicking the list. **This seems like something to be avoided!**

The `option` element defines the options that a user can select where the `option`s:

- `value` attribute is the value sent to the server for that particular option as value



**Simulating default values similar to a placeholder**

To aid the user, the `select` element typically defines a default option that is not selectable that fulfills the same role as a default or placeholder value:

```html
<select name="color">
  <option value="" disabled selected>Choose one</option>
  <option value="#f00">Red</option>
  <option value="#0f0">Green</option>
  <option value="#00f">Blue</option>
</select>
```



**Note:** Use the select `appearance: none` property to avoid applying special browser/os based styling.



### Form layouts

---

- use description lists to build horizontal forms instead of divs for semantic meaning and built in styles. The added semantic when using description lists for the purpose of formatting forms are:

  - The **description list terms** are **the labels** which **identify the controls for the user**

  The added benefit here is to add html elements for styling instead of targeting sequences of label/input pairs with all sorts of techniques.

  **Note:** Use html elements semantically to select the elements for styling more naturally and make use of nesting these html elements!



### Vocabulary in terms of HTML Form elements - clean this up!

---

- `control` or `widget` or `input` are used to refer to a group of a combination of the follow `form` elements:
  - `input`
  - `textarea`
  - `select`
- `Action item`  -  Group term for form elements such as buttons and input type submit buttons
  i.e. the ones that perform an action, and/or have the capability to override a forms `action` attribute using the `formaction` attribute
- `control` or `widget`  -  elements that provides mechanisms to let the user supply information that is to be sent to the server



### Random notes that do not fit anywhere else

---

- Do not use the input `type="button"`. Use the `<button>` element instead.
- decide whether to enable/disable the following client side functionality:
  - autocomplete
  - autocorrect
  - autocapitalize
  - spellcheck
- it is typicall a good idea to disale browser specific styling and auto-actions
- keep working bits of html code around
- When a caption for input fields is required, such as for instance a `select` element, use a label!
- When setting a border radius, the default style gets overidden and a border style should be defined explicitly
- only use divs when you want to apply styles to that div that you would not normally on other elements or when there is no better option **and when a div is used, it should always be identified so that other people can see what the intention was** i.e. what this div is used for.
- Always look to use elements with the best semantic meaning in terms of how it is used in the markup
- `adjacent siblings selector` i.e. `+` separates two selector and matches the **second only if it immediately follows the first element**
- always choose the appropriate http method for forms based on what these form requests to
- when a design solidifies, remove the whitespace eating comments unless they are needed for the design
- Use `caniuse.com` to determine which css functionality is supported by which browser
- trade-off of padding vs margin to consider:
  - top and bottom margins can collapse and this can be weird where as with padding this does not happen when positioning two element over one another, results are probably more expected.
  - the padding is in the clickable region and margin is not
  - this margin collapse can be useful though because we know that if it occurs, we can design with it



### Continue at

---

- ???



### Questions and answers

---

- does the font-family property read precedence from left to right or vice-versa?
  It should be from left to right i.e. the righmost font is the fallback font.
- how is css computed exactly and how does the font-size set to zero and back to some size work to:
  - get rid of whitespace
  - size things based on this mechanism?
- how to handle browser specific stuff such as the `autocorrect` attributes for the Safari browser?
  Because it does not validate through the w3c validator and is browser specific, it should probably be only be included in a response served to a Safari browser?
- how to handle space in html attributes such as for instance `<option value="Tommy Boy"></option>` ?
  Does it need to be encoded at this point or does that automatically happen when the form data is sent to the server through the action URL?
- what is the difference between boolea and other html attributes?



### When finalizing the notes

---

- clean up vocabulary and keep only the really relevant stuff - I think most can be thrown away
- delete `focus on` section after I made sure that I got all of it in the notes
- questions and answers


### Resources

---

- List of american states and abbreviations: https://launchschool.com/gists/2424a869