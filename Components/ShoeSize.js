import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export class ShoeSize extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    console.log(this.props.values)

    const { values, handleChange } = this.props;

    return (
      <View>

      <Text>Shoe size</Text>
      <TextInput
      keyboardType="number-pad"
      style={{ width: 100, height: 40, borderColor: 'gray', borderWidth: 1 }}
      handleChange={text => handleChange('shoeSize')}
      defaultValue={values.shoeSize}
      />
      <Button
      title="Next"
      accessibilityLabel="Next step"
      color='pink'
      onPress={this.continue}
      // style={styles.button}
      />
      <Button
      title="Previous"
      accessibilityLabel="Previous step"
      color='blue'
      onPress={this.back}
      // style={styles.button}
      />
      </View>
    )
  }
}

const styles = {
  button: {
    Color: 'red'
  },
}

export default ShoeSize
