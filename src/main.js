import { exhibit } from "./Exhibit.js"
import { concessionList } from './concessions.js'

/* 
  Goals of project:
    1. Header for each exhibit of the zoo
    2. Under header list all animals in that exhibit
    3. As an aside on the right, list all concessions
    4. Main header at top with "Welcome to Spring Hill Zoo"
*/


const parentHTMLElement = document.querySelector("#container")
parentHTMLElement.innerHTML = exhibit()

/* 
  Module Responsibility:
    1. Update the DOM with *all* of the HTML
    2. Defer creation of specific sections to other modules
*/
const parentHTMLElement = document.querySelector("concessions")
parentHTMLElement.innerHTML = concessionList()
