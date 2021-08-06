class Intertive {

    deleteDivA() {
        const divA = document.getElementById('div-A')
        if (divA !== null) {
            divA.remove()
        }
    }

    deleteDivB() {
        const divB = document.getElementById('div-B')
        if (divB !== null) {
            divB.remove()
        }
    }

    deleteDivC() {
        const divC = document.getElementById('div-C')
        if (divC !== null) {
            divC.remove()
        }
    }

    deleteDivD() {
        const divD = document.getElementById('div-D')
        if (divD !== null) {
            divD.remove()
        }
    }

    createDivA(innerHTML) {
        this.deleteDivA()
        this.deleteDivB()
        this.deleteDivC()
        this.deleteDivD()

        const divA = document.createElement('div')
        divA.setAttribute('id', 'div-A')
        divA.innerHTML = innerHTML

        mainContainer.append(divA)

    }

    createDivB(innerHTML) {
        this.deleteDivB()
        this.deleteDivC()
        this.deleteDivD()

        const divB = document.createElement('div')
        divB.setAttribute('id', 'div-B')
        divB.innerHTML = innerHTML

        mainContainer.append(divB)
    }

    createDivC(innerHTML) {
        this.deleteDivC()
        this.deleteDivD()

        const divC = document.createElement('div')
        divC.setAttribute('id', 'div-C')
        divC.innerHTML = innerHTML

        mainContainer.append(divC)
    }

    createDivD(innerHTML) {
        this.deleteDivD()

        const divD = document.createElement('div')
        divD.setAttribute('id', 'div-D')
        divD.innerHTML = innerHTML

        mainContainer.append(divD)
    }

    displPiuDiQuattro() {

        const innerHTML = `
            <form>
                <fieldset>
                    <div class="col-60">
                        <label class="label-radio">Affitto breve? </label>
                    </div>
                    <div class="col-40" id="select-affitto-breve">
                        <label class="radio-container">Si
                            <input type="radio" id="tipo-affitto-divA" name="tipo-affitto-divA" value="si-breve">
                            <span class="checkmark"></span>
                        </label>
                        <label class="radio-container">No
                            <input type="radio" id="tipo-affitto-divA" name="tipo-affitto-divA" value="no-breve">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </fieldset>
            </form>
        `
        this.createDivA(innerHTML)
        
        const tipoLocazione = document.getElementById('select-affitto-breve')
        tipoLocazione.addEventListener('change', e => {
            const selection = e.target.value

            if (selection === 'si-breve') {
                this.endPointPartitaIVA()
            } else if (selection === 'no-breve') {
                this.endPointIRPEF()
            }
        })
    }

    endPointPartitaIVA() {
        const innerHTML = `
            <p>Cedolare secca non applicabile. Fatte a partita IVA</p>
        `
        this.createDivC(innerHTML)
    }

    endPointIRPEF() {
        const innerHTML = `
            <p>Cedolare secca non applicabile. Redditi da assoggettare ad IRPEF</p>
        `
        this.createDivC(innerHTML)
    }

    displFinoQuattro() {

        const innerHTML = `
            <form>
                <fieldset>
                    <div class="col-60">
                        <label class="label-radio">Tipo di locazione (della singola unitá): </label>
                    </div>
                    <div class="col-40" id="select-tipo-locazione">
                        <label class="radio-container">Canone libero
                            <input type="radio" id="tipo-locazione" name="tipo-locazione" value="canone-libero">
                            <span class="checkmark"></span>
                        </label>
                        <label class="radio-container">Canone concordato
                            <input type="radio" id="tipo-locazione" name="tipo-locazione"  value="canone-concordato">
                            <span class="checkmark"></span>
                        </label>
                        <label class="radio-container">Affitto breve
                            <input type="radio" id="tipo-locazione" name="tipo-locazione"  value="affitto-breve">
                            <span class="checkmark"></span>
                         </label>
                    </div>
                </fieldset>
            </form>
        `
        this.createDivA(innerHTML)
        
        const tipoLocazione = document.getElementById('select-tipo-locazione')
        tipoLocazione.addEventListener('change', e => {
            const selection = e.target.value

            if (selection === 'canone-libero') {
                this.ifImmobileA1A11()
            } else if (selection === 'canone-concordato') {
                this.restrizioniConcordato()
            } else if (selection === 'affitto-breve') {
                this.endPointAffittoBreve()
            }
        })
    }
    
    ifImmobileA1A11() {
        const innerHTML = `
            <form>
                <fieldset>
                    <div class="col-60">
                        <label class="label-radio">Immobile in categoria A1-A11? </label>
                    </div>
                    <div class="col-40" id="if-categoria">
                        <label class="radio-container">Si
                            <input type="radio" id="if-categoriaA1-A11" name="if-categoriaA1-A11"  value="categoriaA1A11">
                            <span class="checkmark"></span>
                        </label>
                        <label class="radio-container">No
                            <input type="radio" id="if-categoriaA1-A11" name="if-categoriaA1-A11" value="no-categoriaA1A11">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </fieldset>
            </form>
        `
        this.createDivC(innerHTML)

        // event listener
        const ifCategoria = document.getElementById('if-categoria')
        ifCategoria.addEventListener('change', e => {
            const selection = e.target.value

            if (selection === 'categoriaA1A11') {
                this.endPointCedolare21Applicabile()
            } else if (selection === 'no-categoriaA1A11') {
                this.endPointCedolare21NonApplicabile()
            }
        })
    }

    endPointCedolare21Applicabile() {
        const innerHTML = `
            <p>Cedolare secca <span style="font-weight: bold;">applicabile al 21%</span></p>
        `
        this.createDivD(innerHTML)
    }

    endPointCedolare21NonApplicabile() {
        const innerHTML = `
            <p>Cedolare secca <span style="font-weight: bold;">non applicabile</span> (applicabile solo per unitá A1-A11)</p>
        `
        this.createDivD(innerHTML)
    }

    restrizioniConcordato() {
        const innerHTML = `
            <form>
                <fieldset>
                    <div class="col-60">
                        <label class="label-radio">
                            É appicabile almeno una delle seguenti condizioni?<br>
                            <ul>
                                <li>Comune con mancanza di soluzioni abitative o densamente popolato</li>
                                <li>Contratto d’affitto a studenti universitari</li>
                                <li>Nel comune vi sono state calamità naturali;</li>
                                <li>Affitto transitorio disciplinato dalla legge n. 431/1998</li>
                            </ul>
                        </label>
                    </div>
                    <div class="col-40" id="restrizioni-concordato">
                        <label class="radio-container">Si
                            <input type="radio" id="if-restrizioni-concordato" name="if-restrizioni-concordato"  value="restrizioni-concordato-si">
                            <span class="checkmark"></span>
                        </label>
                        <label class="radio-container">No
                            <input type="radio" id="if-restrizioni-concordato" name="if-restrizioni-concordato" value="restrizioni-concordato-no">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </fieldset>
            </form>
        `
        this.createDivC(innerHTML)

        // event listener
        const restrizioniConcordato = document.getElementById('restrizioni-concordato')
        restrizioniConcordato.addEventListener('change', e => {
            const selection = e.target.value

            if (selection === 'restrizioni-concordato-si') {
                this.endPointCedolare10Applicabile()
            } else if (selection === 'restrizioni-concordato-no') {
                this.endPointCedolare10NonApplicabile()
            }
        })
    }

    endPointCedolare10Applicabile() {
        const innerHTML = `
            <p>Cedolare secca <span style="font-weight: bold;">applicabile al 10%</span></p>
        `
        this.createDivD(innerHTML)
    }

    endPointCedolare10NonApplicabile() {
        const innerHTML = `
            <p>Cedolare secca <span style="font-weight: bold;">non applicabile al 10%</span></p>
        `
        this.createDivD(innerHTML)
    }

    endPointAffittoBreve() {
        const innerHTML = `
            <p>Cedolare applicabile al 21%</p>
        `
        this.createDivC(innerHTML)
    }
}

// ------------- //
// INSTANTIATION //
// ------------- //

const nLocazioni = document.getElementById('select-n-locazioni')
const mainContainer = document.getElementById('main-container')

const intertive = new Intertive()

// --------------- //
// EVENT-LISTENERS //
// --------------- //

nLocazioni.addEventListener('change', e => {
    const selection = e.target.value

    if (selection === 'piu-quattro') {
        intertive.displPiuDiQuattro()
    } else if (selection === 'fino-quattro') {
        intertive.displFinoQuattro()
    }
})