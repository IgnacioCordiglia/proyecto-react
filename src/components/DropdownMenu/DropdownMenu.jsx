import './dropdownmenu.css';

function DropdownMenu() {

    return (
        <div className="dropdown">
            <ul>
                <li><a className="navItems" href="Alfa Romeo">Alfa Romeo</a></li>
                <li><a className="navItems" href="Alpha Tauri">Alpha Tauri</a></li>
                <li><a className="navItems" href="Alpine">Alpine</a></li>
                <li><a className="navItems" href="Aston Martin">Aston Martin</a></li>
                <li><a className="navItems" href="Ferrari">Ferrari</a></li>
                <li><a className="navItems" href="Haas">Haas</a></li>
                <li><a className="navItems" href="McLaren">McLaren</a></li>
                <li><a className="navItems" href="Mercedes">Mercedes</a></li>
                <li><a className="navItems" href="Red Bull">Red Bull</a></li>
                <li><a className="navItems" href="Williams">Williams</a></li>
            </ul>
        </div>
    )
}

export default DropdownMenu;