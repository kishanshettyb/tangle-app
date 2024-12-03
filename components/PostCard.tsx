import React, { FunctionComponent } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import HomeCarousel from "./Carousel";
import VideoPost from "./VideoPost";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

const postData = [
	{
		id: 1,
		postType: "singleImage",
		username: "Sofia",
		profileImage: "https://i.ibb.co/gzdYtSr/img-3.png",
		description:
			"🌿 Nature's Magic 🌿 Take a deep breath and let nature heal your soul. From the rustling leaves to the golden sunsets, every moment outdoors is a gentle reminder of life's beauty. 🌳✨ #NatureLovers #Serenity #NatureHealing",
		createdDate: "01-12-2024",
		likedBy: "username",
		likes: 55,
		comments: 77,
		shares: 98,
		bookmarked: false,
		postAssets: [
			{
				id: 1,
				imageUrl: "https://i.ibb.co/Z2gFqpQ/aaron-burden-d-XYE1d08-Bi-Y-unsplash.jpg"
			}
		]
	},
	{
		id: 2,
		username: "Omar",
		postType: "reel",
		profileImage: "https://i.ibb.co/Y3ZKH4C/img-1.png",
		description:
			"In the whisper of the wind and the song of the birds lies the melody of peace. Step outside, feel the earth, and let nature inspire your heart. 🌼🌞#NatureVibes #PeacefulMoments #NatureInspires",
		createdDate: "01-12-2024",
		likedBy: "username",
		likes: 3300,
		comments: 2100,
		shares: 900,
		bookmarked: false,
		postAssets: [
			{
				id: 1,
				videoUrl: "https://videos.pexels.com/video-files/25254351/11900288_1080_1920_30fps.mp4"
			}
		]
	},
	{
		id: 3,
		username: "Elena",
		postType: "carousel",
		profileImage: "https://i.ibb.co/N9YnGhP/img-2.png",
		description:
			"🚗 Driven to Explore 🚗 Life's a journey, and every car has a story. Whether it's the thrill of the open road or the comfort of a smooth ride, your car isn't just a vehicle—it's your freedom. 🛣️✨#CarLovers #DriveYourDreams #OnTheRoad",
		createdDate: "01-12-2024",
		likedBy: "username",
		likes: 55,
		comments: 87,
		shares: 23,
		bookmarked: false,
		postAssets: [
			{
				id: 1,
				imageUrl: "https://i.ibb.co/p4S3XjB/hayes-potter-mo-Mm-TIfd-Ga4-unsplash.jpg"
			},
			{
				id: 2,
				imageUrl: "https://i.ibb.co/94Vhz2n/connor-lunsford-Em-Zn-Kn-Vt4qs-unsplash.jpg"
			},
			{
				id: 3,
				imageUrl: "https://i.ibb.co/FVH1svd/hayes-potter-te-TQy-Obj-Xs-unsplash.jpg"
			},
			{
				id: 4,
				imageUrl: "https://i.ibb.co/XDw2CYJ/peter-broomfield-m3m-ln-R90u-M-unsplash.jpg"
			}
		]
	}
];
const PostCard = () => {
	return (
		<>
			{postData.map(function (item) {
				if (item.postType == "singleImage") {
					return (
						<View className="mb-6" key={item.id}>
							<PostHeader data={item} />
							<View>
								<Image className="w-full h-[300px] object-cover" source={{ uri: item.postAssets[0].imageUrl }} />
							</View>
							<PostFooter data={item} />
						</View>
					);
				} else if (item.postType == "reel") {
					return (
						<View className="mb-3" key={item.id}>
							<View className="relative">
								<VideoPost data={item.postAssets[0].videoUrl} />
								<PostHeader data={item} />
								<PostFooter data={item} />
							</View>
						</View>
					);
				} else {
					return (
						<View key={item.id}>
							<PostHeader data={item} />
							<HomeCarousel items={item.postAssets} />
							<PostFooter data={item} />
						</View>
					);
				}
			})}
		</>
	);
};

export default PostCard;
