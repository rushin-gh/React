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

// setTimeout(() => {
    // }, 5000);
    
// const HeadingComponent = () => {
//     return (
//         <h3>
//             This is Heading Component
//         </h3>
//     )
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

const Paragraph = () =>
(
    <p>Hello bosdiwalo <br/> Bhago yahase <br/> behene ke laudo.</p>
)

const HeadingComponent = () => 
(
    <h3>
        <Paragraph/>
        This is Heading Component 2
    </h3>
)


root.render(<HeadingComponent/>);


const Head1 = () => (
    <h1>This is H1 tag.</h1>
)

const Head2 = () => (
    <h2>This is H2 tag.</h2>
)

const Head3 = () => (
    <h3>This is H3 tag.</h3>
)

const reactHeading = (
    <h1>React heading</h1>
)

const Headers = () => (
    <>
        <Head1/>
    </>
);

const spanTag = (
    <>
    {Headers()}
    <Headers/>
    <Headers></Headers>
    </>
)


// setTimeout(() => {
    root.render(spanTag);
// }, 2000);