import './Banner.css'

export const Banner = () => {
    // JSX
    return (
        <header className="banner">
            <div className= "banner-secao">
                <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/>                
            </div>
            <a href="http://www.freepik.com">Designed by pch.vector / Freepik</a>
        </header>
    )
}