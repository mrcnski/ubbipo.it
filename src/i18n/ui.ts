export const languages = {
    it: 'Italiano',
    en: 'English',
};

export const defaultLang = 'it';
export const showDefaultLang = false;

/// Data for translating a path to a given language. 
///
/// The trailing slashes are not included - the caller is expected to remove them if present.
export const paths = {
    index: {
        it: '',
        en: 'en',
    },
    wine: {
        it: 'menu/vini',
        en: 'en/menu/wine',
    },
    drinks: {
        it: 'menu/bevande',
        en: 'en/menu/drinks',
    }
};

/// Data for translating a string to a given language.
export const ui = {
    en: {
        'site.name': 'Ubbìpò Osteria Restaurant',
        
        'nav.wine': 'Wine',
        'nav.drinks': 'Drinks',
        'nav.languages': 'Languages',

        'index.title': "Home",
        'index.description': "Local family restaurant in Cilento. We are happy to serve you homemade, traditional Italian food for a unique culinary experience.",
        
        'menu.wine-title': 'Wine Menu',
        'menu.wine-description': 'A list of wines curated from different regions of Italy. We have a wide variety including red, white, rosé, and vegan wines.',
        'menu.drinks-title': 'Beer and Drinks Menu',
        'menu.drinks-description': 'A menu offering a variety of popular beers and non-alcoholic drinks.',
        
        'menu.vini-rossi': 'Red',
        'menu.vini-bianchi': 'White',
        'menu.vini-rosati': 'Rosé',
        'menu.vini-vivaci': 'Lively',
        'menu.vini-spumanti': 'Sparkling',
        'menu.beer': 'Beer',
        'menu.drinks': 'Drinks',
        
        'menu.glass': 'glass',
        'menu.bottle': 'bottle',
        'menu.price': 'price',
        'menu.producer': 'producer',
        'menu.location': 'Location',
        'menu.vegan': 'vegan',
        'menu.no-sulfites': 'no sulfites added',
    },
    it: {
        'site.name': 'Ubbìpò Osteria',
        
        'nav.wine': 'Vini',
        'nav.drinks': 'Bevande',
        'nav.languages': 'Lingue',

        'index.title': "Home",
        'index.description': "Ristorante locale nel Cilento. Saremo lieti di servirvi cibo italiano tradizionale fatto in casa per un'esperienza culinaria unica.",
        
        'menu.wine-title': 'Carta dei Vini',
        'menu.wine-description': "Una lista di vini curata da diverse regioni d'Italia. Abbiamo un'ampia varietà di vini rossi, bianchi, rosati e vegani.",
        'menu.drinks-title': 'Menù Birre e Bevande',
        'menu.drinks-description': 'Un menu che offre una varietà di birre popolari e bevande analcoliche.',
        
        'menu.vini-rossi': 'Rossi',
        'menu.vini-bianchi': 'Bianchi',
        'menu.vini-rosati': 'Rosati',
        'menu.vini-vivaci': 'Vivaci',
        'menu.vini-spumanti': 'Spumanti',
        'menu.beer': 'Birre',
        'menu.drinks': 'Bevande',
        
        'menu.glass': 'calice',
        'menu.bottle': 'bottiglia',
        'menu.price': 'prezzo',
        'menu.producer': 'produttore',
        'menu.location': 'Località',
        'menu.vegan': 'vegano',
        'menu.no-sulfites': 'senza solfiti aggiunti',
    },
} as const;