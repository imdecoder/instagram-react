import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: 44,
		backgroundColor: '#fff',
		paddingHorizontal: 15
	},
	actions: {
		flexDirection: 'row'
	},
	button: {
		marginLeft: 20
	},
	dotContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		top: 0,
		right: 0,
		width: 11,
		height: 11,
		backgroundColor: '#fff',
		borderRadius: 13,
		zIndex: 2
	},
	dot: {
		width: 8,
		height: 8,
		backgroundColor: '#fe3650',
		borderRadius: 9
	}
});

export default styles;
