import { messageErrorZipCode, street, neighborhood, city, state } from "../base/variable.js";

export async function fetchAddress(zipCode) {

    messageErrorZipCode.innerHTML = "";
    try {

        const consultZipCode = await fetch(`https://viacep.com.br/ws/${zipCode}/json`);
        const consultZipCodeJSON = await consultZipCode.json();

        if(consultZipCodeJSON.erro) {
            throw Error("CEP não existente!");
        }

        street.value = consultZipCodeJSON.logradouro;
        neighborhood.value = consultZipCodeJSON.bairro;
        city.value = consultZipCodeJSON.localidade;
        state.value = consultZipCodeJSON.uf;
    
        console.log(consultZipCodeJSON);
        return consultZipCodeJSON;
    } catch(error) {

        messageErrorZipCode.innerHTML += `
            <div class="error__img"></div>
            <p class="error__text">
                CEP inválido. Tente novamente
            </p>
        `;
        console.log(error);
    }

}