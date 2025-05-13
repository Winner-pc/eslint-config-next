import tseslint from "typescript-eslint"
import { globalIgnores } from "eslint/config"
import globals from "globals"

import pluginJs from "@eslint/js"
import pluginReact from "eslint-plugin-react"

import pluginJsConfig from "./plugin-js-config"
import pluginReactConfig from "./plugin-react-config"
import pluginStylisticConfig from "./plugin-stylistic-config"
import miscConfig from "./misc-config"

import pluginNextConfig from "./plugin-next-config"

/* eslint-disable */

/**
 * @type {import("typescript-eslint").InfiniteDepthConfigWithExtends[]}
 */
const baseConfig = [
    pluginJs.configs.recommended,
    tseslint.configs.recommended,
    globalIgnores(
        [
            "coverage/",
            ".next/",
            "out/",
            "build/",
            "dist/",
            "dist-ssr/",
            "next-env.d.ts",
        ],
    ),
    {
        languageOptions: {
            parserOptions: pluginReact.configs.recommended.parserOptions,
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2022,
            },
        },
    },
]

/**
 * @type {import("typescript-eslint").InfiniteDepthConfigWithExtends[]}
 */
const combinePluginConfigs = [
    pluginJsConfig,
    pluginReactConfig,
    pluginStylisticConfig,
    miscConfig,
]

/**
 * @type {import("typescript-eslint").InfiniteDepthConfigWithExtends[]}
 */
const combinePluginConfigsWithNext = [
    ...combinePluginConfigs,
    pluginNextConfig,
]

const TARGET_EXTENSIONS_FALLBACK = "**/*.{ts,tsx}"

/**
 * @type {import("typescript-eslint").ConfigWithExtends["files"]}
 */
const TARGET_EXTENSIONS = [process.env.TARGET_EXTENSIONS ?? TARGET_EXTENSIONS_FALLBACK]

export const reactConfig = tseslint.config(
    ...baseConfig,
    ...combinePluginConfigs.map(config => ({
        files: TARGET_EXTENSIONS,
        ...config,
    })),
)

export default tseslint.config(
    ...baseConfig,
    ...combinePluginConfigsWithNext.map(config => ({
        files: TARGET_EXTENSIONS,
        ...config,
    })),
)
