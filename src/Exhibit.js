import { getExhibits } from "./database.js";

const exhibition = getExhibits()


export const exhibit = () => {
    let exhibitString = '';
    exhibitString += "<h2>Hellow Exibition Worldie</h2>"

    console.log(exhibition)
    return exhibitString
}


