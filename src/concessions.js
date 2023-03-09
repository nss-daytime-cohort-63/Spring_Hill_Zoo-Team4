import { getConcessions } from './database.js'

export const concessionList = () => {
    const concessions = getConcessions()

    let myHtmlString = ''

    for (const concession of concessions) {
        myHtmlString += ``
    }
    myHtmlString += ``
    return myHtmlString

}
