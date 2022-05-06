import toTopBtn from './modules/toTopBtn'
import timerclock from './modules/timerclock'
import calculatorCounter from './modules/calculatorCntr'
import modal from './modules/modal'
import formSender from './modules/formSender'

toTopBtn()
calculatorCounter()
timerclock('10 may 2022')
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