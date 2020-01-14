import {css, CSSResult} from 'lit-element';

export const getStyles = (): CSSResult => {
  return css`
  :host {
    display: block;
    border: solid 1px gray;
    padding: 16px;
    max-width: 800px;
  }
  :host h1, :host h2 {
    font-style: italic; 
  }
  `;
}
