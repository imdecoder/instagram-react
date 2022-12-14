import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	post: {
		marginBottom: 30
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: 49,
		paddingHorizontal: 10
	},
	user: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	avatar: {
		width: 30,
		height: 30,
		borderRadius: 30,
		marginRight: 10
	},
	username: {
		color: '#000',
		fontSize: 14,
		fontWeight: '600'
	},
	content: {
		paddingHorizontal: 15
	},
	actions: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 40
	},
	leftActions: {
		flexDirection: 'row',
		
	},
	action: {
		marginRight: 12
	},
	likes: {
		color: '#000',
		fontWeight: '600'
	},
	contentUsername: {
		color: '#000',
		fontWeight: '600'
	},
	comments: {
		color: '#000',
		fontWeight: '500',
		opacity: .5
	},
	date: {
		color: '#000',
		fontSize: 13,
		opacity: .5
	},
	translation: {
		color: '#000',
		fontSize: 13,
		fontWeight: '500',
		marginLeft: 10
	}
});

export default styles;
