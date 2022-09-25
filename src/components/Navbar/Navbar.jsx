import './navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import DropdownIcon from '../DropdownIcon/DropdownIcon'
import DropdownMenu from '../DropdownMenu/DropdownMenu'

export default function Navbar() {
    return (
        <nav className="nav">
            <div className="title-logo">
                <a href="../App.js" className="mainPageLink">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg" />
                </a>  
                <h2 href="/" className="site-title">Store</h2>
               
            </div>

            <ul>
                <li><a className="navItems" href="Remeras">Remeras</a></li>
                <li><a className="navItems" href="Gorras">Gorras</a></li>
                <li><a className="navItems" href="Buzos">Buzos</a></li>
                <DropdownIcon icon="Scuderias">
                    <DropdownMenu />
                </DropdownIcon>
                <li><CartWidget /></li>
            </ul>

    </nav>
    )
}