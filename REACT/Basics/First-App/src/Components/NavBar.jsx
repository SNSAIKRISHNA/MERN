;import reactLogo from "../assets/react.svg"; 
function NavBar() {
    return (
         <div className="Navbar">
      <img src={reactLogo} className="logo react" alt="React logo" /> <h3 className="h1-sidenav"> React Facts</h3>
     
      <div className="side-nav">
        <p><a href="#">React Documentation</a></p>
        <p><a href="#">About</a></p>
        <p><a href="#">Community</a></p>
      </div>
      </div>
      
    )

}

export default NavBar 