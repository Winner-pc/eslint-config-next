import pluginNext from "@next/eslint-plugin-next"

/* eslint-disable */

/**
 * @type {import("typescript-eslint").ConfigWithExtends}
 */
const config = {
    plugins: {
        "@next/next": pluginNext,
    },

    settings: {

    },

    rules: {
        // @next/next
        ...pluginNext.configs.recommended.rules,
        "@next/next/no-duplicate-head": "off", // ❌ ☑️ ⚠️
    },
}

export default config
