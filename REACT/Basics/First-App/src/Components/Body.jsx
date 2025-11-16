function Body() {
  return (
    <div className="card">
      <h1>Fun Facts about React</h1>
      <ul className="list">
        <li>React is a JavaScript library for building user interfaces.</li>
        <li>React is maintained by Facebook.</li>
        <li>React is used by many companies worldwide.</li>
        <li>
          React allows developers to create large web applications that can
          update and render efficiently in response to data changes.
        </li>
        <li>React uses a component-based architecture.</li>
        <li>
          React can be used with other libraries or frameworks such as Redux,
          React Router, and Next.js.
        </li>
        <li>
          React is a library, not a framework, focusing only on the UI layer and
          not dictating structure for routing or state management.
        </li>
        <li>
          React Hooks (introduced in v16.8) allow developers to use state and
          other React features in functional components, moving away from class
          components
        </li>
        <li>
          React employs a one-way data flow (unidirectional data binding) from
          parent to child components, which ensures better code stability and
          makes debugging easier.
        </li>
        <li>
          The use of Fragments (<></>) allows components to return multiple
          elements without adding unnecessary wrapper div nodes to the actual
          DOM structure
        </li>
      </ul>
    </div>
  );
}
export default Body;
