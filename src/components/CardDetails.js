import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, Card, Input, CardSection, Spinner } from './common';
import Icon from 'react-native-vector-icons/FontAwesome';
import { cardUpdate, cardCreate, bookCreate } from '../actions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class CardDetails extends Component{

    onButtonPress() {
       const { cardNumber, cvv }=this.props;
       const { image, name, price } = this.props.booking;

        this.props.cardCreate({ cardNumber, cvv });
        this.props.bookCreate({ image, name, price });
        Actions.booking()
    }

    renderButton() {
        const {  price } = this.props.booking;
        if(this.props.loading){
            return <Spinner size="large" />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
               PAY {price}
            </Button>
        );
    }
    render(){

        return(
            <Card>
                <CardSection>
                <Input
                    label=<Icon name="credit-card" size={24} />
                    placeholder="Card Number"
                    value={this.props.cardNumber}
                    onChangeText={value => this.props.cardUpdate({ prop: 'cardNumber', value })}
                />
                </CardSection>

                <CardSection>
                <Input
                    label=<Icon name="question-circle" size={24} />
                    placeholder="CVV"
                    value={this.props.cvv}
                    onChangeText={value => this.props.cardUpdate({ prop: 'cvv', value })}
                />
                </CardSection>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = ({ card, book }) => {
   const { cardNumber, cvv, loading } =card;
   return { cardNumber, cvv, loading };

   const{ image, name, price }=book;
    return{ image, name, price }

};

export default connect(mapStateToProps,{ cardUpdate, cardCreate, bookCreate }) (CardDetails);