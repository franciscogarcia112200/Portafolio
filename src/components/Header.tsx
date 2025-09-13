import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Inicio</Link></li>
          {/* <li><Link to="/typescript">TypeScript</Link></li> */}
          <li><Link to="/react">React</Link></li>
          <li><Link to="/experience">Experiencia</Link></li>
          <li><Link to="/ReactConceptsExamples">Conceptos de React</Link></li>
        </ul>
      </nav>
    </header>
  );
}