import React, { Component } from 'react';
import { View, Text, Content, Container, Icon, Button, Left, Body, Header, Title, Subtitle } from "native-base";
import {ScrollView} from 'react-native';
import PendingList from '../../../components/clientComponent/pendingRequestCard/pendingList'


class PendingListScreen extends Component {

    render() {
        return (
            <Container>

                <View style={styles.title}>
                    <Header transparent>
                        <Left>
                            <Button transparent>
                                <Icon name='arrow-back' style={{ color: "#4F4F4F" }} />
                            </Button>
                        </Left>
                        <Body>
                            <Title style={styles.titleText}>Pending Request</Title>
                            <Subtitle style={styles.titleText}>Ms Jane Doe</Subtitle>
                        </Body>
                    </Header>
                </View>
                <Content>
                <ScrollView>

                <View style={{flex: 1}}>

                <PendingList />
                </View>
                </ScrollView>
                </Content>
            </Container>
        );
    }
}

const styles = {
    title: {
        borderBottomWidth: 1,
        borderBottomColor: "#AEAEAE"
    },
    titleText: {
        color: "#1A2C56"
    },
}

export default PendingListScreen;