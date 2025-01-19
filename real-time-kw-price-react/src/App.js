import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomeContent from "./components/homeContent/HomeContent";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main className="flex-grow">
        <HomeContent />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
