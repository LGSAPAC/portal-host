// You may completely replace this file with any content that you want.
// Just keep the file in this location and do not change its name so that
// it will continue to render properly in the HTML file.

class EmployeeRecognition extends HTMLElement {
  constructor() {
    super();
    // Access info about the logged-in user:
    const { firstName, lastName } = window.Liferay.currentUser;
    this.innerHTML = `
      <div
        class='border d-flex justify-content-center flex-grow-1 align-items-center py-2'>
          <div class='flex-column'>
            <p>TODO: Build your solution!<p>
            <p>Current User: ${firstName} ${lastName}</p>
          <div>
      </div>`;
  }
}

if ("customElements" in window) {
  customElements.define("employee-recognition", EmployeeRecognition);
}
