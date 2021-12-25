import "./App.css";
import "./CodeArea";
import "./Output";
import CodeArea from "./CodeArea";
import Output from "./Output";
function App() {
  return (
    <>
      <div className = "flexbox_container">
      <CodeArea />
      <Output />
      </div>
    </>
  );
}

export default App;
