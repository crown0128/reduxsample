import react from 'react';
import reactDom from "react-dom";
import App from "./components/App"
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer)

reactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    
    document.getElementById('root')
)