import pluginReactHooks from "eslint-plugin-react-hooks"
import pluginReactRefresh from "eslint-plugin-react-refresh"
import pluginJsxA11y from "eslint-plugin-jsx-a11y"

/* eslint-disable */

/**
 * @type {import("typescript-eslint").ConfigWithExtends}
 */
const config = {
    plugins: {
        "react-hooks": pluginReactHooks,
        "react-refresh": pluginReactRefresh,
        "jsx-a11y": pluginJsxA11y,
    },

    settings: {

    },

    rules: {
        // react-hooks
        ...pluginReactHooks.configs.recommended.rules,

        // react-refresh
        "react-refresh/only-export-components": [
            "warn",
            { allowExportNames: ["metadata"] },
        ],

        // jsx-a11y
        ...pluginJsxA11y.configs.recommended.rules,
    },
}

export default config
