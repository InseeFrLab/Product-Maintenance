const dictionary = {
  TITLE: { fr: "Maintenance", en: "Maintenance" },
  SORRY: {
    fr: "Excusez nous pour la gène occasionnée.",
    en: "We apologize for the inconvenience.",
  },
  MAINTENANCE: {
    fr: " est actuellement en cours de maintenance.",
    en: " is currently undergoing maintenance.",
  },
  THANKS: {
    fr: "Merci de votre compréhension.",
    en: "Thank you for your understanding.",
  },
  CONTACT_US: { fr: "Contactez-nous !", en: "Contact us !" },
  INFO_TEAM: { fr: "L'équipe informatique", en: "Tech team" },
  BUSINESS_TEAM: { fr: "L'équipe métier", en: "Business team" },
} as const;

export default dictionary;
export type Dictionary = typeof dictionary;
export type DictionaryLang = "fr" | "en";

export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export type AbstractDictionary<T> = {
  [Key in keyof T]: {
    [Lang in DictionaryLang]: string;
  };
};
