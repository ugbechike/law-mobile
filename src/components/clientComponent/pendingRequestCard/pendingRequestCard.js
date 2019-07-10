import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Avarter from '../../../assests/avarter.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

class PendingCard extends Component {
    state = {
        toggleBtn: false
    }

        handleToggle = () => {
            this.setState({
                toggleBtn: !this.state.toggleBtn
            })
        }

  render() {
      let {toggleBtn} = this.state
      let {navigate} = this.props.navigation
    return (
        <Content >
          <Card>
                <TouchableOpacity onPress={this.handleToggle}>
            <CardItem>
              <Left>
                <Thumbnail source={Avarter} />
                <Body>
                  <Text style={styles.profileName}>Mr Jack Brown </Text>
                  <Text note style={styles.profileLocation}>Lome, Togo</Text>
                  <Text note style={styles.profileTimer}>2hr 30mins 40secs</Text>
                </Body>
              </Left>
              <Right>
                <Button transparent>
                  <Icon active name="star"  style={{color: "#FAC917"}}/>
                  <Icon  name="star" style={{color: "#FAC917"}}/>
                  <Icon  name="star" style={{color: "#FAC917"}}/>
                </Button>
                  <Text style={styles.accepted}>Accepted on</Text>
                  <Text style={styles.accepted}>12/09/19, 12:01</Text>
              </Right>
            </CardItem>
              </TouchableOpacity>
            {
                toggleBtn ? 
            <CardItem cardBody style={{width: "100%"}}>
                <Button block style={{width: "50%", backgroundColor: "#08A02F", borderRadius: 0}}  onPress={()=> navigate("Profile")}>
                    <Text >Accept</Text>
                </Button>
                <Button block style={{width: "50%", backgroundColor: "#CC0000", borderRadius: 0}}>
                    <Text>Decline</Text>
                </Button>
            </CardItem> : null
            }
          </Card>
        </Content>
    );
  }
}

const styles = {
    profileName: {
        fontSize: 15,
        color: "#1A2C56",
        fontWeight: "bold",
    },

    profileLocation : {
        fontFamily: "Lato",
        fontStyle: "italic",
        color: "#000000",
        fontSize: 12
    },

    profileTimer: {
        fontFamily: "Lato",
        color: "#4F4F4F",
        fontSize: 10
    },

    accepted : {
        fontFamily: "Lato",
        color: "#4F4F4F",
        fontSize: 13
    }
}

export default withNavigation(PendingCard)