import { useRouteError } from "react-router-dom";

interface ErrorType {
    statusText?: string;
    message?: string;
}
export default function ErrorPage() {
    const error = useRouteError() as ErrorType;
    console.error(error);

    return (
        <div id="error-page" className={"container"}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
    </div>
);
}
