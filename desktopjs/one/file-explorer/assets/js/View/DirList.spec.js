const { DirListView } = require("./DirList");
const { DirService } = require("../Service/Dir");

describe("View/DirList", () => {

    beforeEach(() => {
        this.sandbox = document.getElementById("sandbox");
        this.sandbox.innerHTML = `<ul data-bind="dirList"></ul>`;
    });

    afterEach(() => {
        this.sandbox.innerHTML = ``;
    });

    describe("#update", () => {
        it("updates from a given collection", () => {
            const dirService = new DirService();
            const view = new DirListView(this.sandbox.querySelector("[data-bind=dirList]"), dirService);
            view.update([
                { fileName: "Foo" }, { fileName: "bar" }
            ]);
            expect(this.sandbox.querySelectorAll(".dir-list__li").length).toBe(2);
        });
    });
});