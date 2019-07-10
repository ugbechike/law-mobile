import React, { Component } from 'react';
import { View, Button, Text, Item, Container, Icon, Content, Drawer} from 'native-base';
import {ToggleData} from '../../../components/lawyerComponents/toggleDetails/toggleDetails';
import { ImageBackground } from 'react-native';
import Picture from "../../../assests/profile.png";
import LinearGradient from 'react-native-linear-gradient';
import TopNav from '../../../components/Menu/topNav';
import SideBar from '../../../components/Menu/sideBar';


class Laywerprofile extends Component {

    closeDrawer = () => {
        this._drawer._root.close();
    }
    openDrawer = () => {
        this._drawer._root.open();
    }

    render() {
        return (
            <Drawer
            ref={(ref) => { this._drawer = ref; }}
            content={<SideBar />} >
            <Container>
                    <ImageBackground source={Picture} style={{ width: '100%', height: '100%', flex: 1, backgroundColor: "transparent"}}>
                <LinearGradient 
                    colors={['#1A2C56', 'rgba(26, 44, 86, 0)']}
                    locations={[0.1, 1]}
                    style={{flex: 1}} 
                    >
                        <TopNav openDrawer = {this.openDrawer}/>
                </LinearGradient>
                    </ImageBackground>
                <View style={styles.profileDetails}>
                    <Content>
                        <View style={{ padding: 20 }}>

                            <Text style={styles.textStyles}>
                                Jack, <Text style={{ fontWeight: "bold", fontSize: 35 }}>BROWN</Text>
                            </Text>
                            <Text style={styles.smallText}>
                                JD, LLM, LSD, phd, JSD
                            </Text>

                            <Item style={styles.listitem}>
                                <Icon active android="md-flag" name='flag'  />
                                <Text style={styles.details}>Lome, Togo</Text>
                            </Item>
                            <Item style={styles.listitem}>
                                <Icon active android="md-call" name='phone' style={styles.iconStyle}/>
                                <Text style={styles.details}>+456 4567 54344</Text>
                            </Item>
                            <Item style={styles.listitem}>
                                <Icon active android="md-mail" name='mail' style={styles.iconStyle}/>
                                <Text style={styles.details}>jackbrown@lawyerpp.com</Text>
                            </Item>
                            <Item style={styles.listitem}>
                                <Icon active android="md-calendar" name='DOB' style={styles.iconStyle}/>
                                <Text style={styles.details}>15 - 03 - 1975</Text>
                            </Item>
                            <Item style={styles.listitem}>
                                <Icon active android="md-briefcase" name='briefcase' style={{color: "#195F8E", fontSize: 13}}/>
                                <Text style={styles.details}>Jack & Brown Associates</Text>
                            </Item>
                        </View>
                        <ToggleData />
                        <Content padder style={{ padding: 10, borderTopWidth: 1, borderTopColor: "#CECECE" }}>
                            <Button block style={styles.profileBtn}  onPress={()=> this.props.navigation.navigate("PendingRequest")}>
                                <Text style={{fontSize: 14, fontWeight: "bold", fontFamily: "Lato"}}>Hire</Text>
                            </Button>

                        </Content>
                    </Content>
                </View>
                {/* <View style={styles.moreDetails}>
                        
                </View> */}
            </Container>
            </Drawer>
        );
    }
}

const styles = {
    container: {
        flex: 1
    },
    profileImageContainer: {
        flex: 1,
        justifyContent: "center"
    },
    profileDetails: {
        flex: 2,
        marginBottom: 20
    },
    moreDetails: {
        flex: 2,
    },
    textStyles: {
        fontSize: 35
    },
    smallText: {
        fontSize: 10
    },
    listitem: {
        borderBottomWidth: 0,
        marginTop: 5,
    },
    details: {
        marginLeft: 15,
        fontWeight: "normal",
        fontSize: 13,
        lineHeight: 22
    },
    profileBtn: {
        backgroundColor: "#08A02F",
        borderRadius: 4,
    },
    iconStyle : {
        color: " #4F4F4F", 
        fontSize: 13
    }
}

export default Laywerprofile;