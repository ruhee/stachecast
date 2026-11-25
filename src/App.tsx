import {
  createBrowserRouter,
  Link,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import { Credits } from './components/Credits';
import { ReleaseNotes } from './components/ReleaseNotes';
import { Home } from './components/Home';
import { AltHome } from './components/AltHome';
import { ErrorScreen } from './components/ErrorScreen';

const RootLayout = () => (
  <div className="container">
    <h1 className="masked">
      <Link to="/">STACHECAST</Link>
    </h1>
    <Outlet />
    {/* This is where the matching route element renders (inside the Outlet) */}
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorScreen />,
    children: [
      { index: true, element: <Home /> },
      { path: 'credits', element: <Credits /> },
      { path: 'release-notes', element: <ReleaseNotes /> },
      { path: 'alt-home', element: <AltHome /> },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
