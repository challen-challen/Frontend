import React from 'react';
import styled from "styled-components";
import Header from './Header';
import Footer from './Footer';

const AppLayout = ({ children }) => (
    <Container>
        <Header />
        <div>{children}</div>
        <Footer />
    </Container>
);
const Container = styled.div`
  background-color: white;
  @media (max-width: 769px) {
    width: 100%;
  }
  width: 650px;
  margin: 0 auto;
`;

export default AppLayout;