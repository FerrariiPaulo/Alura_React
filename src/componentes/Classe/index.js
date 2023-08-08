import Avatar from "../Avatar"
import "./classe.css"

const Classe = (props) => {
    return(        
        (props.pessoas.length > 0) && <section className="classe" style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className="avatares">
                {props.pessoas.map(pessoa => <Avatar 
                    key={pessoa.nome} 
                    nome={pessoa.nome} 
                    corDeFundo= {props.corPrimaria}
                    titulo={pessoa.titulo} 
                    classe={pessoa.classe} 
                    imagem={pessoa.imagem}
                />)}
            </div>
        </section>
    )
}

export default Classe