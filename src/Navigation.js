import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Navigation = () =>
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/store">Store</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </nav>

export default Navigation;