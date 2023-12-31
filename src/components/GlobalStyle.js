import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  font-style: normal;
  text-decoration: none;
  color: currentColor;
}

button {
  cursor: pointer;
  display: inline-block;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
