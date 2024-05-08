# Changelog

## 0.2.3 - 8th May, 2024
+ **[Fix]** - Install the `styled-components` package as a `dependency` rather than a `devDependency` to fix issue with the library not rendering when installed in applications.

## 0.2.2 - 8th May, 2024
+ Update `Node` version to `20.13.0` within the `.nvmrc` config file and `package.json` file.
+ Components updated to include the `style` prop to allow inline CSS styles to be added.
+ Add the `label` element to the `Input` component to fix missing accessibility requirement and to render the `for` attribute on the `label` if the `name` and `label` props have values.

## 0.2.1 - 2nd May, 2024
+ `RELEASE.md` file renamed to `CHANGELOG.md`.
+ Install the `styled-components` package, version `6.1.9`, as a `devDependency`.
+ Apply default CSS styling to the `Button` and `Link` components using `styled-components`.

## 0.2.0 - 30th April, 2024
+ Update `react` and `react-dom` package versions from `18.3.0` to `18.3.1`.
+ Add the `prop-types` package as a `devDependency` to apply prop validation to the components.
+ `Image` component added to the component library to allow images to be rendered within an application and to allow images to be wrapped within a `Link` to open a URL when clicked.
+ `Heading` component added to the component library to allow heading elements between `<h1>` and `<h6>` to be rendered.
+ `Input` component added to the component library to allow text fields to be used within an application for different data types.

## 0.1.0 - 29th April, 2024
+ `Button` component added to the component library.
+ `Link` component added to the component library.
+ Updates to the `README.md` document to detail installation instructions and references to the components.