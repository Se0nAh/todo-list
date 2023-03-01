import React from 'react';
import './App.css';
import {createGlobalStyle} from "styled-components";
import ToDoList from "./components/ToDoList";



function App() {
  return (
    <>
      <GlobalStyle />
      <ToDoList />
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap');

  html, body, div, span, applet, object, iframe,
  p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }

  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }

  body {
    line-height: 1;
    font-family: 'Source Sans Pro', sans-serif;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
  }

  menu, ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  //
  //button {
  //  background: inherit;
  //  border: none;
  //  box-shadow: none;
  //  border-radius: 0;
  //  padding: 0;
  //  overflow: visible;
  //  cursor: pointer
  //}
`
