# React Component Library
An open-source `React Component Library` written in `JavaScript` and released under the `GNU GPL-3.0` licence.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## NPM Package
The component library can be installed using `npm` here: `https://www.npmjs.com/package/@hackdanismo/react-component-library`

## Install
To install the component library in your `React` project, use `npm` to install the package as a `dependency`. Once installation is completed, the component library can be located within the `node_modules` folder and listed as a `dependency` within the `package.json` file.

```shell
$ npm install @hackdanismo/react-component-library
```

## Components
Once the `component library` is installed, the components can then be included within your application. 

### Import Components
To import a single component from the library into your application and/or custom components, use the `import` statement:

```javascript
// Import the Button component from the component library
import { Button } from "@hackdanismo/react-component-library"
```

To import multiple components:

```javascript
// Import the Button and Link components from the component library
import { Button, Link } from "@hackdanismo/react-component-library"
```

### Button
To import the component:

```javascript
import { Button } from "@hackdanismo/react-component-library"
```

`Button` component `props`:

+ `to` - pass a URL to render the `Button` as a `Link`.
+ `type` - set the type attribute to either be `button` (default), `submit` or `reset`.
+ `className` - pass classes to apply styling into the component.
+ `onClick` - call a function when the `Button` component is pressed/clicked. 
+ `isDisabled` - boolean to set the `Button` to a disabled state.
+ `openAsTab` - boolean to open a `Button` as a `Link` in a new browser window/tab when clicked.
+ `children` - pass a value or element to render as a label.
+ `...others` - additional props.

```javascript
// Default - will default to include the type="button" attribute
<Button>Lorem ipsum</Button>

// Button as Links
<Button to="https://example.com">Lorem ipsum</Button>
<Button to="https://example.com" openAsTab>Lorem ipsum</Button>

// Others
<Button type="submit">Lorem ipsim</Button>
<Button className="foo bar">Lorem ipsum</Button>
<Button isDisabled>Lorem ipsum</Button>
<Button onClick={myFunction}>Lorem ipsum</Button>
```

### Image
To import the component:

```javascript
import { Image } from "@hackdanismo/react-component-library"
```

`Image` component `props`:

to, openAsTab, src, width, height, alt, ...others

+ `to` - pass a URL to the `Link` component via the `Image` component to open a URL when the image is clicked.
+ `openAsTab` - boolean to open a `Link` in a new browser window/tab when clicked.
+ `src` - the source/file path/URL of the image to be rendered (required).
+ `width` - set the width of the image (required).
+ `height` - set the height of the image (required).
+ `alt` - set the alternative text used to describe the image and aid accessibility when using screen readers (required).
+ `className` - pass classes to apply styling into the component.
+ `...others` - additional props.

```javascript
// Default
<Image src="images/image-one.jpg" height={100} width={100} alt="Example image description here." />

// Pass classes to the component
<Image src="images/image-one.jpg" className="foo bar" height={100} width={100} alt="Example image description here." />

// Image that opens a link when clicked
<Image to="https://example.com" src="images/image-one.jpg" height={100} width={100} alt="Example image description here." />
// Image that opens a link when clicked in a new browser tab/window
<Image to="https://example.com" src="images/image-one.jpg" height={100} width={100} alt="Example image description here." openAsTab />
```

### Link
To import the component:

```javascript
import { Link } from "@hackdanismo/react-component-library"
```

`Link` component `props`:

+ `to` - pass a URL to the `Link` component to open when clicked.
+ `role` - used for when a `Button` is being rendered as a `Link`. This is usually set to `"button"`.
+ `className` - pass classes to apply styling into the component.
+ `openAsTab` - boolean to open a `Link` in a new browser window/tab when clicked.
+ `children` - pass a value or element to render as a label.
+ `...others` - additional props.

```javascript
// Default - external link
<Link to="https://example.com">Lorem ipsum</Link>
// Default - internal link
<Link to="/about/">Lorem ipsum</Link>

// Others
<Link to="https://example.com" className="foo bar">Lorem ipsum</Link>
<Link to="https://example.com" openAsTab>Lorem ipsum</Link>
```