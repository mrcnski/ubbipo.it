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
            en: "Cilento Mixed Salami",
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
        producer: "",
        location: "",
        tags: "", 
        price: {
            it: '15 "(per alici +4)"',
            en: '15 "(for anchovies +4)"',
        },
        available: "yes",
    },
];