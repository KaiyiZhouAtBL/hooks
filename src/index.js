import React from 'react';
import ReactDOM from 'react-dom';
// import App from './useCallback/demo03'

// import App from './useState/demo01'
// import App from './useReduce/demo01'
// import App from './useContext/demo01'
// import App from './useEffect/demo01'
// import App from './useEffect/demo02.js'
// import App from './useEffect/demo03'
// import App from './useMemo/demo01'
// import App from './useMemo/demo02.js'
// import App from './useCallback/demo01'
import App from './useRef/demo03'
// import App from './useRef/demo02.js'
// import App from './useRef/demo03'

const isDev = process.env.NODE_ENV === 'development'

ReactDOM.render(
    <App/>,
  document.getElementById('root')
);
