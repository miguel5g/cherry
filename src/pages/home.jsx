import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Página inicial</h1>
      <Link to="/sign-in">Acessar</Link>
    </div>
  );
}

export { Home };
