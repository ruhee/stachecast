import {
  createBrowserRouter,
  Link,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import { Home } from './components/Home';
import { Credits } from './components/Credits';

const RootLayout = () => (
  <div className="container">
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
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
