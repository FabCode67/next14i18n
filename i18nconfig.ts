import { Locale } from "./app/types";

export const defaultLocale: Locale = "en-US";

export const locales: Locale[] = ["en-US", "fr-FR", "kin-RW", "sw-TZ", "es-ES", "ar-EG"];

export const localeNames: Record<Locale, string> = {
  "en-US": "English",
  "fr-FR": "Français",
  "kin-RW": "Kinyarwanda",
  "sw-TZ": "Kiswahili",
  "es-ES": "Español",
  "ar-EG": "العربية",
};
