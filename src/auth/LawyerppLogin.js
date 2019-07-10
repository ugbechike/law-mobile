import React, { Component } from 'react';
import { Container, Content, Card, Thumbnail, CardItem, Body, Text, Item, Input, Button, View } from 'native-base';
import { TouchableHighlight, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import Logo from '../assests/logo.png';
import { handleLogin, handleChange } from '../store/actions/loginActions';
import { connect } from 'react-redux';




class LawyerppLogin extends Component {
  constructor(props) {
    super(props);
    state = {
      email: "",
      password: "",
    }
  }



  handleSubmit = async (e) => {
    e.preventDefault()
    let data = {
      username: this.state.email,
      password: this.state.password
    }
    console.log("state values---", data)
        var result = await this.props.handleLogin(data)
    console.log('login response', result)

  }

  // handleFormChange = (text) => {
  //   this.setState({email: text,
  //                   password: text
  //   })
  //   // validateLogin(data);
  //   // this.props.handleChange(data)
  // }



  render() {
    return (
      <Container style={{ flex: 1 }}>
        <Content>
          <Card transparent>
            <CardItem style={{ marginTop: 40 }}>
              <View style={styles.logoStyle}>
                <Image source={Logo} />
              </View>
            </CardItem>
            <CardItem>
              <Body >
                <View style={styles.containerStyle}>
                  <Text style={styles.welcomeStyle}>Welcome Back!</Text>
                  <Text style={styles.loginStyle}>LOG IN</Text>
                </View>
                <Item underline={false} style={{ marginBottom: 15 }}>
                  <Input
                    placeholder='Email Address'
                    placeholderTextColor='#4F4F4F'
                    style={styles.inputStyle}
                    type="email" required id="username"
                    onChangeText={text => this.setState({email: text})}/>
                </Item>

                <Item underline={false}  >
                  <Input
                    placeholder='Password'
                    placeholderTextColor='#4F4F4F'
                    style={styles.inputStyle}
                    type="password" required id="password"
                    onChangeText={text => this.setState({password: text})}
                  />
                </Item>

                {/* <Text style={styles.textStyle} >
                                Forgot password? click here
                              </Text> */}
                <TouchableHighlight onPress={this.onPress}>
                  <Text style={styles.textStyle} >
                    Forgot password? click here
                                </Text>
                </TouchableHighlight>

                <Button block style={[styles.buttonStyle, { backgroundColor: '#1A2C56' }]} onPress={this.handleSubmit}>
                  <Text>LOG IN</Text>
                </Button>
                <Button block light style={styles.buttonStyle} onPress={() => this.handleSubmit}>
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
  containerStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 310
  },
  welcomeStyle: {
    fontFamily: 'Times New Roman',
    marginTop: 20,
    color: '#1A2C56',
  },
  loginStyle: {
    fontWeight: 'bold',
    padding: 10,
    marginBottom: 10,
    color: '#1A2C56',
    fontSize: 20,
  },
  inputStyle: {
    backgroundColor: '#DBDBDB',
    borderRadius: 2,
  },
  textStyle: {
    marginBottom: 25,
  },
  buttonStyle: {
    margin: 12,
    borderRadius: 2
  },
  logoStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

}


const mapStateToProps = (state) => {
  return {
    loginProps: state.Login,
  }
}

export default connect(mapStateToProps, { handleChange, handleLogin })(withNavigation(LawyerppLogin));