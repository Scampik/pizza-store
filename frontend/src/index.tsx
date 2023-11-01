import './styles.scss';
import 'bootstrap';
// import './index.css';

import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import vdom from './init';

const app = async () => {
  const root = ReactDOM.createRoot(document.getElementById('shop') as HTMLElement);
  root.render(await vdom());
};

app();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
