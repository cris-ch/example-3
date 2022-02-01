class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.buttonHide = document.querySelector('#hide-message-button');
    this.messageInputField = document.querySelector('#message-input')
    this.mainContainerEl = document.querySelector('#main-container');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
    // attach a new event listener callback to handle a click on the hide button.
    this.buttonHide.addEventListener('click', () => {
      this.hideMessage();
    })
  }

  displayMessage() {
    let element = document.createElement('div');
    element.id = 'message';
    element.append(this.messageInputField.value);
    this.mainContainerEl.append(element);
  }

  hideMessage() {
    let element = document.querySelector('#message');
    element.remove();
  }
}

module.exports = MessageView;
