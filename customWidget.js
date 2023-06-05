// You may completely replace this file with any content that you want.
// Just keep the file in this location and do not change its name so that
// it will continue to render properly in the HTML file.

class EmployeeRecognition extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <div
        class='border d-flex justify-content-center flex-grow-1 align-items-center py-2'>
          TODO: Build your solution!
      </div>`;
  }
}

if ("customElements" in window) {
  customElements.define("employee-recognition", EmployeeRecognition);
}
