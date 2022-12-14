import { View, TouchableOpacity } from 'react-native';

import styles from './Header.style';

import {
	Logo,
	Plus,
	Heart,
	Messenger
} from '../../../../consts/Icons';

function Header() {
	return (
		<View style={styles.header}>
			<Logo fill="#000" />
			<View style={styles.actions}>
				<TouchableOpacity activeOpacity=".6" style={styles.button}>
					<Plus size={24} fill="#000" />
				</TouchableOpacity>
				<TouchableOpacity activeOpacity=".6" style={styles.button}>
					<View style={styles.dotContainer}>
						<View style={styles.dot} />
					</View>
					<Heart size={24} fill="#000" />
				</TouchableOpacity>
				<TouchableOpacity activeOpacity=".6" style={styles.button}>
					<View style={styles.dotContainer}>
						<View style={styles.dot} />
					</View>
					<Messenger size={24} fill="#000" />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Header;
