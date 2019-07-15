import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Input, Confirm, Spinner } from './common';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { emailChanged, forgotPassword } from '../actions';

class ForgotPassword extends Component {
    onButtonPress() {
       const { email }=this.props;

        this.props.forgotPassword({ email });
    }

    renderButton() {
        if(this.props.loading){
            return <Spinner size="large" />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Next
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

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

     render() {
            return (
                <Card>
                    <CardSection>
                        <Text style={{ fontSize:27, color:'#000000' }}>Find Your Account</Text>
                    </CardSection>

                    <CardSection>
                        <Input
                            label=<Icon name='envelope-open-o' size={27} />
                            placeholder="Email Address"
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                        />
                    </CardSection>

                    {this.renderError()}

                    <CardSection>
                      {this.renderButton()}
                    </CardSection>
                </Card>
            );
     }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = ({ auth }) => {
   const { email, error, loading } =auth;

   return { email, error, loading };
};

export default connect(mapStateToProps, {
    emailChanged, forgotPassword
})(ForgotPassword);

