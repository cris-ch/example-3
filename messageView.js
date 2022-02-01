class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.mainContainerEl = document.querySelector('#main-container');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
  }

  displayMessage() {
    let element = document.createElement('div');
    element.id = 'message';
    element.append('This is a message displayed by JavaScript');
    this.mainContainerEl.append(element);
    console.log('Thanks for clicking me!');
  }
}

module.exports = MessageView;
