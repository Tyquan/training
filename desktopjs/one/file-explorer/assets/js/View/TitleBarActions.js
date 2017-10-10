class TitleBarActionsview {

    constructor(boundingEl) {
        this.closeEl = boundingEl.querySelector("[data-bind=close]");
        this.unmaximizeEl = boundingEl.querySelector("[data-bind=unmaximize]");
        this.maximizeEl = boundingEl.querySelector("[data-bind=maximize]");
        this.minimizeEl = boundingEl.querySelector("[data-bind=minimize]");
        this.bindUi();
    }

    // bind our custom methods to the html elements from the constructor
    bindUi() {
        this.closeEl.addEventListener("click", this.onClose.bind(this), false);
        this.unmaximizeEl.addEventListener("click", this.onUnmaximize.bind(this), false);
        this.maximizeEl.addEventListener("click", this.onMaximize.bind(this), false);
        this.minimizeEl.addEventListener("click", this.onMinimize.bind(this), false);
    }

    // When a user clicks the close button
    onClose(e) {
        e.preventDefault();
        nw.Window.get().close();
    }

    // When a user clicks the minimize button
    onMinimize(e) {
        e.preventDefault();
        nw.Window.get().minimize();
    }

    // toggle (hide) the maximize button when clicked
    toggleMaximize() {
        this.maximizeEl.classList.toggle("is-hidden");
        this.unmaximizeEl.classList.toggle("is-hidden");
    }

    onUnmaximize(e) {
        e.preventDefault();
        nw.Window.get().unmaximize();
        this.toggleMaximize();
    }

    onMaximize(e) {
        e.preventDefault();
        nw.Window.get().maximize();
        this.toggleMaximize();
    }
}

exports.TitleBarActionsview = TitleBarActionsview;