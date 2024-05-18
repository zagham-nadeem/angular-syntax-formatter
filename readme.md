# Prettier Angular Modifiers Plugin

This is a custom Prettier plugin for formatting Angular code by adding public/private modifiers and return types to functions and variables.

## Installation

To use this plugin in your Angular project, follow these steps:

1. Install Prettier and the plugin as dependencies:

   ```bash
   npm install angular-syntax-formatter
   npm install prettier @babel/parser @babel/traverse @babel/generator --save-dev
   ```

2. Create a `prettier.config.js` file in the root directory of your project:

   ```javascript
   // prettier.config.js
   module.exports = {
     plugins: ["angular-syntax-formatter"],
     parser: "typescript"
   };
   ```

## Usage

Once you've installed the plugin and configured Prettier, you can format your Angular code using Prettier as usual. For example:

```bash
npx prettier --write src/**/*.ts
```

This command formats all TypeScript files (`*.ts`) in the `src` directory and its subdirectories.

## Features

- Adds public/private modifiers to functions and variables
- Adds return types to functions and variables

## Example

Before formatting:

```typescript
// Before formatting
class Example {
  foo;

   bar() {
    return 42;
  }
}
```

After formatting:

```typescript
// After formatting
class Example {
  public foo: string;

  private bar(): number {
    return 42;
  }
}
```

## Support and Contribution

If you encounter any issues or have suggestions for improvement, feel free to [open an issue](https://github.com/zagham-nadeem/angular-syntax-formatter/issues) on GitHub.

Pull requests are also welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
