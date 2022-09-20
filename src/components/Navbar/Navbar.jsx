import './navbar.css'
import CartWidget from '../CartWidget/CartWidget'

export default function Navbar() {
    return (
        <nav className="nav">
            <div className="title-logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg" />
                <h2 href="/" className="site-title">Store</h2>
            </div>

            <ul>
                <li><a className="navItems" href="Remeras">Remeras</a></li>
                <li><a className="navItems" href="Gorras">Gorras</a></li>
                <li><a className="navItems" href="Buzos">Buzos</a></li>
                <li><a className="navItems" href="Scuderias">Scuderias</a></li>
                <li><CartWidget /></li>
            </ul>

    </nav>
    )
}