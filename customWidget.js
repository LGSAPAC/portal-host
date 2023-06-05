class CustomWidget extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "<div>Your widget goes here!</div>";
  }
}

if ("customElements" in window) {
  customElements.define("custom-widget", CustomWidget);
}
