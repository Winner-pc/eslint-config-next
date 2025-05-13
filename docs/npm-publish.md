# NPM Package Publish Cheatsheet

A handy reference for publishing and managing your [npm package](https://www.npmjs.com/package/@winnerpc/eslint-config-next).

## Table of Contents

- [Authentication & Validation](#authentication--validation)
- [Inspect Package Before Publishing](#inspect-package-before-publishing)
- [Publish Package](#publish-package)

---

## Authentication & Validation

### Add User to NPM

```bash
npm adduser
```

Logs you into the npm registry.

### Check Login Status

```bash
npm whoami
```

Verifies if you're logged in correctly.

---

## Inspect Package Before Publishing

### Pack Locally

```bash
npm pack
```

Bundles your package into a `.tgz` file for a quick preview before publishing.

### View Package Info on Registry

```bash
npm info
```

Shows metadata about a [package](https://www.npmjs.com/package/@winnerpc/eslint-config-next) already on npm.

---

## Publish Package

### Default Publish

```bash
npm publish
```

Publishes the package using the default tag (usually `latest`).

### Publish with Specific Tag

```bash
npm publish --tag rc
# Or latest
npm publish --tag latest
# Or stable
npm publish --tag stable
```

Use tags for managing release channels (e.g., `rc` for release candidates).

### Add Dist Tag to Version

```bash
npm dist-tag add @winnerpc/eslint-config-next@0.0.1 latest
```

Associates a tag with a specific version.

---

Happy publishing! 🚀
