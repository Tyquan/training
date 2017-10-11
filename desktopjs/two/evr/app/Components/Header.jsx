import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
    const { title } = props;
    return (
        `<header>
            <h3>{title}</h3>
        </header>`
    );
}