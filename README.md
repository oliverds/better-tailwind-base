# Better Tailwind Base

Better Tailwind Base is a <b>minimal baseline stylesheet</b> for any web project. It includes a basic reset and default styling for all HTML5 elements (which you can see live at <a href="https://vanillacss.com">vanillacss.com</a>).

## Usage

If you want to use this CSS directly in your project, simply download the stylesheet below and include the following in your HTML `head` section:

```
<link rel="stylesheet" href="vanilla.css">
```

### Start the Tailwind CLI build process

Run the CLI tool to scan your template files for classes and build your CSS.

```
npx tailwindcss -i ./src/better-base.css -o ./dist/better-base.css --watch
```
