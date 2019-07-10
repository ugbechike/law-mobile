import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import {Content, Container, Button, ListItem, Body, Icon, Left} from 'native-base';

export default class Sidebar extends Component {
  render() {
    return (
      <Container style={{backgroundColor:'#1A2C56'}}>
          <Content style={{ marginTop: 20}}>
          <ListItem icon style={{borderWidth: 0, backgroundColor: "white"}} >
            <Left>
              <Button transparent >
                <Icon active name="apps" style={styles.iconDesign}/>
              </Button>
            </Left>
            <Body>
              <Text style={styles.menuText}>Overview</Text>
            </Body>
            </ListItem>
          </Content>

      </Container>
    );
  }
}

const styles = {
  iconDesign : {
    color: "#FFFFFF"
  },

  menuText: {
    color: "#FFFFFF"
  }
}

module.exports = Sidebar;