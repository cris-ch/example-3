(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // messageView.js
  var require_messageView = __commonJS({
    "messageView.js"(exports, module) {
      var MessageView2 = class {
        constructor() {
          this.buttonEl = document.querySelector("#show-message-button");
          this.buttonHide = document.querySelector("#hide-message-button");
          this.messageInputField = document.querySelector("#message-input");
          this.mainContainerEl = document.querySelector("#main-container");
          this.buttonEl.addEventListener("click", () => {
            this.displayMessage();
          });
          this.buttonHide.addEventListener("click", () => {
            this.hideMessage();
          });
        }
        displayMessage() {
          let element = document.createElement("div");
          element.id = "message";
          element.append(this.messageInputField.value);
          this.mainContainerEl.append(element);
        }
        hideMessage() {
          let element = document.querySelector("#message");
          element.remove();
        }
      };
      module.exports = MessageView2;
    }
  });

  // index.js
  var MessageView = require_messageView();
  var view = new MessageView();
})();
