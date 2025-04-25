import pluginReact from "eslint-plugin-react"

/* eslint-disable */

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const indent = {
    "react/jsx-indent": [
        "error",
        4,
        { indentLogicalExpressions: true },
    ],
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const quotes = {

}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const semi = {

}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const padding = {

}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const types = {
    "react/default-props-match-prop-types": "error",
    "react/no-unused-prop-types": "error",
    "react/prefer-read-only-props": "off", // ❌
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const identifiers = {
    "react/hook-use-state": "error",
    "react/jsx-handler-names": [
        "warn",
        {
            checkLocalVariables: true,
            checkInlineFunction: true,
        },
    ],
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const components = {
    "react/forward-ref-uses-ref": "error",
    "react/function-component-definition": "error",
    "react/no-multi-comp": "error",
    "react/no-namespace": "error",
    "react/no-unstable-nested-components": "error",
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const props = {
    "react/checked-requires-onchange-or-readonly": "error",
    "react/boolean-prop-naming": [
        "warn",
        { validateNested: true },
    ],
    "react/destructuring-assignment": [
        "error",
        "always",
        { destructureInSignature: "always" },
    ],
    "react/jsx-boolean-value": [
        "error",
        "never",
        { assumeUndefinedIsFalse: true },
    ],
    "react/jsx-key": [
        "error",
        {
            checkFragmentShorthand: true,
            checkKeyMustBeforeSpread: true,
            warnOnDuplicates: true,
        },
    ], // ☑️

    "react/jsx-props-no-spreading": "off", // ❌
    "react/jsx-props-no-spread-multi": "error",
    "react/no-danger": "warn",
    "react/no-object-type-as-default-prop": "error",
    "react/no-unknown-property": [
        "error",
        { requireDataLowercase: true },
    ], // ☑️

    "react/require-default-props": "off", // ❌
    "react/style-prop-object": "error",
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const attributes = {
    "react/button-has-type": "error",
    "react/iframe-missing-sandbox": "error",
    "react/no-invalid-html-attribute": "error",
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const jsx = {
    "react/jsx-no-constructed-context-values": "error",
    "react/jsx-no-literals": "off", // ❌
    "react/jsx-filename-extension": [
        "error",
        {
            allow: "as-needed",
            extensions: [".tsx"],
        },
    ],
    "react/jsx-no-bind": [
        "error",
        {
            allowArrowFunctions: true,
            allowFunctions: true,
        },
    ],
    "react/jsx-no-leaked-render": [
        "error",
        { validStrategies: ["ternary"] }, // ✨
    ],

    "react/jsx-no-script-url": "error",
    "react/no-adjacent-inline-elements": "error",
    "react/no-array-index-key": "warn",
    "react/void-dom-elements-no-children": "error",
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const fragments = {
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-fragments": ["error", "element"], // ✨
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const misc = {
    "react/no-this-in-sfc": "error",
}

/**
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules
 * @type {import("typescript-eslint").ConfigWithExtends}
 */
const config = {
    plugins: {
        "react": pluginReact,
    },

    settings: {
        "react": {
            version: "detect",
        },
    },

    rules: {
        // react

        ...pluginReact.configs.recommended.rules,

        ...indent,
        ...quotes,
        ...semi,
        ...padding,
        ...types,

        ...identifiers,
        ...components,
        ...props,
        ...attributes,

        ...jsx,
        ...fragments,
        ...misc,
    },
}

export default config
