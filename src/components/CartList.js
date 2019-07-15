import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView,FlatList, View, Text } from 'react-native';
import { cartFetch } from '../actions';
import Cart from './Cart';

class CartList extends Component {
   componentWillMount() {
      this.props.cartFetch();
   }

    keyExtractor(item) {
      return item.uid;
    }
    renderItem({ item }) {
      return <Cart carts={item} navigation={this.props.navigation} />;
    }
    _listEmptyComponent = () => {
        if(!this.props.cartList.length){
        return (
            <View style={{backgroundColor:'White', PaddingTop:10}}>
                <Text style={{color:'red', fontSize:20, alignSelf:'center'}}>Cart is Empty</Text>
            </View>
         )
       }
    }
    render() {
      return (
        <FlatList
            data={this.props.cartList}
            ListEmptyComponent={this._listEmptyComponent}
            renderItem={this.renderItem.bind(this)}
            keyExtractor={this.keyExtractor}
            navigation={this.props.navigation}
        />
      );
    }
}
const mapStateToProps = state => {
  const cartList = _.map(state.cartList, (val, uid) => {
    return { ...val, uid };
  });

  return { cartList };
};

export default connect(mapStateToProps, { cartFetch })(CartList);