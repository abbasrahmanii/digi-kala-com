import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: IRANSans;
    font-style: normal;
    font-weight: bold;
    src: url('../fonts/IRANSans-Bold-web.eot');
    src: url('../fonts/IRANSans-Bold-web.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
         url('../fonts/IRANSans-Bold-web.woff2') format('woff2'),  /* Chrome36+, Opera24+*/
         url('../fonts/IRANSans-Bold-web.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
         url('../fonts/IRANSans-Bold-web.ttf') format('truetype');
}
@font-face {
    font-family: IRANSans;
    font-style: normal;
    font-weight: 500;
    src: url('../fonts/IRANSans-Medium-web.eot');
    src: url('../fonts/IRANSans-Medium-web.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
         url('../fonts/IRANSans-Medium-web.woff2') format('woff2'),  /* Chrome36+, Opera24+*/
         url('../fonts/IRANSans-Medium-web.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
         url('../fonts/IRANSans-Medium-web.ttf') format('truetype');
}
@font-face {
    font-family: IRANSans;
    font-style: normal;
    font-weight: 300;
    src: url('../fonts/IRANSans-Light-web.eot');
    src: url('../fonts/IRANSans-Light-web.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
         url('../fonts/IRANSans-Light-web.woff2') format('woff2'),  /* Chrome36+, Opera24+*/
         url('../fonts/IRANSans-Light-web.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
         url('../fonts/IRANSans-Light-web.ttf') format('truetype');
}
@font-face {
    font-family: IRANSans;
    font-style: normal;
    font-weight: 200;
    src: url('../fonts/IRANSans-UltraLight-web.eot');
    src: url('../fonts/IRANSans-UltraLight-web.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
         url('../fonts/IRANSans-UltraLight-web.woff2') format('woff2'),  /* Chrome36+, Opera24+*/
         url('../fonts/IRANSans-UltraLight-web.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
         url('../fonts/IRANSans-UltraLight-web.ttf') format('truetype');
}
@font-face {
    font-family: IRANSans;
    font-style: normal;
    font-weight: normal;
    src: url('../fonts/IRANSans-web.eot');
    src: url('../fonts/IRANSans-web.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
         url('../fonts/IRANSans-web.woff2') format('woff2'),  /* Chrome36+, Opera24+*/
         url('../fonts/IRANSans-web.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
         url('../fonts/IRANSans-web.ttf') format('truetype');
}
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
`;

export default GlobalStyle;
