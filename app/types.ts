export type Locale = "en-US" | "fr-FR" | "kin-RW" | "sw-TZ" | "es-ES" | "ar-EG";

export type LocaleDirection = "ltr" | "rtl";

export interface ApiData {
  featured: Article;
  feed: Article[];
}

export interface ArticleTranslation {
  title: string;
  body: string;
}

export type ArticleTranslations = Record<Locale, ArticleTranslation>;

export interface Article {
  id: string;
  author: string;
  publishedAt: string;
  imgUrl?: string;
  sourceUrl: string;
  translations: ArticleTranslations;
}
