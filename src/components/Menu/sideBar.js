import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Container, Content, List, Item, Left, Right, Icon, Body } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

const menuItems = [
    {
        name: "Overview",
        route: "Profile",
        icon: "apps",
        isActive: false
    },
    {
        name: "Open Request",
        route: "PendingRequest",
        icon: "paper",
        isActive: false
    },
    {
        name: "Matters",
        route: "Login",
        icon: "person",
        isActive: false
    },
    {
        name: "Transactions",
        route: "Teams",
        icon: "account",
        isActive: false
    },
    {
        name: "Settings",
        route: "Results",
        icon: "settings",
        isActive: false
    },
    {
        name: "Logout",
        route: "Login",
        icon: "switch",
        isActive: false
    },
];

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = { currentPage: 'Overview' };
    }



    onMenuPress = (item) => {
        console.log("clicking", item)
        this.setState({ currentPage: item.name });
        // this.forceUpdate();
    }

    keyExtractor = (item, index) => item.name


    formatMenu = ({ item }) => {
        // style={this.state.currentPage === item.name ? styles.activeMenuItem : styles.menuItem}
        return (<TouchableOpacity onPress={() =>this.onMenuPress(item)}>
            {console.log("show me the state", item)}
                <Item  style={this.state.currentPage === item.name ? styles.activeMenuItem : styles.menuItem}>
                <Icon name={item.icon} style={this.state.currentPage === item.name ? styles.activeMenuIcon : styles.menuIcon} />
                <Text style={this.state.currentPage === item.name ? styles.activeMenuItemText : styles.menuItemText}>
                    {item.name}
                </Text>

                </Item>
        </TouchableOpacity>
        )
    }

    render() {
        console.log("changing ooh---======", [this.state.currentPage])
        return (
            <Container style={styles.container}>
                <View style={{ flex: 0.3 }}>

                </View>
                <Content>
                    <FlatList renderItem={this.formatMenu} keyExtractor={this.keyExtractor} data={menuItems} />
                </Content>
            </Container>
        );
    }
}


const styles = {
    container: {
        backgroundColor: "#1A2C56",
        flex: 1,
        justifyContent: 'center',
    },
    menuItem: {
        marginLeft: 0,
        backgroundColor: "#1A2C56",
        borderBottomWidth: 0,
        borderColor: '#5B686E',
        padding: 20,
    },
    activeMenuItem: {
        marginLeft: 0,
        backgroundColor: "#E7E7E7",
        borderBottomWidth: 1,
        borderColor: '#5B686E',
        color: "#1A2C56",
        padding: 20,
    },
    activeMenuItemText: {
        color: "#1A2C56",
        marginLeft: 20
    },
    menuItemText: {
        color: "white",
        marginLeft: 20
    },
    menuIcon: {
        color: "white"
    }

}

export default withNavigation(SideBar)