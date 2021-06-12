function retorno_do_numero_aleatorio(max) {
    return Math.floor(Math.random() * max + 1)
}

async function fetchRickMorty(){
    

    // URL da API do rick e morty
    var paginacao_da_api = retorno_do_numero_aleatorio(33);
    const url = "https://rickandmortyapi.com/api/character?page="+paginacao_da_api;

   
    // Requisição no recurso que traz a informações de todos personagens 
    var response = await fetch(url);

    //Guardando as informações do retorno da api
    const json = await response.json();

   //dentro de todas as informações, peguei somente as informaçoes dos personagens
    var personagens = [];
    personagens = json['results'];

    //pegando a tag div dos personagens do html
    var div_de_personagens_do_html = document.getElementById("personagens");

    // dentro dos personagens irei selecionar 4 aleatorios
    for(var quantidade_de_personagem=0; quantidade_de_personagem<4; quantidade_de_personagem++){

        //pego os personagens de forma aleatória
        var numero_do_personagem = retorno_do_numero_aleatorio(personagens.length-1);

        //crio a tag div de personagem
        var div_do_personagem = document.createElement("div");
        div_do_personagem.className="personagen";

        //crio a tag de img do personagem
        var imagen_do_personagem = document.createElement("img");
        imagen_do_personagem.className = "imagem_personagem";
        imagen_do_personagem.src = personagens[numero_do_personagem]['image'];

        //crio a tag de texto para o personagem
        var nome_do_personagem = document.createElement("h4");
        nome_do_personagem.className = "nome_personagem"
        var nome  = document.createTextNode(personagens[numero_do_personagem]['name']);
        nome_do_personagem.appendChild(nome);

        //guardo o nome do personagem na div do personagem
        div_do_personagem.appendChild(nome_do_personagem);
        //guardo a imagem do personagem na div do personagem
        div_do_personagem.appendChild(imagen_do_personagem);


        //devolvo para html a div com as imagens e nomes dos personagens
        div_de_personagens_do_html.appendChild(div_do_personagem);


        console.log(personagens[numero_do_personagem]['name']);
        console.log(personagens[numero_do_personagem]['image']);
    }
   
}
fetchRickMorty();


