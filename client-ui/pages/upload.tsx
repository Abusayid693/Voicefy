import React from 'react';
import NavigationWrapper from '../components/Navbar';

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
