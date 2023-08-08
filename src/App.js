import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Classe from './componentes/Classe';

function App() {

  const classes = [
    {
      nome:"Druida",
      corPrimaria: "#379237",
      corSecundaria: "#82CD47"
    },
    {
      nome:"Guerreiro",
      corPrimaria: "#6C3428",
      corSecundaria: "#BA704F"
    },
    {
      nome:"Ladino",
      corPrimaria:"#080202",
      corSecundaria: "#272829"
    },
    {
      nome:"Mago",  
      corPrimaria: "#3D246C",
      corSecundaria: "#393646"
    },
    {
      nome:"Necromante",
      corPrimaria: "#900C3F",
      corSecundaria: "#C70039"
    },
    {
      nome:"Paladino",
      corPrimaria:"#F4D160",
      corSecundaria: "#FBEEAC"
    },
    {
      nome:"Warlock",
      corPrimaria:"#4C3A51",
      corSecundaria: "#B25068"
    }

  ]

  const [pessoas, setPessoas] = useState([])

  const adicionarNovaPessoa = (novaPessoa) => {    
    setPessoas([...pessoas, novaPessoa])
  }

  return (
    <div className="App"> 
      <Banner />
      <Formulario classes={classes.map(classe => classe.nome)}  aoAdicionarPessoa = {novaPessoa => adicionarNovaPessoa(novaPessoa)}/>

      {classes.map(classe => <Classe 
        key={classe.nome} 
        nome= {classe.nome} 
        corPrimaria={classe.corPrimaria}  
        corSecundaria={classe.corSecundaria}
        pessoas={pessoas.filter(pessoa => pessoa.classe === classe.nome)}
      /> 
      )}
      
    </div>
  );
}

export default App;
