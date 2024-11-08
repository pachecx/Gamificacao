import { Container, Header, Main } from "./App";
import { CiSearch } from "react-icons/ci";
import imgFundo from "./assets/hhh.png";

function App() {
  return (
    <Container>
      <img className="imgFundo" src={imgFundo} />
      <Header>
        <h1>
          Explorando <br />a Gamificação
        </h1>
        <CiSearch className="svgLupa" />
      </Header>

      <Main>
        <div className="sites-wrapper">
          <div className="sites">
            <button>
              <p> Humanidades</p>
            </button>
          </div>
        </div>

        <div className="sites-wrapper">
          <div className="sites">
            <button>
              <p>Tecnologia </p>
            </button>
          </div>
        </div>

        <div className="sites-wrapper">
          <div className="sites">
            <button>
              <p>Ciências</p>
            </button>
          </div>
        </div>

        <div className="sites-wrapper">
          <div className="sites">
            <button>
              <p>Matemática</p>
            </button>
          </div>
        </div>

        <div className="sites-wrapper">
          <div className="sites">
            <button>
              <p>Idiomas</p>
            </button>
          </div>
        </div>

        <div className="sites-wrapper">
          <div className="sites">
            <button>
              <p>Gestão</p>
            </button>
          </div>
        </div>

        <div className="sites-wrapper">
          <div className="sites">
            <button>
              <p>Jogos</p>
            </button>
          </div>
        </div>

        <div className="sites-wrapper">
          <div className="sites">
            <button>
              <p>Avalição</p>
            </button>
          </div>
        </div>

        <div className="sites-wrapper">
          <div className="sites">
            <button>
              <p>Inovações</p>
            </button>
          </div>
        </div>

        <div className="sites-wrapper">
          <div className="sites">
            <button>
              <p>Cursos</p>
            </button>
          </div>
        </div>

        <div className="creator-wrapper">
          <div className="creator">
            <button>
              <p>Creator</p>
            </button>
          </div>
        </div>
      </Main>
    </Container>
  );
}

export default App;
