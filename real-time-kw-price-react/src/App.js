import "./App.css";
import Footer from "./components/footer/FooterComponent";
import Header from "./components/header/HeaderComponent";
import HomeContent from "./components/home/HomeComponent";
import Main from "./components/main/MainComponent";

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
