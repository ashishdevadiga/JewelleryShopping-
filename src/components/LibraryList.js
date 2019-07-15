 import React, { Component } from "react";
 import { FlatList } from "react-native";
 import { connect } from "react-redux";
 import ListItem from "./ListItem";
 import Jewellery from "./Jewellery";

 class LibraryList extends Component {
   state = {
     dataSource: [],
   };


   componentDidMount = () => {
     this.setState({ dataSource: this.props.libraries });
   };

    renderRow = ({ item: library }) => <ListItem library={library} />;

   render() {
     return (
       <FlatList
         data={this.state.dataSource}
         extraData={this.state}
         renderItem={ this.renderRow }
         keyExtractor={item => item.id.toString()}
       />
     );
   }
 }

 const mapStateToProps = state => {
   return { libraries: state.libraries };
 };

 export default connect(mapStateToProps)(LibraryList)