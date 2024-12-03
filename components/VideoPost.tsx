import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";
import { StyleSheet, View, Button, Dimensions } from "react-native";

const { width } = Dimensions.get("window"); // Screen width
const height = (width * 16) / 9; // Height based on 9:16 aspect ratio

export default function VideoPost({ data }) {
	const player = useVideoPlayer(data, (player) => {
		player.loop = true;
		player.play();
	});

	const { isPlaying } = useEvent(player, "playingChange", {
		isPlaying: player.playing
	});

	return (
		<View className="flex bg-slate-900">
			<VideoView style={styles.video} player={player} allowsFullscreen={false} allowsPictureInPicture nativeControls={false} />
		</View>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	video: {
		width: width,
		height: height
	}
});
