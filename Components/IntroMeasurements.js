import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export class IntroMeasurements extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  home = e => {
    e.preventDefault();
    this.props.home();
  }

  render() {
    const { values, handleChange } = this.props;

    return (
      <View>
      <Text>For you to have a great time taking part in our activities and challenges we need you to fill out some personal details. It will make marking out zones and completing surveys more acturate.</Text>
      <Button
      title="Next"
      accessibilityLabel="Next step"
      onPress={this.continue}
      />
      <Button
      title="Skip, I'll do this later on"
      accessibilityLabel="Skip button"
      onPress={this.home}
      />



      </View>

    )
  }
}



export default IntroMeasurements
