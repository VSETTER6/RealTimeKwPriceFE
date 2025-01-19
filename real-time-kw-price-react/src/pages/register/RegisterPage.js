import FooterComponent from "../../components/footer/FooterComponent";
import HeaderComponent from "../../components/header/HeaderComponent";
import MainComponent from "../../components/main/MainComponent";
import RegisterComponent from "../../components/register/RegisterComponent";

function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent />
      <MainComponent className="flex-grow">
        <RegisterComponent />
      </MainComponent>
      <FooterComponent />
    </div>
  );
}

export default RegisterPage;
