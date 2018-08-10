import React from 'react';
import { View } from 'react-native';

class FlexComponent extends React.Component{
    render(){
        return(
            <View style={{flex:1, backgroundColor: '#bfbfbf'}}>
                <View style = {{backgroundColor: 'red', height: 125}}></View>
                <View style = {{backgroundColor: 'green', height: 125 }}></View>
                <View style = {{flex:1, backgroundColor: '#fff', flexDirection: "row", flexWrap: "wrap"}}>
                    <View style ={{backgroundColor: 'blue', width: 100, height: 100, margin:2, flexGrow:1}}></View>
                    <View style ={{backgroundColor: 'blue', width: 100, height: 100, margin:2, flexGrow:1}}></View>
                    <View style ={{backgroundColor: 'blue', width: 100, height: 100, margin:2, flexGrow:1}}></View>
                    <View style ={{backgroundColor: 'blue', width: 100, height: 100, margin:2, flexGrow:1}}></View>
                    <View style ={{backgroundColor: 'blue', width: 100, height: 100, margin:2, flexGrow:1}}></View>
                    <View style ={{backgroundColor: 'blue', width: 100, height: 100, margin:2, flexGrow:1}}></View>
                    <View style ={{backgroundColor: 'blue', width: 100, height: 100, margin:2, flexGrow:1}}></View>
                    <View style ={{backgroundColor: 'blue', width: 100, height: 100, margin:2, flexGrow:1}}></View>
                    <View style ={{backgroundColor: 'blue', width: 100, height: 100, margin:2, flexGrow:1}}></View>
                </View>
            </View>
        )
    }
}

export default FlexComponent;