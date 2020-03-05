import React, { Component } from 'react';
import './App.css';
import styled, {
  createGlobalStyle,
  css,
  keyframes,
  ThemeProvider
} from 'styled-components';

import theme from './theme';
//npm install styled-components
// import { Button } from './css_demonstration';
const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;
	}
`;

const Card = styled.div``;

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.successColor};
  cursor: pointer;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
  ${Card} {
    background-color: blue;
  }
`;

const Form = () => (
  <Card>
    <Button>${inputtext}</Button>
  </Card>
);
const inputtext = 'hello';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          {/* <Input placeholder={inputtext}></Input> */}
          <GlobalStyle />
          <Form />
          {/* <Button>Hello</Button>
        <Button danger rotationTime={3}>
          Hello
        </Button>
        <Anchor as="a" href="https://google.com">
          Go to google
        </Anchor> */}
        </Container>
      </ThemeProvider>
    );
  }
}

// const awesomeCard = css`
//   box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
//   background-color: #fff;
//   border-radius: 10px;
//   padding: 20px;
//   border: none;
//   &:active,
//   &:focus {
//     outline: none;
//   }
// `;

//속성 변환 추가
// const Input = styled.input.attrs({
//   require: true
// })`
//   border-radius: 5px;
//   ${awesomeCard}
// `;

// const Container = styled.div`
//   height: 100vh;
//   width: 100%;
//   /* ${awesomeCard} */
//   background-color: pink;
// `;

// const Button = styled.button`
//   border-radius: 50px;
//   padding: 5px;
//   min-width: 120px;
//   color: white;
//   font-weight: 600;
//   -webkit-appearance: none;
//   cursor: pointer;

//   &:active,
//   &:focus {
//     outline: none;
//   }
//   background-color: ${props => (props.danger ? '#e74c3c' : '#2ecc71')};
//   ${props => {
//     if (props.danger) {
//       return css`
//         animation: ${rotation} ${props.rotationTime}s linear infinite;
//       `;
//     }
//   }}
// `;
// const Anchor = styled(Button)`
//   text-decoration: none;
// `;

// const rotation = keyframes`
// from{
//   transform:ratate(0deg);
// }to{
//   transform:rotate(360deg);
// }
// `;

export default App;
