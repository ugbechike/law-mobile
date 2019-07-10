import {createStackNavigator} from 'react-navigation';
// import Landing from '../screens/landingScreen/landing';
// import Login from "../auth/login"
import Laywerprofile from '../screens/lawyer/profile/profile';
import LawyerppLogin from '../auth/LawyerppLogin';
import ClientRegistration from '../auth/ClientRegistration';
import LawyerRegistration from '../auth/LawyerRegistration';
import PendingRequest from '../screens/client/pendingRequest/pendingRequest';
import CaseListing from '../screens/client/caseListing/caseListing';
import GetALawyer from '../components/lawyerComponents/GetALawyer';
import PendingListScreen from '../screens/client/pendingRequest/pendingListScreen';

const Navigation = createStackNavigator({
    Login: {screen: LawyerppLogin},
    Profile: {screen: Laywerprofile},
    PendingListScreen: {screen: PendingListScreen},
    Cases: {screen: CaseListing},
    PendingRequest : {screen : PendingRequest},
    Client : {screen: ClientRegistration},
    GetALawyer: {screen: GetALawyer},
    LawyerSignup: {screen: LawyerRegistration}
},

{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
}
)

export default Navigation