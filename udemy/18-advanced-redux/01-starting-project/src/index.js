import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import items from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={items}> <App /> </Provider>);
