import "./avatar.css"

const Avatar = ({nome, imagem, titulo, corDeFundo}) => {
    return (
        <div className="avatar">
            <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
                <img src=  {imagem} alt={nome} />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{titulo}</h5>
            </div>
        </div>
    )
}

export default Avatar