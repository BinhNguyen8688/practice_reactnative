import React,{Component} from 'react';
import {View , Image, StyleSheet} from 'react-native';

export default class CircleImageView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={this.props.urlImage} style={styles.icon} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 120,
        height: 120,
        borderRadius: 120 / 2,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 60,
        height: 60
    }
});
