import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Home from '../Home';

const Opcoes = styled.ul`
  display: inline;  
`

const Opcao = styled.li`
  font-size: 16px;
  cursor: pointer;
`
const textoOpcoes = ['REGISTRO', 'REQUISICAO'];

function Menu() {
    return (
        <Opcoes>
        <Home />
          { textoOpcoes.map ( (texto) => (
            <Link to={`/${texto.toLowerCase()}`} >
              <Opcao>
                <p>{texto}</p>
              </Opcao>
            </Link>
          ))}
        </Opcoes>
    )
}

export default Menu;