import "./App.css";
import Banner from "./app/views/Banner";
import Footer from "./app/views/Footer";
import MarKeting from "./app/views/marketingTips/MarKeting";
import Navbar from "./app/views/Navbar";

function App() {
  return (
    <div className="App navBarPadding">
      <Navbar />
      <Banner />
      <MarKeting />
      <Footer />
    </div>
  );
}

export default App;
