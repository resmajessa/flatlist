import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { data } from './datas';
import { Icon } from '@rneui/themed';


  
export default function App() {

  const fullName = (data) => {
    alert(data)
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Entypo/>
        <FlatList
          data={data}
          keyExtractor={(index) => index.id.toString()}
          renderItem={({item}) => (

            <View style={styles.data}>
              <Image
                style={styles.image}
                resizeMode='cover'
                source={{uri: item.avatar}}
              />
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.address}>{item.address}</Text>
                </View>

                <View style={{flex:1}}>
                  <TouchableOpacity 
                    onPress={()=>fullName(`${'Name: '}${item.name}${'\n'}${'Nickname: '}${item.alias}${'\n'}${'Bounty: '}${item.bounty}${'\n'}${'Address: '}${item.address}`)}>
                      <Icon
                        name='dots-three-horizontal'
                        type='entypo'
                        size={25}
                        style={styles.dot}
                        />
                  </TouchableOpacity>
                </View>
            </View>
          )}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
    marginTop:20,
  },
  name: {
    fontSize: 15,
    marginTop: 5,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 13,
    marginBottom: 20,
  },
  dot: {
    padding: 12,
    flexDirection: 'row-reverse',
    marginLeft: 16,
  },
  data: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    marginRight: 20,
    borderRadius: 400/2,
    height: 50,
    width: 50,
  },
});

