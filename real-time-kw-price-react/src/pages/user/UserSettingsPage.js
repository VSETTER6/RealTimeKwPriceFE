import React from "react";
import FooterComponent from "../../components/footer/FooterComponent";
import HeaderComponent from "../../components/header/HeaderComponent";
import MainComponent from "../../components/main/MainComponent";
import UserSettingsComponent from "../../components/user/UserSettingsComponent";

function UserSettingsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent />
      <MainComponent className="flex-grow">
        <UserSettingsComponent />
      </MainComponent>
      <FooterComponent />
    </div>
  );
}

export default UserSettingsPage;
