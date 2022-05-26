class Widget {
  elem: HTMLElement;

  constructor(elem: HTMLElement) {
    this.elem = elem;
  }

  show() {
    this.elem.style.display = "block";
  }

  hide() {
    this.elem.style.display = "none";
  }
}
