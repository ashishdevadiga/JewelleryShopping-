import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import signUpForm from './components/signUpForm';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home';
import Jewellery from './components/Jewellery';
import Cart from './components/CartList';
import Payment from './components/Payment';
import Booking from './components/BookingList';
import Menu from './components/Menu';
import CardDetails from './components/CardDetails';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar={true}>
                <Scene key="auth" hideNavBar={true} initial>
                    <Scene
                        key="login"
                        component={LoginForm}
                        hideNavBar={true}
                     />
                </Scene>

                <Scene key="register" hideNavBar={true}>
                     <Scene
                        key="signUp"
                        component={signUpForm}
                        hideNavBar={true}
                     />
                </Scene>

                <Scene key="forgotPassword" component={ForgotPassword} title="Login help" hideNavBar={false}/>

                <Scene key="main" hideNavBar={true} >
                    <Scene
                        key="home"
                        component={Home}
                        hideNavBar={true}
                    />
                </Scene>
                <Scene key="menu" component={Menu} drawer hideNavBar={true} open={false} />
                <Scene key="jewellery" component={Jewellery} title="Jewellery" hideNavBar={false} />
                <Scene key="cart" component={Cart} title="My Cart"  hideNavBar={false} />
                <Scene key="payment" component={Payment} title="Payment"  hideNavBar={false} />
                <Scene key="booking" component={Booking} title="My Orders"  hideNavBar={false} />
                <Scene key="card" component={CardDetails} title="Enter Card Details"  hideNavBar={false} />
            </Scene>
        </Router>
    );
};

export default RouterComponent;