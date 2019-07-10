import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Body, Text, Item, Input, Button, View, CheckBox } from 'native-base';
// import DropdownMenu from 'react-native-dropdown-menu';
// import {TouchableHighlight } from 'react-native';
import Header from '../components/Menu/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';



class LawyerRegistration extends Component{
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
                            <Header headerText= {'LAWYERPP'}/>
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
                                
                                    <View style={{flexDirection:'row', justifyContent:'space-evenly', marginBottom:5, flex:1, alignItems:'center', marginTop:5}}>
                                        <View style={{width:100, flex:1}}>
                                            <Item underline={false}>
                                                <Input placeholder='First Name' placeholderTextColor='#bdbac3' style={styles.rowInput} />
                                            </Item>
                                        </View>
                                        <View style={{ width:100, flex:1}}>
                                            <Item underline={false} >
                                                <Input placeholder= 'Last Name' placeholderTextColor='#bdbac3'  style={styles.rowInput} />
                                            </Item>
                                        </View>
                                     
                                    
                                    </View>
                                    <Item underline={false}>
                                        <Input placeholder= 'Phone Number' placeholderTextColor='#bdbac3' style={styles.inputStyle} />
                                    </Item>
                                    <Item underline={false}>
                                        <Input placeholder= 'Email' placeholderTextColor='#bdbac3' style={styles.inputStyle} />
                                    </Item>
                                    <Item underline={false}>
                                        <Input placeholder= 'Password' placeholderTextColor='#bdbac3' style={styles.inputStyle} />
                                    </Item>
                                    <Item underline={false} >
                                        <Input placeholder= 'Confirm Password' placeholderTextColor='#bdbac3' style={styles.lastInputStyle} />
                                    </Item>
                                    
                                    <View style={{flexDirection:'row', justifyContent:'space-evenly',  flex:1, alignItems:'center', marginTop:5}}>
                                        <View style={{width:100, flex:3}}>
                                            <Item underline={false}>
                                                <Input placeholder='Supreme court enrollment no' placeholderTextColor='#bdbac3' style={styles.rowInput} />
                                            </Item>
                                            
                                        </View>
                                        <View style={{ width:100, flex:1}}>
                                            <Item underline={false} >
                                                <Input placeholder= 'Last Name' placeholderTextColor='#bdbac3'  style={styles.rowInput} />
                                            </Item>
                                        </View>
                                     
                                    
                                    </View>

                                    <View style={[styles.container2Style, {marginTop:5}]}>
                                        <CheckBox checked={false} color='#2c1657'/>

                                        <Text style={styles.textStyle}>    I agree with the </Text>
                                        <TouchableOpacity>
                                            <Text style={[styles.textStyle, {textDecorationLine:'underline'}]}>Terms and Conditions</Text>

                                        </TouchableOpacity>
                                    </View>
                                    
                                    <Button  block style={[ styles.buttonStyle, {backgroundColor: '#2c1657'}]}>
                                        <Text>SIGN UP</Text>
                                    </Button>
                                    {/* </View> */}
                                    <View style = {styles.container2Style}>
                                    <Text>Already a registered user? </Text>
                                        <TouchableOpacity onPress={() => navigate('Login')}>
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
        backgroundColor: '#d6d6d6',
        borderRadius: 2,
        // width: 100
        flex:1,
        marginRight: 5
        
    },
    textStyle:{
        fontSize: 15,
        
    },
    inputStyle: {
        backgroundColor: '#d6d6d6',
        borderRadius: 2,
        marginBottom: 5,
        // width:300
      },
    lastInputStyle:{
        backgroundColor: '#d6d6d6',
        borderRadius: 2,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        
        color: '#2c1657',
    },
    buttonStyle: {
        margin: 12,
        marginBottom: 5,
        borderRadius: 2
    }
};



export default LawyerRegistration;
