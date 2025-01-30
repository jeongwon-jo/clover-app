import ReactDOM from 'react-dom/client';
import './asset/scss/reset.scss'
import './asset/scss/common.scss'
import './asset/scss/style.scss'
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);