import { View, Image, Text, TouchableOpacity } from 'react-native';

import styles from './Post.style';

import FitImage from '../FitImage';

import {
	Dots,
	Heart,
	Share,
	Bookmark,
	Comment
} from '../../../consts/Icons';

function Post({post}) {
	return (
		<View>
			<View style={styles.header}>
				<View style={styles.user}>
					<Image
						source={{
							uri: post.user.avatar
						}}
						style={styles.avatar}
					/>
					<Text style={styles.username}>
						{post.user.name}
					</Text>
				</View>
				<Dots size={16} fill="#262626" />
			</View>
			<FitImage src={post.image} />
			<View style={styles.actions}>
				<View style={styles.leftActions}>
					<TouchableOpacity style={styles.action} activeOpacity=".7">
						<Heart size={24} fill="#222" />
					</TouchableOpacity>
					<TouchableOpacity style={styles.action} activeOpacity=".7">
						<Comment size={24} fill="#222" />
					</TouchableOpacity>
					<TouchableOpacity style={styles.action} activeOpacity=".7">
						<Share size={24} fill="#222" />
					</TouchableOpacity>
				</View>
				<TouchableOpacity activeOpacity=".7">
					<Bookmark size={24} fill="#222" />
				</TouchableOpacity>
			</View>
			<View>
				<Text style={styles.likes}>
					{post.likes} Likes
				</Text>
			</View>
		</View>
	);
}

export default Post;
