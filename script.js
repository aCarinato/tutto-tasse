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

        // containerTableResults.innerHTML = `
        //     <h2>Riassunto Spese</h2>
        //     <div class="split">
        //         <div>
        //             <p>Imposta di Registro:</p>
        //         </div>
        //         <div>
        //             <p>${impostaRegistro} €</p>
        //         </div>
        //     </div>
        //     <div class="split">
        //         <div>
        //             <p>Imposta Catastale:</p>
        //         </div>
        //         <div>
        //             <p>${impostaCatastale} €</p>
        //         </div>
        //     </div>
        //     <div class="split">
        //         <div>
        //             <p>Imposta Ipotecaria:</p>
        //         </div>
        //         <div>
        //             <p>${impostaIpotecaria} €</p>
        //         </div>
        //     </div>
        //     <div class="split">
        //         <div>
        //             <p>IVA:</p>
        //         </div>
        //         <div>
        //             <p>${IVA} €</p>
        //         </div>
        //     </div>
        //     <br>
        //     <div class="split" style="font-weight:bold">
        //         <div>
        //             <p>Totale:</p>
        //         </div>
        //         <div>
        //             <p>${totaleImposte} €</p>
        //         </div>
        //     </div>
        // `

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

    // removeElements(formRowMoneyExists, containerTableResultsExists, btnCalcExistsOnChange) {
    //     // remove the previous input field, either for 'rendita catastale' or 'prezzo acquisto'
    //     if (formRowMoneyExists !== null) {
    //         formRowMoneyExists.remove()
    //     }

        // // remove the summary table previously created, if existent
        // if (containerTableResultsExists !== null) {
        //     containerTableResultsExists.remove()
        // }

        // // remove the button to run the calculation
        // if (btnCalcExistsOnChange !== null) {
        //     btnCalcExistsOnChange.remove()
        // }
    // }

    // Reset all values and fields
    resetCalc() {
        const resultExists = document.getElementById('div-results')

        if (resultExists !== null) {
            resultExists.remove()
        }

        // Dropdown selection
        document.getElementById('tipo-abitazione').value = 'tipo-abitazione-disabled'
        document.getElementById('tipo-venditore').value = 'tipo-venditore-disabled'

        // Input price (valore catastale or prezzo acquisto) and label
        document.querySelector('.form-row-money').remove()
        document.querySelector('.div-btn-calc').remove()
    }
}

const selectedHouseType = document.getElementById("tipo-abitazione")
const selectedSellerType = document.getElementById("tipo-venditore")

const calculator = new Calculator(selectedHouseType, selectedSellerType, 0, 0) // valoreCatastale and prezzoAcquisto set to 0 just for initialisation

selectedHouseType.addEventListener('change', e => {

    house = e.target.value

    calculator.selectHouseType(house)
})

selectedSellerType.addEventListener('change', e => {

    seller = e.target.value

    // Check what elements already exists in the DOM
    const containerTableResultsExists = document.getElementById('div-results')
    const formRowMoneyExists = document.querySelector('.form-row-money')
    const btnCalcExistsOnChange = document.querySelector('.div-btn-calc')

    // calculator.removeElements(formRowMoneyExists, containerTableResultsExists, btnCalcExistsOnChange)
    if (formRowMoneyExists !== null) {
        formRowMoneyExists.remove()
    }

    
    if (seller === 'venditore-privato') {

        // Create input for valore catastale
        const inputValoreCatastale = document.createElement('div')
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
        const inputPrezzoAcquisto = document.createElement('div')
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
        })
    }

})