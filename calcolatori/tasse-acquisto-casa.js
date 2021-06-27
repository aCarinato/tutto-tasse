// TODO: replace radio-button with segment control

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
        // Highlight the missing value on the input price/valore catastale and display the label warning
        const validateInput = document.getElementById('input-amount')
        validateInput.classList.add('invalid')

        // Making sure only relevant message is displayed
        if (validateInput.value < 0.0) {
            const nameError = document.getElementById("nameError");
            nameError.classList.remove("visible");

            const inputNegative = document.getElementById("inputNegative");
            inputNegative.classList.add("visible");

        } else {
            const nameError = document.getElementById("nameError");
            nameError.classList.add("visible");

            const inputNegative = document.getElementById("inputNegative");
            inputNegative.classList.remove("visible");
        }

        // nameError.setAttribute('aria-hidden', false);
        // nameError.setAttribute('aria-invalid', true);
    }

    warnNegativeAmount() {
        // Highlight the negative value on the input price/valore catastale and display the label warning
        const validateInput = document.getElementById('input-amount')
        validateInput.classList.add('invalid')

        // In case there was a previous message of empty fied upon submission
        const nameError = document.getElementById("nameError");
        nameError.classList.remove("visible");

        // Make the 'negative input' label visible
        const inputNegative = document.getElementById("inputNegative");
        inputNegative.classList.add("visible");

    }

    warnMissingHouseType() {
        if (this.houseType === null) {
            
            // radio buttons box 
            // const warningHouseType = document.getElementById('tipo-abitazione')
            // warningHouseType.classList.add('tipo-abitazione-missing')

            // text message
            const warningHouseTypeText = document.getElementById('missingTipoAbitazione')
            warningHouseTypeText.classList.add('visible')
        }
    }

    removeWarnings() {

        const validateInput = document.getElementById('input-amount')
        validateInput.classList.remove('invalid')

        const nameError = document.getElementById("nameError");
        nameError.classList.remove("visible");

        const inputNegative = document.getElementById("inputNegative");
        inputNegative.classList.remove("visible");

        // e.target.style.color = 'black'
    }

    compute() {
        this.warnMissingHouseType()
        
        if (this.amountValue > 0.0 && this.amountValue !== null) {

            if (this.houseType === 'prima casa' && this.sellerType === 'venditore privato') {

                const impostaRegistro = 0.02 * this.amountValue // euro
                const impostaCatastale = 50 // euro
                const impostaIpotecaria = 50 // euro
                const IVA = 0  // euro

                const totaleImposte = parseFloat(impostaRegistro + impostaCatastale + impostaIpotecaria + IVA)

                this.displayResult(impostaRegistro.toFixed(1), impostaCatastale.toFixed(1), impostaIpotecaria.toFixed(1), IVA.toFixed(1), totaleImposte.toFixed(1))

            } else if (this.houseType === 'prima casa' && this.sellerType === 'impresa') {

                const impostaRegistro = 200 // euro
                const impostaCatastale = 200 // euro
                const impostaIpotecaria = 200 // euro
                const IVA = 0.04 * this.amountValue  // euro

                const totaleImposte = parseFloat(impostaRegistro + impostaCatastale + impostaIpotecaria + IVA)

                this.displayResult(impostaRegistro.toFixed(1), impostaCatastale.toFixed(1), impostaIpotecaria.toFixed(1), IVA.toFixed(1), totaleImposte.toFixed(1))

            } else if (this.houseType === 'seconda casa' && this.sellerType === 'venditore privato') {

                const impostaRegistro = 0.09 * this.amountValue // euro
                const impostaCatastale = 50 // euro
                const impostaIpotecaria = 50 // euro
                const IVA = 0  // euro

                const totaleImposte = parseFloat(impostaRegistro + impostaCatastale + impostaIpotecaria + IVA)

                this.displayResult(impostaRegistro.toFixed(1), impostaCatastale.toFixed(1), impostaIpotecaria.toFixed(1), IVA.toFixed(1), totaleImposte.toFixed(1))

            } else if (this.houseType === 'seconda casa' && this.sellerType === 'impresa') {

                const impostaRegistro = 200 // euro
                const impostaCatastale = 200 // euro
                const impostaIpotecaria = 200 // euro
                const IVA = 0.1 * this.amountValue  // euro

                const totaleImposte = parseFloat(impostaRegistro + impostaCatastale + impostaIpotecaria + IVA)

                this.displayResult(impostaRegistro.toFixed(1), impostaCatastale.toFixed(1), impostaIpotecaria.toFixed(1), IVA.toFixed(1), totaleImposte.toFixed(1))
            }

        } else if (this.amountValue === null || isNaN(this.amountValue) || this.amountValue < 0.0) {
            this.validateInputAmount()
        }
    }

    displayResult(impostaRegistro, impostaCatastale, impostaIpotecaria, IVA, totaleImposte) {

        // Remove any leading zeros from input amount
        const inputAmount = document.getElementById('input-amount')
        inputAmount.value = inputAmount.value.replace(/^[0]+/g,"")

        // Create results table
        const containerTableResultsExists = document.getElementById('div-results')

        if (containerTableResultsExists !== null) {
            containerTableResultsExists.remove()
        }

        const containerTableResults = document.createElement('div')
        containerTableResults.classList.add('container')
        containerTableResults.setAttribute('id', 'div-results')

        containerTableResults.innerHTML = `
            <table class="result-table">
                <thead>
                    <tr>
                        <th class="left-col" colspan='2'>Acquisto <span style="color:#2196F3">${calculator.houseType}</span> da <span style="color:#2196F3">${calculator.sellerType}</span>.<br>Ammontare per calcolo imposte: <span style="color:#2196F3">${calculator.amountValue} €</span></th>
                    </tr>
                    <tr id='riepilogo-imposte'>
                        <th class="left-col" colspan='2'>Riepilogo imposte:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="left-col">Imposta di Registro:</td>
                        <td class="td-amount">${impostaRegistro} €</td>
                    </tr>
                    <tr>
                        <td class="left-col">Imposta Catastale:</td>
                        <td class="td-amount">${impostaCatastale} €</td>
                    </tr>
                    <tr>
                        <td class="left-col">Imposta Ipotecaria:</td>
                        <td class="td-amount">${impostaIpotecaria} €</td>
                    </tr>
                    <tr>
                        <td class="left-col">IVA:</td>
                        <td class="td-amount">${IVA} €</td>
                    </tr>
                    <tr class="row-total-amt">
                        <td class="left-col">Totale:</td>
                        <td class="td-amount">${totaleImposte} €</td>
                    </tr>
                </tbody>
            </table>
            <div class="div-btn-calc">
                <button id="btn-reset">Reset</button>
            </div>
        `

        const body = document.body
        body.append(containerTableResults)

        // const btnReset = document.createElement('button')
        // btnReset.innerText = 'Reset'
        // btnReset.id = 'btn-reset'

        // containerTableResults.append(btnReset)

        const btnReset = document.getElementById('btn-reset')

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

        this.houseType = null
        this.sellerType = null
    }
}

//  -------------- //
//  INSTANTIATION  //
//  -------------- //

const selectedHouseType = document.querySelectorAll('input[type=radio][name="tipo-abitazione"]')
const selectedSellerType = document.querySelectorAll('input[type=radio][name="tipo-venditore"]')

const calculator = new Calculator(null, null, null) // set to null for initialisation. The null is useful also for field validation

//  ---------------  //
//  EVENT LISTENERS  //
//  ---------------  //

selectedHouseType.forEach(radio => radio.addEventListener('change', e => {

    house = radio.value

    calculator.selectHouseType(house)

    // In case this choice was left empty at the moment of filling the input 'form-row-money', now remove the warning
    // const warningHouseType = document.getElementById('tipo-abitazione')
    // warningHouseType.classList.remove('tipo-abitazione-missing')

    // text message
    const warningHouseTypeText = document.getElementById('missingTipoAbitazione')
    warningHouseTypeText.classList.remove('visible')

}))

selectedSellerType.forEach(radio => radio.addEventListener('change', e => {
    seller = radio.value

    const formRowMoneyExists = document.querySelector('.form-row-money')

    if (formRowMoneyExists !== null) {
        calculator.setAmountValue(null)
        formRowMoneyExists.remove()
    }

    if (seller === 'venditore privato') {

        // Create input for valore catastale
        const inputValoreCatastale = document.createElement('fieldset')
        inputValoreCatastale.classList.add('form-row-money')

        inputValoreCatastale.innerHTML = `
                <div class="col-60">
                    <label for="valore-catastale">Valore Catastale €</label>
                    <a href='valore-catastale.html' target='_blank'>Come calcolo il Valore Catastale?</a>
                </div>
                <div class="col-40">
                    <input type="number" name="valore-catastale" id="input-amount" min="0" required>
                    <span role="alert" id="nameError" aria-hidden="true"> Inserire Valore Catastale! </span>
                    <span role="alert" id="inputNegative" aria-hidden="true"> Input non valido! </span>
                </div>
            `

        const form = document.querySelector('form')
        form.append(inputValoreCatastale)

        // Get inputted valore catastale
        inputValoreCatastale.addEventListener('input', e => {

            const removeInvalid = document.getElementById('input-amount')
            removeInvalid.classList.remove('invalid')

            price = parseFloat(e.target.value)

            calculator.warnMissingHouseType()

            if (price < 0.0) {
                calculator.warnNegativeAmount()

            } else {
                calculator.removeWarnings()
                calculator.setAmountValue(price)
            }
        })

    } else if (seller === 'impresa') {

        // Create input for 'prezzo di acquisto'
        const inputPrezzoAcquisto = document.createElement('fieldset')
        inputPrezzoAcquisto.classList.add('form-row-money')

        inputPrezzoAcquisto.innerHTML = `
                <div class="col-60">
                    <label for="prezzo-acquisto">Prezzo Acquisto €</label>
                </div>
                <div class="col-40">
                    <input type="number" name="prezzo-acquisto" id="input-amount" min="0" required>
                    <span role="alert" id="nameError" aria-hidden="true"> Inserire Prezzo Acquisto! </span>
                    <span role="alert" id="inputNegative" aria-hidden="true"> Input non valido! </span>
                </div>
            `

        const form = document.querySelector('form')
        form.append(inputPrezzoAcquisto)

        // Get inputted prezzo acquisto
        inputPrezzoAcquisto.addEventListener('input', e => {

            calculator.warnMissingHouseType()

            // If there was an invalid input on the price the border was red
            inputPrezzoAcquisto.classList.remove('invalid')

            price = parseFloat(e.target.value)

            if (price < 0.0) {
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

        // const body = document.body

        // body.append(divBtnCalc)

        const container = document.getElementById('container')
        container.append(divBtnCalc)

        const btnCalc = document.getElementById('btn-calc')

        btnCalc.addEventListener('click', e => {
            e.preventDefault()
            calculator.compute()
        })
    }
}
))