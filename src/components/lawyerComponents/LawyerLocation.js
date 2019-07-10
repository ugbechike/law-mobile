import React, { Component } from "react";
import { Container, Header, Content, Body, Icon, Picker, Form, Text, View } from "native-base";

 class LawyerLocation extends Component {
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
          <View>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Select your SIM"
              placeholderStyle={{ color: "#DBDBDB" }}
              placeholderIconColor="#007aff"
              style={{ width: 300}}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label='Lagos' value="key1" />
              <Picker.Item label='Abuja' value="key2" />
              <Picker.Item label='Ikeja' value="key3" />
              <Picker.Item label='Enugu' value="key0" />
            </Picker>
          </View>
        </Body>
    );
  }
}

export default LawyerLocation;
