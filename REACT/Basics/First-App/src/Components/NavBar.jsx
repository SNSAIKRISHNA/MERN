import reactLogo from "../assets/react.svg"; 

//props is an object that holds the values passed from the parent component
//In this case, the parent component is App.jsx
//and the values are the URLs for the links
//We can access these values using props.docs, props.about, and props.community
//We use these values to set the href attribute of the anchor tags

function NavBar(props) {
    return (
         <div className="Navbar">
      <img src={reactLogo} className="logo react" alt="React logo" /> <h3 className="h1-sidenav"> React Facts</h3>
     
      <div className="side-nav">
        <p><a href={props.docs} target="_blank">Documentation</a></p>
        <p><a href={props.about} target="_blank">About</a></p>
        <p><a href={props.community} target="_blank">Community</a></p>
      </div>
      </div>
      
    )

}

export default NavBar 