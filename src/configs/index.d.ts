import tseslint from "typescript-eslint"

/* eslint init-declarations: off */
declare const config: ReturnType<typeof tseslint.config>

export = config
