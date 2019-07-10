import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Drawer } from 'native-base';


export default class TopNav extends Component {

   
  render() {
    return (
        <Header transparent>
          <Left>
            <Button transparent onPress={this.props.openDrawer.bind(this)}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Right>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Right>
        </Header>
    );
  }
}