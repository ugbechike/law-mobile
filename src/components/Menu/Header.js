import React, {Component} from 'react';
import { View, Image } from 'native-base';
import Logo from '../../assests/logo.png';




class AppLogo extends Component{
    
    render(){
    return (
       <View style = {styles.viewStyle}>
            <Image src={Logo} />
       </View> 
    );
}
}
const styles = {

    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
}


export default AppLogo

