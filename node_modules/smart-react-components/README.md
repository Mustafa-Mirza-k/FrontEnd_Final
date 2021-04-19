## Smart React Components
React UI library which provides a wide range of editable Styled and React components.

### Documentation
Visit [the documentation page](https://cevadtokatli.github.io/smart-react-components) for more information and demo about SRC.

### Installation
SRC is available as a package on NPM for use with a module bundler.

```
# NPM
$ npm install smart-react-components

# Yarn
$ yarn add smart-react-components
```

### Features
* Wide variety of editable ready to use Styled and React components.
* All components bundled separately.
* Customizable theme.
* Server side rendering.
* Written in TypeScript.
* I18n support.

### Environment Support
<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_24x24.png" title="Google Chrome" /> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_24x24.png" title="Mozilla Firefox" /> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_24x24.png" title="Opera" /> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_24x24.png" title="Safari" /> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_24x24.png" title="Edge" /> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_24x24.png" title="Internet Explorer" />  | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/yandex/yandex_24x24.png" title="Yandex" />  | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_24x24.png" title="Electron" />
:-: | :-: | :-: | :-: | :-: | :-: | :-: | :-:
:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :x: | :white_check_mark: | :white_check_mark:

### Links
* [Theme](https://cevadtokatli.github.io/smart-react-components?page=theme)
* [Default Values](https://cevadtokatli.github.io/smart-react-components?page=default-values)
* [Styled Properties](https://cevadtokatli.github.io/smart-react-components?page=styled-properties)
* [Server Side Rendering](https://cevadtokatli.github.io/smart-react-components?page=server-side-rendering)
* [Alert](https://cevadtokatli.github.io/smart-react-components?page=components/alert)
* [Badge](https://cevadtokatli.github.io/smart-react-components?page=components/badge)
* [Breadcrumb](https://cevadtokatli.github.io/smart-react-components?page=components/breadcrumb)
* [Button](https://cevadtokatli.github.io/smart-react-components?page=components/button)
* [Color Picker](https://cevadtokatli.github.io/smart-react-components?page=components/color-picker)
* [Date Picker](https://cevadtokatli.github.io/smart-react-components?page=components/date-picker)
* [Dropdown](https://cevadtokatli.github.io/smart-react-components?page=components/dropdown)
* [Element](https://cevadtokatli.github.io/smart-react-components?page=components/element)
* [Fixed-Box](https://cevadtokatli.github.io/smart-react-components?page=components/fixed-box)
* [Form](https://cevadtokatli.github.io/smart-react-components?page=components/form)
* [Grid](https://cevadtokatli.github.io/smart-react-components?page=components/grid)
* [Loading](https://cevadtokatli.github.io/smart-react-components?page=components/loading)
* [Modal](https://cevadtokatli.github.io/smart-react-components?page=components/modal)
* [Overlay](https://cevadtokatli.github.io/smart-react-components?page=components/overlay)
* [Pagination](https://cevadtokatli.github.io/smart-react-components?page=components/pagination)
* [Pop-up](https://cevadtokatli.github.io/smart-react-components?page=components/pop-up)
* [Popover](https://cevadtokatli.github.io/smart-react-components?page=components/popover)
* [Progress Bar](https://cevadtokatli.github.io/smart-react-components?page=components/progress-bar)
* [Router](https://cevadtokatli.github.io/smart-react-components?page=components/router)
* [Table](https://cevadtokatli.github.io/smart-react-components?page=components/table)
* [Tooltip](https://cevadtokatli.github.io/smart-react-components?page=components/tooltip)
* [Transition](https://cevadtokatli.github.io/smart-react-components?page=components/transition)
* [Wave Effect](https://cevadtokatli.github.io/smart-react-components?page=components/wave-effect)

### Usage
After attaching the SRC theme to the Styled Components theme context, you are ready to use all the Styled and React components of SRC.
```
import React from "react"
import {render} from "react-dom"
import {ThemeProvider} from "styled-components"
import srcTheme from "smart-react-components/theme"
import H1 from "smart-react-components/element/H1"

render(
  <ThemeProvider theme={{src:srcTheme}}>
    <H1 color="primary">Hello World!</H1>
  </ThemeProvider>,
  document.getElementById("app")
)
```

### License
SRC is provided under the [MIT License](https://opensource.org/licenses/MIT).