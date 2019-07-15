import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView,FlatList, View, Text } from 'react-native';
import { bookFetch } from '../actions';
import Booking from './Booking';

class BookingList extends Component {
   componentWillMount() {
      this.props.bookFetch();
   }

    keyExtractor(item) {
      return item.uid;
    }
    renderItem({ item }) {
      return <Booking order={item} navigation={this.props.navigation} />;
    }
    render() {
      return (
        <FlatList
            data={this.props.bookList}
            renderItem={this.renderItem.bind(this)}
            keyExtractor={this.keyExtractor}
            navigation={this.props.navigation}
        />
      );
    }
}
const mapStateToProps = state => {
  const bookList = _.map(state.bookList, (val, uid) => {
    return { ...val, uid };
  });

  return { bookList };
};

export default connect(mapStateToProps, { bookFetch })(BookingList);