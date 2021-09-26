import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --font-family-lato: "Lato", sans-serif;
  --font-family-montserrat: "Montserrat", sans-serif;
  --gray-text: gray;
  --gray-border: #d7d9db;
  --light-gray-bg: #f4f5f7;
  --color-teal: #4eb6ab;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--font-family-montserrat);
}

header {
  height: 10rem;
  margin: 0 auto;
  background-size: 400px;
  position: relative;
}

label {
  width: 100px;
  display: inline-block;
}

input[type='email'],
input[type='password'] {
  width: 80%;
}


`

export default GlobalStyles