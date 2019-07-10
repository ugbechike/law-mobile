import React, { Component } from "react";
import { Content, Body, Icon, Title, Accordion, Subtitle, Text, View, Thumbnail, Left, Item } from "native-base";
import Avarter from '../../../assests/avarter.png';


const matters = [
  { title: "Mr Jack Brown", sub: "lome, togo", time: "2:30:32", status: "pending", images: <Thumbnail source={Avarter} />, content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dohhh jjn eiusmod tempor incididunt ut labore et dolore, Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dohhh jjn eiusmod tempor incididunt ut labore et dolore," },
  { title: "Mr Jack Brown", sub: "lome, togo", time: "2:30:32", status: "pending", images: <Thumbnail source={Avarter} />, content: "University of Lome, Togo \n 1990 - 1994 \n Called to Bar @ 2002" },
  { title: "Mr Jack Brown", sub: "lome, togo", time: "2:30:32", status: "accepted", images: <Thumbnail source={Avarter} />, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupta" },
  { title: "Mr Jack Brown", sub: "lome, togo", time: "2:30:32", status: "pending", images: <Thumbnail source={Avarter} />, content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dohhh jjn eiusmod tempor incididunt ut labore et dolore, Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dohhh jjn eiusmod tempor incididunt ut labore et dolore," },
  { title: "Mr Jack Brown", sub: "lome, togo", time: "2:30:32", status: "accepted", images: <Thumbnail source={Avarter} />, content: "University of Lome, Togo \n 1990 - 1994 \n Called to Bar @ 2002" },
  { title: "Mr Jack Brown", sub: "lome, togo", time: "2:30:32", status: "pending", images: <Thumbnail source={Avarter} />, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupta" },
  { title: "Mr Jack Brown", sub: "lome, togo", time: "2:30:32", status: "accepted", images: <Thumbnail source={Avarter} />, content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dohhh jjn eiusmod tempor incididunt ut labore et dolore, Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dohhh jjn eiusmod tempor incididunt ut labore et dolore," },
  { title: "Mr Jack Brown", sub: "lome, togo", time: "2:30:32", status: "pending", images: <Thumbnail source={Avarter} />, content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dohhh jjn eiusmod tempor incididunt ut labore et dolore, Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dohhh jjn eiusmod tempor incididunt ut labore et dolore," },
  { title: "Mr Jack Brown", sub: "lome, togo", time: "2:30:32", status: "accepted", images: <Thumbnail source={Avarter} />, content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dohhh jjn eiusmod tempor incididunt ut labore et dolore, Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dohhh jjn eiusmod tempor incididunt ut labore et dolore," },
  { title: "Mr Jack Brown", sub: "lome, togo", time: "2:30:32", status: "pending", images: <Thumbnail source={Avarter} />, content: "University of Lome, Togo \n 1990 - 1994 \n Called to Bar @ 2002" },
  { title: "Mr Jack Brown", sub: "lome, togo", time: "2:30:32", status: "accepted", images: <Thumbnail source={Avarter} />, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupta" }
];


export default class PendingList extends Component {
  _renderHeader(item, expanded) {
    return (
      <View style={{
        flexDirection: "row",
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        borderTopWidth: 1,
        borderTopColor: "#CECECE",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <Item style={{ borderBottomWidth: 0 }}>
          {item.images}
          <View style={{ marginLeft: 10 }}>
            <Title style={{ fontWeight: "normal", color: "#1A2C56", fontSize: 14 }}>{item.title}</Title>
            <Subtitle style={{ fontWeight: "normal", color: "#1A2C56", fontSize: 9, fontStyle: "italic" }}>{item.sub}</Subtitle>
          </View>

        </Item>
        <View>
          <Title style={{ fontWeight: "normal", color: "#1A2C56", fontSize: 12 }}>
            {" "}{item.time}
          </Title>
          <Subtitle style={item.status == "pending" ? styles.subText : styles.accepted}>{item.status}</Subtitle>
        </View>

        {expanded
          ? <Icon style={{ fontSize: 18 }} name="remove" />
          : <Icon style={{ fontSize: 18 }} name="add" />}
      </View>
    );
  }
  _renderContent(item) {
    return (
      <Text
        style={{
          color: "#4F4F4F",
          paddingLeft: 20,
          paddingBottom: 20,
          lineHeight: 22,
          fontSize: 13
        }}
      >
        {item.content}
      </Text>
    );
  }
  render() {
    return (
      <View>
        <Content style={{ backgroundColor: "white" }}>
          <Accordion
            style={{ borderTopWidth: 0 }}
            dataArray={matters}
            animation={true}
            expanded={true}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          />
        </Content>
      </View>
    );
  }
}

const styles = {
  subText: {
    fontWeight: "normal", 
    color: "#C39600", 
    fontSize: 12, 
    fontStyle: "italic"
  },
  
  accepted : {
    fontWeight: "normal", 
    color: "#08A02F", 
    fontSize: 12, 
    fontStyle: "italic"
  }
}