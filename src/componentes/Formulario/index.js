import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


const Formulario = (props) => {

  

    const [nome, setNome] = useState('')    
    const [imagem, setImagem] = useState('')
    const [titulo, setTitulo] = useState('')
    const [classe, setClasse] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoAdicionarPessoa({
            nome,            
            imagem,
            titulo,
            classe
            
        })
        setNome('')
        setImagem('')
        setTitulo('')
        setClasse('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o seu avatar</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor = {nome}
                    aoAlterado = {valor => setNome(valor)}
                /> 

                <CampoTexto 
                    obrigatorio={true} 
                    label="Título" 
                    placeholder="Digite seu título" 
                    valor = {titulo}
                    aoAlterado = {valor => setTitulo(valor)}
                />
               
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor = {imagem}
                    aoAlterado = {valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Classe" 
                    itens={props.classes}
                    valor = {classe}
                    aoAlterado = {valor => setClasse(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario