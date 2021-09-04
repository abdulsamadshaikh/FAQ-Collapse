/*  
Project Name: FAQ Collapse
Description:  Give me a thumbs-up, If you like it. Enjoy!
Author: Abdul Samad
Author URI: https://getabdulsamad.com/
*/

const faqTitles = document.querySelectorAll('.fag-title h3')
const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', (x) => {
        toggle.parentNode.parentNode.classList.toggle('active')
    })
})

faqTitles.forEach(faqTitle => {
    faqTitle.addEventListener('click', () => {
        faqTitle.parentNode.parentNode.classList.toggle('active')
    })
})