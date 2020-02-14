import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, AsyncStorage} from 'react-native';
import Height from './Height';
import ShoeSize from './ShoeSize';
import HandSpan from './HandSpan';
import FingerSize from './FingerSize';
import IntroMeasurements from './IntroMeasurements';


export class UserMesurements extends Component {

  state = {
    step: 1,
    height: '',
    shoeSize: '',
    handSpan: '',
    fingerSize: ''
  }

  // proceed to next step.
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  // Go back to prev step.

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  }

  // Sending the User to the homepage, missing out on the measurements process.
  // Currently just sends them to fill out the finger tip size.

  home = () => {
    const { step } = this.state;
    this.setState({
      step: step + 4,
    });
  }

// Handle field input change

handleChange = input => e => {
  this.setState({[input]: e.target.values});
}

// handleChange(event) {
//   const newMeasurement = {
//     height: event.target.values
//   };
//   this.props.onCreateMeasurement(newMeasurement)
// }



  render() {
    const { step } = this.state;
    const { height, shoeSize, handSpan, fingerSize } = this.state;
    const values = { height, shoeSize, handSpan, fingerSize }

    switch(step) {
      case 1:
      return (
        <IntroMeasurements
          nextStep={this.nextStep}
          home={this.home}
          values={values}
        />
      )
      case 2:
      return (
        <Height
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}
        />
      )
        case 3:
        return (
          <ShoeSize
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
          />
        )
        case 4:
        return (
          <HandSpan
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
          />
        )
        case 5:
        return (
          <FingerSize
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
          />
        )

    }
  }
}

export default UserMesurements
