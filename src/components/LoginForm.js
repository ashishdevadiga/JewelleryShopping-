import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Header,Card, CardSection, Input, Button, Spinner, Confirm } from './common';
import Icon from 'react-native-vector-icons/FontAwesome';
import {  Actions } from 'react-native-router-flux';


class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
       const { email, password }=this.props;

        this.props.loginUser({ email, password});
    }

    onTouch(){
        Actions.register();
    }

    onForgot() {
        Actions.forgotPassword();
    }

    renderButton() {
        if(this.props.loading){
            return <Spinner size="large" />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    renderError() {
        if (this.props.error) {
            return(
                <View style ={{ backgroundColor:'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    render() {
        const { textStyle }=styles;
        return (

           <View>
                <View style={{ justifyContent:"center", alignItems:"center", backgroundColor: 'white' }}>
                    <StatusBar backgroundColor="#004d99" barStyle="light-content" />
                     <Icon name='shopping-cart' size={150} color='#004d99' />
                     <Text style={styles.textStyle}></Text>
                </View>

                <CardSection>
                    <Input
                        label=<Icon name='user' size={27} />
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                       secureTextEntry
                       label=<Icon name='lock' size={27} />
                       placeholder="password"
                       onChangeText={this.onPasswordChange.bind(this)}
                       value={this.props.password}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                    <Button onPress={this.onTouch.bind(this)}>
                        Sign Up
                    </Button>
                </CardSection>

                 <CardSection>
                       <TouchableOpacity onPress={this.onForgot.bind(this)}>
                            <Text style={textStyle}>Forgot Password?</Text>
                        </TouchableOpacity>
                 </CardSection>
            </View>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    textStyle: {
        fontSize:20,
        color:'#0066ff'
    }
}

const mapStateToProps = ({ auth }) => {
   const { email, password, error, loading } =auth;

   return { email, password, error, loading };
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(LoginForm);