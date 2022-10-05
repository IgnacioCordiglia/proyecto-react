import { NavLink } from 'react-router-dom';
import './dropdownmenu.css';

function DropdownMenu() {

    return (
        <div className="dropdown">
            <ul>
                <li><NavLink className="navItems" to="/team/Alfa Romeo" href="Alfa Romeo">Alfa Romeo</NavLink></li>
                <li><NavLink className="navItems" to="/team/Alpha Tauri" href="Alpha Tauri">Alpha Tauri</NavLink></li>
                <li><NavLink className="navItems" to="/team/Alpine" href="Alpine">Alpine</NavLink></li>
                <li><NavLink className="navItems" to="/team/Aston Martin" href="Aston Martin">Aston Martin</NavLink></li>
                <li><NavLink className="navItems" to="/team/Ferrari" href="Ferrari">Ferrari</NavLink></li>
                <li><NavLink className="navItems" to="/team/Haas" href="Haas">Haas</NavLink></li>
                <li><NavLink className="navItems" to="/team/McLaren" href="McLaren">McLaren</NavLink></li>
                <li><NavLink className="navItems" to="/team/Mercedes" href="Mercedes">Mercedes</NavLink></li>
                <li><NavLink className="navItems" to="/team/Red Bull" href="Red Bull">Red Bull</NavLink></li>
                <li><NavLink className="navItems" to="/team/Williams" href="Williams">Williams</NavLink></li>
            </ul>
        </div>
    )
}

export default DropdownMenu;