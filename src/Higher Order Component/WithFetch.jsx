import { Component } from "react";



export const withFetch = (url, initData, WrappedComponent) => {
    class WrapperComponent extends Component {
        state = {
            isLoading: true,
            result:initData,
            errorMessage: ''
        }
    
        componentDidMount() {
            fetch(url)
            .then((res) => res.json())
            .then((data) => {this.setState({...this.state, isLoading: false, result: data, errorMessage: ''})})
            .catch((err) => (this.setState({...this.state, isLoading: false, result: [], errorMessage: err.message})))
        }
        render() {
            const {isLoading, result, errorMessage} = this.state;
            return(<WrappedComponent isLoading={isLoading} result={result} errorMessage={errorMessage} />)
            
        }
    }
    return WrapperComponent;
}