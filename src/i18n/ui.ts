/// Supported languages.
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
        'nav.bnb': 'b&b',
        'nav.food': 'food',
        'nav.wine': 'wine',
        'nav.drinks': 'drinks',
        'nav.languages': 'languages',
        'nav.close': 'close',

        'index.title': "Home",
        'index.description': "Local family restaurant in Cilento. We are happy to serve you homemade, traditional Italian food for a unique culinary experience.",
        'index.1.title': "#OsteriaUbbìpò",
        'index.1.description': "Ubbìpò is an OSTERIA in the heart of Cilento, where family hospitality translates into simple and genuine dishes. Here you will find an informal and welcoming environment, where you can feel at home. Sometimes we prepare a large table to share dishes, wine, and conversations, just like in the old days when a simple dish was enough to create new friendships.",
        'index.2.title': "#100PercentCilento",
        'index.2.description': "Our fixed menu, which you can discover on the dedicated page, is an invitation to our table. Simple dishes, prepared daily with local ingredients and Slow Food Presidia, carefully and lovingly chosen. Our grandmother cooks for you as she would for her family: each dish is an act of simplicity, each bite a return home.",

        'menu.title': 'Menu',
        'menu.description': 'Authentic Cilento flavors in a cozy atmosphere',

        'menu.food.title': 'Food Menu',
        'menu.food.description': 'A menu offering a variety of traditional Cilento dishes. All of our dishes are homemade with fresh, high-quality ingredients.',
        'menu.food.tagline': 'A menu #100PERCENTCILENTO',
        'menu.food.info': `Welcome to Ubbìpò Osteria! 🍷✨<br>
        We welcome you with a desire to make you feel at home, with simple, authentic dishes and a family atmosphere. Every bite and smile celebrates the authenticity of Cilento. 🌿🍅<br>
        <br>
        <br>
        *How dinner works* 🍽️⏰<br>
        We offer a *fixed menu*, celebrating the authentic flavors of Cilento, with dishes prepared by our grandmother using local ingredients and *Slow Food Presidia.*<br>
        <br>
        *We only serve dinner*, which is not available every night, so we suggest you inquire in advance.<br>
        <br>
        Dinner is served *at a set time* by us.<br>
        *Cost: 45 euros per person* (excluding drinks).<br>
        <br>
        Since everything is prepared fresh, we recommend that you *book in advance.* If you want to know the time and menu, *contact us!* We will be happy to tell you all about it.<br>
        <br>
         On special evenings, we set up a *big table* to share dishes, stories and simple moments, just like in the old days, when conviviality was at the center of every gathering.<br>
        <br>
         If you are looking for traditional restaurant dishes, we are probably not what you are looking for. Our set menu reflects our simple and genuine cuisine, focused on the *Cilento tradition.* The dishes you see below *are the only ones we prepare:* each day we select a few of these to make up our set menu. You won't find anything else, but you can enjoy *the true essence of Cilento*, with fresh, lovingly prepared dishes.`,
        'menu.food.dishes': 'The slow life of Cilento, dish by dish',
        'menu.food.allergens': 'Allergens',

        'menu.food.allergens.description': '*Notification of Food Allergen* information to consumers according to EU regulation 1169/2011.<br><br>Food and beverages served in this establishment may contain one or more of the allergens listed below. In addition, cross-contamination of other ingredients with the same ingredients may occur in the kitchen during preparation.<br><br>If you suffer from food allergies or intolerances, please inform our staff who will be able to help you avoid foods that contain substances that could cause allergic reactions. Next to each dish you will find the corresponding numbers for the various Allergens.',
        'menu.food.allergens.gluten.name': 'Gluten',
        'menu.food.allergens.gluten.description': 'cereals, wheat, rye, barley, oats, spelt, kamut, including hybridized derivatives',
        'menu.food.allergens.crustaceans.name': 'Crustaceans and Derivatives',
        'menu.food.allergens.crustaceans.description': 'marine and freshwater: shrimp, prawns, crabs and the like',
        'menu.food.allergens.eggs.name': 'Eggs',
        'menu.food.allergens.eggs.description': 'eggs and products containing them: mayonnaise, emulsifiers, egg pasta',
        'menu.food.allergens.fish.name': 'Fish and Derivatives',
        'menu.food.allergens.fish.description': 'food products containing fish, even in small percentages',
        'menu.food.allergens.peanuts.name': 'Peanuts and Derivatives',
        'menu.food.allergens.peanuts.description': 'creams and condiments in which they are also in small doses',
        'menu.food.allergens.soy.name': 'Soy and Derivatives',
        'menu.food.allergens.soy.description': 'derived products such as soy milk, tofu, soy spaghetti and the like',
        'menu.food.allergens.milk.name': 'Milk and Derivatives',
        'menu.food.allergens.milk.description': 'any product in which milk is used: yogurt, biscuits, cakes, ice cream and various creams',
        'menu.food.allergens.nuts.name': 'Nuts and Derivatives',
        'menu.food.allergens.nuts.description': 'almonds, hazelnuts, common walnuts, cashews, pecans, cashews, pistachios',
        'menu.food.allergens.celery.name': 'Celery and Derivatives',
        'menu.food.allergens.celery.description': 'both in pieces and in vegetable soup, sauces and concentrates',
        'menu.food.allergens.mustard.name': 'Mustard and Derivatives',
        'menu.food.allergens.mustard.description': 'can be found in sauces and dressings, especially in mustard',
        'menu.food.allergens.sesame.name': 'Sesame Seeds and Derivatives',
        'menu.food.allergens.sesame.description': 'whole seeds used for bread, flours containing it in minimal percentage',
        'menu.food.allergens.sulfites.name': 'Sulfur Dioxide and Sulfites',
        'menu.food.allergens.sulfites.description': 'sulfur dioxide and sulfites in concentrations greater than 10 mg/kg or 10 mg/l expressed as SO2 - used as preservatives, we can find them in: canned fish products, in foods under vinegar, in oil and in brine, in jams, in vinegar, in dried mushrooms and in non-alcoholic beverages and fruit juices',
        'menu.food.allergens.lupine.name': 'Lupins and Derivatives',
        'menu.food.allergens.lupine.description': 'present in vegan foods in the form of: roasts, salamis, flours and the like',
        'menu.food.allergens.mollusks.name': 'Molluscs and Derivatives',
        'menu.food.allergens.mollusks.description': 'scallop, cockle, scallop, mussel, oyster, limpet, clam, tellina, etc...',

        'menu.wine.title': 'Wine Menu',
        'menu.wine.description': 'A list of wines curated from different regions of Italy. We have a wide variety including red, white, rosé, and vegan wines.',
        'menu.wine.tagline': 'Exclusively from Cilento and Campania, with a predominance of biological and natural wines.',
        'menu.wine.info': `{bio} "Biological wines, made without any chemical substances added."<br>
        <br>
        {natural} "Natural wines, obtained from sustainable agriculture using simple or traditional methods."`,
        'menu.wine.vini-rossi': 'Red',
        'menu.wine.vini-bianchi': 'White',
        'menu.wine.vini-rosati': 'Rosé',
        'menu.wine.vini-vivaci': 'Lively',
        'menu.wine.vini-spumanti': 'Sparkling',
        'menu.wine.biological': 'Biological',
        'menu.wine.natural': 'Natural',

        'menu.drinks.title': 'Beer and Drinks Menu',
        'menu.drinks.description': 'A menu offering a variety of popular beers and non-alcoholic drinks.',
        'menu.drinks.tagline': '',
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
        'nav.bnb': 'b&b',
        'nav.food': 'cibo',
        'nav.wine': 'vini',
        'nav.drinks': 'bevande',
        'nav.languages': 'lingue',
        'nav.close': 'chiudi',

        'index.title': "Home",
        'index.description': "Ristorante locale nel Cilento. Saremo lieti di servirvi cibo italiano tradizionale fatto in casa per un'esperienza culinaria unica.",
        'index.1.title': "#OsteriaUbbìpò",
        'index.1.description': "Ubbìpò è un’OSTERIA nel cuore del Cilento, dove l’ospitalità di famiglia si traduce in piatti semplici e genuini. Qui troverete un ambiente informale e accogliente, dove sentirvi come a casa. A volte, prepariamo una grande tavolata per condividere piatti, vino e chiacchiere, proprio come un tempo, quando bastava un piatto semplice per creare nuove amicizie.",
        'index.2.title': "#CentoPerCentoCilento",
        'index.2.description': "Il nostro menu fisso, che potete scoprire nella pagina dedicata, è un invito a tavola da noi. Piatti semplici, preparati in giornata con ingredienti locali e Presìdi Slow Food, scelti con cura e amore. La nostra nonna cucina per voi come farebbe per la sua famiglia: ogni piatto è un atto di semplicità, ogni morso un ritorno a casa.",

        'menu.title': 'Menù',
        'menu.description': "I sapori autentici del Cilento in un'atmosfera accogliente",

        'menu.food.title': 'Menù Cibo',
        'menu.food.description': 'Un menù che offre una varietà di piatti tradizionali Cilentani. Tutti i nostri piatti sono fatti in casa con ingredienti freschi e di alta qualità.',
        'menu.food.tagline': 'Un menù #100PERCENTCILENTO',
        'menu.food.info': `Benvenuti da Ubbìpò Osteria! 🍷✨<br>
        Vi accogliamo con il desiderio di farvi sentire a casa, con piatti semplici e genuini, e un’atmosfera familiare. Ogni boccone e sorriso celebrano l'autenticità del Cilento. 🌿🍅<br>
        <br>
        <br>
        *Come funziona la cena* 🍽️⏰<br>
        Offriamo un *menù fisso*, che celebra i sapori autentici del Cilento, con piatti preparati dalla nostra nonna usando ingredienti locali e *Presìdi Slow Food.*<br>
        <br>
        *Serviamo solo la cena*, che non è disponibile tutte le sere, quindi vi consigliamo di informarvi in anticipo.<br>
        <br>
        La cena è servita *ad orario prestabilito* da noi.<br>
        *Costo: 45 euro a persona* (bevande escluse).<br>
        <br>
        Poiché tutto è preparato fresco, vi consigliamo di *prenotare in anticipo.* Se volete sapere l'orario e il menù, *contattateci!* Saremo felici di raccontarvi tutto.<br>
        <br>
         In particolari serate, apparecchiamo una *grande tavolata* per condividere piatti, racconti e momenti semplici, proprio come accadeva un tempo, quando la convivialità era al centro di ogni incontro.<br>
        <br>
         Se state cercando piatti da ristorante tradizionale, probabilmente non siamo ciò che fa per voi. Il nostro menù fisso riflette la nostra cucina semplice e genuina, focalizzata sulla *tradizione cilentana.* I piatti che vedete qui sotto *sono gli unici che prepariamo:* ogni giorno selezioniamo alcuni di questi per comporre il nostro menù fisso. Non troverete altro, ma potrete assaporare *la vera essenza del Cilento*, con piatti freschi e preparati con amore.`,
        'menu.food.dishes': 'La vita slow del Cilento, piatto dopo piatto',
        'menu.food.allergens': 'Lista Allergeni',

        'menu.food.allergens.description': '*Segnalazione Allergeni Informativa* sugli alimenti ai consumatori secondo il regolamento UE1169/2011.<br><br>Gli alimenti e le bevande somministrati in questo locale possono contenere uno o più allergeni sotto riportati. Inoltre in cucina possono verificarsi durante le preparazioni contaminazioni crociate di altri ingredienti con gli stessi ingredienti.<br><br>Se soffrite di allergie o intolleranze alimentari segnalatelo al nostro personale che saprà mettervi nelle condizioni di evitare gli alimenti che contengono sostanze che potrebbero causarvi reazioni di natura allergica. A fianco di ogni pietanza troverete i numeri corrispondenti ai vari Allergeni.',
        'menu.food.allergens.gluten.name': 'Glutine',
        'menu.food.allergens.gluten.description': 'cereali, grano, segale, orzo, avena, farro, kamut, inclusi ibridati derivati',
        'menu.food.allergens.crustaceans.name': 'Crostacei e Derivati',
        'menu.food.allergens.crustaceans.description': 'marini e d’acqua dolce: gamberi, scampi, granchi e simili',
        'menu.food.allergens.eggs.name': 'Uova',
        'menu.food.allergens.eggs.description': 'uova e prodotti che le contengono: maionese, emulsionanti, pasta all’uovo',
        'menu.food.allergens.fish.name': 'Pesce e Derivati',
        'menu.food.allergens.fish.description': 'prodotti alimentari in cui è presente il pesce, anche in piccole percentuali',
        'menu.food.allergens.peanuts.name': 'Arachidi e Derivati',
        'menu.food.allergens.peanuts.description': 'creme e condimenti in cui vi sia anche in piccole dosi',
        'menu.food.allergens.soy.name': 'Soia e Derivati',
        'menu.food.allergens.soy.description': 'prodotti derivati come latte di soia, tofu, spaghetti di soia e simili',
        'menu.food.allergens.milk.name': 'Latte e Derivati',
        'menu.food.allergens.milk.description': 'ogni prodotto in cui viene usato il latte: yogurt, biscotti, torte, gelato e creme varie',
        'menu.food.allergens.nuts.name': 'Frutta a Guscio e Derivati',
        'menu.food.allergens.nuts.description': 'mandorle, nocciole, noci comuni, noci di acagiù, noci pecan, anacardi, pistacchi',
        'menu.food.allergens.celery.name': 'Sedano e Derivati',
        'menu.food.allergens.celery.description': 'sia in pezzi che all’interno di preparati per zuppe, salse e concentrati vegetali',
        'menu.food.allergens.mustard.name': 'Senape e Derivati',
        'menu.food.allergens.mustard.description': 'si può trovare nelle salse e nei condimenti, specie nella mostarda',
        'menu.food.allergens.sesame.name': 'Semi di Sesamo e Derivati',
        'menu.food.allergens.sesame.description': 'semi interi usati per il pane, farine che lo contengono in minima percentuale',
        'menu.food.allergens.sulfites.name': 'Anidride Solforosa e Solfiti',
        'menu.food.allergens.sulfites.description': 'anidride solforosa e solfiti in concentrazione superiori a 10 mg/kg o 10 mg/l espressi come SO2 - usati come conservanti, possiamo trovarli in: conserve di prodotti ittici, in cibi sott’aceto, sott’olio e in salamoia, nelle marmellate, nell’aceto, nei funghi secchi e nelle bibite analcoliche e succhi di frutta',
        'menu.food.allergens.lupine.name': 'Lupini e Derivati',
        'menu.food.allergens.lupine.description': 'presenti in cibi vegan sotto forma di: arrosti, salamini, farine e similari',
        'menu.food.allergens.mollusks.name': 'Molluschi e Derivati',
        'menu.food.allergens.mollusks.description': 'canestrello, cannolicchio, capasanta, cozza, ostrica, patella, vongola, tellina, ecc...',

        'menu.wine.title': 'Menù dei Vini',
        'menu.wine.description': "Una lista di vini curata da diverse regioni d'Italia. Abbiamo un'ampia varietà di vini rossi, bianchi, rosati e vegani.",
        'menu.wine.tagline': "Esclusivamente dal Cilento e dalla Campania con prevalenza di vini biologici e naturali",
        'menu.wine.info': `{bio} "Vini biologici, realizzati senza l'aggiunta di sostanze chimiche."<br>
        <br>
        {natural} "Vini naturali, ottenuti da agricoltura sostenibile utilizzando metodi semplici o tradizionali."`,
        'menu.wine.vini-rossi': 'Rossi',
        'menu.wine.vini-bianchi': 'Bianchi',
        'menu.wine.vini-rosati': 'Rosati',
        'menu.wine.vini-vivaci': 'Vivaci',
        'menu.wine.vini-spumanti': 'Spumanti',
        'menu.wine.biological': 'Biologico',
        'menu.wine.natural': 'Naturale',

        'menu.drinks.title': 'Menù Birre e Bevande',
        'menu.drinks.description': 'Un menu che offre una varietà di birre popolari e bevande analcoliche.',
        'menu.drinks.tagline': '',
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
