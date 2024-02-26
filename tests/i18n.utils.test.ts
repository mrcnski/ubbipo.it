import { urlToLangUrl } from '../src/i18n/utils';

test.each([
    ["https://localhost/", "it", "https://localhost/"],
    ["https://localhost", "it", "https://localhost/"],
    ["https://localhost/", "en", "https://localhost/en"],
    ["https://localhost", "en", "https://localhost/en"],
    ["https://localhost/menu/cibo", "it", "https://localhost/menu/cibo"],
    ["https://localhost/menu/cibo/", "it", "https://localhost/menu/cibo"],
    ["https://ubbipo.it/menu/cibo", "it", "https://ubbipo.it/menu/cibo"],
    ["https://ubbipo.it/menu/cibo/", "it", "https://ubbipo.it/menu/cibo"],
    ["https://localhost/menu/cibo", "en", "https://localhost/en/menu/food"],
])('urlToLangUrl(%s, %s)', (url, lang, expected) => {
    expect(`${urlToLangUrl(new URL(url), lang as any)}`).toBe(expected);
});