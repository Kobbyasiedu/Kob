import React from 'react';
import {View,TouchableOpacity,Text, ScrollView, Image, TextInput, SafeAreaView, Button, FlatList, ListViewBase } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';


export default function Home(){

    function renderHeader() {
        return(
        <View style={{flex: 1, backgroundColor: 'white', width: '100%', height: '100%'}}>
               
        <View style={{flexDirection: 'row',justifyContent: 'space-between', borderRadius: 5, margin: 5 }}>
                       
                
               
                <View><Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 100, margin: 10, color: 'black'}}>KOA APPLIANCES</Text></View>
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
        

        
    </View>)
        
    }

    


    const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
    return (
        <SafeAreaView>
            {renderHeader()}
            
        </SafeAreaView>
    )
    
    
    
}

