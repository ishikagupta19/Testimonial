import "./App.css";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <div>
        <h1 style={{ marginTop: 55, marginBottom: 55, textAlign:"center" }}>Reviews we have got</h1>
      </div>
      <div className="App" style={{ backgroundColor: "#A1C0FF" }}>
        <Testimonial />
      </div>
    </>
  );
}

export default App;
