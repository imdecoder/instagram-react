import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import HomeScreen from './screens/Home';
import SearchScreen from './screens/Search';
import ReelScreen from './screens/Reel';
import ShopScreen from './screens/Shop';
import ProfileScreen from './screens/Profile';

import {
	Home,
	HomeFilled,
	Search,
	SearchFilled
} from './Icons';

function Screens() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarActiveTintColor: '#000',
				tabBarInactiveTintColor: '#262626'
			}}
		>
			<Tab.Screen
				name="home"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ focused, color }) => {
						if (focused) {
							return <Home size={30} fill={color} />
						} else {
							return <HomeFilled size={30} fill={color} />
						}
					}
				}}
			/>
			<Tab.Screen
				name="search"
				component={SearchScreen}
				options={{
					tabBarIcon: ({ focused, color }) => {
						if (focused) {
							return <SearchFilled size={30} fill={color} />
						} else {
							return <Search size={30} fill={color} />
						}
					}
				}}
			/>
			<Tab.Screen
				name="reel"
				component={ReelScreen}
			/>
			<Tab.Screen
				name="shop"
				component={ShopScreen}
			/>
			<Tab.Screen
				name="profile"
				component={ProfileScreen}
				options={{
					tabBarIcon: ({ focused, color }) => (
						<Image
							style={{width: 25, height: 25, borderWidth: 2, borderColor: 'transparent', borderRadius: 21}}
							source={{
								uri: 'https://pbs.twimg.com/profile_images/1285244895058419719/GhkRL0Au_400x400.jpg'
							}}
						/>
					)
				}}
			/>
		</Tab.Navigator>
	);
};

export default Screens;
