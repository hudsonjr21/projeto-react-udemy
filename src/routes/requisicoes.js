import React from "react";
import { useEffect, useState } from "react";
import Home from "../components/Home";
import '../style.css';
//https://sujeitoprogramador.com/rn-api/?api=posts (api fora do ar)

const posts = [
  {
    "id": "1",
    "titulo": "Os Vingadores",
    "capa": "https://exemplo.com/vingadores.jpg",
    "subtitulo": "A Era de Ultron",
    "categoria": "Ação"
  },
  {
    "id": "2",
    "titulo": "Interestelar",
    "capa": "https://exemplo.com/interestelar.jpg",
    "subtitulo": "Aventura no Espaço",
    "categoria": "Ficção Científica"
  },
  {
    "id": "3",
    "titulo": "O Poderoso Chefão",
    "capa": "https://exemplo.com/poderoso_chefao.jpg",
    "subtitulo": "A Ascensão de um Império",
    "categoria": "Crime"
  },
  {
    "id": "4",
    "titulo": "Forrest Gump",
    "capa": "https://exemplo.com/forrest_gump.jpg",
    "subtitulo": "O Contador de Histórias",
    "categoria": "Drama"
  },
  {
    "id": "5",
    "titulo": "O Senhor dos Anéis",
    "capa": "https://exemplo.com/senhor_dos_aneis.jpg",
    "subtitulo": "A Sociedade do Anel",
    "categoria": "Fantasia"
  },
  {
    "id": "6",
    "titulo": "Pulp Fiction",
    "capa": "https://exemplo.com/pulp_fiction.jpg",
    "subtitulo": "Tempo de Violência",
    "categoria": "Crime"
  },
  {
    "id": "7",
    "titulo": "Jurassic Park",
    "capa": "https://exemplo.com/jurassic_park.jpg",
    "subtitulo": "O Parque dos Dinossauros",
    "categoria": "Ação"
  }
];


function Requisicao() {
  const [nutri, setNutri] = useState ([]);

  useEffect(() => {

/*    function loadApi(){
      let url = 'colocar aqui sua api que vai consumir os dados';

      fetch(url)
      .then((r) => r.json())
      .then((json) => {
        setNutri(json);
      })
      
    }

    loadApi();
*/
    setNutri(posts);
  }, []);

  return (
    <div className="container">
          <div><Home /></div>
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item) => {
        return(
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>

            <img src={item.capa} alt={item.titulo} className="capa" />
            <p className="subtitulo">
              {item.subtitulo}
            </p>
            <a className="botão">Acessar</a>
          </article>
        )
      })}

    </div>
  );
}

export default Requisicao;