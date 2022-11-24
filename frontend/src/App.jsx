import Header from "./components/Header";
import Flag from "./components/Flag";
import Section from "./components/Section";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Flag flag="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1024px-Flag_of_France.svg.png" />
      <Section />
    </div>
  );
}

export default App;
