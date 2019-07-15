import React, { Component } from 'react';
import{
    TouchableOpacity,
    View,
    Image,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, CardSection } from './common';
import {  Actions } from 'react-native-router-flux';
import firebase from 'firebase';

let SideMenuWidth = 300

class MenuContent extends Component {
    onHome(){
        Actions.main();
    }
    onCart()
    {
        Actions.cart();
    }
    onOrder()
    {
        Actions.booking();
    }
    onLogOutPress(){
        firebase.auth().signOut();
        Actions.auth();
    }
    render() {
        return (
            <View style={[styles.sideMenu, this.props.style || {}]}>

                  <View style={{ paddingHorizontal: 10 }}>
                        { this._renderHeader() }
                       <View style={{ paddingTop:30 }}>
                            <TouchableOpacity style={[ styles.menu, { backgroundColor: '#b8b894', borderRadius: 5} ]} onPress={this.onHome.bind(this)}>
                                <Icon name='home' size={27}/>
                                <Text style={styles.menuText}>Home</Text>
                             </TouchableOpacity>
                            <TouchableOpacity style={ styles.menu } onPress={this.onCart.bind(this)}>
                                <Icon name='shopping-cart' size={27}/>
                                <Text style={styles.menuText}>My Cart</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={ styles.menu } onPress={this.onOrder.bind(this)}>
                                <Icon name='arrow-circle-up' size={27}/>
                                <Text style={styles.menuText} >My Orders</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={ styles.menu } onPress={this.onLogOutPress.bind(this)}>
                                <Icon name='sign-out' size={27} />
                                <Text style={styles.menuText} >Log out</Text>
                            </TouchableOpacity>
                      </View>
                  </View>
            </View>
        )
    }

    _renderHeader() {
        return (
            <View style={{ paddingTop: 10} }>
                    <View>
                        <Text style={ styles.headerText}>Jewellery Store</Text>
                    </View>
            </View>
        )
    }
}

const styles ={
    sideMenu: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: SideMenuWidth,
        backgroundColor: 'transparent'
    },
    sideMenuTitle: {
        marginLeft: 20,
        marginBottom: 30
    },
    menu: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    menuText: {
        marginLeft: 20,
        fontSize:20,
    },
    headerText:{
        fontSize:22,

    }

}

export default MenuContent;