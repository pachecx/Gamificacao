import { Container, Header, Main } from "./App";
import { BiSearchAlt } from "react-icons/bi";
import imgFundo from './assets/DALL.webp'

function App() {
  return (
    <Container>
      <Header>
        <BiSearchAlt className="svgLupa"/>

        <h1>Explorando <br/>a Gamificação</h1>
      </Header>

      <Main>
        <div className="sites">
          <button>
          <p>Artes & Humanas</p>
          </button>
        </div>

        <div className="sites">
        <button>
          <p>Artes & Humanas</p>
          </button>
        </div>

        <div className="sites">
        <button>
          <p>Artes & Humanas</p>
          </button>
        </div>

        <div className="sites">
        <button>
          <p>Artes & Humanas</p>
          </button>
        </div>
        <div className="sites">
        <button>
          <p>Artes & Humanas</p>
          </button>
        </div>
        <div className="sites">
        <button>
          <p>Artes & Humanas</p>
          </button>
        </div>
        <div className="sites">
        <button>
          <p>Artes & Humanas</p>
          </button>
        </div>
        <div className="sites">
        <button>
          <p>Artes & Humanas</p>
          </button>
        </div>
        <div className="sites">
        <button>
          <p>Artes & Humanas</p>
          </button>
        </div>
        <div className="sites">
        <button>
          <p>Artes & Humanas</p>
          </button>
        </div>

        
      </Main>
    </Container>
  );
}

export default App;
