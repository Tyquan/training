const { DirService } = require("./Dir"),
    CWD = process.cwd(),
    mock = require("mock-fs"), { join } = require("path");

describe("Service/Dir", () => {

    beforeEach(() => {
        mock({
            foo: {
                bar: {
                    baz: "baz", // file contains text baz
                    qux: "qux" // file contains text qux
                }
            }
        });
    });
    afterEach(mock.restore);

    describe("#getFileList", () => {
        it("receives intended file list", () => {
            const service = new DirService(join("foo", "bar"));
            service.setDir("bar");
            let files = service.getFileList();
            console.log(service.dir);
            console.log(files);
            expect(files.length).toBe(2);
        });
        it("every file has expected properties", () => {
            const service = new DirService(join("foo", "bar"));
            const files = service.getFileList();
            console.log(files);
            const [file] = files;
            expect(file.fileName).toBe("baz");
            expect(file.stats.size).toBe(3);
            expect(file.stats.isFile()).toBe(true);
            expect(file.stats.isDirectory()).toBe(false);
            expect(file.stats.mtime).toBeTruthy();
        });
    });

}); // end Service/DirTest