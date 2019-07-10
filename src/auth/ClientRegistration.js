import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Body, Text, Item, Input, Button, View, CheckBox } from 'native-base';
// import DropdownMenu from 'react-native-dropdown-menu';
// import {TouchableHighlight } from 'react-native';
import Header from '../components/Menu/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';



class ClientRegistration extends Component{
    constructor(props) {
        super(props);
        this.state = {
          text: ''
        };
    }
    render(){
        var data = [["Lawyer", "Client"]];
        return(

            <Container>
                <Content>
                    <Card transparent>
                        <CardItem style = {{marginTop:20}}>
                            <Header />
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View style={styles.containerStyle}>
                                    <Text style={styles.headerText}>SIGN UP</Text>
                                </View>
                                <View styles={styles.container2Style}>
                                    <Text>Register as a </Text>
                                     {/* <DropdownMenu
                                        // style={{flex: 1}}
                                        bgColor={'white'}
                                        tintColor={'#000000'}
                                        activityTintColor={'#2c1657'}
                                        // arrowImg={}      
                                        // checkImage={}   
                                        // optionTextStyle={{color: '#333333'}}
                                        // titleStyle={{color: '#333333'}} 
                                        // maxHeight={300} 
                                        handler={(selection, row) => this.setState({text: data[selection][row]})}
                                        data={data}> 
                                        <Text>
                                            {this.state.text}
                                        </Text> 
                                     </DropdownMenu>  */}

                                </View>
                                
                                    
                                    <Item underline={false} style={[styles.inputStyle]}>
                                        <Input placeholder= 'Full Name' placeholderTextColor='#4F4F4F' />
                                    </Item>
                                    <Item underline={false} style={[styles.inputStyle]}>
                                        <Input placeholder= 'Phone Number' placeholderTextColor='#4F4F4F'  />
                                    </Item>
                                    <Item underline={false} style={styles.inputStyle}>
                                        <Input placeholder= 'Email' placeholderTextColor='#4F4F4F'  />
                                    </Item>
                                    <Item underline={false} style={styles.inputStyle}>
                                        <Input secureTextEntry={true} password={true} placeholder= 'Password' placeholderTextColor='#4F4F4F'  />
                                    </Item>
                                    <Item underline={false} style={styles.lastInputStyle}>
                                        <Input secureTextEntry={true} password={true} placeholder= 'Confirm Password' placeholderTextColor='#4F4F4F'  />
                                    </Item>
                                    
                                    <View style={[styles.container2Style, {marginTop:5}]}>
                                        <CheckBox checked={false} color='#1A2C56'/>

                                        <Text style={styles.textStyle}>    I agree with the </Text>
                                        <TouchableOpacity>
                                            <Text style={[styles.textStyle, {textDecorationLine:'underline'}]}>Terms and Conditions</Text>

                                        </TouchableOpacity>
                                    </View>
                                    <Button  block style={[ styles.buttonStyle, {backgroundColor: '#1A2C56'}]}>
                                        <Text>SIGN UP</Text>
                                    </Button>
                                    {/* </View> */}
                                    <View style = {styles.container2Style}>
                                    <Text>Already a registered user?  </Text>
                                        <TouchableOpacity onPress={this.onPress}>
                                            <Text style={styles.textStyle} >
                                                  Log in
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
const styles = {
    containerStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
        width: 310
    },
    container2Style: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // alignItems: 'center', 
        flex:1,
        // marginBottom: 30

    },
    rowInput:{
        marginBottom: 0,
        // width: 100,
        // borderWidth: 3,
        backgroundColor: '#DBDBDB',
        borderRadius: 2,
        // width: 100
        flex:1,
        marginRight: 5
        
    },
    textStyle:{
        fontSize: 15,
        
    },
    inputStyle: {
        backgroundColor: '#DBDBDB',
        borderRadius: 4,
        marginBottom: 5,
        // width:300
        marginTop:10
      },
    lastInputStyle:{
        backgroundColor: '#DBDBDB',
        borderRadius: 2,
        marginTop: 10
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        
        color: '#1A2C56',
    },
    buttonStyle: {
        margin: 12,
        borderRadius: 2
    }
};
export default ClientRegistration;