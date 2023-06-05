class EmployeeRecognition extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "<div>TODO!: Build your solution!</div>";
  }
}

if ("customElements" in window) {
  customElements.define("employee-recognition", EmployeeRecognition);
}
