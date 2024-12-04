import { LLMOptions, ModelProvider } from "../../index.js";
import OpenAI from "./OpenAI.js";

class Portkey extends OpenAI {
  static providerName: ModelProvider = "portkey";
  static defaultOptions: Partial<LLMOptions> = {
    apiBase: "https://api.portkey.ai/v1/",
  };

  protected _getHeaders() {
    return {
      ...super._getHeaders(), // This includes "Authorization: Bearer ${apiKey}"
      "x-portkey-config": this.portkeyConfigId,
    };
  }
}

export default Portkey;