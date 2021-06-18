// TODO: add treatment when some input field is left empty
// TODO: add treatment when the input price starts with a '0'
// TODO: replace radio-button with segment control
// TODO: add explanation (link other page) for valore catastale

class Calculator {
    constructor(houseType, sellerType, amountValue) {
        this.houseType = houseType
        this.sellerType = sellerType
        this.amountValue = amountValue
    }

    selectHouseType(house) {
        this.houseType = house
    }

    selectSellerType(seller) {
        this.sellerType = seller
    }

    setAmountValue(price) {
        this.amountValue = price
    }

    validateInputAmount() {
        // Highlight the missing value on the input price/valore catastale
        const validateInput = document.getElementById('input-amount')
        validateInput.classList.add('invalid')

        const nameError = document.getElementById("nameError");
        nameError.classList.add("visible");
        nameError.setAttribute('aria-hidden', false);
        nameError.setAttribute('aria-invalid', true);
    }

    warnNegativeAmount() {
        // Highlight the missing value on the input price/valore catastale
        const validateInput = document.getElementById('input-amount')
        validateInput.classList.add('invalid')

        const nameError = document.getElementById("nameError");
        nameError.classList.remove("visible");

        const inputNegative = document.getElementById("inputNegative");
        inputNegative.classList.add("visible");
        inputNegative.setAttribute('aria-hidden', false);
        inputNegative.setAttribute('aria-invalid', true);
    }

    removeWarnings() {

        const nameError = document.getElementById("nameError");
        nameError.classList.remove("visible");

        const inputNegative = document.getElementById("inputNegative");
        inputNegative.classList.remove("visible");
    }

    compute() {
        if (this.amountValue > 0.0 && this.amountValue !== null) {

            if (this.houseType === 'prima-casa' && this.sellerType === 'venditore-privato') {

                const impostaRegistro = 0.02 * this.amountValue // euro
                const impostaCatastale = 50 // euro
                const impostaIpotecaria = 50 // euro
                const IVA = 0  // euro

                const totaleImposte = parseFloat(impostaRegistro + impostaCatastale + impostaIpotecaria + IVA)

                this.displayResult(impostaRegistro.toFixed(1), impostaCatastale.toFixed(1), impostaIpotecaria.toFixed(1), IVA.toFixed(1), totaleImposte.toFixed(1))

            } else if (this.houseType === 'prima-casa' && this.sellerType === 'venditore-impresa') {
                const impostaRegistro = 200 // euro
                const impostaCatastale = 200 // euro
                const impostaIpotecaria = 200 // euro
                const IVA = 0.04 * this.amountValue  // euro

                const totaleImposte = parseFloat(impostaRegistro + impostaCatastale + impostaIpotecaria + IVA)

                this.displayResult(impostaRegistro.toFixed(1), impostaCatastale.toFixed(1), impostaIpotecaria.toFixed(1), IVA.toFixed(1), totaleImposte.toFixed(1))

            } else if (this.houseType === 'seconda-casa' && this.sellerType === 'venditore-privato') {
                const impostaRegistro = 0.09 * this.amountValue // euro
                const impostaCatastale = 50 // euro
                const impostaIpotecaria = 50 // euro
                const IVA = 0  // euro

                const totaleImposte = parseFloat(impostaRegistro + impostaCatastale + impostaIpotecaria + IVA)

                this.displayResult(impostaRegistro.toFixed(1), impostaCatastale.toFixed(1), impostaIpotecaria.toFixed(1), IVA.toFixed(1), totaleImposte.toFixed(1))

            } else if (this.houseType === 'seconda-casa' && this.sellerType === 'venditore-impresa') {
                const impostaRegistro = 200 // euro
                const impostaCatastale = 200 // euro
                const impostaIpotecaria = 200 // euro
                const IVA = 0.1 * this.amountValue  // euro

                const totaleImposte = parseFloat(impostaRegistro + impostaCatastale + impostaIpotecaria + IVA)

                this.displayResult(impostaRegistro.toFixed(1), impostaCatastale.toFixed(1), impostaIpotecaria.toFixed(1), IVA.toFixed(1), totaleImposte.toFixed(1))
            }
        } else if (this.amountValue === null || isNaN(this.amountValue)) {
            this.validateInputAmount()
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

        // set the amount to null
        calculator.setAmountValue(null)

        // Input price (valore catastale or prezzo acquisto) and label
        document.querySelector('.form-row-money').remove()
        document.querySelector('.div-btn-calc').remove()
    }
}

//  -------------- //
//  INSTANTIATION  //
//  -------------- //

const selectedHouseType = document.querySelectorAll('input[type=radio][name="tipo-abitazione"]')
const selectedSellerType = document.querySelectorAll('input[type=radio][name="tipo-venditore"]')

const calculator = new Calculator(selectedHouseType, selectedSellerType, null) // amountValue set to null just for initialisation

//  ---------------  //
//  EVENT LISTENERS  //
//  ---------------  //

selectedHouseType.forEach(radio => radio.addEventListener('change', e => {
    console.log(radio.value)

    house = radio.value

    calculator.selectHouseType(house)

}))

selectedSellerType.forEach(radio => radio.addEventListener('change', e => {
    seller = radio.value

    // const containerTableResultsExists = document.getElementById('div-results')
    const formRowMoneyExists = document.querySelector('.form-row-money')
    // const btnCalcExistsOnChange = document.querySelector('.div-btn-calc')

    // calculator.removeElements(formRowMoneyExists, containerTableResultsExists, btnCalcExistsOnChange)
    if (formRowMoneyExists !== null) {
        calculator.setAmountValue(null)
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
                    <input type="number" name="valore-catastale" id="input-amount" min="0" required>
                    <span role="alert" id="nameError" aria-hidden="true"> Inserire Valore Catastale </span>
                    <span role="alert" id="inputNegative" aria-hidden="true"> Input non valido </span>
                </div>
            `

        const form = document.querySelector('form')
        form.append(inputValoreCatastale)

        // Get inputted valore catastale
        inputValoreCatastale.addEventListener('input', e => {

            const removeInvalid = document.getElementById('input-amount')
            removeInvalid.classList.remove('invalid')

            price = parseFloat(e.target.value)

            if (price < 0.0) {
                console.log('prezzo negativo, non ci siamo')
                calculator.warnNegativeAmount()

            } else {
                calculator.removeWarnings()
                calculator.setAmountValue(price)
            }
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
                    <input type="number" name="prezzo-acquisto" id="input-amount" min="0" required>
                    <span role="alert" id="nameError" aria-hidden="true"> Inserire Prezzo Acquisto </span>
                    <span role="alert" id="inputNegative" aria-hidden="true"> Input non valido </span>
                </div>
            `

        const form = document.querySelector('form')
        form.append(inputPrezzoAcquisto)

        // Get inputted prezzo acquisto
        inputPrezzoAcquisto.addEventListener('input', e => {

            // If there was an invalid input on the price the border was red
            const removeInvalid = document.getElementById('input-amount')
            removeInvalid.classList.remove('invalid')

            price = parseFloat(e.target.value)

            if (price < 0.0) {
                console.log('prezzo negativo, non ci siamo')
                calculator.warnNegativeAmount()

            } else {
                calculator.removeWarnings()
                calculator.setAmountValue(price)
            }

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
        })
    }
}
))