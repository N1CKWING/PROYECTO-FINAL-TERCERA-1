console.log("Accordion Cargado");

const dataAccordion = [
    {
        "title": "La Historia de Nuestras Historias",
        "desc": "Marvel Comics, fundado en 1939, se destacó en los años 60 con personajes complejos como Spider-Man, los X-Men y los Vengadores. Bajo la guía de creadores como Stan Lee, revolucionó los cómics al introducir héroes con problemas humanos. Con el tiempo, Marvel se convirtió en un ícono global del entretenimiento."
    },
    {
        "title": "Universo Cinematografico de Marvel",
        "desc": "El Universo Cinematográfico de Marvel (UCM) es una franquicia de películas y series interconectadas basada en personajes de Marvel Comics. Iniciado en 2008 con Iron Man, sigue las aventuras de superhéroes como los Vengadores en un universo compartido. Las historias están interrelacionadas, permitiendo que los eventos de una producción influyan en otras. El UCM es una de las franquicias más exitosas y populares del cine."
    },
    {
        "title": "Nuestros Heroicos Personajes",
        "desc": "Marvel es una franquicia legendaria que reúne a los héroes más poderosos del planeta, como Spider-Man, los X-Men y los Vengadores. Desde su inicio en los cómics, estos personajes han defendido la Tierra de amenazas tanto humanas como cósmicas, capturando la imaginación de generaciones. Marvel es sinónimo de historias épicas de valentía y justicia, donde los mejores héroes se enfrentan a los desafíos más grandes para proteger al mundo."
    },
];

(function () {

    let ACCORDION = {
        init: function () {
            let _self = this
            //Llamamos a las funciones
            this.insertData(_self);
            this.eventhandler(_self);
        },

        insertData: function (_self) {
            dataAccordion.map(function (item, index) {
                document.querySelector('.main-accordion-container').insertAdjacentHTML('beforeend', _self.tplAccordionItem(item));
            });
        },

        eventhandler: function (_self) {
            let arrayRefs = document.querySelectorAll('.accordion-title');
            for (let x = 0; x < arrayRefs.length; x++) {
                arrayRefs[x].addEventListener('click', function (event) {
                    console.log('event: ', event);
                    _self.showTab(event.target);
                });
            }
        },

        tplAccordionItem: function (item) {
            return (`<div class='accordion-item'>
                <div class='accordion-title'><p>${item.title}</p></div>
                <div class='accordion-desc'><p>${item.desc}</p></div>
                </div>`
            )
        },

        showTab: function (refItem) {
            let activeTab = document.querySelector('.tab-active')
            if (activeTab) {
                activeTab.classList.remove('tab-active');
            }
            console.log('Show Tab: ', refItem);
            refItem.parentElement.classList.toggle('tab-active');
        },
    }
    ACCORDION.init();
})();