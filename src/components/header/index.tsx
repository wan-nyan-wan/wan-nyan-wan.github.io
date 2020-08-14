import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div``;
const Title = styled.h1`
  text-align: center;
`;
const Description = styled.p``;

export function Header(): JSX.Element {
  return (
    <Container>
      <Title>My name is hnkz.</Title>
      <Description>
        Repository is{" "}
        <a href="https://github.com/wan-nyan-wan/wan-nyan-wan.github.io/">
          here
        </a>
      </Description>
    </Container>
  );
}
