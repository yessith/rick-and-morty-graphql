import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

/* @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'); */

:root {
  --Font-Family: 'Roboto', sans-serif;
  --Color-White: #ffffff;
  --Color-Brand: #131921;
  --Color-Brand-Second: #242F3E;
  --Btn-Primary: #d62828;
  --Loading-Item-1: #F77F00;
  --Loading-Item-2: #00ccff;
  --Loading-Item-3: #9933ff;
  --Loading-Item-4: tomato;
  --Loading-Item-5: #fff35c;
}



/*------------------------------------*\
    $RESET
\*------------------------------------*/

html, body, div, span, button, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, a, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, figure, footer, header, main, menu, nav, section, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

article, aside, details, figcaption, figure, footer, header, main, menu, nav, section, summary {
  display: block;
}

*, *::before, *::after {
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
}

/*------------------------------------*\
    $SITIO
\*------------------------------------*/

html {
  font-size: 62.5%;
  -webkit-overflow-scrolling: touch;
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

body {
  position: relative;
  height: 100%;
  width: 100%;
  font-family: var(--Font-Family);
  font-size: 1.7rem;
  font-weight: 400;
  color: var(--Color-White);
  background-color: var(--Color-Brand);
  line-height: 1.5;
  text-rendering: optimizeLegibility;
}

a, button {
  cursor: pointer;
}

ul {
  list-style: none;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/*------------------------------------*\
    $TIPOGRAF??A
\*------------------------------------*/

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.5;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2rem;
}

span {
  line-height: 1.5;
  font-weight: 400;
  font-size: 1.7rem;
}
`
