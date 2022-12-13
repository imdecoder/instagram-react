import { Image, Dimensions } from 'react-native';

function FitImage({src}) {
	const width = Dimensions.get('window').width;
	const ratio = 1080 / width;
	const height = 607 / ratio;

	return (
		<Image
			source={{
				uri: src
			}}
			style={{
				width,
				height
			}}
		/>
	);
}

export default FitImage;
