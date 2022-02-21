import {createGlobalStyle} from "styled-components";
import {Container} from "@mui/material";
import Content from "./components/Content/Content";
import Comments from "./components/Comments/Comments";


const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f2f2f2;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;


const App = () => {
    return (
        <Container maxWidth="md" sx={{p: 3}}>
            <Content/>
            <Comments/>
            <GlobalStyles/>
        </Container>
    );
};


export default App;
