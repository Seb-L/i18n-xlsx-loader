# i18n-xlsx-loader

Directly import an XLSX file in your project as source for i18n locales messages.

This loader extract the locales messages from an Xlsx file then convert them in javascript exported objects named after the locale name.

Each sheet name is used as root attribute in the final locale js object.

**Example:**

**Sheet Name:** common

| key | fr | en |
| --- | --- | --- |
| sidebar.hideSidebar | Masquer la barre latérale | Hide Sidebar |

**Sheet Name:** login

| key | fr | en |
| --- | --- | --- |
| form.password | Mot de passe | Password |

will result to:

```javascript
export const fr = {
  common: {
    sidebar: {
      hideSidebar: 'Masquer la barre latérale'
    }
  },
  login: {
    form: {
      password: 'Mot de passe'
    }
  }
}

export const en = {
  common: {
    sidebar: {
      hideSidebar: 'Hide Sidebar'
    }
  },
  login: {
    form: {
      password: 'Password'
    }
  }
}
```

## Install

```bash
yarn add i18n-xlsx-loader -D
```

or

```bash
npm install i18n-xlsx-loader -D
```

## Usage

### Update your Webpack configuration

**In your `webpack.config.js` file:**

```javascript
const path = require('path')

{
  ...,
  module: {
    rules: [
      {
        test: path.resolve('locales/translations.xlsx'),
        use: {
          loader: 'i18n-xlsx-loader'
        },
      },
    ],
  },
  ...
}
```

**Using with webpack-extend (for a Nuxt app in this example):**

```javascript
const path = require('path')

{
  ...
  extend (config, { isDev, isClient }) {
    config.module.rules.push(
      {
        test: path.resolve('locales/translations.xlsx'),
        loader: 'i18n-xlsx-loader',
      }
    )
  }
  ...
}
```

### In the file you want to use your translations in

```javascript
import { fr, en } from '@/locales/translations.xlsx'
```
