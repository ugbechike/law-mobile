import React, { Component } from "react";
import { Body, Icon, Picker, View } from "native-base";

export class TimeLimit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };    
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  render() {
    return(
        <Body>
          <View style={{backgroundColor:'#DBDBDB', borderRadius:4, marginBottom:10}}>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              
              placeholderStyle={{ color: "#DBDBDB" }}
              placeholderIconColor="#4F4F4F"
              style={{ width: 330 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label='Genesys' value="key1" />
              <Picker.Item label='Lawal' value="key2" />
              <Picker.Item label='olawale' value="key3" />
              <Picker.Item label='6949efjiejfei nineiniwe n' value="key0" />
            </Picker>
          </View>
        </Body>
    );
  }
}

 export class LawyerLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };    
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  render() {
    return(
        <Body>
          <View style={{backgroundColor:'#DBDBDB', borderRadius:4}}>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Select your SIM"
              placeholderStyle={{ color: "#DBDBDB" }}
              placeholderIconColor="#4F4F4F"
              style={{ width: 330}}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label='1' value="key1" />
              <Picker.Item label='2' value="key2" />
              <Picker.Item label='3' value="key3" />
              <Picker.Item label='4' value="key0" />
            </Picker>
          </View>
        </Body>
    );
  }
}


