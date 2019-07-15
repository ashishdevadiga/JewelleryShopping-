import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  LayoutAnimation,
  Image,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Card } from './common';
import * as actions from '../actions';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  render() {
    const { imageStyle, headerContentStyle, headerTextStyle } = styles;
    const { id, name, title, price, image } = this.props.library;
    return (
        <TouchableHighlight onPress={() =>
            Actions.jewellery({library: this.props.library}) }>
            <CardSection>
                <View>
                   <Image source={{ uri: image}} style={{width:80, height:80}} />
                </View>

                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{name}</Text>
                    <Text style={{color:'black'}}>{title}</Text>
                    <Text style={{color:'black'}}>{price}</Text>
                </View>
            </CardSection>
        </TouchableHighlight>
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

const mapStateToProps = ({ libraries }) => {
    const{ id, name, title, price, image }=libraries;

    return{ id, name, title, price, image }
 };

 export default connect(mapStateToProps,actions)(ListItem);