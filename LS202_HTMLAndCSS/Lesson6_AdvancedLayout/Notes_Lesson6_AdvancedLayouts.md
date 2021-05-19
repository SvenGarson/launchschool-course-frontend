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