// DOM elements added: const 

class Intertive {

    constructor(propertyType) {
        this.propertyType = propertyType
    }

    setPropertyType(type) {
        this.propertyType = type
    }

    checkDivsA() {
        // check if anything was present already and if so, remove it

        // div-proprieta
        const previousDivProp = document.querySelector('.div-proprieta')

        // div-no-proprieta
        const previousDivNoProp = document.getElementById('div-no-proprieta')

        if (previousDivProp !== null) {
            previousDivProp.remove()
        }

        if (previousDivNoProp !== null) {
            previousDivNoProp.remove()
        }

    }

    checkDivsB1() {
        // check if there is a selection on the radio for yes/no digid credentials
        const linkFisconline = document.getElementById('div-fisconline')

        if (linkFisconline !== null) {
            linkFisconline.remove()
        }
    }

    checkRadioImmobile() {
        const radioImmobile = document.getElementById('div-radio-dati-immobile')

        if (radioImmobile !== null) {
            radioImmobile.remove()
        }
    }

    removeResultSection() {
        // check first if it was present already, and in that case delete it
        const checkDivResults = document.getElementById('div-results')
        if (checkDivResults !== null) {
            checkDivResults.remove()
        }
    }

    diProprieta() {

        this.checkDivsA()
        this.checkRadioImmobile()
        this.removeResultSection()

        const divProprieta = document.createElement('div')
        divProprieta.classList.add('div-proprieta')
        divProprieta.setAttribute('id', 'div-proprieta')
        divProprieta.classList.add('container-paragraph')
        divProprieta.innerHTML = `
            <form>
                <fieldset>
                    <div class="col-60">
                        <label class="label-radio" for="tipo-digID">Accesso Entratel - Fisconline (SPID/CIE/CNS/Credenziali)?: </label>
                    </div>
                    <div class="col-40" id="tipo-digID">
                        <label class="radio-container">Si
                            <input type="radio" id="tipo-digID" name="tipo-digID" value="si">
                            <span class="checkmark"></span>
                        </label>
                        <label class="radio-container">No
                            <input type="radio" id="tipo-digID" name="tipo-digID" value="no">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </fieldset>
            </form>
        `

        const body = document.body
        body.append(divProprieta)

        this.selctFisconline()

    }

    selctFisconline() {

        const selctAccessDigID = document.querySelectorAll('input[type=radio][name="tipo-digID"]')

        selctAccessDigID.forEach(radio => radio.addEventListener('change', e => {
            const selection = radio.value

            if (selection === 'si') {
                this.showLinkFisconline()
            } else {
                this.showRadioInfoImmobile()
            }
        }))
    }

    showLinkFisconline() {

        this.checkDivsB1()
        this.checkRadioImmobile()

        const linkFisconline = document.createElement('div')
        linkFisconline.classList.add('.container-paragraph')
        linkFisconline.setAttribute('id', 'div-fisconline')
        linkFisconline.innerHTML = `
            <p>Il valore della rendita catastale di un <span style="font-weight: bold;">immobile diproprietá</span> si puó ricavare gratuitamente dal sito dell'Agenzia delle Entrate presso il seguente link:<p/>
            <a href="https://telematici.agenziaentrate.gov.it/Main/index.jsp" target="_blank" class="link-external-paragraph">servizio Entratel - Fisconline</a>
        `

        // const divProprieta = document.querySelector('.div-proprieta')
        // divProprieta.append(linkFisconline)

        this.makeResultSection(linkFisconline)

    }

    nonDiProprieta() {

        this.checkDivsA()
        this.checkDivsB1()
        this.checkRadioImmobile()
        this.removeResultSection()

        const divNoProprieta = document.createElement('div')
        divNoProprieta.classList.add('container-paragraph')
        divNoProprieta.setAttribute('id', 'div-no-proprieta')

        const body = document.body
        body.append(divNoProprieta)

        this.showRadioInfoImmobile()

        // divNoProprieta.innerHTML = `
        //     Non di proprietá
        // `

        // this.makeResultSection(divNoProprieta)

    }

    makeResultSection(element) {
        // create a container to append the final outcome to

        this.removeResultSection()

        const divResults = document.createElement('div')
        divResults.setAttribute('id', 'div-results')
        divResults.classList.add('container-paragraph')
        divResults.append(element)

        const body = document.body
        body.append(divResults)
    }

    showRadioInfoImmobile() {
        // Display radio selection for dati immobile a disposizione

        this.checkDivsB1()
        this.checkRadioImmobile()

        const radioImmobile = document.createElement('div')
        radioImmobile.setAttribute('id', 'div-radio-dati-immobile')
        radioImmobile.classList.add('.container-paragraph')
        radioImmobile.innerHTML = `
            <form>
                <fieldset>
                    <div class="col-60">
                        <label class="label-radio">Informazioni sull'immobile di cui é a disposizione:</label>
                    </div>
                    <div class="col-40" id="info-immobile-disponibili">
                        <label class="radio-container">Proprietario (nome, cognome, data e luogo di nascita o codice fiscale)
                            <input type="radio" id="info-immobile-disponibili" name="info-immobile-disponibili" value="proprietario-immobile">
                            <span class="checkmark"></span>
                        </label>
                        <label class="radio-container">Indirizzo
                            <input type="radio" id="info-immobile-disponibili" name="info-immobile-disponibili" value="indirizzo-immobile">
                            <span class="checkmark"></span>
                        </label>
                        <label class="radio-container">Identificativi catastali (foglio, particella, subalterno)
                            <input type="radio" id="info-immobile-disponibili" name="info-immobile-disponibili" value="identificativi-immobile">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </fieldset>
            </form>
        `

        const checkDiProprieta = document.getElementById('div-proprieta')
        const checkNonDiProprieta = document.getElementById('div-no-proprieta')

        // there are 2 possibilities: either it is on immobile di proprieta or non di proprietá
        if (checkDiProprieta !== null) {
            checkDiProprieta.append(radioImmobile)
        } else if (checkNonDiProprieta !== null) {
            checkNonDiProprieta.append(radioImmobile)
        }

        // // append it to the result section
        // this.makeResultSection(radioImmobile)
        this.selectRadioInfoImmobile()

    }

    selectRadioInfoImmobile() {

        const radioInfoImmobile = document.querySelectorAll('input[type=radio][name="info-immobile-disponibili"]')

        radioInfoImmobile.forEach(radio => radio.addEventListener('change', e => {
            const selection = radio.value

            if (selection === 'proprietario-immobile') {
                this.showVisuraSoggetto()
            } else if (selection === 'indirizzo-immobile') {
                this.showVisuraIndirizzo()
            } else if (selection === 'identificativi-immobile') {
                this.showIdentificativi()
            }
        }))
    }

    showVisuraSoggetto() {

        this.checkDivsB1()
        // this.checkRadioImmobile()

        const visuraSoggetto = document.createElement('div')
        // visuraSoggetto.classList.add('.container-paragraph')
        visuraSoggetto.setAttribute('id', 'div-visura-soggetto')
        visuraSoggetto.innerHTML = `
            <p>Per effettuare una visura per soggetto si dovrà avere a disposizione il proprio codice fiscale, nonché dovranno essere noti i seguenti dati del proprietario dell’immobile:</p>
            <ul class="ul-paragragraph">
                <li>Nome e cognome</li>
                <li>Data e luogo di nascita</li>
            </ul>
            <p>o in alternativa il suo codice fiscale.<br>Vi sono diversi portali online da cui si può effettuare la visura catastale per soggetto ma in questo articolo si suggerisce quello dell’Agenzia delle entrate. Tra le varie opzioni esaminate è risultata essere la soluzione più economica, con un costo di 1,35 euro fino a 10 unitá immobiliari per sezione provinciale.<br>
            <br>
            <a href="https://sister.agenziaentrate.gov.it/CitizenIspezioni/visCondizioniUtilizzo.jsp" target="_blank" class="link-external-paragraph">Link agenzia delle entrate</a>
            </p>
        `

        this.makeResultSection(visuraSoggetto)

    }

    showVisuraIndirizzo() {

        this.checkDivsB1()

        const visuraIndirizzo = document.createElement('div')
        // visuraIndirizzo.classList.add('container-paragrah')
        visuraIndirizzo.setAttribute('id', 'div-visura-indirizzo')
        visuraIndirizzo.innerHTML = `
            <p>New caso in cui non si fosse a conoscenza del proprietario dell’immobile si può effettuare una ricerca per indirizzo. Per farlo si dovrà avere a disposizione il proprio codice fiscale  e i seguenti dati dell’immobile di interesse:</p>
            <ul class="ul-paragragraph">
                <li>comune</li>
                <li>n. civico</li>
                <li>piano e l’interno (nel caso di appartamenti facenti parte di complessi residenziali)</li>
            </ul>
            <p>Nel caso di appartamenti, la rendita catastale totale sará data dalla somma di quella dell’abitazione stessa e quella di eventuali vani, box auto o posti auto (per esempio nel garage condominiale). Pertanto molteplici visure potrebbero essere necessarie, ciascuna per ogni singola unitá.
                <br><br>
                Sono numerosi i siti da cui poter usufruire di questo servizio. Come precedentemente menzionato il costo puó variare dai 4 ai 12 euro circa in base allo specifico sito. Digitando “visura per indirizzo” in un qualsiasi motore di ricerca (Google, Bing, Yahoo) si otterranno facilmente diverse opzioni. Si fa inoltre presente che il sito dell’Agenzia delle entrate (utilizzato per la visura per soggetto) non fornisce il servizio di ricerca per indirizzo.
                <br><br>
                Va inoltre detto che per effettuare questa visura è bene conoscere l’indirizzo in maniera precisa ed assicurarsi che non vi siano discrepanze con i dati riportati nei documenti in catasto. Talvolta può accadere che un numero civico possa venire aggiornato ma i corrispondenti dati catastali no. Per nuove costruzioni invece l’esatto numero civico può non essere ancora stato assegnato. Per queste ragioni la visura per indirizzo puó talvolta rivelarsi un processo meno immediato rispetto alla visura per soggetto.
            </p>
        `

        this.makeResultSection(visuraIndirizzo)
    }

    showIdentificativi() {

        this.checkDivsB1()

        const visuraIdentificativi = document.createElement('div')
        // visuraIdentificativi.classList.add('container-paragraph')
        visuraIdentificativi.setAttribute('id', 'div-visura-identificativi')
        visuraIdentificativi.innerHTML = `
            <p>Gli identificativi catastali sono dei parametri che permettono di individuare in modo univoco un terreno o una unitá immobiliare. Alcuni di questi sono essenziali, ossia sono sempre presenti a prescindere dalla tipologia dell’immobile considerato, altri invece dipendono dalla natura dell’unità immobiliare quali terreni o fabbricati. I vari identificativi sono di seguito elencati.
                <br>
                <ul class="ul-paragragraph">
                    <li>il comune catastale,</li>
                    <li>il foglio,</li>
                    <li>la particella,</li>
                    <li>la particella denominatore,</li>
                    <li>il subalterno,</li>
                    <li>la sezione amministrativa e la sezione urbana per i fabbricati,</li>
                    <li>la sezione censuaria per i terreni.</li>
                </ul>
                Gli identificativi catastali potrebbero essere noti dalle planimetrie catastali dell’edificio o da una precedente visura catastale.
                <br><br>
                Effettuare una visura catastale gratis senza registrazione non risulta possibile. 
                Avere a disposizione gli identificativi catastali rappresenta la soluzione piú immediata per ottenere il valore della rendita catastale di un immobile in quanto non si necessita di effettuare visure. Per farlo invece basterá accedere al servizio gratuito di consultazione rendite catastali presso il sito dell’Agenzia delle entrate presso il seguente link:
                <br><br>
                <a href="https://www.agenziaentrate.gov.it/portale/web/guest/schede/fabbricatiterreni/visura-catastale/consultazione-rendite-catastali" class="link-external-paragraph" target="_blank">Consultazione rendite catastali presso il sito dell'Agenzia delle entrate</a>
            </p>
        `

        this.makeResultSection(visuraIdentificativi)
    }

}

// ------------- //
// INSTANTIATION //
// ------------- //

const proprietaImmobile = document.getElementById('select-proprieta')

const intertive = new Intertive(null)

// --------------- //
// EVENT-LISTENERS //
// --------------- //

proprietaImmobile.addEventListener('change', e => {

    intertive.setPropertyType(e.target.value)

    if (intertive.propertyType === 'proprietario') {
        intertive.diProprieta()
    } else if (intertive.propertyType === 'non-proprietario') {
        intertive.nonDiProprieta()
    }

})