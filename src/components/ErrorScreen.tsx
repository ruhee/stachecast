import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';

export const ErrorScreen = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <div className="container">
        <h1 className="masked">
          <Link to="/">STACHECAST</Link>
        </h1>
        <p>Sorry, that page doesn&rsquo;t exist!</p>
        <Link to="/">Back home</Link>
      </div>
    );
  }

  return (
    <div>
      <p>{error?.message || 'An unexpected error occurred.'}</p>
      <Link to="/">Back home</Link>
    </div>
  );
};
