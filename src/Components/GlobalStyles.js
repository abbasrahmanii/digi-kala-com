import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;

}
body {
    /* font-family: "Yekan"; */
    font-family: "IRANSans", sans-serif;
    font-style: normal;
    font-weight: 500;
}
a{
    text-decoration: none;
}
ul{
    list-style: none;
}
input {
    outline:0;
}
`;

export default GlobalStyle;
