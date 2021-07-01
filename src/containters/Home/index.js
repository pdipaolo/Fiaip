import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../HomeScreen';
import Cerca from '../Cerca';
import Fascicoli from '../Fascicoli';
import Mappa from '../Mappa';
import Crediti from '../Crediti';

import HomeIcon from '../../assets/images/home.svg';
import DossierIcon from '../../assets/images/dossier.svg';
import MapIcon from '../../assets/images/map.svg';
import SearchIcon from '../../assets/images/search.svg';
import UserIcon from '../../assets/images/user.svg';

import { primaryColor, grey} from '../../constants/Colors'
const Tab = createBottomTabNavigator();

function Home() {

    return (    
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
              switch (route.name) {
                case 'Home':
                  return <HomeIcon width={26} height={26} fill={color} />
                case 'Cerca':
                  return <SearchIcon width={26} height={26} fill={color} />
                case 'Fascicoli':
                  return <DossierIcon width={26} height={26} fill={color} />
                case 'Mappa':
                  return <MapIcon width={26} height={26} fill={color} />
                case 'Crediti':
                  return <UserIcon width={26} height={26} fill={color} />
                default:
                  break;
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: primaryColor,
            inactiveTintColor: grey,
            showIcon: true,
          }}
          
        >
          <Tab.Screen 
            name="Home" 
            component={HomeScreen}
          />
          <Tab.Screen 
            name="Cerca" 
            component={Cerca}
          />
          <Tab.Screen 
            name="Fascicoli" 
            component={Fascicoli}
          />
          <Tab.Screen 
            name="Mappa" 
            component={Mappa}
          />
          <Tab.Screen 
            name="Crediti" 
            component={Crediti}
            />
        </Tab.Navigator>
      
    );
  };

export default Home;