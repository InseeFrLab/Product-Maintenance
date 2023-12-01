import createDictionary, { getLang } from "./build-dictionary";
import dictionary, { type Dictionary } from "./dictionary";

const D_FR = createDictionary<Dictionary>("fr", dictionary);
const D_EN = createDictionary<Dictionary>("en", dictionary);

export const AppDictionary = getLang() === "fr" ? D_FR : D_EN;
