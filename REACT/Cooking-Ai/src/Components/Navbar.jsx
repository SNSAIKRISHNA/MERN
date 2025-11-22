import chefs from "../assets/chef-claude-icon.png";

export default function Header() {
  return (
    <header>
      <img src={chefs} alt="Chef Claude" />
      <h1>FoodieFriend</h1>
    </header>
  );
}
