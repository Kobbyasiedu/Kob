import React from 'react';
import {View,TouchableOpacity,Text, ScrollView, Image, TextInput, SafeAreaView, Button, FlatList, ListViewBase } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';


export default function Home(){

    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);

        return(
        
        <View style={{
            flex: 1, 
            backgroundColor: 'white', 
            width: '100%', 
            height: '100%'}}>
               
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between', 
            borderRadius: 5, 
            margin: 5, 
            width: '100%', 
            height: '12%', 
            backgroundColor: '#eee' }}>
                       
                
               
                <View><Text style={{
                    fontSize: 30, 
                    fontWeight: 'bold', 
                    marginLeft: 100, 
                    margin: 10, 
                    color: 'black'}}>
                        KOA APPLIANCES
                    </Text>
                    </View>
                <View style={{flexDirection: 'row'}}>
                <SafeAreaView>

                    <TextInput style={{
                        height: 35, 
                        margin: 12, 
                        borderWidth: 1, 
                        padding: 10, 
                        borderRadius: 10, 
                        width: 400}} 
                        onChangeText={onChangeText} value={text} placeholder='Search for Appliances'  />
                    

                </SafeAreaView>
                <TouchableOpacity style={{
                    width: 60, 
                    backgroundColor: 'gray', 
                    borderRadius: 5, 
                    height: 35, 
                    margin: 10 }}>
                        <Text style={{
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            margin: 8}}>Search</Text>
                </TouchableOpacity>
                
                    

                    <TouchableOpacity style={{
                        marginHorizontal: 25,
                        marginVertical: 15}}>
                        <Octicons name="settings" size={24} color="black" />
                    </TouchableOpacity>

                   
                </View>
                
                       
        </View>
        <ScrollView>
        <View style={{
            flexDirection: 'column', 
            marginVertical: 20
             
            }}>
            <View style={{
                flexDirection: 'row',                
                justifyContent: 'space-evenly' }}>
                <TouchableOpacity><Image 
                source={{uri: 'https://images.unsplash.com/photo-1637099525156-a300600b607b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}
                style={{height: 50, width: 50}}>

                </Image></TouchableOpacity>
                <TouchableOpacity><Image 
                source={{uri: 'https://images.unsplash.com/photo-1637099525156-a300600b607b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}
                style={{height: 50, width: 50}}>

                </Image></TouchableOpacity>
                <TouchableOpacity><Image 
                source={{uri: 'https://images.unsplash.com/photo-1637099525156-a300600b607b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}
                style={{height: 50, width: 50}}>

                </Image></TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <TouchableOpacity><Image 
                source={{uri: 'https://images.unsplash.com/photo-1637099525156-a300600b607b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}
                style={{height: 50, width: 50}}>

                </Image></TouchableOpacity>
                <TouchableOpacity><Image 
                source={{uri: 'https://images.unsplash.com/photo-1637099525156-a300600b607b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}
                style={{height: 50, width: 50}}>

                </Image></TouchableOpacity>
                <TouchableOpacity><Image 
                source={{uri: 'https://images.unsplash.com/photo-1637099525156-a300600b607b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}
                style={{height: 50, width: 50}}>

                </Image></TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <TouchableOpacity><Image 
                source={{uri: 'https://images.unsplash.com/photo-1637099525156-a300600b607b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}
                style={{height: 50, width: 50}}>

                </Image>
                </TouchableOpacity>
                <TouchableOpacity><Image 
                source={{uri: 'https://images.unsplash.com/photo-1637099525156-a300600b607b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}
                style={{height: 50, width: 50}}>

                </Image></TouchableOpacity>
                <TouchableOpacity><Image 
                source={{uri: 'https://images.unsplash.com/photo-1637099525156-a300600b607b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}
                style={{height: 50, width: 50}}>

                </Image></TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <TouchableOpacity><Image 
                source={{uri: 'https://images.unsplash.com/photo-1637099525156-a300600b607b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}
                style={{height: 50, width: 50}}>

                </Image></TouchableOpacity>
                <TouchableOpacity><Image 
                source={{uri: 'https://images.unsplash.com/photo-1637099525156-a300600b607b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}
                style={{height: 50, width: 50}}>

                </Image></TouchableOpacity>
                <TouchableOpacity><Image 
                source={{uri: 'https://images.unsplash.com/photo-1637099525156-a300600b607b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}
                style={{height: 50, width: 50}}>

                </Image></TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <TouchableOpacity><Image 
                source={{uri: 'https://images.unsplash.com/photo-1637099525156-a300600b607b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}
                style={{height: 50, width: 50}}>

                </Image></TouchableOpacity>
                <TouchableOpacity><Image 
                source={{uri: 'https://images.unsplash.com/photo-1637099525156-a300600b607b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}
                style={{height: 50, width: 50}}>

                </Image></TouchableOpacity>
                <TouchableOpacity><Image 
                source={{uri: 'https://images.unsplash.com/photo-1637099525156-a300600b607b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}
                style={{height: 50, width: 50}}>

                </Image></TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <TouchableOpacity><Image 
                source={{uri: 'https://images.unsplash.com/photo-1637099525156-a300600b607b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}
                style={{height: 50, width: 50}}>

                </Image></TouchableOpacity>
                <TouchableOpacity><Image 
                source={{uri: 'https://images.unsplash.com/photo-1637099525156-a300600b607b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}
                style={{height: 50, width: 50}}>

                </Image></TouchableOpacity>
                <TouchableOpacity><Image 
                source={{uri: 'https://images.unsplash.com/photo-1637099525156-a300600b607b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}
                style={{height: 50, width: 50}}>

                </Image></TouchableOpacity>
            </View>



            </View>
        </ScrollView>
        
    </View>)
        
    }

    


   