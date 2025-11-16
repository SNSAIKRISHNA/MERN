import globe from '../assets/globe.png'

function Header() {
    return (
        <header>
            <img src={globe} alt='This is Globe Png'></img>
            <h1>My Travel Journal</h1>
        </header>
    )
}

export default Header;