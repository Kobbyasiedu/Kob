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
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'}}>
               
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
            <View style={{flexDirection: 'column', marginVertical: 30}}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://media.istockphoto.com/photos/home-appliances-picture-id489937474?b=1&k=20&m=489937474&s=170667a&w=0&h=efKyLmj93wbLXtpgSxp73gfhZDZOWDD-g9TBVJ31tYE='}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1624209190904-aca680ededc1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFwcGxpYW5jZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity><TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1611090925566-b1fc31065f63?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFwcGxpYW5jZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1578643463396-0997cb5328c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFwcGxpYW5jZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://media.istockphoto.com/photos/kitchen-picture-id157569788?b=1&k=20&m=157569788&s=170667a&w=0&h=vaMTyDx_02TM3tx0HqLAwGT4sh0MN5xgRU75PvawHYM='}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1589983006655-4ef9a756ebe3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXBwbGlhbmNlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1622660658381-36fbe69d909a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXBwbGlhbmNlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>
                    
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>
                    
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>
                    
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>
                    
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>
                    
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1633114073758-c4be9aeb15ac?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>
                    
                </View>              
            </View>    
        </ScrollView>
        
        
    </View>)
        
    }

    


   