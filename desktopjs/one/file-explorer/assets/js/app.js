const { DirService } = require("./assets/js/Service/Dir");
const { TitleBarActionsView } = require("./assets/js/View/TitleBarActions");
const { DirListView } = require("./assets/js/View/DirList");
const { FileListView } = require("./assets/js/View/FileList");
const { TitleBarPathView } = require("./assets/ks/View/TitleBarPath");

const dirService = new DirService();

new TitleBarActionsView(document.querySelector("[data-bind=titlebar]"));
new DirListView(document.querySelector("[data-bind=dirList]"));
new FileListView(document.querySelector("[data-bind=fileList]"), dirService);
new TitleBarPathView(document.querySelector("[data-bind=path]"), dirService);

dirService.notify();