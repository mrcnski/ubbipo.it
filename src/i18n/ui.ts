export const languages = {
    it: 'Italiano',
    en: 'English',
};

/// Data for translating a path to a given language. 
///
/// The trailing slashes are not included. When querying the map, the caller is expected to remove
/// them if present.
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
        'site.name': 'Ubbìpò Osteria Restaurant',
        'site.book': "Book table",
        
        'nav.menu': 'menu',
        'nav.food': 'food',
        'nav.wine': 'wine',
        'nav.drinks': 'drinks',
        'nav.languages': 'languages',
        'nav.close': 'close',

        'index.title': "Home",
        'index.description': "Local family restaurant in Cilento. We are happy to serve you homemade, traditional Italian food for a unique culinary experience.",
        'index.1.title': "#OsteriaUbbìpò",
        'index.1.description': "We prefer to identify ourselves as an OSTERIA, as the warm atmosphere and intimacy of the locale create the perfect setting to enjoy a glass of wine accompanied by simple dishes, Cilento cheeses and cured meats.",
        'index.2.title': "#100PercentCilento",
        'index.2.description': "The menu reflects the love for home cooking, simple and genuine, and is inspired by the tradition of this wonderful land; the products are strictly Cilento. Every sip of wine and every bite of food carries centuries of tradition, giving a delightful journey through the flavors and scents of Cilento.",

        'menu.title': 'Menu',
        'menu.description': 'A selection of traditional Italian dishes and wines from the Cilento region of Italy.',
        'menu.food.info': 'Click on images to enlarge them.',

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
        'menu.vegetarian': 'vegetarian',
        'menu.no-sulfites': 'no sulfites added',
    },
    it: {
        'site.name': 'Ubbìpò Osteria',
        'site.book': 'Prenota',

        'nav.menu': 'menù',
        'nav.food': 'cibo',
        'nav.wine': 'vini',
        'nav.drinks': 'bevande',
        'nav.languages': 'lingue',
        'nav.close': 'chiudi',

        'index.title': "Home",
        'index.description': "Ristorante locale nel Cilento. Saremo lieti di servirvi cibo italiano tradizionale fatto in casa per un'esperienza culinaria unica.",
        'index.1.title': "#OsteriaUbbìpò",
        'index.1.description': "Preferiamo identificarci come un'OSTERIA, poiché l'atmosfera calda e l'intimità del locale creano il perfetto scenario per godersi un bicchiere di vino accompagnato da piatti semplici, formaggi e salumi cilentani.",
        'index.2.title': "#CentoPerCentoCilento",
        'index.2.description': "Il menu riflette l'amore per la cucina casalinga, semplice e genuina e si ispira alla tradizione di questa meravigliosa terra, i prodotti sono rigorosamente cilentani. Ogni sorso di vino e ogni morso di cibo portano con sé secoli di tradizione, regalando un viaggio deliziante tra sapori e profumi del Cilento.",

        'menu.title': 'Menù',
        'menu.description': 'Una selezione di piatti tradizionali italiani e vini della regione del Cilento in Italia.',
        'menu.food.info': 'Cliccate sulle immagini per ingrandirle.',

        'menu.food.title': 'Menù Cibo',
        'menu.food.description': 'Un menù che offre una varietà di piatti tradizionali Cilentani. Tutti i nostri piatti sono fatti in casa con ingredienti freschi e di alta qualità.',
        'menu.food.dishes': 'Piatti',
        
        'menu.wine.title': 'Menù dei Vini',
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
        'menu.vegetarian': 'vegetariano',
        'menu.no-sulfites': 'senza solfiti aggiunti',
    },
} as const;