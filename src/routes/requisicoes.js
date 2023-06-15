import React from "react";
import { useEffect, useState } from "react";
import Home from "../components/Home";
import '../style.css';
import Imagem from '../image/filmes.jpg'
//https://sujeitoprogramador.com/rn-api/?api=posts (api fora do ar)

const posts = [
  {
    id: '1',
    titulo: 'Os Vingadores',
    capa: Imagem,
    subtitulo: 'A Era de Ultron',
    categoria: 'Ação'
  },
  {
    id: '2',
    titulo: 'Interestelar',
    capa: Imagem,
    subtitulo: 'Aventura no Espaço',
    categoria: 'Ficção Científica'
  },
  {
    id: '3',
    titulo: 'O Poderoso Chefão',
    capa: Imagem,
    subtitulo: 'A Ascensão de um Império',
    categoria: 'Crime'
  },
  {
    id: '4',
    titulo: 'Forrest Gump',
    capa: Imagem,
    subtitulo: 'O Contador de Histórias',
    categoria: 'Drama'
  },
  {
    id: '5',
    titulo: 'O Senhor dos Anéis',
    capa: Imagem,
    subtitulo: 'A Sociedade do Anel',
    categoria: 'Fantasia'
  },
  {
    id: '6',
    titulo: 'Pulp Fiction',
    capa: Imagem,
    subtitulo: 'Tempo de Violência',
    categoria: 'Crime'
  },
  {
    id: '7',
    titulo: 'Jurassic Park',
    capa: Imagem,
    subtitulo: 'O Parque dos Dinossauros',
    categoria: 'Ação'
  }
];

function Requisicao() {
  const [nutri, setNutri] = useState ([]);

  useEffect(() => {

    // function loadApi(){
    //   let url = 'https://sujeitoprogramador.com/rn-api?api=posts';

    //   fetch(url)
    //   .then((r) => r.json())
    //   .then((json) => {
    //     setNutri(json);
    //   })
      
    // }

    // loadApi();
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
            <h1>Categoria: {item.categoria}</h1>
            <a className="botao">Acessar</a>
          </article>
        )
      })}

    </div>
  );
}

export default Requisicao;