import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Classe from './componentes/Classe';

function App() {

  const [pessoas, setPessoas] = useState([])

  const adicionarNovaPessoa = (novaPessoa) => {
    console.log(pessoas)
    setPessoas([...pessoas, novaPessoa])
  }

  return (
    <div className="App"> 
      <Banner />
      <Formulario aoAdicionarPessoa = {novaPessoa => adicionarNovaPessoa(novaPessoa)}/>
      <Classe nome= "Druida" />
      <Classe nome= "Guerreiro" />
      <Classe nome= "Mago" />
      <Classe nome= "Necromante" />
      <Classe nome= "Paladino" />
    </div>
  );
}

export default App;
