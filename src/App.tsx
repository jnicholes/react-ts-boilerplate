import * as React from 'react';

import './App.less';

export default class App extends React.PureComponent<any, any> {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                <p>Welcome to hot-reloading React!</p>
            </div>
        );
    }
}