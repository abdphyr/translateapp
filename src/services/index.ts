
export interface IResLang {
  languages: {
    language: string;
    name: string;
  }[];
}

export interface IResTranslate {
  data: {
    translations: {
      translatedText: string;
    }
  }
}
