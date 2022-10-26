import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

const App = () => {
	return (
		<SafeAreaView style={{flex: 1}}>
			<StatusBar style="dark" />
			<NavigationContainer>
				<Screens />
			</NavigationContainer>
		</SafeAreaView>
	);
};

export default App;
