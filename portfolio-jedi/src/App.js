import './App.css';
import { GameBox } from './components/GameBox';
import { ProfileImg } from './components/ProfileImg';
import { Card } from './components/Card';

function App() {

  const slideArray = [
    {
      name: "Perfil",
      component: () =>
        <div className='slide-component'>
          <Card>Ernesto Borges</Card>
          <ProfileImg />
          <Card>Desenvolvedor frontend</Card>
        </div>
    },
    {
      name: "Descrição",
      component: () =>
        <div className='slide-component'>
          <div className='flex-row'>

            <Card>
              <h2>Informações</h2>
              <ul>
                <li><span>Nome: </span> Ernesto Borges</li>
                <li><span>Idade:</span> 28 anos</li>
                <li><span>Cidade:</span> Iriri - ES</li>
              </ul>
            </Card>
            <ProfileImg width={160} height={160} />
          </div>
          <Card>
            <p>
              Sou desenvolvedor frontend migrando para fullstack e dados.
            </p>
            <p>
              Hoje estou no time de Enablement na Inovative Medicine como Assistente em BI na Johnson&Johnson.
            </p>
          </Card>
        </div>
    },
    {
      name: "Skills",
      component: () =>
        <div className='slide-component flex-row'>
          <Card>
            <h2>Habilidades</h2>
            <ul>
              <li>HTML: <span className='skill-star'>★★★★★</span></li>
              <li>CSS: <span className='skill-star'>★★★★★</span></li>
              <li>JS: <span className='skill-star'>★★★★★</span></li>
              <li>React: <span className='skill-star'>★★★★☆</span></li>
              <li>Node: <span className='skill-star'>★★★☆☆</span></li>
              <li>NoSQL: <span className='skill-star'>★★★☆☆</span></li>
              <li>SQL: <span className='skill-star'>★★☆☆☆</span></li>
            </ul>
          </Card>
          <Card>
          <h2>Motivações</h2>
            <ul className='styled-list'>
              <li>Fazer Amigos</li>
              <li>Resolver Problemas</li>
              <li>Aprender com todo mundo</li>
              <li>Me Divertir</li>
            </ul>
          </Card>
        </div>
    },
    {
      name: "Contato",
      component: () =>
        <div className='slide-component'>
          <Card>
            <h2>Minhas Redes</h2>
            <ul>
              <li>
                <a href='https://www.linkedin.com/in/ernesto-borges-b9a440194/' target='_blank'>
                  Linkedin
                </a>
              </li>
              <li>
                <a href='https://github.com/ernestoborges/' target='_blank'>
                  Github
                </a>
              </li>
            </ul>
          </Card>
        </div>
    }
  ]
  return (
    <div className="App">
      <GameBox slideArray={slideArray} />
    </div>
  );
}

export default App;
