class TitleBarPathview {
    constructor(boundingEl, dirService) {
        this.el = boundingEl;
        this.dir = dirService;
        dirService.on("update", () => this.render(dirService.getDir()));
    }

    render(dir) {
        this.el.innerHTML = dir;
        console.log("Title Bar Path Activated");
    }
}

exports.TitleBarPathview = TitleBarPathview;