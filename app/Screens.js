import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from './styles';

import HomeScreen from './screens/Home';
import SearchScreen from './screens/Search';
import ReelScreen from './screens/Reel';
import ShopScreen from './screens/Shop';
import ProfileScreen from './screens/Profile';

import {
	Home,
	HomeFilled,
	Search,
	SearchFilled,
	Reel,
	ReelFilled,
	Shop,
	ShopFilled
} from './consts/Icons';

const Tab = createBottomTabNavigator();

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
							return <HomeFilled size={30} fill={color} />
						} else {
							return <Home size={30} fill={color} />
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
				options={{
					tabBarIcon: ({ focused, color }) => {
						if (focused) {
							return <ReelFilled size={30} fill={color} />
						} else {
							return <Reel size={30} fill={color} />
						}
					}
				}}
			/>
			<Tab.Screen
				name="shop"
				component={ShopScreen}
				options={{
					tabBarIcon: ({ focused, color }) => {
						if (focused) {
							return <ShopFilled size={30} fill={color} />
						} else {
							return <Shop size={30} fill={color} />
						}
					}
				}}
			/>
			<Tab.Screen
				name="profile"
				component={ProfileScreen}
				options={{
					tabBarIcon: ({ focused, color }) => (
						<Image
							style={[styles.tabProfile, {
								borderColor: focused ? '#000' : 'transparent'
							}]}
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
