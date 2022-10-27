import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	stories: {
		paddingVertical: 10,
		borderBottomWidth: .5,
		borderBottomColor: '#dadada'
	},
	story: {
		alignItems: 'center',
		width: 67,
		marginHorizontal: 8
	},
	cover: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 65,
		height: 65,
		borderRadius: 33.5,
		marginBottom: 5
	},
	avatar: {
		width: 60,
		height: 60,
		borderWidth: 3,
		borderColor: '#fff',
		borderRadius: 60
	},
	username: {
		fontSize: 12
	}
});

export default styles;
