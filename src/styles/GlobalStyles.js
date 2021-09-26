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

label[htmlFor='email'],
label[htmlFor='password'] {
  width: 150px;
  display: inline-block;
}

input[type='email'],
input[type='password'] {
  width: 80%;
}

input[type="text"] {
  width: 100%;
  height: 30px;
  padding-left: 5px;
  border-radius: 6px;
  border: 1px solid rgb(236, 234, 234);
}
`

export default GlobalStyles