import { languages, ui, paths } from './ui';
import Astro from "../../astro.config.mjs";

const defaultLang = Astro.i18n!.defaultLocale as keyof typeof languages;

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

/// Returns a function for a given language `lang`, that provides the translated UI strings for that
/// language, when given a `key`.
export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}

/// Returns a function for a given language that translates data, such as menu item descriptions.
/// The data could be a string, in which case it is returned as is, or an object containing
/// translations, in which case the correct translation is chosen.
export function useDataTranslations(lang: keyof typeof ui) {
    function d(record: string | Record<string, string>) {
        if (typeof record === 'string') return record;
        return record[lang] || record[defaultLang] || undefined;
    }
    function dArray(record: string[] | Record<string, string[]>) {
        if (Array.isArray(record)) return record;
        return record[lang] || record[defaultLang] || undefined;
    }
    return { 
        d,
        dArray,
    }
}

/// Returns a function that translates the given base path to the given language.
/// Sets the `lang` part correctly and translates any translate-able path components.
export function useTranslatedPath(lang: keyof typeof ui) {
    return function translatePath(path: string): string {
        for (const nameToLang of Object.entries(paths)) {
            for (const langToPath of Object.entries(nameToLang[1])) {
                if (langToPath[1] === path) {
                    return "/" + nameToLang[1][lang];
                }
            }
        }
        return path;
    }
}

/// Detects the current language in a URL and returns the path for a new language.
/// Sets the `lang` part correctly and translates any translate-able path components.
export function urlToLangPath(currentUrl: URL, newLang: keyof typeof ui): string {
    const i = currentUrl.pathname.indexOf('/');
    var path = currentUrl.pathname.slice(i+1);
    // Remove any trailing slashes.
    path = path.endsWith('/') ? path.slice(0, -1) : path;
    // Remove .html if present.
    path = path.endsWith('.html') ? path.slice(0, -5) : path;
    
    return useTranslatedPath(newLang)(path);
}

export function urlToLangUrl(currentUrl: URL, newLang: keyof typeof ui): URL {
    return new URL(urlToLangPath(currentUrl, newLang), currentUrl.origin);
}