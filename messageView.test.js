/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('shows the message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    const inputField = document.querySelector('#message-input')

    inputField.value = 'First message!'
    buttonEl.click();
    let message = document.querySelector('div#message').textContent

    expect(message).toBe('First message!')
  });

  it('hides the message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();
    const buttonShow = document.querySelector('#show-message-button');
    buttonShow.click();
    const buttonHide = document.querySelector('#hide-message-button');
    buttonHide.click();

    expect(document.querySelector('#message')).toBeNull();
  });
});