import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import LargeWithLogoLeft from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <LargeWithLogoLeft />
    </div>
  );
}

export default App;
