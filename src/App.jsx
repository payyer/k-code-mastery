import { BrowserRouter, Route, Routes } from 'react-router-dom';
import linkPage from './utils/navigate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {linkPage.map((link) => {
          return (
            <Route key={link.link} path={link.link} element={link.element} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
