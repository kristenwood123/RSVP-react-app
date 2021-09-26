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

label[for='email'],
label[for='password'] {
  width: 200px;
  display: inline-block;
}


input[type="text"] {
  width: 100%;
  height: 30px;
  padding-left: 5px;
  border-radius: 6px;
  border: 1px solid rgb(236, 234, 234);
}

.btn {
  margin: 0 auto;
  background-color: var(--color-teal);
  color: white;
  width: 50%;
  border: none;
  border-radius: 8px;
  height: 35px;
  cursor: pointer;
  font-size: 16px;
}

.btn:hover {
  background-color: black;
  color: white;
  font-weight: 500;
}
`

export default GlobalStyles