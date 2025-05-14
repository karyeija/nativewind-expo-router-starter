import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const TabIcon = ({ focused, icon, title }: any) => {
    if (focused) {
      return (
        <View className='bg-white flex justify-center items-center w-full min-w-[96px] min-h-16 mt-4 rounded-full overflow-hidden'>
{icon}
  <Text className='text-secondarycolor text-base font-semibold ml-2'>{title}</Text>
</View>

      );
    }
  
    return (
      <View className='size-full justify-center items-center mt-4 rounded-full'>
            {icon}
  <Text className='text-white text-base font-semibold ml-2 min-w-14'>{title}</Text>
            
      </View>
    );
  };
  
const _layout = () => {
  return (
      <Tabs
          screenOptions={{
              tabBarShowLabel: false,
              tabBarItemStyle: {
                  width:"100%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems:"center"
              },
              tabBarStyle: {
                  backgroundColor: "#151232",
                  borderRadius: 50,
                  marginHorizontal: 10,
                  marginBottom:20,
                  overflow: 'hidden',
                  borderWidth: 1,
                  borderColor: "#151232",
                  position: "absolute",
                //   alignContent:"space-evenly"
                //   marginRight:12
              }
              
      }}
      >
          <Tabs.Screen
              name='index'
              options={{
                  headerShown: false,
                  title: "Home",
                  tabBarIcon: ({ focused }) => (
                     
                      //   <>TabIcon</>
                      <TabIcon
                          focused={focused}
                          //   icon={Ionicons name='home'}
                          icon={<Ionicons name="home" size={20} color={focused ? "#151312" : "#a8b5db"} />}
                          title="Home"
                      
                      />
                  )
              }}
          />

          <Tabs.Screen
              name='search'
              options={{
                  headerShown: false,
                  title: "Search",
                  tabBarIcon: ({ focused }) => (
                     
                      //   <>TabIcon</>
                      <TabIcon
                          focused={focused}
                          //   icon={Ionicons name='home'}
                          icon={<Ionicons name="search" size={20} color={focused ? "#151312" : "#a8b5db"} />}
                          title="Search"
                      
                      />
                  )
              }}
          />

          <Tabs.Screen
              name='save'
              options={{
                  headerShown: false,
                  title: "Saved",
                  tabBarIcon: ({ focused }) => (
                     
                      //   <>TabIcon</>
                      <TabIcon
                          focused={focused}
                          //   icon={Ionicons name='home'}
                          icon={<Ionicons name="bookmark" size={20} color={focused ? "#151312" : "#a8b5db"} />}
                          title="Saved"
                      
                      />
                  )
              }}
          />

          <Tabs.Screen
              name='profile'
              options={{
                  headerShown: false,
                  title: "profile",
                  tabBarIcon: ({ focused }) => (
                     
                      //   <>TabIcon</>
                      <TabIcon
                          focused={focused}
                          //   icon={Ionicons name='home'}
                          icon={<Ionicons name="person" size={20} color={focused ? "#151312" : "#a8b5db"} />}
                          title="Profile"
                      
                      />
                  )
              }}
          />
    </Tabs>
  )
}

export default _layout

