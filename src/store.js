import { reactive } from "vue";

export const store = reactive({

    // baseUrl: 'http://localhost:8000',
    // loading: true,

    foods: [
        {
            active: false,
            thumb: "../../food/10.png",
            title: "Insalata di Quinoa e Verdure",
            descrizione: "Un'insalata leggera e nutriente con quinoa e una varietà di verdure fresche.",
            preparazione: "facile",
        },
        {
            active: false,
            thumb: "../../food/11.png",
            title: "Salmone al Vapore con Broccoli",
            descrizione: "Salmone cotto al vapore servito con broccoli, ricco di omega-3 e nutrienti.",
            preparazione: "media",
        },
        {
            active: false,
            thumb: "../../food/19.png",
            title: "Wraps Vegani con Hummus",
            descrizione: "Wraps vegani con hummus, verdure croccanti e avocado.",
            preparazione: "facile",
        },
        {
            active: false,
            thumb: "../../food/13.png",
            title: "Wrap di Pollo e Avocado",
            descrizione: "Un wrap leggero con pollo grigliato, avocado e verdure fresche.",
            preparazione: "facile",
        },
        {
            active: false,
            thumb: "../../food/14.png",
            title: "Zuppa di Verdure a Bassa Caloria",
            descrizione: "Zuppa rinfrescante con una varietà di verdure a basso contenuto calorico.",
            preparazione: "facile",
        },
        {
            active: false,
            thumb: "../../food/15.png",
            title: "Piatto di Sushi Vegetariano",
            descrizione: "Assortimento di sushi con ingredienti vegetali freschi e sani.",
            preparazione: "media",
        },
        {
            active: false,
            thumb: "../../food/16.png",
            title: "Smoothie Verde Detox",
            descrizione: "Un frullato verde ricco di verdure a foglia verde e frutta fresca.",
            preparazione: "facile",
        },
        {
            active: false,
            thumb: "../../food/18.png",
            title: "Couscous alle Verdure",
            descrizione: "Couscous con una varietà di verdure colorate e aromatiche.",
            preparazione: "facile",
        },
        {
            active: false,
            thumb: "../../food/17.png",
            title: "Piatto di Pesce con Quinoa",
            descrizione: "Pesce alla griglia accompagnato da quinoa e verdure al vapore.",
            preparazione: "media",
        },
        {
            active: false,
            thumb: "../../food/19.png",
            title: "Insalata di Ceci e Pomodoro",
            descrizione: "Un'insalata leggera e proteica con ceci, pomodori e erbe fresche.",
            preparazione: "facile",
        },
        {
            active: false,
            thumb: "../../food/12.png",
            title: "Bowl di Frutta e Yogurt",
            descrizione: "Una miscela di frutta fresca, yogurt e granola per una colazione o uno spuntino sano.",
            preparazione: "facile",
        },
        {
            active: false,
            thumb: "../../food/20.png",
            title: "Melone e Prosciutto fresco",
            descrizione: "Una combinazione rinfrescante di melone e prosciutto magro.",
            preparazione: "facile",
        },
    ],

    recensions:
            [
                {
                    active: false,
                    "comment": "Grazie a Quememagno ho finalmente raggiunto i miei obiettivi di perdita di peso. Il loro team di esperti nutrizionisti ha fornito consulenze personalizzate che hanno reso il mio percorso molto efficace. Consigliato!",
                    "name":"Sara",
                    "stars": "4",
                    "photo": "../../photos/1.png",
                    
                },
                {
                    active: false,
                    "comment": "Ho ottenuto risultati incredibili grazie a Quememagno! Le diete personalizzate e le schede di allenamento sono state adattate perfettamente alle mie esigenze. Ottimo servizio di consulenza.",
                    "name":"Rico",
                    "stars": "3",
                    "photo": "../../photos/2.png",
                    
                },
                {
                    active: false,
                    "comment": "Consiglio vivamente Quememagno per chiunque cerchi un supporto professionale nella gestione della propria salute. Il loro approccio personalizzato ha fatto la differenza nel mio percorso nutrizionale.",
                    "name":"Franco",
                    "stars": "5",
                    "photo": "../../photos/3.png",
                    
                },
                {
                    active: false,
                    "comment": "Professionisti competenti e appassionati! Le visite nutrizionali sono dettagliate e mirate, e le diete sono gestite con attenzione. Quememagno ha contribuito significativamente al miglioramento del mio stile di vita.",
                    "name":"Morgan",
                    "stars": "4",
                    "photo": "../../photos/4.png",
                    
                },
                {
                    active: false,
                    "comment": "Quememagno ha trasformato la mia vita! Le consulenze nutrizionali sono state fondamentali per raggiungere i miei obiettivi. Le schede di allenamento personalizzate hanno reso l'esperienza ancora migliore.",
                    "name":"Ana",
                    "stars": "3",
                    "photo": "../../photos/5.png",
                    
                },
                {
                    active: false,
                    "comment": "Ho avuto un'esperienza estremamente positiva con Quememagno. Le consulenze nutrizionali sono state dettagliate e facilmente comprensibili. Sono grato per il loro supporto costante durante il mio percorso.",
                    "name":"Rachele",
                    "stars": "5",
                    "photo": "../../photos/6.png",
                    
                },
                {
                    active: false,
                    "comment": "Quememagno è il partner perfetto per il tuo benessere. Le diete personalizzate e le schede di allenamento sono state adattate alle mie esigenze specifiche. Consiglio vivamente il loro servizio.",
                    "name":"Pina",
                    "stars": "4",
                    "photo": "../../photos/7.png",
                    
                },
                {
                    active: false,
                    "comment": "Consulenza nutrizionale di alta qualità! Il team di Quememagno ha dimostrato competenza e professionalità nel fornire supporto costante. Sono soddisfatto dei risultati ottenuti finora.",
                    "name":"Mino",
                    "stars": "3",
                    "photo": "../../photos/8.png",
                    
                },
                {
                    active: false,
                    "comment": "Ho iniziato il mio percorso con Quememagno senza sapere cosa aspettarmi, ma sono rimasto positivamente sorpreso. Il loro approccio personalizzato ha fatto la differenza nel raggiungere i miei obiettivi.",
                    "name":"Ugo",
                    "stars": "5",
                    "photo": "../../photos/9.png",
                    
                },
                
            ],

});