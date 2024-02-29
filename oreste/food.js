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
            en: 'Farm "Le Starze"',
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
                '*parmigiano*',
                '*pecorino*',
                '*prezzemolo*',
            ],
            en: [
                '*stale bread*',
                '*eggs*',
                'Cilento organic *cacioricotta cheese* "I Moresani" {slow}',
                '*parmigiano cheese*',
                '*pecorino cheese*',
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
            it: "Pasta ripassata in padella<br><br>In base alla disponibilità:<br>— Pasta e ceci di Cicerale<br>— Pasta e fagioli di Controne<br>— Pasta al forno",
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
];