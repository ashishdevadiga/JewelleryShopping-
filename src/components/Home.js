import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Header, Card, CardSection, Input, Button } from './common';
import Icon from 'react-native-vector-icons/FontAwesome';
import {  Actions } from 'react-native-router-flux';
import LibraryList from './LibraryList';
import * as actions from '../actions';

class Home extends Component{

    render(){
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor="#004d99" barStyle="light-content" />

                <View style={styles.viewStyle}>
                     <TouchableOpacity onPress={ ()=> Actions.menu({key: "drawer", open: true})}>
                           <Icon name='bars' size={22} color='#ffffff' />
                     </TouchableOpacity>

                    <Text style={styles.textStyle}> Jewellery Store </Text>

                    <TouchableOpacity onPress ={() => Actions.cart()}>
                         <Icon name='shopping-cart' size={24} color='#ffffff' />
                    </TouchableOpacity>

                </View>

                <View>
                    <ScrollView>
                      <LibraryList />
                    </ScrollView>
                </View>

            </View>
        );
    }
}

const styles = {
  viewStyle: {
    height:60,
    flexDirection: 'row',
    backgroundColor: '#004d99',
    justifyContent:'space-between',
    paddingLeft:10,
    paddingRight:10,
    paddingTop:18
  },
  textStyle:{
    fontSize:20,
    color:'white',
    paddingLeft:20,
  },
  container: {
    shadowColor: '#000000',
    shadowOpacity: 0.4,
    shadowOffset: { height: -5, width:-5},
    shadowRadius: 10
  }

};

const mapStateToProps = ({ libraries }) => {
    const{ id, name, title, price, image }=libraries;

    return{ id, name, title, price, image }
 };

export default connect(mapStateToProps,actions)(Home);