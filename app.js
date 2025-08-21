import React from 'react';
import ReactDOM from 'react-dom/client';

const ele = React.createElement(
    "div",
    {id:"Grand"},
    React.createElement(
        "div",
        {id:"Parent"},
        [
            React.createElement(
                "h1",
                {id:"Child1", key:"Child1"},
                "First Child"
            ),
            React.createElement(
                "h2",
                {id:"Child2", key:"Child2"},
                "Second Child"
            )
        ]
    )
)

// setTimeout(() => {
    // ReactDOM.createRoot(document.getElementById("root")).render(ele);
// }, 5000);

const element = (
    <div id='div' tabIndex="5">
        This is div
    </div>
);
ReactDOM.createRoot(document.getElementById("root")).render(element);

// setTimeout(() => {
// }, 5000);