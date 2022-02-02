import React, {FC} from 'react'
import singleSpaReact from 'single-spa-react'
import ReactDOM from 'react-dom';

export const App2: FC = () => {
  return (<span>App 2</span>)
}

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App2
});

export const {bootstrap, mount, unmount} = lifecycles