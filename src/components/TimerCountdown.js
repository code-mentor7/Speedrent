import React, { Component } from 'react';
import { View, Text } from 'react-native';

class TimerCountdown extends Component {
constructor(props) {
    super(props);
    this.state ={
        timer: props.initialTime
    }
  }

  componentDidMount(){
    this.interval = setInterval(
      () => this.setState((prevState)=> ({ timer: prevState.timer - 1 })),
      1000
    );
  }

  componentDidUpdate(){
    if(this.state.timer === 0 && !this.state.hideTimer){
      clearInterval(this.interval);
      this.setState({hideTimer:true})   
      console.log("-------------------timer count down is leaking")  
      this.props.method()
    }
  }

  componentWillUnmount(){
   clearInterval(this.interval);
  }

  render() {
    return (
        <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 80, textAlign: 'center', color: '#FFE100' }}>{this.state.timer}</Text>
    )
  }
}

export default TimerCountdown;