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
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWljcm93YXZlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1583471800737-36d8e3a83ceb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1pY3Jvd2F2ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://media.istockphoto.com/photos/microwave-picture-id183280401?b=1&k=20&m=183280401&s=170667a&w=0&h=uc-5gA6m_KAHDOoA36jYTwdalejjJwT8jy7ugldMx4U='}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://media.istockphoto.com/photos/modern-microwave-oven-picture-id139406154?b=1&k=20&m=139406154&s=170667a&w=0&h=Y3lNEt5oSTvQvbwijoFIra6fEhPhntT5fdReVHwxSJs='}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://media.istockphoto.com/photos/womans-hands-closing-microwave-oven-door-and-preparing-food-in-picture-id901449440?b=1&k=20&m=901449440&s=170667a&w=0&h=GyhdFg_SGsmexih0w0QvdhFxtY89gEdEv9JPsvtpP9Q='}}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1600717707657-53775bc58050?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1pY3Jvd2F2ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1584269600519-112d071b35e6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWljcm93YXZlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1601314090192-724a4b5409e9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWljcm93YXZlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1608384156808-418b5c079968?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWljcm93YXZlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>
                    
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://media.istockphoto.com/photos/oven-new-outside-view-door-open-picture-id942156552?b=1&k=20&m=942156552&s=170667a&w=0&h=uln6qcD_IL-ewmkefB-_0gHKhKQIey8kgijybaccMUQ='}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://media.istockphoto.com/photos/close-up-woman-hands-open-the-oven-and-take-out-fresh-cooked-food-at-picture-id1287158927?b=1&k=20&m=1287158927&s=170667a&w=0&h=bugYOfI2m6I-9Jh0ZqI_b_i5t5Odu9E0FPXGQkNg7cs='}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://media.istockphoto.com/photos/close-up-woman-hands-open-the-oven-and-take-out-fresh-cooked-food-at-picture-id1287158927?b=1&k=20&m=1287158927&s=170667a&w=0&h=bugYOfI2m6I-9Jh0ZqI_b_i5t5Odu9E0FPXGQkNg7cs='}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://media.istockphoto.com/photos/close-up-stainless-steel-stove-with-oven-picture-id538161084?b=1&k=20&m=538161084&s=170667a&w=0&h=UMua6VRBNcwBQr_cE4Q7_qTgqvvfzPbqoNkkME8CIKw='}}></Image>
                    </TouchableOpacity>
                    
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1599083549933-838ea352c1cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG92ZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1586208958839-06c17cacdf08?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8b3ZlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1565357253897-79d691886a73?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3ZlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://media.istockphoto.com/photos/high-technology-electronic-machines-product-black-and-white-modern-picture-id1326231085?b=1&k=20&m=1326231085&s=170667a&w=0&h=US6GR1dhXlV21fayM96zj_7xA__hYOuJeCGoaP2z9Fs='}}></Image>
                    </TouchableOpacity>
                    
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://media.istockphoto.com/photos/stuffed-turkey-for-thanksgiving-holidays-picture-id1341905580?b=1&k=20&m=1341905580&s=170667a&w=0&h=N4ID91b5H_Nh5XTv8HaCq9X1qffAABEI4Kgj-oTtCiY='}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://media.istockphoto.com/photos/delivery-new-washing-machine-picture-id157473202?b=1&k=20&m=157473202&s=170667a&w=0&h=9_bl6kLrylc-ThLDy-HtwGDrg_RlqEJK5Kkcdpv0ShQ='}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://media.istockphoto.com/photos/set-of-kitchen-home-appliances-toaster-kettle-mixer-blender-yogurt-picture-id691988470?b=1&k=20&m=691988470&s=170667a&w=0&h=PaGx5PdXb1eApJ3DQ7r4_8E1XFtRbWyVRKST7RjsBXY='}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1632923565835-6582b54f2105?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbWUlMjBhcHBsaWFuY2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>
                    
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1512914890251-2f96a9b0bbe2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvbWUlMjBhcHBsaWFuY2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1588931196804-75b9cb0cd2a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvbWUlMjBhcHBsaWFuY2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1620051787208-a45bc64e32ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZSUyMGFwcGxpYW5jZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGFwcGxpYW5jZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>
                    
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1556909211-36987daf7b4d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGtpdGNoZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://media.istockphoto.com/photos/two-pendant-lights-hang-over-kitchen-island-picture-id1272358382?b=1&k=20&m=1272358382&s=170667a&w=0&h=b_z0yvPvGoyQy0PkhDw-MLFM-k9x35_EVFiijjGwGXs='}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.unsplash.com/photo-1489769002049-ccd828976a6c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGluZG9vcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10 }}>
                        <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://media.istockphoto.com/photos/modern-elegant-kitchen-stock-photo-picture-id1297586166?b=1&k=20&m=1297586166&s=170667a&w=0&h=Ka-3OYiTlbCiwCJhoXeTqRewh3DI4qfSh1B0baJMcCk='}}></Image>
                    </TouchableOpacity>
                    
                </View>              
            </View>    
        </ScrollView>
        
        
    </View>)
        
    }

    


   