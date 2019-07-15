import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Picker
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Card, Button, Confirm } from './common';
import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';
import { cartDelete } from '../actions';

class Cart extends Component {
   state = {
      showModal: false
  };
   onAccept() {
        const { uid } = this.props.carts;

        this.props.cartDelete({ uid });
        this.setState({ showModal: false });
     }

    onDecline() {
        this.setState({ showModal: false });
    }

  remove() {
    this.setState({ showModal: !this.state.showModal});
   }

  render() {
    const { imageStyle, headerContentStyle, headerTextStyle } = styles;
    const { image, name, price } = this.props.carts;
    return (
    <ScrollView>
        <Card>
            <CardSection>
                <View>
                   <Image
                        source={{ uri: image}}
                        style={{width:85, height:85}}
                   />
                </View>

                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{name}</Text>
                    <Text style={{color:'black'}}>Qty: </Text>
                    <Picker
                            style={{ flex: 1, height:20, width:80 }}
                    >
                        <Picker.Item label="1" value="1" />
                    </Picker>
                    <Text style={{color:'black'}}>{price}</Text>
                </View>
            </CardSection>

            <CardSection>
                 <Button onPress={this.remove.bind(this)}>Remove</Button>
                 <Button onPress={ () => Actions.payment({carts: this.props.carts}) }>Proceed to checkout</Button>
            </CardSection>
            <Confirm
                 visible={this.state.showModal}
                 onAccept={this.onAccept.bind(this)}
                 onDecline={this.onDecline.bind(this)}
            >
                   Are you sure you want to Remove this?
            </Confirm>
        </Card>
    </ScrollView>
    );
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    position:'relative'
  },
  headerTextStyle: {
    fontSize: 18,
    color:'black'
  },
  imageStyle: {
     height: 300,
     width: null,
     flex: 1
    },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
};

const mapStateToProps = ({ cartList }) => {
    const{ image, name, price }=cartList;

    return{ image, name, price }
 };

export default connect(mapStateToProps,{cartDelete})(Cart);
