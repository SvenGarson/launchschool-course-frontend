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


  
  If no button is pre-selected and no button is required, then the user can submit a form **without making a choice**, but if any button is pre-selected the the user must choose one!

  

  **Note** The CSS `:checked` works the same for radio buttons as it does for the checkboxes-



### Vocabulary in terms of HTML Form elements - clean this up!

---

- `control` or `widget` or `input` are used to refer to a group of a combination of the follow `form` elements:
  - `input`
  - `textarea`
  - `select`
- `Action item`  -  Group term for form elements such as buttons and input type submit buttons
  i.e. the ones that perform an action, and/or have the capability to override a forms `action` attribute using the `formaction` attribute
- `control` or `widget`  -  elements that provides mechanisms to let the user supply information that is to be sent to the server



### Playing with the tech

---

Play with the forms and run it against a local web-server so I can check the requests made.



### When finalizing the notes

---

- clean up vocabulary and keep only the really relevant stuff - I think most can be thrown away
- delete `focus on` section after I made sure that I got all of it in the notes
- questions and answers

