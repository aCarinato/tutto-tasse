class Calculator {
    constructor(categoriaCatastale, renditaCatastale) {
        this.categoriaCatastale = categoriaCatastale
        this.renditaCatastale = renditaCatastale
    }

    selectCategoriaCatastale(categoria) {
        this.categoriaCatastale = categoria
    }

    setRenditaCatastale(value) {
        this.renditaCatastale = value
    }

    setMoltiplicatoreCatastale() {
        // set moltiplicatore catastale based on the categoria catastale

        if (this.categoriaCatastale === 'prima-casa') {
            const moltiplicatoreCatastale = 110
            return moltiplicatoreCatastale

        } else if (this.categoriaCatastale === 'seconda-casa') {

            const moltiplicatoreCatastale = 120
            return moltiplicatoreCatastale

        } else if (this.categoriaCatastale === 'categoria-A/10') {

            const moltiplicatoreCatastale = 60
            return moltiplicatoreCatastale

        } else if (this.categoriaCatastale === 'categoria-B') {

            const moltiplicatoreCatastale = 140
            return moltiplicatoreCatastale

        } else if (this.categoriaCatastale === 'categoria-C') {

            const moltiplicatoreCatastale = 120
            return moltiplicatoreCatastale

        } else if (this.categoriaCatastale === 'categoria-C/1') {

            const moltiplicatoreCatastale = 40.8
            return moltiplicatoreCatastale

        } else if (this.categoriaCatastale === 'categoria-D') {

            const moltiplicatoreCatastale = 60
            return moltiplicatoreCatastale

        } else if (this.categoriaCatastale === 'categoria-E') {

            const moltiplicatoreCatastale = 40.8
            return moltiplicatoreCatastale

        } else if (this.categoriaCatastale === 'terreno-non-edificabile' || this.categoriaCatastale === 'terreno-agricolo') {

            const moltiplicatoreCatastale = 112.5
            return moltiplicatoreCatastale
        }
    }

    compute() {
        // should check that all fields are entered

        const moltiplicatore = this.setMoltiplicatoreCatastale()
        const valoreCatastale = (this.renditaCatastale * 1.05 * moltiplicatore).toFixed(1)

        // console.log(valoreCatastale)

        this.displayResults(valoreCatastale)
    }

    displayResults(valoreCatastale) {

        // Create results table
        const containerTableResultsExists = document.getElementById('div-results')

        if (containerTableResultsExists !== null) {
            containerTableResultsExists.remove()
        }

        const containerTableResults = document.createElement('div')
        containerTableResults.classList.add('container')
        containerTableResults.classList.add('container-enlarged')
        containerTableResults.setAttribute('id', 'div-results')
        containerTableResults.innerHTML = `
            <table class="result-table">
                <thead>
                    <tr>
                        <th class="left-col" colspan='2'>Valore Catastale per immobile tipo <span style="color:#2196F3">${calculator.categoriaCatastale}</span><br>Rendita Catastale: <span style="color:#2196F3">${calculator.renditaCatastale} €</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="row-total-amt">
                        <td class="left-col">Valore Catastale:</td>
                        <td class="td-amount">${valoreCatastale} €</td>
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

        const selectedCategoriaCatastale = document.getElementById('categoria-catastale')
        const inputRenditaCatastale = document.getElementById('rendita-catastale')

        // uncheck all radio options
        selectedCategoriaCatastale.value = 'categoria-catastale-disabled'
        inputRenditaCatastale.value = ''

        // set the amount to null
        // calculator.setAmountValue(null)

    }

}

//  -------------- //
//  INSTANTIATION  //
//  -------------- //

const selectedCategoriaCatastale = document.getElementById('categoria-catastale')
const inputRenditaCatastale = document.getElementById('rendita-catastale')

const btnCalc = document.getElementById('btn-calc')

calculator = new Calculator(null, null)

//  ---------------  //
//  EVENT LISTENERS  //
//  ---------------  //

selectedCategoriaCatastale.addEventListener('change', e => {
    calculator.selectCategoriaCatastale(e.target.value)
})

inputRenditaCatastale.addEventListener('input', e => {
    calculator.setRenditaCatastale(e.target.value)
})

btnCalc.addEventListener('click', e => {
    calculator.compute()
})