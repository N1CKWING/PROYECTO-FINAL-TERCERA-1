console.log("Cards Cargado");

const dataCards = [
    {
        "title": "Iron Man",
        "url_image": "./images/ironmancomic.jpeg",
        "desc": "Yo soy Iron Man. Tony Stark, un genio multimillonario creador de un traje de alta tecnología y armado, usando su intelecto y recursos para luchar contra el mal como un héroe hecho a sí mismo, confiando en su destreza tecnológica en lugar de habilidades sobrehumanas.",
        "cta": "VER MAS COMICS",
        "link": "https://megabanana.mx/?s=iron+man+"
    },

    {
        "title": "Spider Man",
        "url_image": "./images/spidermancomic.jpeg",
        "desc": "Un gran poder, conlleva una gran responsabilidad. Peter Parker, un joven héroe con agilidad sobrehumana, fuerza y la capacidad de pegarse a las paredes, que usa sus poderes similares a los de una araña y su ingenio para combatir el crimen mientras equilibra las responsabilidades de su vida cotidiana.",
        "cta": "VER MAS COMICS",
        "link": "https://megabanana.mx/?s=spiderman"
    },

    {
        "title": "Captain America",
        "url_image": "./images/capitancomic.jpeg",
        "desc": "Steve Rogers, un supersoldado de la Segunda Guerra Mundial que encarna los ideales del coraje, la justicia y el patriotismo, empuñando su escudo indestructible y su fuerza mejorada para luchar por la libertad, siempre siendo un símbolo de esperanza y resiliencia.",
        "cta": "VER MAS COMICS",
        "link": "https://megabanana.mx/?s=captain+america+"
    },

    {
        "title": "Thor",
        "url_image": "./images/thorcomic.jpeg",
        "desc": "Thor, el poderoso dios nórdico del Trueno. Un guerrero heroico y poderoso que empuña el legendario martillo Mjolnir, defendiendo tanto Asgard como la Tierra con su fuerza divina, su control sobre las tormentas y un profundo sentido del honor y la justicia.",
        "cta": "VER MAS COMICS",
        "link": "https://megabanana.mx/?s=thor"
    },

    {
        "title": "The Incredible Hulk",
        "url_image": "./images/hulkcomic.jpeg",
        "desc": "Bruce Banner, un brillante científico que sufre un accidente con radiación gamma convirtiendolo en Hulk, un gigante verde de fuerza descomunal. Cada vez que se enfurece, pierde el control y Hulk aparece. A pesar de su naturaleza destructiva, Hulk también protege a los inocentes, simbolizando la lucha interna entre la mente y la furia.",
        "cta": "VER MAS COMICS",
        "link": "https://megabanana.mx/?s=hulk"
    },

    {
        "title": "X-Men",
        "url_image": "./images/xmencomic.jpeg",
        "desc": "Los X-Men son un grupo de mutantes con habilidades especiales, liderados por el profesor Charles Xavier. Luchan por la paz entre humanos y mutantes en un mundo que les teme. Aunque enfrentan amenazas externas y conflictos internos, los X-Men simbolizan la lucha contra la discriminación y la esperanza de unidad.",
        "cta": "VER MAS COMICS",
        "link": "https://megabanana.mx/?s=x-men"
    }
];

(function () {
    let CARD = {
        init: function () {
            let _self = this;
            //Llamar a la funcion
            this.insertData(_self);
        },

        insertData: function (_self) {
            dataCards.map(function (item, index) {
                document.querySelector('.card-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item, index));
            });
        },

        tplCardItem: function (item, index) {
            return (`<div class= 'card-item' id="card-number-${index}">
                <img src="${item.url_image}"/>
                    <div class='card-info'>
                        <p class= 'card-title'>${item.title}</p>
                        <p class= 'card-desc'>${item.desc}</p>
                        <a class= 'card-cta' target= 'blank' href='${item.link}'>${item.cta}</a>
                     </div>
                </div>`
            )
        } 
    }
    CARD.init();
})();