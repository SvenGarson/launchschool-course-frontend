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

  Really, just use CSS to size the images.



#### Figure and Figcaption

---

The `figure` element typically contains some type of media (image; audio; table; code-snippets; etc.) and an optional caption for that bit of content using the `figcaption` element which stands for `figure caption`. The caption though is optional.

The content of a `figure` element should be referenced in the surrounding text/content for illustration purposes and it's content should be self-contained. `figure` elements are **not to be used as mere decoration** but it can be used if we desire to caption an image for example, because the `figure` semantically relates the caption to the media it follows.

```html
<figure>
  <img src="masthead.jpg" alt="Sunset over the forest" />
  <figcaption>The sun sets over the dense forest</figcaption>
</figure>
```



#### Images as links

---

```html
<a href="url-of-link">
  <img src="url-of-image" alt="alt-text" />
</a>
```



#### Background images

---

Background can be added to any element, including the body element by applying the `background` and `background-image` properties.
CSS background images appear **behind the content of the element and it's descendants** that requested the image!

