# React Component Library
An open-source `React Component Library` written in `JavaScript` and released under the `GNU GPL-3.0` licence.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

[![npm version](https://badge.fury.io/js/@hackdanismo%2Freact-component-library.svg)](https://badge.fury.io/js/@hackdanismo%2Freact-component-library)

## NPM Package
The component library can be installed using `npm` here: `https://www.npmjs.com/package/@hackdanismo/react-component-library`

## Development
Follow these steps to clone the repository and begin development.

### Clone the Repository
To clone the repository, open the terminal and use `git` to clone the repository locally. You must have `git` installed on your machine to do this.

```shell
$ git clone git@github.com:hackdanismo/react-component-library.git
```

### Install
To install the component library in your `React` project, use `npm` to install the package as a `dependency`. Once installation is completed, the component library can be located within the `node_modules` folder and listed as a `dependency` within the `package.json` file.

```shell
$ npm install @hackdanismo/react-component-library
```

### Run

Once installed, use `nvm`, also referred to as `Node Version Manager`, to set the correct `Node` version. You should have `nvm` installed before running this step.

```shell
$ nvm use
```

Commit any changes made to the code and run the `build` to ensure everything works as expected:

```shell
$ npm run build
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
+ `style` - add inline CSS styling to the component.
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
<Button style={{ border: `1px solid black` }}>Lorem ipsum</Button>
<Button isDisabled>Lorem ipsum</Button>
<Button onClick={myFunction}>Lorem ipsum</Button>
```

### Heading
To import the component:

```javascript
import { Heading } from "@hackdanismo/react-component-library"
```

`Heading` component `props`:

+ `level` - set the heading level between `1` and `6` to render `<h1>` to `<h6>` heading elements.
+ `className` - pass classes to apply styling into the component.
+ `style` - add inline CSS styling to the component.
+ `...others` - additional props.

```javascript
// Default - this will default to a <h1> element if no level prop is used
<Heading>Lorem ipsim</Heading>

// Heading set to render as a <h3> element
<Heading level={3}>Lorem ipsim</Heading>
// Add class names to the heading
<Heading level={3} className="foo bar">Lorem ipsim</Heading>
// Add inline styling
<Heading level={3} style={{ border: `1px solid black` }}>Lorem ipsim</Heading>
```

### Image
To import the component:

```javascript
import { Image } from "@hackdanismo/react-component-library"
```

`Image` component `props`:

+ `to` - pass a URL to the `Link` component via the `Image` component to open a URL when the image is clicked.
+ `openAsTab` - boolean to open a `Link` in a new browser window/tab when clicked.
+ `src` - the source/file path/URL of the image to be rendered (required).
+ `width` - set the width of the image (required).
+ `height` - set the height of the image (required).
+ `alt` - set the alternative text used to describe the image and aid accessibility when using screen readers (required).
+ `className` - pass classes to apply styling into the component.
+ `style` - add inline CSS styling to the component.
+ `...others` - additional props.

```javascript
// Default
<Image src="images/image-one.jpg" height={100} width={100} alt="Example image description here." />

// Pass classes to the component
<Image src="images/image-one.jpg" className="foo bar" height={100} width={100} alt="Example image description here." />
// Add inline styling
<Image src="images/image-one.jpg" style={{ border: `1px solid black` }} height={100} width={100} alt="Example image description here." />

// Image that opens a link when clicked
<Image to="https://example.com" src="images/image-one.jpg" height={100} width={100} alt="Example image description here." />
// Image that opens a link when clicked in a new browser tab/window
<Image to="https://example.com" src="images/image-one.jpg" height={100} width={100} alt="Example image description here." openAsTab />
```

### Input
To import the component:

```javascript
import { Input } from "@hackdanismo/react-component-library"
```

`Input` component `props`:

+ `type` - set the data type for the field: `"date"`, `"datetime-local"`, `"email"`, `"hidden"`, `"month"`, `"number"` `"password"`, `"search"`, `"tel"`, `"text"` (default), `"time"`, `"url"` and `"week"`.
+ `className` - pass classes to apply styling into the component.
+ `style` - add inline CSS styling to the component.
+ `id` - used as a value to connect to a `<label>` element when using the `for` attribute in a form label.
+ `name` - used as a value during form submissions to submit form data.
+ `placeholder` - provides a hint to the user about the data that should be entered into the field.
+ `minlength` - the minimum string length.
+ `maxlength` - the maximum string length.
+ `max` - the greatest value in the range of permitted values.
+ `size` - specified how much of the input is shown.
+ `value` - the initial value within the input.
+ `isRequired` - boolean to set the field to be `required`. This will add the `required` attribute.
+ `setAutocapitalize` - boolean to set the field to have the `autocapitalize` attribute which controls automatic capitilization in the inputting text. Excludes the `url`, `email` and `password` input types.
+ `setAutocomplete` - boolean to set the field to have the `autocomplete` attribute which provides a hint for the form autofill feature.
+ `...others` - additional props.

```javascript
// Default - this will default to having the type of "text"
<Input />

// Set a different type value
<Input type="tel" />

// Set values for props
<Input id="example" name="example" minlength={10} maxlength={20} value="Lorem ipsum" placeholder="Lorem ipsum" />
<Input isRequired setAutocapitalize setAutocomplete />
<Input className="foo bar" style={{ border: `1px solid black` }} />
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
+ `style` - add inline CSS styling to the component.
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
<Link to="https://example.com" style={{ border: `1px solid black` }}>Lorem ipsum</Link>
<Link to="https://example.com" openAsTab>Lorem ipsum</Link>
```