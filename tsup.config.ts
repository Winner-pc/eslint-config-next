import "dotenv/config"

import { defineConfig } from "tsup"

export default defineConfig({
    format: ["esm"],
    entry: ["./src/index.ts"],
    dts: true,
    shims: true,
    skipNodeModulesBundle: true,
    minify: true,
    clean: true,
    env: {
        TARGET_EXTENSIONS: process.env.TARGET_EXTENSIONS!,
    },
})
