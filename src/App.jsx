import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="fixed-top">
        <Navbar />
        <Header />
      </div>
      <div className="d-flex flex-column justify-content-center cardcss">
        <Card />
      </div>
    </>
  );
}

export default App;
