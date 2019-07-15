import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Dimensions, Animated } from 'react-native';
import Interactable from 'react-native-interactable';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Home';
import { Header, Card, CardSection } from './common';
import MenuContent from './MenuContent';
import {  Actions } from 'react-native-router-flux';

const Screen = Dimensions.get('window')
const SideMenuWidth = 300
const RemainingWidth = Screen.width - SideMenuWidth

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deltaX: new Animated.Value(-SideMenuWidth),
            menuOpened: false
        }
        this.deltaX = new Animated.Value(0)
    }

    render() {
        return (
            <View style={styles.container}>
                <MenuContent />
                <Interactable.View
                    style={{flex:1}}
                    ref='menuInstance'
                    horizontalOnly={true}
                    snapPoints={[{x: 0, damping: 0.6}, {x: SideMenuWidth, damping: 0.6}] }
                    boundaries={{right: SideMenuWidth}}
                    initialPosition={{x: 0}}
                    animatedValueX={this.deltaX}
                    onSnap={ this.onStopInteraction.bind(this) }
                >
                    <Home />
                </Interactable.View>

            </View>
        );
    }

    onStopInteraction(event, check) {
        let menuOpened = true
        if(event.nativeEvent.index == 0) {
            menuOpened = false
        }
        this.setState((preState, props) => {
            return { menuOpened }
        })
    }
    onMenuPress = () => {
        const menuOpened = !this.state.menuOpened
        if(menuOpened) {
            this.refs['menuInstance'].snapTo({index: 1})
        } else {
            this.refs['menuInstance'].snapTo({index: 0})
        }
    }

}
const styles ={
    container: {
        alignItems: 'stretch',
        backgroundColor:'white',
        flex:1
    }
}
export default Menu;