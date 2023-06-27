const url = "http://127.0.0.1:8000/breukh-api/niveaux?join=classes";

const niveau = document.querySelector(".accordion");

async function getData() {

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        },

    });
    const result = await response.json();

    console.log(result.data[0]);

    result.data.forEach(element => {
        // Générer le code HTML pour chaque accordion
        const accordionItem = `
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse-${element.id}" aria-expanded="false" aria-controls="collapse-${element.id}">
                        ${element.niveau}
                    </button>
                </h2>
                <div id="collapse-${element.id}" class="accordion-collapse collapse" data-bs-parent=".accordion">
                    <div class="accordion-body">
                        ${element.classe.map(classItem => `
                            <li class="list-group-item active" aria-current="true">${classItem.classe}</li>
                        `).join("")}
                    </div>
                </div>
            </div>
        `;

        // Ajouter l'accordion au DOM
        niveau.innerHTML += accordionItem;
    });



}

getData();