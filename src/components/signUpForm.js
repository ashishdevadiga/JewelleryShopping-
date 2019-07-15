import React, { Component } from 'react';
import { Text, View, TouchableOpacity, KeyboardAvoidingView, ScrollView, StatusBar} from 'react-native';
import { connect } from 'react-redux';
import { Header,Card, CardSection, Input, Button, Spinner } from './common';
import Icon from 'react-native-vector-icons/FontAwesome'
import {  userUpdate, userCreate } from '../actions';


class signUpForm extends Component {
    onButtonPress() {
       const { name, email, phone, password }=this.props;

        this.props.userCreate({ name, email, phone, password });
    }

    renderButton() {
            if(this.props.loading){
                return <Spinner size="large" />;
            }

            return (
                <Button onPress={this.onButtonPress.bind(this)}>
                       Sign In
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
        return (
            <ScrollView>
               <KeyboardAvoidingView keyboardVerticalOffset={-500} behavior="padding" enabled >

                <View style={{ justifyContent:"center", alignItems:"center", backgroundColor: 'white' }}>
                     <StatusBar backgroundColor="#004d99" barStyle="light-content" />
                     <Icon name='user-circle' size={130} color='#004d99' />
                     <Text></Text>
                </View>

                <CardSection>
                    <Input
                        label=<Icon name='user' size={27} />
                         placeholder="Full Name"
                         value={this.props.name}
                         onChangeText={value => this.props.userUpdate({ prop: 'name', value })}
                     />
                </CardSection>

                <CardSection>
                     <Input
                          label=<Icon name='envelope-open' size={27} />
                          placeholder="Email Address"
                          value={this.props.email}
                          onChangeText={value => this.props.userUpdate({ prop: 'email', value })}
                     />
                 </CardSection>

                <CardSection>
                    <Input
                        label=<Icon name='phone' size={27} />
                        placeholder="Phone Number"
                        value={this.props.phone}
                        onChangeText={value => this.props.userUpdate({ prop: 'phone', value })}
                        keyboardType="numeric"
                    />
                 </CardSection>


                <CardSection>
                    <Input
                       secureTextEntry
                       label=<Icon name='lock' size={27} />
                       placeholder="password"
                       value={this.props.password}
                       onChangeText={value => this.props.userUpdate({ prop: 'password', value })}
                    />
                </CardSection>

                 {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </KeyboardAvoidingView>
          </ScrollView>

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

const mapStateToProps = ({ signUp }) => {
   const { name, email, location, phone, password, loading, error } =signUp;

   return { name, email, location, phone, password, loading, error };
};

export default connect(mapStateToProps, { userUpdate, userCreate })(signUpForm);