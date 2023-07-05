// my-component.ts
import { css, html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { store, GlobalStateController } from './store';

@customElement('my-component')
export class MyComponent extends LitElement {
  static styles = css`
    .counter {
      font-size: 24px;
      font-weight: bold;
    }

    .button-container {
      margin-top: 16px;
    }

    button {
      padding: 8px 16px;
    }
  `;

  @property({ type: Number })
  counter = 0;

  private stateController: GlobalStateController;

  constructor() {
    super();
    this.stateController = new GlobalStateController(this);
  }

  render() {
    return html`
      <div class="counter">Counter: ${this.counter}</div>
      <div class="button-container">
        <button @click=${this.increment}>Increment</button>
        <button @click=${this.decrement}>Decrement</button>
      </div>
    `;
  }

  increment() {
    store.counter++;
  }

  decrement() {
    store.counter--;
  }
}
