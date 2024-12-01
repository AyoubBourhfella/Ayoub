
import React from 'react';

const Container = ({ children }) => {
  return <div className="container mx-auto flex-col xl:flex-row flex lg:gap-4 gap-10 ">{children}</div>;
};

export default Container;
