import React from "react";
import { Route } from "react-router-dom";
import { Wrapper, ContentWrapper } from "./style";
import Header from "../common/Header";
import Navigation from "../Navigation";
import { Text } from "../styledConstants";

export default function AuthLayout({ children }) {
  return (
    <React.Fragment>
      <Wrapper className="flex">
        <aside className="sidebar">
          <Navigation />
        </aside>
        <main className="main-content">
          <Header />
          <ContentWrapper>{children}</ContentWrapper>
          <Text as="footer" className="copyrights" size="xsm" fw="light">
            Copyrights © 2021. iMoney Pay. All rights reserved. Terms of Use | Privacy Policy
          </Text>
        </main>
      </Wrapper>
    </React.Fragment>
  );
}
