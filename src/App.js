import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';

function App() {
  return (
    <section  >
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
