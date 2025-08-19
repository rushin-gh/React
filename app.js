// const elementOne = React.createElement("div", {id: "level1"}, "Ohh");
// const elementTwo = React.createElement("div", {id: "level2"}, "My");
// const elementThree = React.createElement("div", {id: "level3"}, "God!");

// ReactDOM.createRoot(document.getElementById("level1")).render(element2);
// // ReactDOM.createRoot(document.getElementById("level2")).render(element3);


// // elementOne.createRoot(document.getElementById("level1")).render(element2);
// // elementTwo.createRoot(document.getElementById("level1")).render(element3);


const ele = React.createElement(
    "div",
    {id:"Grand"},
    [
        React.createElement(
            "div",
            {id:"Parent"},
            [
                React.createElement(
                    "h1",
                    {id:"Child1"},
                    "First Child"
                ),
                React.createElement(
                    "h2",
                    {id:"Child2"},
                    "Second Child"
                )
            ]
        ),
        React.createElement(
            "div",
            {id:"Parent2"},
            [
                React.createElement(
                    "a",
                    {id:"Child1", href:"https://google.com"},
                    "Mixed Childs"
                )
                // ,
                // React.createElement(
                //     "h1",
                //     {id:"Child1"},
                //     "First Child"
                // ),
                // React.createElement(
                //     "h2",
                //     {id:"Child2"},
                //     "Second Child"
                // )
            ]
        )
    ]
)

ReactDOM.createRoot(document.getElementById("root")).render(ele);