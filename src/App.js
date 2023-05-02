import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

/* Pages */
import Home from './pages/Home/Home';
import About from './pages/About/About';
/* layouts */
import RootLayout from './layouts/RootLayout';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  );
}

export default App;
