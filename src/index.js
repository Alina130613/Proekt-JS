import toTopBtn from './modules/toTopBtn'
import timerclock from './modules/timerclock'
import calculatorCounter from './modules/calculatorCntr'
import imgZm from './modules/imgZm'
import modal from './modules/modal'
import sliders from './modules/sliders'
import formSender from './modules/formSender'

timerclock('25 may 2022')
toTopBtn()
calculatorCounter()
sliders()
imgZm()
modal()

const forms = document.querySelectorAll('form')
forms.forEach((form, index) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        form.id = `form${index}`
        
        formSender({
            formId: `form${index}`,
            someElem: [
                {
                    type: 'block',
                    id: 'calc-total'
                }
            ] 
        })
    })
})