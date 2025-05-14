import SearchBar from '@/components/searchBar';
import { icons } from '@/constants/icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, View } from 'react-native';

const Index = () => {
  const router = useRouter();
  return (
    <LinearGradient 
  colors={['#000231','#002901', '#aa5f3d']} // Customize gradient colors
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
  className='absolute flex w-full h-full z-0 rounded-xl'
    >
                {/* <Image source={images.bg} className='absolute flex-1 bg-black w-full z-0'></Image> */}
          <ScrollView className='flex-1 px-5'
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              minHeight: "100%",
              paddingBottom: 10
            }}>
            <Image source={icons.logoNumber} className='mx-auto w-20 h-14 mt-20 mb-5'></Image>
            <View className='flex-1 mt-5'>
              <SearchBar
                onPress={() => router.push("/search")}
                placeholder="Search for a movie"
              />
            </View>
          </ScrollView>
       
    </LinearGradient>
  );
};

export default Index;
