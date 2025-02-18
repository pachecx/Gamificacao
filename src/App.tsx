import { Container, Header, Main } from "./App";
import { CiSearch } from "react-icons/ci";
import imgFundo from "./assets/hhh.png";
import imgDesk from "./assets/imgDesk.png";

import { Responsividade } from "./components/responsividade/index";
import { Link } from "react-router-dom";

function App() {
  return (
    <Container>
      {/* <img className="imgFundo" src={imgFundo} />
      <img className="imgDesk" src={imgDesk} /> */}
      <Responsividade bgImgM={imgFundo} bgImgDesk={imgDesk} bgImgTablet={""} />
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
              <Link to={"/molde"}> Humanidades</Link>
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
