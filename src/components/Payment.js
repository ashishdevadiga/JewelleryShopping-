import React,{ Component } from 'react';
import { Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Card, CardSection, Button } from './common';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { bookCreate  } from '../actions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class Payment extends Component {
    state={
        data:['Cash','Debit/Credit Card'],
        selectedValue:0
    }

    _onPress() {
        const { image, name, price } = this.props.carts;
        if(this.state.selectedValue ===0){
            this.props.bookCreate({ image, name, price });
            Actions.booking();
       }
       else{
                Actions.card({ booking : this.props.carts });
           }
     }

    render(){
        return(

            <Card>
                <View>
                    {this.state.data.map((data,value)=> {
                        return(
                            <CardSection key={data}>
                                {this.state.selectedValue==value?
                                    <TouchableOpacity style={styles.btn}>
                                        <Icon
                                            name='dot-circle'
                                            size={24}
                                            color='#000000'
                                            style={{paddingTop:10}}
                                        />
                                        <Text style={styles.textStyle}>{data}</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity
                                        onPress={()=>{
                                            this.setState({selectedValue:value})
                                            this.state.selectedValue=value;
                                        }}
                                        style={styles.btn}
                                    >
                                        <Icon
                                            name='circle'
                                            size={24}
                                            color='#000000'
                                            style={{paddingTop:10}}
                                        />
                                        <Text style={styles.textStyle}>{data}</Text>
                                    </TouchableOpacity>
                                }
                            </CardSection>

                        )
                    })}
                </View>

                <CardSection>
                    <Button onPress={this._onPress.bind(this)}>Book Now</Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    textStyle:{
        fontSize:20,
        color:'black',
        padding:10
    },
    btn:{
        flexDirection:'row'
    }
}

const mapStateToProps = ({ book }) => {
    const{ image, name, price }=book;

    return{ image, name, price }
 };

export default connect(mapStateToProps,{bookCreate})(Payment);