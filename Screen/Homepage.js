import React from 'react';
import {View,TouchableOpacity,Text, ScrollView, Image, TextInput, SafeAreaView, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';


export default function Home(){

    const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
    return <View style={{flex: 1, backgroundColor: 'white', width: '100%', height: '100%'}}>
               
        <View style={{flexDirection: 'row',justifyContent: 'space-between', borderRadius: 5, margin: 5 }}>
                       
                
               
                <View><Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 100, color: 'black'}}>KOA APPLIANCES</Text></View>
                <View style={{flexDirection: 'row'}}>
                <SafeAreaView>
                    <TextInput style={{height: 35, margin: 12, borderWidth: 1, padding: 10, borderRadius: 10, width: 400}} onChangeText={onChangeText} value={text} placeholder='Search for Appliances'  />
    
                </SafeAreaView>
                <TouchableOpacity style={{width: 60, backgroundColor: 'gray', borderRadius: 5, height: 35, margin: 10 }}>
                        <Text style={{alignItems: 'center', justifyContent: 'center', margin: 8}}>Search</Text>
                </TouchableOpacity>
                
                    

                    <TouchableOpacity style={{marginHorizontal: 25,marginVertical: 15}}>
                        <Octicons name="settings" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                       
        </View>

        <ScrollView>

        <View style={{flex: 1}}>
            <Image 
            source={{uri: 'https://images.unsplash.com/photo-1556908290-5e5facb961b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvb2tpbmclMjBhcHBsaWFuY2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}
            style={{height: 400}}>

            </Image>
        </View>


        
        <View style={{flex:1}}><View style={{ flex: 1,alignItems: 'center',justifyContent: 'center', marginVertical: 20}}><Text style={{fontWeight: 'bold'}}>SHOP WIGS</Text></View>

        <View>
            
            <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity><Image 
                source={{uri: ''}}
                style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                <TouchableOpacity><Image 
                 source={{uri: ''}}
                 style={{height: 100, width: 100, marginHorizontal: 10,borderRadius: 5}}></Image></TouchableOpacity>
                <TouchableOpacity><Image 
                 source={{uri: ''}}
                 style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
               
            </View>

            <View style={{flexDirection: 'row', marginTop: 12}}>
            <TouchableOpacity><Image 
                source={{uri: ''}}
                style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                <TouchableOpacity><Image 
                 source={{uri: ''}}
                 style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                <TouchableOpacity><Image 
                 source={{uri: ''}}
                 style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                
                
            </View>
            </View>
        </View>
        

        </View>
        <View style={{flex:1}}><View style={{ flex: 1, alignItems: 'center',justifyContent: 'center',marginTop: 20}}><Text style={{fontWeight: 'bold'}}></Text></View>

        <View style={{}}>
            
            <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 20}}>
            <TouchableOpacity><Image 
                source={{uri: ''}}
                style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                <TouchableOpacity><Image 
                 source={{uri: ''}}
                 style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                <TouchableOpacity><Image 
                 source={{uri: ''}}
                 style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                
            </View>

            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity><Image 
                source={{uri: ''}}
                style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                <TouchableOpacity><Image 
                 source={{uri: ''}}
                 style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                <TouchableOpacity><Image 
                 source={{uri: ''}}
                 style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                
                
            </View>
            </View>
        </View>
        

        </View>

        <View style={{flex:1}}><View style={{ flex: 1, alignItems: 'center',justifyContent: 'center',marginTop: 20}}><Text style={{fontWeight: 'bold'}}>SHOP CLOTH</Text></View>

        <View style={{}}>
            
            <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 20}}>
            <TouchableOpacity><Image 
                source={{uri: ''}}
                style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                <TouchableOpacity><Image 
                 source={{uri: ''}}
                 style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                <TouchableOpacity><Image 
                 source={{uri: ''}}
                 style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                
            </View>

            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity><Image 
                source={{uri: ''}}
                style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                <TouchableOpacity><Image 
                 source={{uri: ''}}
                 style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                <TouchableOpacity><Image 
                 source={{uri: ''}}
                 style={{height: 100, width: 100, marginHorizontal: 10, borderRadius: 5}}></Image></TouchableOpacity>
                
                
            </View>
            </View>
        </View>
        

        </View>
        
     </ScrollView>   
    </View>
    
}

