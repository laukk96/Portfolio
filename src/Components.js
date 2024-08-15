import React from "react"
import "./Components.css"

export default function StickyTop() {
    return (
        <nav className ="stickynav">
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>
                    <button className="homebutton">button text</button>
                </li>
            </ul>
        </nav>
    )
}