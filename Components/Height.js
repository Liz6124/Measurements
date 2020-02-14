import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export class Height extends Component {

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
      <Text>Height</Text>
      <TextInput
      keyboardType="number-pad"
      style={{ width: 100, height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={(input)=> handleChange('height')}
      defaultValue={values.height}
      />
      <Button
      title="Next"
      accessibilityLabel="Next step"
      color='pink'
      onPress={this.continue}
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

export default Height
