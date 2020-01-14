/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import {
  LitElement,
  html,
  customElement,
  property,
  TemplateResult,
} from 'lit-element';
import {until} from 'lit-html/directives/until.js';
import {getData} from './services/report-data';
import {getStyles} from './styles/my-element.styles';
import './sub-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  static get styles() {
    return getStyles();
  }

  @property({type: TemplateResult, attribute: false})
  private externalTestData = html``;

  constructor() {
    super();
    console.log(`constructor...`);
    this.externalTestData = this.getExternalData('Test external data load');
  }

  /**
   * The name to say "Hello" to.
   */
  @property({type: String})
  name = 'World';

  @property({type: Number, attribute: false})
  private timerValue = 0;

  // Controller to just call once inside render()
  // For every change render() is called again...
  timerRef: any;

  @property({type: String})
  displayToken = '';
  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  count = 0;

  private getExternalData = (data: any): TemplateResult => {
    const content = getData(data).then((data) => {
      console.log('External data is loaded...');
      return data;
    });
    return html`
      <h1>${until(content, 'Loading External Data...')}</h1>
    `;
  };

  render() {
    console.log(`render() -> start...`);

    !this.timerRef &&
      (this.timerRef = setTimeout(() => {
        console.log(`setTimeout...`);
        this.timerValue++;
      }, 2000));

    return html`
      <h1>Hello ${this.timerValue}, ${this.name}!</h1>
      <sub-element title="sub-element-1"></sub-element>
      <div>${this.externalTestData}</div>

      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>

      <!--<sub-element title='sub-element-2'></sub-element>-->
      <slot name="one"></slot>
      <slot name="two"></slot>
    `;
  }

  private _onClick() {
    this.count++;
    console.log(`Clicked -> displayToken = ${this.displayToken}`);
  }

  foo(): string {
    return 'foo';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
