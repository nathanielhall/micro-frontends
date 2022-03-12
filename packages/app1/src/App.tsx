import React, {FC} from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';

export const App: FC = () => {
  return (<span>App 1</span>)
}

const headerLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: App,
});

export const bootstrap = headerLifecycles.bootstrap;
export const mount = headerLifecycles.mount;
export const unmount = headerLifecycles.unmount;

export default App;