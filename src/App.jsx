import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Clients from "./pages/Client";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Clients />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
