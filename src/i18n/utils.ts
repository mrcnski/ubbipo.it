import { ui, paths, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

/// Returns a function that translates from the given `ui` key to the given language.
export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}

/// Returns a function that translates the given data to the given language. The data could be a
/// string in which case it is returned as is, or an object containing translations.
export function useDataTranslations(lang: keyof typeof ui) {
    return function d(record: string | Record<string, string> | undefined) {
        if (!record) return undefined;
        if (typeof record === 'string') return record;
        return record[lang] || record[defaultLang] || undefined;
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
export function urlToLangPath(currentUrl: URL, newLang: keyof typeof ui) {
    const i = currentUrl.pathname.indexOf('/');
    var path = currentUrl.pathname.slice(i+1);
    // Remove any trailing slashes.
    path = path.endsWith('/') ? path.slice(0, -1) : path;
    // Remove .html if present.
    path = path.endsWith('.html') ? path.slice(0, -5) : path;
    
    return useTranslatedPath(newLang)(path);
}