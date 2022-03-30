const catalogo = require("./catalogo");


let cinema = "CineHouse"
console.log(cinema)
console.log(catalogo);

function adicionarFilme (titulo, duracao, atores, anodeLancamento, emCartaz){
    const novoFilme = {
    codigo: catalogo.length +1,
    titulo,
    duracao,
    atores,
    anodeLancamento,
    emCartaz
}
catalogo.push(novoFilme);
console.log ('O Filme cod: ${novoFilme.codigo}, nome: ${novoFilme.titulo}, foi cadastrado com sucesso');
console.table(catalogo);
console.log('-'.repeat(120));
 }
 adicionarFilme("Matrix", 4, ["paulo", "henrique"], 1800, true)


function buscarFilme (cod) {
    for(let i=0 ; i<catalogo.length ; i++){
        if(catalogo[i].codigo == cod){
            return catalogo[i];
        }
        console.log("Filme não encontrado");
    }
    
   
}
console.log(buscarFilme(2))


function alterarFilme (cod){
    for(let i=0 ; i<catalogo.length; i++){
        if(catalogo[i].codigo == cod){
          if(catalogo[i].emCartaz == true){
                catalogo[i].emCartaz = false
            } else{
                catalogo[i].emCartaz = true
            }
        }
}
}

const imprimeFilme = (titulo, index) => console.log(titulo+ " - " + catalogo.titulo)
function listarTodosOsFilmes(){
    catalogo.forEach(imprimeFilme)
}

const filmesFiltrados = catalogo.filter( filme=> {
    return filme.titulo.includes("2")
})

//retornar a partir de 2 hrs
const ListarFilmesdelongaDuracao = catalogo.filter (filme => {
    return filme.duracao > 200
})



//buscar filme em emCartaz

const BuscarFilmeemCartaz = catalogo.filter (filme => {
    return !filme.emCartaz 

})

console.table(ListarFilmesdelongaDuracao)
console.table(BuscarFilmeemCartaz)
//console.table(catalogo);
//alterarFilme(4)
//console.table(catalogo);
//listarTodosOsFilmes()










































// const filmeProcurado = catalogo[cod - 1];
   // if(!filmeProcurado) {
  //      console.log("filme não enconrado");
   // } else {console.log ("filme encontrado");
    
   // }

//}
//adicionarFilme ("fernanda", 2, ["lalau", "leleu", "luluu"], 2018, false);
//buscarFilme (8)