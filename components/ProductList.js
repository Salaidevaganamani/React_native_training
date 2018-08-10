import React from 'react';
import {View, Text, ActivityIndicator, ScrollView, FlatList, Image} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {products: [], isLoading: true, page: 1, limit: 20};
    }
    
    async componentDidMount() {
        let { page, limit } = this.state;
        let response =await fetch(`http://172.16.34.228:4000/products?_page=${page}&_limit=${limit}`);
        let products = await response.json();
        this.setState({products, isLoading: false, page: page +1});
    }

    _renderItem({item:product}){
        return(
            <View style={{flex:1, flexDirection:"row", marginRight: 50, marginLeft: 20}}>
                <Image
                    style={{width:100, height:100}}
                    source={{uri: `http://172.16.34.228:4000/images/${product.image}`}}
                    resizeMode = "center"
                />
                <View style={{flex:1, flexDirection:"row"}}>
                    <Text
                        style={{ marginBottom: 25, overflow: "hidden", marginLeft:15, marginRight: 5}}
                        key={product.id}
                    >
                        {product.title}
                    </Text>
                    <FontAwesome name="heart-o" size={32} color="green" style={{marginLeft: 5}}/> 
                </View>
            </View>
        );
    }

    _keyExtractor(p, i){
        return `${p.id}`;
    }

    async _getMore(){
        let {page, limit} = this.state;
        console.log(
            `http://172.16.34.228:4000/products?_page=${page}&_limit=${limit}`
          );
        let response =await fetch(`http://172.16.34.228:4000/products?_page=${page}&_limit=${limit}`);
        let products = await response.json();
        this.setState({products: [...this.state.products, ...products], 
            isLoading: false, page: page +1});
    }
    render(){
        const {products, isLoading} = this.state;
        return(
            <View style={{flex:1}}>
                <View style={{flex:1, justifyContent: "center"}}>
                        {isLoading && <ActivityIndicator size="large" color="green"  style={{alignItems: "center"}}/>}
                </View>
                <View>
                    <FlatList 
                        data={products}
                        keyExtractor = {this._keyExtractor}
                        renderItem ={this._renderItem}
                        onEndReachedThreshold={0.5}
                        onEndReached={() => this._getMore()}
                    />
                </View>
            </View>
            
        );
    }
}

export default ProductList;

{/* <ScrollView>
                {isLoading && <ActivityIndicator size="large" color="green"/>}
                {products.map(p => (
                    <Text key={p.id}>{p.title}</Text>
                ))}
            </ScrollView> */}