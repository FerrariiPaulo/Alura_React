import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {

  const [pessoas, setPessoas] = useState([])

  const adicionarNovaPessoa = (novaPessoa) => {
    console.log(pessoas)
    setPessoas([... pessoas, novaPessoa])
  }

  return (
    <div className="App"> 
      <Banner />
      <Formulario aoAdicionarPessoa = {novaPessoa => adicionarNovaPessoa(novaPessoa)}/>
    </div>
  );
}

export default App;
