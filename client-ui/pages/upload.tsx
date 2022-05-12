import NavigationWrapper from "../components/Navbar/Authenticated";
import React from "react";

const UploadFile = () => {
  return (
    <React.Fragment>
      <input type="file" required />
    </React.Fragment>
  );
};

const Index: React.FC = () => {
  return (
    <NavigationWrapper>
      <UploadFile />
    </NavigationWrapper>
  );
};

export default Index;
