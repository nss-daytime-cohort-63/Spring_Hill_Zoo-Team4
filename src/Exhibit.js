import { getExhibits } from "./database.js";

const exhibition = getExhibits()


export const exhibit = () => {
    console.log(exhibition)
    return <h2>Hellow Exibition Worldie</h2>
}


