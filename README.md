# @winnerpc/eslint-config-next

Reusable ESLint configuration for Next.js projects.

> [!NOTE]
> This configuration uses the Allman brace style approach _(opening braces on a new line)_.

This package provides a consistent ESLint setup for [Next.js](#for-nextjs-projects-default-export) and [React](#for-react-projects-react-config) projects that can be easily shared across multiple projects.

---

## 📦 Installation

> [!IMPORTANT]
> ESLint version `9.25.1` is required as a peer dependency. Please ensure it is installed in your project's `devDependencies`.
>
> Peer Dependencies:
>
> - `eslint@9.25.1`
> - `next@14.2.28`
> - `react@18.x`
> - `typescript@5.8.x`

```bash
npm install --save-dev --save-exact @winnerpc/eslint-config-next eslint@9.25.1
```

```bash
yarn add --dev --exact @winnerpc/eslint-config-next eslint@9.25.1
```

```bash
pnpm add --save-dev --save-exact @winnerpc/eslint-config-next eslint@9.25.1
```

---

## 🚀 Usage

### 🔧 Basic Usage

> [!IMPORTANT]
> For VS Code users: Ensure you have the ESLint extension installed and that your VS Code settings are configured to enable ESLint's flat config support. This typically involves setting `"eslint.useFlatConfig": true` in your VS Code `settings.json` file.

To use the shared configuration, create an `eslint.config.js` file in the root of your project. Next, depending on your project type, paste the appropriate export from the options below:

#### For Next.js Projects (Default Export)

```js
export { default } from "@winnerpc/eslint-config-next"
```

#### For React Projects (React Config)

If you're working on a pure React project **(not using Next.js)**, use the `reactConfig` export:

```js
export { reactConfig as default } from "@winnerpc/eslint-config-next"
```

#### Recommended Project Structure

Here's a simple example of how your project structure might look:

```
my-project/
├── node_modules/
├── src/
│   └── index.tsx
├── eslint.config.js    # Paste the appropriate export for your project type here 👈
└── package.json
```

---

## 🗂️ Files and Extensions

### 🎯 Targeted Extensions

The configuration automatically applies to the following file extensions:

```
**/*.{js,mjs,cjs,ts,jsx,tsx}
```

### 🚫 Ignored Paths

The following directories and files are automatically ignored:

```
coverage/
.next/
out/
build/
dist/
dist-ssr/
next-env.d.ts
```

---

## 👍 Useful Scripts

Add these scripts to your `package.json` for easier usage:

```json
{
    "scripts": {
        "lint": "eslint .",
        "lint:inspect": "eslint --inspect-config"
    }
}
```

Lint the entire project using ESLint:

```bash
npm run lint
# Or Yarn
yarn lint
# Or pnpm
pnpm lint
```

Inspect the ESLint configuration:

```bash
npm run lint:inspect
# Or Yarn
yarn lint:inspect
# Or pnpm
pnpm lint:inspect
```

Each command above can be run in the terminal from the root of your project. These scripts help automate repetitive tasks and ensure consistency across your codebase.

---

## 🤝 Contributing

Contributions are welcome! If you have ideas, improvements, or run into any issues, feel free to open an [issue](https://github.com/Winner-pc/eslint-config-next/issues).

---

## 🔗 Links

- [npm](https://www.npmjs.com/package/@winnerpc/eslint-config-next)
- [GitHub](https://github.com/Winner-pc/eslint-config-next)

---

## 📃 License

MIT © [Winner-pc](https://github.com/Winner-pc)
