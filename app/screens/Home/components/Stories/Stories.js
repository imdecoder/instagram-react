import { ScrollView, View, Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import stories from '../../../../data/Stories';

import styles from './Stories.style';

function Stories() {
	return (
		<View style={styles.stories}>
			<ScrollView
				horizontal={true}
				showsHorizontalScrollIndicator={false}
			>
				{stories.map(story => (
					<View style={styles.story}>
						<LinearGradient
							colors={['#de0046', '#f7a34b']}
							style={styles.cover}
						>
							<Image
								source={{
									uri: story.user.avatar
								}}
								style={styles.avatar}
							/>
						</LinearGradient>
						<Text numberOfLines={1} style={styles.username}>
							{story.user.name}
						</Text>
					</View>
				))}
			</ScrollView>
		</View>
	);
};

export default Stories;
