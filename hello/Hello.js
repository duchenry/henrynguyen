import React from 'react';
import {StyleSheet, TextInput, View, Button, Text} from 'react-native';

const style = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#D8D8D8',
    color: 'red',
    fontSize: 20,
    padding: 5,
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
    width: 400,
  },
  textSubmit: {
    color: 'green',
    fontSize: 30,
  },
});

class Hello extends React.Component {
  state = {
    name: '',
    phone: '',
    name1: '',
    phone1: '',
    flagValid: false,
  };
  handleName = name => {
    this.setState({name}, this.handleForm);
  };
  handlePhone = phone => {
    if (+phone >= 0 && phone.length <= 10) {
      this.setState({phone}, this.handleForm);
    }
  };
  handleSubmit = () => {
    this.setState({name1: this.state.name, phone1: this.state.phone});
  };

  handleForm = () => {
    if (
      this.state.name.length >= 5 &&
      +this.state.phone > 0 && //khi them dau cong dang truoc mot chuoi no se transform sang numeric
      //"+" + "" se duoc transform = 0
      this.state.phone.length === 10
    ) {
      this.setState({flagValid: true});
    } else {
      this.setState({flagValid: false});
    }
  };
  render() {
    return (
      <View style={style.view}>
        <TextInput
          onChangeText={this.handleName}
          value={this.state.name}
          style={style.box}
          keyboardType="twitter"
          placeholder="Put Your Name"
        />
        <TextInput
          onChangeText={this.handlePhone}
          value={this.state.phone}
          style={style.box}
          keyboardType="numeric"
          placeholder="Put your phone number"
        />
        <Button
          title="Click to Submit"
          onPress={this.handleSubmit}
          disabled={!this.state.flagValid}
        />
        <Text style={style.textSubmit}>{this.state.name1}</Text>
        <Text style={style.textSubmit}>{this.state.phone1}</Text>
      </View>
    );
  }
}
export default Hello;
