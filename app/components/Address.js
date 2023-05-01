// import { consultZipCode } from "../base/variable.js";

export async function fetchAddress(zipCode) {

    try {

        const consultZipCode = await fetch(`https://viacep.com.br/ws/${zipCode}/json`);
        const consultZipCodeJSON = await consultZipCode.json();

        if(consultZipCodeJSON.erro) {
            throw Error("CEP não existente!");
        }
    
        console.log(consultZipCodeJSON);
        return consultZipCodeJSON;
    } catch(error) {

        console.log(error);
    }

}