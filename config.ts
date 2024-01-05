import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.builder.io/c/docs/developers",
  match: "https://www.builder.io/c/docs/**",
  maxPagesToCrawl: 3,
  outputFileName: "prompt_templates/GPTs/knowledge_base/output.json", // change output to a more descriptive name for what you are crawling
};
