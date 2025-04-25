import pluginStylistic from "@stylistic/eslint-plugin"

/* eslint-disable */

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const indent = {
    "@stylistic/indent": "error",
    "@stylistic/indent-binary-ops": ["error", 4],
    "@stylistic/no-mixed-spaces-and-tabs": "error",
    "@stylistic/no-tabs": "error",
    "@stylistic/jsx-indent-props": [
        "error",
        { ignoreTernaryOperator: true },
    ],
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const quotes = {
    "@stylistic/jsx-quotes": "error",
    "@stylistic/quotes": "error", // ✨
    "@stylistic/quote-props": [
        "error",
        "consistent-as-needed",
        { keywords: true },
    ],
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const semi = {
    "@stylistic/no-extra-semi": "error",
    "@stylistic/semi-spacing": "error",
    "@stylistic/semi-style": "error",
    "@stylistic/semi": [
        "error",
        "never",
        { beforeStatementContinuationChars: "always" }, // ✨
    ],
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const padding = {
    "@stylistic/eol-last": "error",
    "@stylistic/padded-blocks": ["error", "never"],
    "@stylistic/jsx-newline": [
        "error",
        { prevent: true },
    ],
    "@stylistic/no-multiple-empty-lines": [
        "error",
        {
            max: 1,
            maxEOF: 1,
            maxBOF: 0,
        },
    ],
    "@stylistic/padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "*", next: "return" },
        { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
        { blankLine: "any",    prev: ["const", "let", "var"], next: ["const", "let", "var"] },
        { blankLine: "always", prev: "directive", next: "*" },
        { blankLine: "any",    prev: "directive", next: "directive" },
        { blankLine: "always", prev: ["case", "default"], next: "*" },
        { blankLine: "always", prev: "*", next: ["enum", "interface", "type"] },
    ], // ✨
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const types = {
    "@stylistic/type-annotation-spacing": "error",
    "@stylistic/type-generic-spacing": "error",
    "@stylistic/type-named-tuple-spacing": "error",
    "@stylistic/member-delimiter-style": [
        "error",
        {
            multiline: { delimiter: "none" },
            singleline: { delimiter: "comma" },
        },
    ], // ✨
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const identifiers = {

}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const variables = {
    "@stylistic/one-var-declaration-per-line": "error",
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const varKeyword = {

}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const literals = {
    "@stylistic/no-floating-decimal": "error",
    "@stylistic/template-curly-spacing": "error",
    "@stylistic/template-tag-spacing": "error",
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const arrays = {
    "@stylistic/array-bracket-newline": [
        "error",
        {
            multiline: true,
            minItems: 3,
        },
    ],
    "@stylistic/array-bracket-spacing": [
        "error",
        "never",
        { arraysInArrays: true },
    ],
    "@stylistic/array-element-newline": [
        "error",
        {
            multiline: true,
            minItems: 3,
        },
    ],
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const objects = {
    "@stylistic/computed-property-spacing": "error",
    "@stylistic/dot-location": ["error", "property"],
    "@stylistic/key-spacing": "error",
    "@stylistic/newline-per-chained-call": "error",
    "@stylistic/no-whitespace-before-property": "error",

    "@stylistic/object-curly-spacing": ["error", "always"],
    "@stylistic/object-property-newline": "error",
    "@stylistic/object-curly-newline": [
        "error",
        {
            multiline: true,
            minProperties: 2,
            consistent: true,
        },
    ],
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const functions = {
    "@stylistic/func-call-spacing": "error",
    "@stylistic/function-call-argument-newline": ["error", "consistent"],
    "@stylistic/function-paren-newline": ["error", "multiline-arguments"],
    "@stylistic/jsx-function-call-newline": "error",
    "@stylistic/space-before-function-paren": ["error", "never"],

    "@stylistic/wrap-iife": [
        "error",
        "inside",
        { functionPrototypeMethods: true },
    ],
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const arrows = {
    "@stylistic/arrow-parens": ["error", "as-needed"], // ✨
    "@stylistic/arrow-spacing": "error",
    "@stylistic/implicit-arrow-linebreak": "error",
    "@stylistic/no-confusing-arrow": "warn",
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const asynchronous = {

}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const operators = {
    "@stylistic/no-mixed-operators": "warn",
    "@stylistic/operator-linebreak": ["error", "before"],
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const logical = {

}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const ternary = {
    "@stylistic/multiline-ternary": ["error", "always-multiline"],
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const controlStatements = {
    "@stylistic/nonblock-statement-body-position": "off", // ❌ ✨
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const switchStatement = {
    "@stylistic/switch-colon-spacing": "error",
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const loops = {

}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const imports = {

}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const regex = {
    "@stylistic/wrap-regex": "warn",
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const debug = {

}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const comments = {
    "@stylistic/line-comment-position": "warn",
    "@stylistic/multiline-comment-style": ["error", "separate-lines"],
    "@stylistic/lines-around-comment": [
        "error",
        {
            beforeLineComment: true,
            allowBlockStart: true,
        },
    ],
    "@stylistic/spaced-comment": [
        "error",
        "always",
        {
            block: { balanced: true },
        },
    ],
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const jsx = {
    "@stylistic/jsx-child-element-spacing": "warn",
    "@stylistic/jsx-closing-bracket-location": ["error", "line-aligned"],
    "@stylistic/jsx-closing-tag-location": "error",
    "@stylistic/jsx-curly-brace-presence": [
        "error",
        {
            props: "always", // ✨
            propElementValues: "always", // ⚠️
        },
    ],
    "@stylistic/jsx-curly-newline": [
        "error",
        { singleline: "forbid" },
    ],

    "@stylistic/jsx-equals-spacing": "error",
    "@stylistic/jsx-first-prop-new-line": ["error", "multiline"],
    "@stylistic/jsx-max-props-per-line": "error",
    "@stylistic/jsx-one-expression-per-line": "error", // ✨
    "@stylistic/jsx-curly-spacing": [
        "error",
        { children: true },
    ],

    "@stylistic/jsx-pascal-case": "error",
    "@stylistic/jsx-props-no-multi-spaces": "error",
    "@stylistic/jsx-self-closing-comp": "error",
    "@stylistic/jsx-sort-props": [
        "warn",
        {
            callbacksLast: true,
            shorthandLast: true,
            noSortAlphabetically: true,
            reservedFirst: true,
        },
    ],
    "@stylistic/jsx-tag-spacing": [
        "error",
        { beforeClosing: "never" },
    ],

    "@stylistic/jsx-wrap-multilines": [
        "error",
        {
            declaration: "parens-new-line",
            assignment: "parens-new-line",
            return: "parens-new-line",
            arrow: "parens-new-line",
            condition: "parens-new-line",
            logical: "parens-new-line",
            prop: "parens-new-line",
            propertyValue: "parens-new-line",
        },
    ],
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const brackets = {
    "@stylistic/brace-style": ["error", "allman"], // ✨
    "@stylistic/space-in-parens": "error",
    "@stylistic/no-extra-parens": [
        "warn",
        "all",
        {
            nestedBinaryExpressions: false,
            ignoreJSX: "multi-line", // ⚠️ jsx-wrap-multilines
            enforceForArrowConditionals: false, // ⚠️ no-confusing-arrow
        },
    ],
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const comma = {
    "@stylistic/comma-dangle": ["error", "always-multiline"],
    "@stylistic/comma-spacing": "error",
    "@stylistic/comma-style": "error",
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const spacing = {
    "@stylistic/block-spacing": "error",
    "@stylistic/keyword-spacing": "error",
    "@stylistic/no-trailing-spaces": "error",
    "@stylistic/rest-spread-spacing": "error",
    "@stylistic/no-multi-spaces": [
        "error",
        {
            exceptions: { Property: false },
        },
    ],

    "@stylistic/space-before-blocks": "error",
    "@stylistic/space-infix-ops": "error",
    "@stylistic/space-unary-ops": "error",
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const misc = {
    "@stylistic/linebreak-style": "error", // ✨
    "@stylistic/new-parens": "error",
}

/**
 * @see https://eslint.style/packages/default
 * @type {import("typescript-eslint").ConfigWithExtends}
 */
const config = {
    plugins: {
        "@stylistic": pluginStylistic,
    },

    settings: {

    },

    rules: {
        // @stylistic

        ...indent,
        ...quotes,
        ...semi,
        ...padding,
        ...types,

        ...identifiers,
        ...variables,
        ...varKeyword,
        ...literals,
        ...arrays,
        ...objects,

        ...functions,
        ...arrows,
        ...asynchronous,

        ...operators,
        ...logical,
        ...ternary,
        ...controlStatements,
        ...switchStatement,
        ...loops,

        ...imports,
        ...regex,
        ...debug,
        ...comments,

        ...jsx,
        ...brackets,
        ...comma,
        ...spacing,
        ...misc,
    },
}

export default config
