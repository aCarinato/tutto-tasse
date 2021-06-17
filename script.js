class Calculator {
    constructor(houseType, sellerType, valoreCatastale, prezzoAcquisto) {
        this.houseType = houseType
        this.sellerType = sellerType
        this.valoreCatastale = valoreCatastale
        this.prezzoAcquisto = prezzoAcquisto
    }

    selectHouseType(house) {
        this.houseType = house
    }

    selectSellerType(seller) {
        this.sellerType = seller
    }

    setValoreCatastale(price) {
        this.valoreCatastale = price
    }

    setPrezzoAcquisto(price) {
        this.prezzoAcquisto = price
    }

    compute() {
        if (typeof this.valoreCatastale === 'number') {
            if (this.houseType === 'prima-casa' && this.sellerType === 'venditore-privato') {

                const impostaRegistro = 0.02 * this.valoreCatastale // euro
                const impostaCatastale = 50 // euro
                const impostaIpotecaria = 50 // euro
                const IVA = 0  // euro

                const totaleImposte = parseFloat(impostaRegistro + impostaCatastale + impostaIpotecaria + IVA)

                this.displayResult(impostaRegistro.toFixed(1), impostaCatastale.toFixed(1), impostaIpotecaria.toFixed(1), IVA.toFixed(1), totaleImposte.toFixed(1))

            } else if (this.houseType === 'prima-casa' && this.sellerType === 'venditore-impresa') {
                const impostaRegistro = 200 // euro
                const impostaCatastale = 200 // euro
                const impostaIpotecaria = 200 // euro
                const IVA = 0.04 * this.prezzoAcquisto  // euro

                const totaleImposte = parseFloat(impostaRegistro + impostaCatastale + impostaIpotecaria + IVA)

                this.displayResult(impostaRegistro.toFixed(1), impostaCatastale.toFixed(1), impostaIpotecaria.toFixed(1), IVA.toFixed(1), totaleImposte.toFixed(1))

            } else if (this.houseType === 'seconda-casa' && this.sellerType === 'venditore-privato') {
                const impostaRegistro = 0.09 * this.valoreCatastale // euro
                const impostaCatastale = 50 // euro
                const impostaIpotecaria = 50 // euro
                const IVA = 0  // euro

                const totaleImposte = parseFloat(impostaRegistro + impostaCatastale + impostaIpotecaria + IVA)

                this.displayResult(impostaRegistro.toFixed(1), impostaCatastale.toFixed(1), impostaIpotecaria.toFixed(1), IVA.toFixed(1), totaleImposte.toFixed(1))

            } else if (this.houseType === 'seconda-casa' && this.sellerType === 'venditore-impresa') {
                const impostaRegistro = 200 // euro
                const impostaCatastale = 200 // euro
                const impostaIpotecaria = 200 // euro
                const IVA = 0.1 * this.prezzoAcquisto  // euro

                const totaleImposte = parseFloat(impostaRegistro + impostaCatastale + impostaIpotecaria + IVA)

                this.displayResult(impostaRegistro.toFixed(1), impostaCatastale.toFixed(1), impostaIpotecaria.toFixed(1), IVA.toFixed(1), totaleImposte.toFixed(1))
            }
        }
    }

    displayResult(impostaRegistro, impostaCatastale, impostaIpotecaria, IVA, totaleImposte) {

        const containerTableResultsExists = document.getElementById('div-results')

        if (containerTableResultsExists !== null) {
            containerTableResultsExists.remove()
        }

        const containerTableResults = document.createElement('div')
        containerTableResults.classList.add('container')
        containerTableResults.setAttribute('id', 'div-results')

        containerTableResults.innerHTML = `
            <table class="result-table">
                <tr>
                    <td>Imposta di Registro:</td>
                    <td class="td-amount">${impostaRegistro} €</td>
                </tr>
                <tr>
                    <td>Imposta Catastale:</td>
                    <td class="td-amount">${impostaCatastale} €</td>
                </tr>
                <tr>
                    <td>Imposta Ipotecaria:</td>
                    <td class="td-amount">${impostaIpotecaria} €</td>
                </tr>
                <tr>
                    <td>IVA:</td>
                    <td class="td-amount">${IVA} €</td>
                </tr>
                <tr class="row-total-amt">
                    <td>Totale:</td>
                    <td class="td-amount">${totaleImposte} €</td>
                </tr>
            </table>
        `

        const body = document.body
        body.append(containerTableResults)

        const btnReset = document.createElement('button')
        btnReset.innerText = 'Reset'
        btnReset.id = 'btn-reset'

        containerTableResults.append(btnReset)

        btnReset.addEventListener('click', e => {
            calculator.resetCalc()
        })
    }

    // Reset all values and fields
    resetCalc() {
        const resultExists = document.getElementById('div-results')

        if (resultExists !== null) {
            resultExists.remove()
        }

        const selectedHouseTypeReset = document.querySelectorAll('input[type=radio][name="tipo-abitazione"]')
        const selectedSellerTypeReset = document.querySelectorAll('input[type=radio][name="tipo-venditore"]')

        // uncheck all radio options
        selectedHouseTypeReset.forEach(radio => radio.checked = false)
        selectedSellerTypeReset.forEach(radio => radio.checked = false)

        // Input price (valore catastale or prezzo acquisto) and label
        document.querySelector('.form-row-money').remove()
        document.querySelector('.div-btn-calc').remove()
    }
}

const selectedHouseType = document.querySelectorAll('input[type=radio][name="tipo-abitazione"]')
const selectedSellerType = document.querySelectorAll('input[type=radio][name="tipo-venditore"]')

const calculator = new Calculator(selectedHouseType, selectedSellerType, 0, 0) // valoreCatastale and prezzoAcquisto set to 0 just for initialisation

selectedHouseType.forEach(radio => radio.addEventListener('change', e => {
    console.log(radio.value)

    house = radio.value

    calculator.selectHouseType(house)

}))

selectedSellerType.forEach(radio => radio.addEventListener('change', e => {
    seller = radio.value

    const containerTableResultsExists = document.getElementById('div-results')
        const formRowMoneyExists = document.querySelector('.form-row-money')
        const btnCalcExistsOnChange = document.querySelector('.div-btn-calc')
    
        // calculator.removeElements(formRowMoneyExists, containerTableResultsExists, btnCalcExistsOnChange)
        if (formRowMoneyExists !== null) {
            formRowMoneyExists.remove()
        }
    
        
        if (seller === 'venditore-privato') {
    
            // Create input for valore catastale
            const inputValoreCatastale = document.createElement('fieldset')
            inputValoreCatastale.classList.add('form-row-money')
    
            inputValoreCatastale.innerHTML = `
                <div class="col-25">
                    <label for="valore-catastale">Valore Catastale</label>
                </div>
                <div class="col-75">
                    <input type="number" name="valore-catastale" id="valore-catastale" min="0">
                </div>
            `
    
            const form = document.querySelector('form')
            form.append(inputValoreCatastale)
    
            // Get inputted valore catastale
            inputValoreCatastale.addEventListener('input', e => {
    
                price = parseFloat(e.target.value)
    
                calculator.setValoreCatastale(price)
            })
    
        } else if (seller === 'venditore-impresa') {
    
            // Create input for 'prezzo di acquisto'
            const inputPrezzoAcquisto = document.createElement('fieldset')
            inputPrezzoAcquisto.classList.add('form-row-money')
    
            inputPrezzoAcquisto.innerHTML = `
                <div class="col-25">
                    <label for="prezzo-acquisto">Prezzo Acquisto</label>
                </div>
                <div class="col-75">
                    <input type="number" name="prezzo-acquisto" id="prezzo-acquisto" min="0">
                </div>
            `
    
            const form = document.querySelector('form')
            form.append(inputPrezzoAcquisto)
    
            // Get inputted prezzo acquisto
            inputPrezzoAcquisto.addEventListener('input', e => {
    
                price = parseFloat(e.target.value)
    
                calculator.setPrezzoAcquisto(price)
            })
        }
    
        calculator.selectSellerType(seller)
       
        const btnCalcExists = document.querySelector('.div-btn-calc')
    
        if (btnCalcExists === null) {
    
            // Add button to run calculation
            const divBtnCalc = document.createElement('div')
            divBtnCalc.classList.add('div-btn-calc')
            divBtnCalc.innerHTML = `
                <button id="btn-calc">Calcola</button>
            `
        
            const body = document.body
        
            body.append(divBtnCalc)
        
            const btnCalc = document.getElementById('btn-calc')
        
            btnCalc.addEventListener('click', e => {
                calculator.compute()
                // calculator.displayResult()
                // TODO: add treatment when some input field is left empty
                // TODO: add treatment when the input price starts with a '0'
            })
        }
}))