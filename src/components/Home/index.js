import { Link } from 'react-router-dom';

function Home() {
    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit',
        outline: 'none',
    };

    return (
        <Link to="/" style={linkStyle}>
            <h2>LISTA DE TAREFAS - CURSO UDEMY </h2>
        </Link>
    );
}

export default Home;