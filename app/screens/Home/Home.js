import { ScrollView } from 'react-native';

import styles from './Home.style';

import Header from './components/Header';
import Stories from './components/Stories';

import Divider from '../../shared/components/Divider';

import posts from '../../data/Posts';
import Post from '../../shared/components/Post';

function Home() {
	return (
		<>
			<Header />
			<ScrollView
				stickyHeaderIndices={[1]}
				style={styles.container}
			>
				<Stories />
				<Divider />
				{posts.map(post => <Post key={post.id} post={post} />)}
			</ScrollView>
		</>
	);
};

export default Home;
