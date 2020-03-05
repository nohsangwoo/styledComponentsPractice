import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px 100px;
`;
//padding : (상하좌우) or (좌우) (1개인덱스)
//padding : 위 (좌우)  (2개 인덱스)
//padding : 위 (좌우) 아래  (3개 인덱스)
//padding : 위 오른쪽 아래 왼쪽 순서 (4개의 인덱스)
const Title = styled.Text`
  font-weight: 600;
  font-size: 32px;
`;

export default function App() {
  return (
    <Container>
      <Title>Open up App.js to start working on your app!</Title>
    </Container>
  );
}
