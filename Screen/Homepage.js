import React from 'react';
import {View,TouchableOpacity,Text, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

export default function Home({navigation}){
    return <View style={{flex: 1, backgroundColor: 'white'}}>
               
        <View style={{flexDirection: 'row',justifyContent: 'space-between',borderRadius: 5, margin: 5 }}>
                       
                
               
                <View><Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 100, color: 'black'}}>KOA APPLIANCES</Text></View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{marginHorizontal: 25,marginVertical: 15}}>
                        <Ionicons name="search" size={20} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 25,marginVertical: 15}}>
                        <Octicons name="settings" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                       
        </View>
        <ScrollView>
        
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

