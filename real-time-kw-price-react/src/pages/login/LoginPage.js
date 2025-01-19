import FooterComponent from "../../components/footer/FooterComponent";
import HeaderComponent from "../../components/header/HeaderComponent";
import MainComponent from "../../components/main/MainComponent";
import LoginComponent from "../../components/login/LoginComponent";

function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent />
      <MainComponent className="flex-grow">
        <LoginComponent />
      </MainComponent>
      <FooterComponent />
    </div>
  );
}

export default LoginPage;
