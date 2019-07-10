import React, { Component } from 'react';
import { View, Text, Content, Container, Icon, Button, Left, Body, Header, Title, Subtitle } from "native-base";
import {ScrollView} from 'react-native';
import {ToggleMatters} from '../../../components/lawyerComponents/toggleDetails/toggleDetails';


class CaseListing extends Component {

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
                            <Title style={styles.titleText}>Matters</Title>
                        </Body>
                    </Header>
                </View>
                <Content>
                <ScrollView>

                <View style={{flex: 1}}>

                <ToggleMatters/>
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

export default CaseListing;