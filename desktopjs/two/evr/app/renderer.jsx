import React from "react";
import ReactDOM from "react-dom";

import Header from "./Components/Header.jsx";
import Copycat from "./Components/Copycat.jsx";

var App = React.createElement('<div><Header /><Copycat><li>Child node</li><li>Child node</li></Copycat></div>');
ReactDOM.render('<App />', document.querySelector("app"));