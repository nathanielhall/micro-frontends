import React, {FC} from 'react'
import singleSpaReact from 'single-spa-react'
import ReactDOM from 'react-dom';

export const App1: FC = () => {
  return (<span>App 1</span>)
}

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App1
});

export const {bootstrap, mount, unmount} = lifecycles