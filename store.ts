import { ReactiveController, ReactiveControllerHost } from '@lit/reactive-element';

// Create a simple global state object
export const store = {
  counter: 0,
};

// Define a reactive controller to manage the state
export class GlobalStateController implements ReactiveController {
  private host: ReactiveControllerHost;

  constructor(host: ReactiveControllerHost) {
    this.host = host;
    this.host.addController(this);
  }

  hostConnected() {
    // Listen for changes in the global state
    this.host.requestUpdate();
  }

  hostDisconnected() {
    // Clean up any resources if needed
  }

  update() {
    // Trigger an update in the host element
    this.host.requestUpdate();
  }
}
