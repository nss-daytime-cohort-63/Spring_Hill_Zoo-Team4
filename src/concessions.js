import { getConcessions } from './database.js'

export const concessionList = () => {
    const concessions = getConcessions()

    let myHtmlString = '<article class="concessions">'

    for (const concession of concessions) {
        myHtmlString += `<section class="food">
    <div class="concession__name">${concession.name}</div>
    <div class="concession__food">${concession.food}</div>
    </section>`
    }
    myHtmlString += `</article>`
    return myHtmlString

}
