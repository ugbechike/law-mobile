import React, { Component } from 'react';
import { Container,Header, Content, Card, CardItem, Body, Text, Item, Input, Button, View, Icon, Left, Right, Title, Subtitle, Textarea } from 'native-base';
// import {TouchableOpacity } from 'react-native';
// import Header from '../components/Menu/Header';
import { withNavigation } from 'react-navigation';
//import TimeLimit from './TimeLimit';
import {TimeLimit, LawyerLocation} from '../lawyerComponents/TimeLimit'

class GetALawyer extends Component{

    render(){
        return(
            <Container >
                <Header style={{backgroundColor:'#ffffff'}}>
                <Left>
                    <Button transparent>
                        <Icon name='arrow-back' style={{color:'#4F4F4F'}} />
                    </Button>
                </Left>
                <Body>
                    <Title style={{color: '#1A2C56'}}>Get a Lawyer</Title>
                    <Subtitle style={{color:'#bdbac3'}} >Mr Jack Brown</Subtitle>
                   
                </Body>
                <Right />
                </Header>
                <Content>
                    <Card transparent>
                        <CardItem>
                            <Body>
                                    
                                    <Text>Name of Client</Text>
                                    <Item underline={false} style={styles.inputStyle}>
                                        <Input  placeholderTextColor=' #4F4F4F'  />
                                    </Item>
                                    <Text style={{marginTop:15}}>Matter Title</Text>
                                    <Item underline={false} style={styles.inputStyle}>
                                        <Input  placeholderTextColor=' #4F4F4F'  />
                                    </Item>
                                    <Text style={{marginTop:15}}>Matter Description</Text>
                                    <View style={{flex:1}}>
                                        <Textarea style={styles.textAreaStyle} rowSpan={5} bordered placeholder="Textarea"> </Textarea>
                                    </View>
                                    <Text style={{marginTop:15}}>Location of Lawyer</Text>
                                    
                                    <LawyerLocation />
                                    <Text style={{marginTop:15}}>Time Limit</Text>
                                    
                                    <TimeLimit  />
                                    
                                    <Button  block style={[ styles.buttonStyle, {backgroundColor: '#08A02F'}]}>
                                        <Text>SIGN UP</Text>
                                    </Button>
                                    
                                </Body>
                        </CardItem>
                    </Card>
                   
                </Content>
            </Container>
        );
    }
}
const styles = {
    inputStyle: {
        backgroundColor: '#DBDBDB',
        borderRadius: 3,
      
    },
    buttonStyle:{
        borderRadius: 2,
        flex: 2,
        marginTop: 10
    },
    textAreaStyle:{
        backgroundColor: '#DBDBDB',
        borderRadius: 3,
        flex:1,
        width:320
    }
}

export default withNavigation(GetALawyer);
