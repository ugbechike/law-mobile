import React, { Component } from 'react';
import { View, Text, Container, Icon, Button, Left, Body, Header, Title, Subtitle } from "native-base";
import PendingCard from '../../../components/clientComponent/pendingRequestCard/pendingRequestCard';
import {ScrollView} from 'react-native';

class PendingRequest extends Component {
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
                            <Title style={styles.titleText}>Matter Title</Title>
                            <Subtitle style={styles.titleText}>Interested Lawyers</Subtitle>
                        </Body>
                    </Header>
                </View>
                <View style={styles.titleContainer}>
                    <View style={styles.titleDetails}>
                        <Text style={styles.headerText}>Matter Title</Text>
                        <Text style={styles.textDetails}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
                    </Text>

                    </View>
                </View>
                <View style={styles.cards}>
                    <ScrollView>
                        <PendingCard/>
                        <PendingCard/>
                        <PendingCard/>
                        <PendingCard/>
                        <PendingCard/>
                    </ScrollView>
                </View>
            </Container>
        );
    }
}

const styles = {
    title: {
        flex: 0.5,
        borderBottomWidth: 1,
        borderBottomColor: "#AEAEAE"
    },
    titleContainer: {
        flex: 1,
        marginBottom: 30,
    },
    titleDetails: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#AEAEAE"
    },
    cards: {
        flex: 2,
        paddingBottom: 12
    },
    titleText: {
        color: "#1A2C56"
    },
    textDetails : {
        textAlign: "justify",
        lineHeight: 24,
        fontSize: 12
    },
    headerText: {
        lineHeight: 17
    }
}

export default PendingRequest;