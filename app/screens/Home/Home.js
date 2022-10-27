import { View } from 'react-native';

import styles from './Home.style';

import Header from './components/Header';
import Stories from './components/Stories';

function Home() {
	return (
		<View>
			<Header />
			<Stories />
		</View>
	);
};

export default Home;
