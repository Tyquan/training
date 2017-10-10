const fs = require("fs"),
    { join, parse } = require("path");

const EventEmitter = require("events");

class DirService extends EventEmitter {
    constructor(dir = null) {
        super();
        // takes in either a user defined directory or the current directory a user is on
        this.dir = dir || process.cwd();
    }

    setDir(dir = "") {
        let newDir = path.join(this.dir, dir);
        // Early exit
        if (DirService.getStats(newDir) === false) {
            return;
        }
        this.dir = newDir;
        this.notify();
    }

    notify() {
        this.emit("update");
    }

    // Read contents of the current directory
    static readDir(dir) {
        // retrieves the content of a directory content on a given location
        const fInfoArr = fs.readdirSync(dir, 'utf-8').map((fileName) => {
            const filePath = join(dir, fileName);
            const stats = DirService.getStats(filePath);
            if (stats === false) {
                return false;
            }
            return {
                fileName,
                stats
            };
        });
        return fInfoArr.filter(item => item !== false);
    }

    // Get a list of the current directory
    getDirlist() {
        const collection = DirService.readDir(this.dir).filter((fInfo) => {
            fInfo.stats.isDirectory();
        });
        if (!this.isRoot()) {
            collection.unshift({ fileName: ".." });
        }
        return collection;
    }

    // Get a list of files from the current directory
    getFileList() {
        return DirService.readDir(this.dir);
    }

    isRoot() {
        const { root } = parse(this.dir);
        return (root === this.dir);
    }

    static getStats(filePath) {
        try {
            return fs.statSync(filePath);
        } catch (e) {
            return false;
        }
    }
};

exports.DirService = DirService;