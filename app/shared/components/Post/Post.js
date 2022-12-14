import { View, Image, Text, TouchableOpacity } from 'react-native';

import ReadMore from '@fawazahmed/react-native-read-more';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

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
		<View style={styles.post}>
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
			<View style={styles.content}>
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
						{post.likes} likes
					</Text>
				</View>
				<ReadMore
					numberOfLines={2}
					expandOnlu={true}
					wrapperStyle={{
						marginBottom: 7
					}}
					style={{
						color: '#000'
					}}
					seeMoreStyle={{
						color: '#999'
					}}
					seeMoreText='more'
					seeLessStyle={{
						color: '#999'
					}}
					seeLessText='less'
				>
					<Text style={styles.contentUsername}>
						{post.user.name}
					</Text>
					{`  `}
					{post.description}
				</ReadMore>
				{post.comments > 0 && (
					<TouchableOpacity activeOpacity=".7" style={{paddingBottom: 7}}>
						<Text style={styles.comments}>
							View all {post.comments} comments
						</Text>
					</TouchableOpacity>	
				)}
				<View style={{flexDirection: 'row', alignItems: 'center'}}>
					<Text style={styles.date}>
						{dayjs(post.date).fromNow()}
					</Text>
					<Text style={styles.translation}>
						See Translation
					</Text>
				</View>
			</View>
		</View>
	);
}

export default Post;
