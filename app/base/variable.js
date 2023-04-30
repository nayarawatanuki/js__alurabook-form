const consultZipCode = fetch('https://viacep.com.br/ws/01001000/json')
.then(response => response.json())
.then(response => {
    if(response.erro) {
        throw Error("Esse CEP não existe!");
    } else {

        console.log(response);
    }
}).catch(error => console.log(error))
.finally(message => console.log("Processamento concluído!"));

export { consultZipCode }