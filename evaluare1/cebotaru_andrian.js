// Problema 8 
const masina = {
    marca : `Dacia`,
    model : `Duster`,
    an : `2003`,
    AfiseazaDetalii: function(){
        return`Marca:${this.marca}, Model:${this.model}, An:${this.an}`
    }
}
console.log(masina.AfiseazaDetalii());