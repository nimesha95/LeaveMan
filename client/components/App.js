import React from 'react';
import { hot } from 'react-hot-loader'
import NavigationBar from './NavigationBar'

class App extends React.Component{
    render(){
        return(
            <div className="container">
                <NavigationBar />
                {this.props.children}
            </div>
        );
    }
}

export default hot(module)(App)
