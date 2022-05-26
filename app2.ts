class Widget2 {
  elem: HTMLElement;

  constructor(elem: HTMLElement) {
    this.elem = elem;
  }

  show() {
    this.elem.style.display = "block";
  }
}
