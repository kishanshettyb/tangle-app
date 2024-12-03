import React, { useEffect, useRef } from "react";
import { View, Dimensions, Platform, TouchableOpacity, Image } from "react-native";
import Carousel from "react-native-snap-carousel-rnna";

const { width: viewportWidth } = Dimensions.get("window");

const HomeCarousel = ({ items }) => {
	const carouselRef = useRef(null);
	useEffect(() => {
		const intervalId = setInterval(() => {
			if (carouselRef.current) {
				carouselRef.current.snapToNext();
			}
		}, 3000);
		return () => clearInterval(intervalId);
	}, []);

	const renderItem = ({ item }) => {
		const { imageUrl } = item;
		return (
			<TouchableOpacity>
				<Image source={{ uri: item.imageUrl }} className="w-full h-[230px]" width={viewportWidth} height={230} alt={item.username} />
			</TouchableOpacity>
		);
	};

	return (
		<View>
			<Carousel
				ref={carouselRef}
				data={items}
				renderItem={renderItem}
				sliderWidth={viewportWidth}
				itemWidth={viewportWidth}
				loop={false}
				layoutCardOffset={"6"}
				inverted={Platform.OS === "android"}
			/>
		</View>
	);
};

export default HomeCarousel;
