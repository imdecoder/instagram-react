import { useState } from 'react';
import { Image, Dimensions } from 'react-native';

function FitImage({src}) {
	const [height, setHeight] = useState(0);
	const screenWidth = Dimensions.get('window').width;

	Image.getSize(src, (width, height) => {
		const ratio = width / screenWidth;
		setHeight(height / ratio);
	});

	return (
		<Image
			source={{
				uri: src
			}}
			style={{
				width: screenWidth,
				height
			}}
		/>
	);
}

export default FitImage;
