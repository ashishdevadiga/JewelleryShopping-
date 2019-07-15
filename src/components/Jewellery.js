import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Card, Button } from './common';
import { Actions } from 'react-native-router-flux';
import { cartCreate  } from '../actions';

class Jewellery extends Component{
     _onPress() {
        const { image, name, price } = this.props.library;

        this.props.cartCreate({ image, name, price });
     }
    render(){
        const { id, name, title, price, image } = this.props.library;
        const { headerContentStyle, headerTextStyle }= styles;
        return(
            <Card>
                <CardSection>
                    <Image source={{uri: image}} style={{height:300, width:300, flex:1}} />
                </CardSection>
                <CardSection>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{name}</Text>
                        <Text style={{color:'black'}}>{title}</Text>
                        <Text style={{color:'black'}}>{price}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Button onPress={this._onPress.bind(this)}>
                        Add to Cart
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18,
    color:'black'
  },
}

const mapStateToProps = ({ cart }) => {
    const{ image, name, price }=cart;

    return{ image, name, price }
 };

export default connect(mapStateToProps,{cartCreate})(Jewellery);