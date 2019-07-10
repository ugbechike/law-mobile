// import UserReducer from './UserReducer'
import { combineReducers } from 'redux';
import LoginReducer from './loginReducers';
import auth from './auth';
import EditLawyerProfileReducer from './editLawyerProfileReducer';
import ClientSignUpReducers from './clientSignUpReducer';
import LawyerSignUpReducers from './lawyerSignUpReducer';
import CasePagination from '../reducers/casePaginationReducer';
import clientProfileReducer from '../reducers/clientProfileReducer';
import ClientIdReducer from '../reducers/clientIdReducer';
import LoaderReducer from '../reducers/LoaderReducer';
import practiceAreaReducer from '../reducers/practiceAreaReducer';
import navBarReducer from './navBarReducer';
import SearchLawyerReducer from './searchLawyerreducer';
// import lawyerSignUp from '../../components/lawyerSignUp/lawyerSignUp';

const rootReducers = combineReducers ({
    Login: LoginReducer,
    toggler: EditLawyerProfileReducer,
    auth : auth,
    clientSignUp: ClientSignUpReducers,
    lawyerSignUp: LawyerSignUpReducers,
    cases: CasePagination,
    profile: clientProfileReducer,
    clientIdDetail : ClientIdReducer,
    loaders: LoaderReducer,
    practiceArea: practiceAreaReducer,
    navigation : navBarReducer,
    Lawyers:SearchLawyerReducer
});

export default rootReducers;