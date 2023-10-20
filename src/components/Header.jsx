import css from "./Header.module.css"

function Header () {
    return (
        <header className={css.bg}>
            <h1>Logo</h1>

            <nav>
                <a>INICIO</a>
                <a>PRODUTOS</a>
                <a>CONTATO</a>
                <img src="" alt="carrinho de comprinha"/>
                <img src="" alt="coraçaozinho"/>
            </nav>
        </header>
    )
}

export default Header