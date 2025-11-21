import chefs from '../assets/chef-claude-icon.png'

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={chefs} alt="Chef Claude" />
            <h1 >Cooking AI</h1>
        </nav>
    )
}
