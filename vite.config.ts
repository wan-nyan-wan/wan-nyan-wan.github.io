import * as reactPlugin from "vite-plugin-react";
import type { UserConfig } from "vite";

const config: UserConfig = {
  jsx: "react",
  plugins: [reactPlugin],
  root: "src/",
  outDir: "public/",
};

export default config;
