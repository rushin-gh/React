import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>OOPS!!!</h1>
            <h3>Something went wrong.</h3>
            <h4>{error.status}</h4>
        </div>
    )
}

export default Error;