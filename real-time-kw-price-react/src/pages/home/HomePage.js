import React from "react";
import FooterComponent from "../../components/footer/FooterComponent";
import HeaderComponent from "../../components/header/HeaderComponent";
import HomeComponent from "../../components/home/HomeComponent";
import MainComponent from "../../components/main/MainComponent";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent />
      <MainComponent className="flex-grow">
        <HomeComponent region="SE1" />
      </MainComponent>
      <FooterComponent />
    </div>
  );
}

export default HomePage;
