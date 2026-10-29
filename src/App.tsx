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

const RootLayout = () => (
  <div className="container">
    <h1 className="experiment">STACHECAST</h1>

    <h1>
      <Link to="/">👨🏻 STACHECAST 🧔🏻‍♂️</Link>
    </h1>

    <Outlet />
    {/* This is where the matching route element renders (inside the Outlet) */}
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
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
