export const languages = {
    it: 'Italiano',
    en: 'English',
};

export const defaultLang = 'it';
export const showDefaultLang = false;

/// Data for translating a path to a given language. 
///
/// The trailing slashes are not included - the caller is expected to remove them if present.
///
/// TODO: This should be generated from the filesystem.
export const paths = {
    index: {
        it: '',
        en: 'en',
    },
    menu: {
        it: 'menu',
        en: 'en/menu',
    },
    food: {
        it: 'menu/cibo',
        en: 'en/menu/food',
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
        'site.baseurl': "https://ubbipo.it",
        'site.name': 'Ubbìpò Osteria Restaurant',
        
        'nav.food': 'Food',
        'nav.wine': 'Wine',
        'nav.drinks': 'Drinks',
        'nav.languages': 'Languages',

        'index.title': "Home",
        'index.description': "Local family restaurant in Cilento. We are happy to serve you homemade, traditional Italian food for a unique culinary experience.",

        'menu.title': 'Menu',
        'menu.description': 'A selection of traditional Italian dishes and wines from the Cilento region of Italy.',

        'menu.food.title': 'Food Menu',
        'menu.food.description': 'A menu offering a variety of traditional Cilento dishes. All of our dishes are homemade with fresh, high-quality ingredients.',
        'menu.food.dishes': 'Dishes',
        
        'menu.wine.title': 'Wine Menu',
        'menu.wine.description': 'A list of wines curated from different regions of Italy. We have a wide variety including red, white, rosé, and vegan wines.',
        'menu.wine.vini-rossi': 'Red',
        'menu.wine.vini-bianchi': 'White',
        'menu.wine.vini-rosati': 'Rosé',
        'menu.wine.vini-vivaci': 'Lively',
        'menu.wine.vini-spumanti': 'Sparkling',

        'menu.drinks.title': 'Beer and Drinks Menu',
        'menu.drinks.description': 'A menu offering a variety of popular beers and non-alcoholic drinks.',
        'menu.drinks.beer': 'Beer',
        'menu.drinks.drinks': 'Drinks',
        
        'menu.glass': 'glass',
        'menu.bottle': 'bottle',
        'menu.price': 'price',
        'menu.producer': 'producer',
        'menu.location': 'Location',
        'menu.vegan': 'vegan',
        'menu.no-sulfites': 'no sulfites added',
    },
    it: {
        'site.baseurl': "https://ubbipo.it",
        'site.name': 'Ubbìpò Osteria',

        'nav.food': 'Cibo',
        'nav.wine': 'Vini',
        'nav.drinks': 'Bevande',
        'nav.languages': 'Lingue',

        'index.title': "Home",
        'index.description': "Ristorante locale nel Cilento. Saremo lieti di servirvi cibo italiano tradizionale fatto in casa per un'esperienza culinaria unica.",

        'menu.title': 'Menù',
        'menu.description': 'Una selezione di piatti tradizionali italiani e vini della regione del Cilento in Italia.',

        'menu.food.title': 'Menù Cibo',
        'menu.food.description': 'Un menù che offre una varietà di piatti tradizionali Cilentani. Tutti i nostri piatti sono fatti in casa con ingredienti freschi e di alta qualità.',
        'menu.food.dishes': 'Piatti',
        
        'menu.wine.title': 'Carta dei Vini',
        'menu.wine.description': "Una lista di vini curata da diverse regioni d'Italia. Abbiamo un'ampia varietà di vini rossi, bianchi, rosati e vegani.",
        'menu.wine.vini-rossi': 'Rossi',
        'menu.wine.vini-bianchi': 'Bianchi',
        'menu.wine.vini-rosati': 'Rosati',
        'menu.wine.vini-vivaci': 'Vivaci',
        'menu.wine.vini-spumanti': 'Spumanti',

        'menu.drinks.title': 'Menù Birre e Bevande',
        'menu.drinks.description': 'Un menu che offre una varietà di birre popolari e bevande analcoliche.',
        'menu.drinks.beer': 'Birre',
        'menu.drinks.drinks': 'Bevande',
        
        'menu.glass': 'calice',
        'menu.bottle': 'bottiglia',
        'menu.price': 'prezzo',
        'menu.producer': 'produttore',
        'menu.location': 'Località',
        'menu.vegan': 'vegano',
        'menu.no-sulfites': 'senza solfiti aggiunti',
    },
} as const;