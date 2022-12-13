import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
		fontSize: 14,
		fontWeight: '600'
	},
	actions: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 40,
		paddingHorizontal: 15
	},
	leftActions: {
		flexDirection: 'row',
		
	},
	action: {
		marginRight: 12
	},
	likes: {
		fontWeight: '600'
	}
});

export default styles;
