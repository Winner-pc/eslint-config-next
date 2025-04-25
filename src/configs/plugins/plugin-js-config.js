/* eslint-disable */

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const indent = {

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
const identifiers = {
    "camelcase": "warn",
    "no-underscore-dangle": "warn",
    "id-denylist": [
        "warn",
        "z", // -> zod
        "e", // -> err
        "error", // -> err
        "event", // -> evt
        "response", // -> res (but result otherwise)
        "reject", // -> rej
        "restProps", // -> rest
        "button", // -> btn
        "subTitle", // -> subtle
        "duplicate", // -> dupe
        "searchQuery", // -> searchTerm
        "data", // -> e.g. users, todos, movies
        "msg", // -> message
        "current", // -> curr
        "previous", // -> prev
    ], // ✨
    "id-length": [
        "warn",
        {
            properties: "never",
            exceptions: ["_"],
        },
    ],
    "no-shadow": [
        "warn",
        { hoist: "all" },
    ],

    "no-useless-rename": "error",
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const variables = {
    "init-declarations": "error",
    "no-multi-assign": "error",
    "no-useless-assignment": "off", // ❌ ⚠️ init-declarations
    "prefer-destructuring": "off", // ❌
    "prefer-const": [
        "error",
        { ignoreReadBeforeAssign: true }, // ⚠️ no-use-before-define
    ], // ☑️

    "sort-vars": "off", // ❌
    "vars-on-top": "off", // ❌
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const varKeyword = {
    "block-scoped-var": "error",
    "no-var": "off", // ❌ ☑️
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const literals = {
    "no-magic-numbers": "off", // ❌
    "no-multi-str": "error",
    "no-template-curly-in-string": "error",
    "no-throw-literal": "warn",
    "no-undef-init": "off", // ❌

    "no-undefined": "off", // ❌
    "no-useless-concat": "error",
    "prefer-template": "error",
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const arrays = {

}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const objects = {
    "dot-notation": "error",
    "no-extend-native": "error",
    "no-object-constructor": "error",
    "no-useless-computed-key": "error",
    "object-shorthand": [
        "error",
        "always",
        {
            avoidQuotes: true,
            avoidExplicitReturnArrows: true,
        },
    ], // ✨

    "prefer-object-spread": "error",
    "sort-keys": "off", // ❌
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const functions = {
    "consistent-return": "error",
    "func-name-matching": "warn",
    "func-names": ["warn", "as-needed"],
    "func-style": ["error", "declaration"],
    "new-cap": [
        "warn",
        { capIsNew: false },
    ],

    "no-extra-bind": "error",
    "no-loop-func": "error",
    "no-new-func": "error",
    "no-empty-function": [
        "error",
        { allow: ["arrowFunctions"] },
    ],
    "no-invalid-this": [
        "error",
        { capIsConstructor: false },
    ],

    "no-return-assign": ["error", "always"],
    "no-use-before-define": "warn",
    "no-useless-call": "error",
    "no-useless-return": "error",
    "no-param-reassign": [
        "warn",
        { props: true },
    ],

    "no-void": "off", // ❌
    "one-var": ["error", "never"],
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const arrows = {
    "arrow-body-style": "error", // ✨
    "array-callback-return": [
        "error",
        {
            checkForEach: true,
            allowVoid: true,
        },
    ],
    "prefer-arrow-callback": [
        "error",
        { allowNamedFunctions: true },
    ],
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const asynchronous = {
    "no-await-in-loop": "error",
    "prefer-promise-reject-errors": "warn",
    "require-atomic-updates": "error",
    "require-await": "off", // ❌
    "no-promise-executor-return": [
        "error",
        { allowVoid: true },
    ],
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const operators = {
    "logical-assignment-operators": ["error", "never"],
    "no-plusplus": "off", // ❌
    "no-extra-boolean-cast": [
        "error",
        { enforceForInnerExpressions: true },
    ], // ☑️
    "no-implicit-coercion": [
        "error",
        { disallowTemplateShorthand: true },
    ],
    "no-unsafe-optional-chaining": [
        "error",
        { disallowArithmeticOperators: true },
    ], // ☑️

    "operator-assignment": "error",
    "prefer-exponentiation-operator": "warn",
    "valid-typeof": [
        "error",
        { requireStringLiterals: true },
    ], // ☑️
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const logical = {
    "eqeqeq": "error",
    "no-eq-null": "error",
    "no-negated-condition": "warn",
    "no-self-compare": "error",
    "yoda": [
        "warn",
        "never",
        { exceptRange: true },
    ],
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const ternary = {
    "no-nested-ternary": "error",
    "no-ternary": "off", // ❌
    "no-unneeded-ternary": [
        "error",
        { defaultAssignment: false },
    ],
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const controlStatements = {
    "curly": "error", // ✨
    "no-cond-assign": ["error", "always"], // ☑️
    "no-lonely-if": "error",
    "no-else-return": [
        "error",
        { allowElseIf: false },
    ],
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const switchStatement = {
    "default-case": "error",
    "default-case-last": "error",
    "default-param-last": "error",
    "no-fallthrough": [
        "error",
        { allowEmptyCase: true }, // ✨
    ], // ☑️
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const loops = {
    "guard-for-in": "off", // ❌
    "no-continue": "off", // ❌
    "no-unmodified-loop-condition": "off", // ❌
    "no-unreachable-loop": "off", // ❌
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const imports = {
    "no-duplicate-imports": [
        "error",
        { includeExports: true },
    ],
    "sort-imports": [
        "warn",
        { ignoreDeclarationSort: true },
    ],
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const regex = {
    "no-div-regex": "warn",
    "prefer-named-capture-group": "warn",
    "prefer-regex-literals": [
        "error",
        { disallowRedundantWrapping: true },
    ],
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const debug = {
    "no-alert": "error",
    "no-console": "error",
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const comments = {
    "no-inline-comments": "warn",
    "no-warning-comments": "warn",
    "capitalized-comments": [
        "warn",
        "always",
        { ignoreConsecutiveComments: true },
    ],
}

/**
 * @type {import("typescript-eslint").ConfigWithExtends["rules"]}
 */
const misc = {
    "no-bitwise": "error",
    "no-caller": "error",
    "no-eval": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",

    "no-lone-blocks": "error",
    "no-new": "off", // ❌
    "no-new-wrappers": "error",
    "no-script-url": "error",
    "no-inner-declarations": [
        "error",
        "functions",
        { blockScopedFunctions: "disallow" },
    ],

    "no-sequences": "error",
    "strict": "error",
    "symbol-description": "error",
    "unicode-bom": "error",
}

/**
 * @see https://eslint.org/docs/latest/rules
 * @type {import("typescript-eslint").ConfigWithExtends}
 */
const config = {
    plugins: {

    },

    settings: {

    },

    rules: {
        // @eslint/js

        ...indent,
        ...quotes,
        ...semi,
        ...padding,

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

        ...misc,
    },
}

export default config
