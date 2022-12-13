import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import HeinekenFest from "./components/HeinekenFest/HeinekenFest";

function App() {
  return (
    <div>
      <Header />
      {/* <Home /> */}
      <HeinekenFest/>
      <Footer/>
    </div>
  );
}

export default App;
