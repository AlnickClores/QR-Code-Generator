import Home from "./components/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col justify-center mx-auto max-w-[768px]">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
