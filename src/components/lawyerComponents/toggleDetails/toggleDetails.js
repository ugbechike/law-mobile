import React, { Component } from "react";
import {  Content, Body, Icon, Title, Accordion, Subtitle, Text, View } from "native-base";
const dataArray = [
  { title: "Practice Area", time: "2:30:32", interested: "5 Interests shown", content: " Administrative Law \n Antitrust Litigation \n Alternative Dispute Resolution \n Animal Law" },
  { title: "Education", time: "2:30:32", interested: "5 Interests shown", content: "University of Lome, Togo \n 1990 - 1994 \n Called to Bar @ 2002"},
  { title: "Personal Statement", time: "2:30:32", interested: "5 Interests shown", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupta" }
];

const matters = [
  { title: "Matter Title", sub: "lome, togo", time: "2:30:32", interested: "5 Interests shown", content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dohhh jjn eiusmod tempor incididunt ut labore et dolore, Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dohhh jjn eiusmod tempor incididunt ut labore et dolore," },
  { title: "Matter Title", sub: "lome, togo", time: "2:30:32", interested: "5 Interests shown", content: "University of Lome, Togo \n 1990 - 1994 \n Called to Bar @ 2002"},
  { title: "Matter Title", sub: "lome, togo", time: "2:30:32", interested: "5 Interests shown", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupta" },
  { title: "Matter Title", sub: "lome, togo", time: "2:30:32", interested: "5 Interests shown", content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dohhh jjn eiusmod tempor incididunt ut labore et dolore, Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dohhh jjn eiusmod tempor incididunt ut labore et dolore," },
  { title: "Matter Title", sub: "lome, togo", time: "2:30:32", interested: "5 Interests shown", content: "University of Lome, Togo \n 1990 - 1994 \n Called to Bar @ 2002"},
  { title: "Matter Title", sub: "lome, togo", time: "2:30:32", interested: "5 Interests shown", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupta" },
  { title: "Matter Title", sub: "lome, togo", time: "2:30:32", interested: "5 Interests shown", content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dohhh jjn eiusmod tempor incididunt ut labore et dolore, Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dohhh jjn eiusmod tempor incididunt ut labore et dolore," },
  { title: "Matter Title", sub: "lome, togo", time: "2:30:32", interested: "5 Interests shown", content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dohhh jjn eiusmod tempor incididunt ut labore et dolore, Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dohhh jjn eiusmod tempor incididunt ut labore et dolore," },
  { title: "Matter Title", sub: "lome, togo", time: "2:30:32", interested: "5 Interests shown", content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dohhh jjn eiusmod tempor incididunt ut labore et dolore, Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dohhh jjn eiusmod tempor incididunt ut labore et dolore," },
  { title: "Matter Title", sub: "lome, togo", time: "2:30:32", interested: "5 Interests shown", content: "University of Lome, Togo \n 1990 - 1994 \n Called to Bar @ 2002"},
  { title: "Matter Title", sub: "lome, togo", time: "2:30:32", interested: "5 Interests shown", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupta" }
];

export class ToggleData extends Component {
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
        alignItems: "center"}}>
      <Text style={{ fontWeight: "normal", fontSize: 14  }}>
          {" "}{item.title}
        </Text>
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
          style={{borderTopWidth: 0}}
            dataArray={dataArray}
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



export class ToggleMatters extends Component {
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
        alignItems: "center"}}>
           <View>
            <Title style={{ fontWeight: "normal", color: "#1A2C56", fontSize: 14  }}>{item.title}</Title>
            <Subtitle style={{ fontWeight: "normal", color: "#1A2C56", fontSize: 9, fontStyle: "italic"  }}>{item.sub}</Subtitle>
          </View>
      <Text style={{ fontWeight: "normal", color: "#1A2C56", fontSize: 12  }}>
          {" "}{item.time}
        </Text>
      <Text style={{ fontWeight: "normal", fontSize: 12, color: "#4F4F4F"  }}>
          {" "}{item.interested}
        </Text>
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
          style={{borderTopWidth: 0}}
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