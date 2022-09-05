import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-size: 16px;
        line-height: 0px;
    }
    
    :root {
      --brand1: #4529E6;
      --brand2: #5126EA;
      --brand3: #B0A6F0;
      --brand4: #EDEAFD;
      --grey0: #0B0D0D;
      --grey1: #212529;
      --grey2: #495057;
      --grey3: #868E96;
      --grey4: #ADB5BD;
      --grey5: #CED4D4;
      --grey6: #DEE2E6;
      --grey7: #E9ECEF;
      --grey8: #F1F3F5;
      --grey9: #F8F9FA;
      --grey10: #FDFDFD;
      --allBlack: #000000;
      --whiteFixed: #FFFFFF;
      --alert1: #CD2B31;
      --alert2: #FDD8D8;
      --alert3: #FFE5E5;
      --success1: #18794E;
      --success2: #CCEBD7;
      --success3: #DDF3E4;
    }
    
    body, input, button, p, span {
        font-family: "Inter";
        font-size: 1rem;
        font-weight: 400;
    }
    
    button {
        cursor: pointer;
        width: 100vw;
        height: 100vh;
    }
    
    a, li {
        text-decoration: none;
        list-style: none;
    }
    
    h1, h2, h3, h4, h5, h6 {
        font-family: "Lexend";
        font-size: 1em;
        font-weight: 600;
    }   
    
`;
