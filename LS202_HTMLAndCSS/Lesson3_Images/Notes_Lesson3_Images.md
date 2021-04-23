#### Focus on

---

- Image types
  - Understand differences between the `jpg`, `png` and `gif` types
  - Know when to use which image type
- Know how to
  - add foreground and background images to a website
  - use figures and captions
  - use images as links



#### Images types

---

The most common image types on website are:

- `JPG`
  - Use cases
    - Used for photographic images
    - Avoid for high-resolution background as artifacts will sho
  - Compression
    - Lossy compression - Information is lost forever once the image is compressed
    - Great balance between image quality and size
    - Trades image quality for file-size
    - Small file with varying degree of visual fidelity
  - Specifics
    - repeated compressing of an image loses image information
    - visible artifacts because of compression are referred to as `artifacts`
  - Tips
    - reduce the image size as much as possible as long as the image quality does not suffer
- `PNG`
  - Use cases
    - Used for non-photographic, high quality images such as large backgrounds
    - When transparency is needed
  - Compression
    - Lossless compression - Information is **not** lost once the image is compressed
    - This means larger (potentially much much larger) filesizes
  - Specifics
    - up to 65.536 transparency levels through an alpha channe
    - more than 16.7 million colors supported
- `GIF`
  - Use cases
    - Small images where the lack in quality does not affect the purpose
    - For instance user interfaces and icons
    - Fast loading is important
  - Compression
    - No compression
  - Specifics
    - only 256 supported colors



#### Image formats overview table

---

| **Feature**          | **JPG**       | **PNG**                  | **GIF**                |
| -------------------- | ------------- | ------------------------ | ---------------------- |
| Compression          | Lossy         | Non-lossy                | None/Lossy/Non-lossy   |
| Photographs?         | Yes           | Yes, but too big         | No                     |
| Line Drawings?       | No            | Yes                      | Depends on drawing     |
| Gradients?           | No            | Yes                      | No                     |
| Typical File Size    | Small         | Medium-Large             | Tiny                   |
| Quality              | Poor to Good  | Best                     | Good but limited color |
| Color Palette        | 16.7 million  | 256 TC **(note 1)**      | 256                    |
| Color Depth          | 24 bits       | 8-48 bits                | 8 bits                 |
| 1-Color Transparency | No            | Yes                      | Yes                    |
| alpha Transparency   | No            | Yes                      | No                     |
| Resolution Maximum   | 65536 x 65536 | 2 GP x 2 GP **(note 2)** | 65536 x 65536          |
| Total Pixels Max     | 4 GP          | 256 EP (note 3)          | 4 GP                   |

Note 1) 256 **teracolors**, an astonishing 280 million **million** colors.
Note 2) **GP** refers to **gigapixels**
Note 3) 256 **exapixels**, an incredibly large number: 3 followed by 23 zeros.



#### Adding images to web pages

---

The `img` element is a **self-closing tag** that is used to **load** an image to be **displayed** as **foreground image**.

The most important attributes of the `img` element are:

- **`src`  -  required**
  Specifies the browser where to resolve the image from where the URL can be:

  - `relative`
  - `root relative`
  - `absolute`

- **`alt` - optional**
  Always define this using detailed information about the image. This tag is uses as replacement for the image when it cannot be shown, is used by software to account for relevant disabilities and by SEO to index images.

- **`width` and `height`  -  optional**
  Only use these for a performance boost if the actual rendering dimensions of the image are known and not changed by the CSS.
  If these are defined but overriden by CSS it may lead to a performance hit.

  Really, just use CSS. Done.



#### Figure and Figcaption

---

In order to **semantically** add a caption to an image we use a `figure` element. The `figure` element:

> designates an item as a representation of information discussed in the content

and can contain all sorts of media. If only a textual caption is desired we can just use the `figcaption` nested inside the `figure` element:

```html
<figure>
  <img src="masthead.jpg" alt="Sunset over the forest" />
  <figcaption>The sun sets over the dense forest</figcaption>
</figure>
```

These elements have strong semantics and **are not used for any image haphazardly**!



#### Images as links

---

```html
<a href="url-of-link">
  <img src="url-of-image" alt="alt-text" />
</a>
```



#### Background images

---

Background can be added to any element, including the body element by applying the `background` and `bckground-image` properties.
CSS background images appear **behind the content of the element and it's descendatns that requested the image**!

