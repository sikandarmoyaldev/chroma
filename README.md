# Chroma (NPM Package)

This repository contains an npm package designed to bring vibrant, colorized messages to your console output. With this package, you can easily print messages in various colors, making your console logs more readable and visually appealing. It provides a `Chroma` class with methods for printing messages in different colors.

## Installation

You can install the package via `npm`. Run the following command:

```bash
npm install git+https://github.com/sikandarmoyaldev/chroma.git
```

## Usage

Once installed, you can import the `chroma` object from the package and use its methods to print messages in different colors. Here's an example:

```ts
import { chroma } from "chroma";

// Example usage
chroma.info("This is an informational message");
chroma.warn("This is a warning message");
chroma.error("This is an error message");
chroma.success("This is a success message");
chroma.secondary("This is a secondary message");

// Bold white text
chroma.boldWhite("This is a bold white message");
```

## Contributing

If you want to contribute to this project, feel free to fork the repository, make changes, and submit a pull request. Please make sure to review the [Contribution Guidelines](CONTRIBUTING.md) before contributing.
