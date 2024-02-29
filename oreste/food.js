export const dishes = [
    {
        name: {
            it: "Tagliere Misto Cilentano",
            en: "Cilento Mixed Platter",
        },
        ingredients: {
            // Use {slow} for slow food products.
            it: [
                '*salumi* del salumificio "G.ioi" {slow}',
                '*cacioricotta* biologica cilentana "I Moresani" {slow}',
                '*mozzarella* nella mortella del "Le Starze"',
                '*olive* ammaccate',
                '*acqua sale*: pane fresella del "Panificio Clelia", pomodori, origano selvatico, olio EVO della "azienda agricola Marino"',
                '(su richiesta: *alici* di menaica di “Donatella Marino”) {slow}',
            ],
            en: [
                '*cold cuts* from the "G.ioi" charcuterie {slow}',
                'Cilento organic *cacioricotta cheese* "I Moresani" {slow}',
                '*mozzarella* in myrtle from "Le Starze"',
                'bruised *olives*',
                '*water and salt*: fresella bread from "Panificio Clelia", tomatoes, wild oregano, EVO oil from "Marino farm"',
                '(by request: menaica *anchovies* from "Donatella Marino") {slow}',
            ],
        },
        description: "",
        image: "tagliere misto.jpg", // Images in 'src/assets/images/menu' folder.
        producer: "",
        location: "",
        tags: "", // Example: "vegan, no-sulfites, bio"    For no tags: ""
        price: {
            it: '19 "(per alici +4)"',
            en: '19 "(for anchovies +4)"',
        },
        available: "yes", // For no: "no"
    },
    {
        name: {
            it: "Tagliere Salumi Cilentano",
            en: "Cilento Salami Platter",
        },
        ingredients: {
            // Use {slow} for slow food products.
            it: [
                '*salumi* del salumificio "G.ioi" {slow}',
                '*olive* ammaccate',
                '*acqua sale:* pane fresella del "Panificio Clelia", pomodori, origano selvatico, olio EVO della "azienda agricola Marino"',
                '(su richiesta: *alici* di menaica di “Donatella Marino”) {slow}',
            ],
            en: [
                '*cold cuts* from the "G.ioi" charcuterie {slow}',
                'bruised *olives*',
                '*water and salt*: fresella bread from "Panificio Clelia", tomatoes, wild oregano, EVO oil from "Marino farm"',
                '(by request: menaica *anchovies* from "Donatella Marino") {slow}',
            ],
        },
        description: "",
        image: "tagliere salumi.jpg",
        producer: "",
        location: "",
        tags: "", 
        price: {
            it: '15 "(per alici +4)"',
            en: '15 "(for anchovies +4)"',
        },
        available: "yes",
    },
    {
        name: {
            it: "Tagliere Formaggio Cilentano",
            en: "Cilento Cheese Platter",
        },
        ingredients: {
            // Use {slow} for slow food products.
            it: [
                '*cacioricotta* biologica cilentana "I Moresani" {slow}',
                '*mozzarella* nella mortella del "Le Starze"',
                '*pecorino* stagionato con composta di arance',
                '*olive* ammaccate',
                '*acqua sale:* pane fresella del "Panificio Clelia", pomodori, origano selvatico, olio EVO della "azienda agricola Marino"',
                '(su richiesta: *alici* di menaica di “Donatella Marino”) {slow}',
            ],
            en: [
                'Cilento organic *cacioricotta cheese* "I Moresani" {slow}',
                '*mozzarella* in myrtle from "Le Starze"',
                'matured *pecorino cheese* with orange compote',
                'bruised *olives*',
                '*water and salt*: fresella bread from "Panificio Clelia", tomatoes, wild oregano, EVO oil from "Marino farm"',
                '(by request: menaica *anchovies* from "Donatella Marino") {slow}',
            ],
        },
        description: "",
        image: "tagliere formaggi.jpg",
        producer: "",
        location: "",
        tags: "vegetarian", 
        price: {
            it: '15 "(per alici +4)"',
            en: '15 "(for anchovies +4)"',
        },
        available: "yes",
    },
    {
        name: {
            it: "Acqua Sale Cilentana",
            en: "Cilento Water and Salt",
        },
        ingredients: {
            // Use {slow} for slow food products.
            it: [
                '*olive* ammaccate',
                '*acqua sale:* pane fresella del "Panificio Clelia", pomodori, origano selvatico, olio EVO della "azienda agricola Marino"',
                '(su richiesta: *alici* di menaica di “Donatella Marino”) {slow}',
            ],
            en: [
                'bruised *olives*',
                '*water and salt*: fresella bread from "Panificio Clelia", tomatoes, wild oregano, EVO oil from "Marino farm"',
                '(by request: menaica *anchovies* from "Donatella Marino") {slow}',
            ],
        },
        description: "",
        image: "acqua sale.jpg",
        producer: "",
        location: "",
        tags: "vegan", 
        price: {
            it: '9 "(per alici +4)"',
            en: '9 "(for anchovies +4)"',
        },
        available: "yes",
    },
    {
        name: {
            it: "Mozzarella Nella Mortella",
            en: "Mozzarella in Myrtle",
        },
        ingredients: "",
        description: "",
        image: "mozzarella mortella.jpg",
        producer: {
            it: 'Azienda agricola "Le Starze"',
            en: '"Le Starze" Farm',
        },
        location: "",
        tags: "vegetarian", 
        price: {
            it: '6',
            en: '6',
        },
        available: "yes",
    },
    {
        name: {
            it: "Polpette di Pane e Ketchup Casalingo",
            en: "Breadballs and Homemade Ketchup",
        },
        ingredients: {
            // Use {slow} for slow food products.
            it: [
                '*pane raffermo*',
                '*uova*',
                '*cacioricotta* biologica cilentana "I Moresani" {slow}',
                '*parmigiano*, *pecorino*',
                '*prezzemolo*',
            ],
            en: [
                '*stale bread*',
                '*eggs*',
                'Cilento organic *cacioricotta cheese* "I Moresani" {slow}',
                '*parmigiano cheese*, *pecorino cheese*',
                '*parsley*',
            ],
        },
        description: "",
        image: "polpette.jpg",
        producer: "",
        location: "",
        tags: "vegetarian", 
        price: {
            it: '6',
            en: '6',
        },
        available: "yes",
    },
    {
        name: {
            it: "Pasta Arruscata",
            en: "Pasta Arruscata",
        },
        ingredients: "",
        description: {
            it: "Pasta ripassata in padella.<br><br>In base alla disponibilità:<br>— Pasta e ceci di Cicerale<br>— Pasta e fagioli di Controne<br>— Pasta al forno",
            en: "Twice-cooked pasta in a pan<br><br>Subject to availability:<br>— Pasta and chickpeas from Cicerale<br>— Pasta and beans from Controne<br>— Baked pasta",
        },
        image: "",
        producer: "",
        location: "",
        tags: "vegetarian", 
        price: {
            it: '10',
            en: '10',
        },
        available: "yes",
    },
    {
        name: {
            it: "Mulignane 'mbuttanate",
            en: "Mulignane 'mbuttanate",
        },
        ingredients: {
            it: [
                "*melanzane*",
                "*pane raffermo*",
                "*uova*",
                "*cacioricotta* biologica cilentana 'I Moresani' {slow}",
                "*parmigiano*, *pecorino*",
                '*sugo di pomodoro* "Mutti"',
                '*prezzemolo*, *basilico*',
                '*olio EVO* della "azienda agricola Marino"',
            ],
            en: [
                "*eggplant*",
                "*stale bread*",
                "*eggs*",
                "Cilento organic *cacioricotta cheese* 'I Moresani' {slow}",
                "*parmigiano cheese*, *pecorino cheese*",
                '*tomato sauce* "Mutti"',
                '*parsley*, *basil*',
                '*EVO oil* from "Marino farm"',
            ],
        },
        description: "",
        image: "melanzane mbuttunate.jpg",
        producer: "",
        location: "",
        tags: "vegetarian", 
        price: {
            it: '8',
            en: '8',
        },
        available: "yes",
    },
    {
        name: {
            it: "Parmigiana Cilentana",
            en: "Cilento Parmigiana",
        },
        ingredients: {
            it: [
                "*melanzane*, *zucchine*",
                '*patate*',
                '*uova*',
                '*fior di latte* "Le Starze"',
                '*sugo di pomodoro* "Mutti"',
                "*parmigiano*",
                '*basilico*',
                '*olio EVO* della "azienda agricola Marino"',
            ],
            en: [
                "*eggplant*, *zucchini*",
                '*potatoes*',
                '*eggs*',
                '*fior di latte* "Le Starze"',
                '*tomato sauce* "Mutti"',
                "*parmigiano cheese*",
                '*basil*',
                '*EVO oil* from "Marino farm"',
            ],
        },
        description: "",
        image: "parmigiana.jpg",
        producer: "",
        location: "",
        tags: "vegetarian", 
        price: {
            it: '10',
            en: '10',
        },
        available: "yes",
    },
    {
        name: {
            it: "Frittata",
            en: "Omelette",
        },
        ingredients: {
            it: [
                '*patate*',
                'con prodotti di stagione: *asparagi* selvatici o *carciofi* o *cipolla di vatolla* {slow}',
                '*uova* "AIA senza uso di antibiotici allevamento a terra"',
                '*parmigiano*',
                '*cacioricotta* biologica cilentana "I Moresani" {slow}',
                '*olio di girasole*',
            ],
            en: [
                '*potatoes*',
                'with seasonal products: wild *asparagus* or *artichokes* or *Vatolla onion* {slow}',
                '*eggs* "AIA without the use of antibiotics, free-range"',
                '*parmigiano cheese*',
                'Cilento organic *cacioricotta cheese* "I Moresani" {slow}',
                '*sunflower oil*',
            ],
        },
        description: "",
        image: "frittata.jpg",
        producer: "",
        location: "",
        tags: "vegetarian", 
        price: {
            it: '7',
            en: '7',
        },
        available: "yes",
    },
    {
        name: {
            it: "Alici ammollicate",
            en: "Soaked Anchovies",
        },
        ingredients: {
            it: [
                "*alici* Cilentane",
                "*pane raffermo*",
                '*aglio*, *prezzemolo*',
                '*olio EVO* della "azienda agricola Marino"',
            ],
            en: [
                "Cilento *anchovies*",
                "*stale bread*",
                '*garlic*, *parsley*',
                '*EVO oil* from "Marino farm"',
            ],
        },
        description: "",
        image: "",
        producer: "",
        location: "",
        tags: "", 
        price: {
            it: '9',
            en: '9',
        },
        available: "yes",
    },
    {
        name: {
            it: "Alici 'Mbuttanate Alla Cilentana",
            en: "Cilento 'Mbuttanate Anchovies",
        },
        ingredients: {
            it: [
                "*alici* Cilentane",
                "*pane raffermo*",
                '*uova*',
                '*cacioricotta* biologica cilentana "I Moresani" {slow}',
                '*sugo di pomodoro*',
                '*aglio*, *prezzemolo*',
                '*olio EVO* della "azienda agricola Marino"',
            ],
            en: [
                "Cilento *anchovies*",
                "*stale bread*",
                '*eggs*',
                'Cilento organic *cacioricotta cheese* "I Moresani" {slow}',
                '*tomato sauce*',
                '*garlic*, *parsley*',
                '*EVO oil* from "Marino farm"',
            ],
        },
        description: "",
        image: "",
        producer: "",
        location: "",
        tags: "", 
        price: {
            it: '9',
            en: '9',
        },
        available: "yes",
    },
    {
        name: {
            it: "Ceci al Rosmarino",
            en: "Chickpeas with Rosemary",
        },
        ingredients: {
            it: [
                '*ceci* biologici di Cicerale "Azienda Agricola Denazzano" {slow}',
                '*sugo di pomodoro* "Mutti"',
                '*aglio*, *rosmarino*',
                '*olio EVO* della "azienda agricola Marino"',
            ],
            en: [
                'Cicerale organic *chickpeas* "Azienda Agricola Denazzano" {slow}',
                '*tomato sauce* "Mutti"',
                '*garlic*, *rosemary*',
                '*EVO oil* from "Marino farm"',
            ],
        },
        description: "",
        image: "",
        producer: "",
        location: "",
        tags: "vegan", 
        price: {
            it: '27',
            en: '27',
        },
        available: "yes",
    },
    {
        name: {
            it: "Ciambotta di Verdure",
            en: "Vegetable Ciambotta",
        },
        ingredients: {
            it: [
                '*verdure* di stagione',
                '*aglio*, *basilico*',
                '*olio EVO* della "azienda agricola Marino"',
            ],
            en: [
                'seasonal *vegetables*',
                '*garlic*, *basil*',
                '*EVO oil* from "Marino farm"',
            ],
        },
        description: "",
        image: "ciambotta.jpg",
        producer: "",
        location: "",
        tags: "vegan", 
        price: {
            it: '6',
            en: '6',
        },
        available: "yes",
    },
];