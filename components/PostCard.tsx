import React, { FunctionComponent } from "react";
import { Image, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import HomeCarousel from "./Carousel";

const postData = [
  {
    id: 1,
    postType: "singleImage",
    username: "username",
    profileImage: "https://i.ibb.co/gzdYtSr/img-3.png",
    description: "loremipsum",
    createdDate: "01-12-2024",
    likedBy: "username",
    likes: 100,
    comments: 100,
    shares: 100,
    bookmarked: false,
    postAssets: [
      {
        id: 1,
        imageUrl:
          "https://i.ibb.co/Z2gFqpQ/aaron-burden-d-XYE1d08-Bi-Y-unsplash.jpg",
      },
    ],
  },
  {
    id: 2,
    username: "username",
    postType: "reel",
    profileImage: "https://i.ibb.co/Y3ZKH4C/img-1.png",
    description: "loremipsum",
    createdDate: "01-12-2024",
    likedBy: "username",
    likes: 100,
    comments: 100,
    shares: 100,
    bookmarked: false,
    postAssets: [
      {
        id: 1,
        videoUrl:
          "https://videos.pexels.com/video-files/5935119/5935119-hd_1080_1920_25fps.mp4",
      },
    ],
  },
  {
    id: 3,
    username: "username",
    postType: "carousel",
    profileImage: "https://i.ibb.co/N9YnGhP/img-2.png",
    description: "loremipsum",
    createdDate: "01-12-2024",
    likedBy: "username",
    likes: 100,
    comments: 100,
    shares: 100,
    bookmarked: false,
    postAssets: [
      {
        id: 1,
        imageUrl:
          "https://i.ibb.co/p4S3XjB/hayes-potter-mo-Mm-TIfd-Ga4-unsplash.jpg",
      },
      {
        id: 2,
        imageUrl:
          "https://i.ibb.co/94Vhz2n/connor-lunsford-Em-Zn-Kn-Vt4qs-unsplash.jpg",
      },
      {
        id: 3,
        imageUrl:
          "https://i.ibb.co/FVH1svd/hayes-potter-te-TQy-Obj-Xs-unsplash.jpg",
      },
      {
        id: 4,
        imageUrl:
          "https://i.ibb.co/XDw2CYJ/peter-broomfield-m3m-ln-R90u-M-unsplash.jpg",
      },
    ],
  },
];
const PostCard = () => {
  return (
    <>
      {postData.map(function (item) {
        if (item.postType == "singleImage") {
          return (
            <View className="mb-6" key={item.id}>
              <View className="px-4 flex  flex-row py-2  w-full justify-between items-center">
                <View className="flex items-center justify-start flex-row gap-x-4">
                  <View>
                    <Image
                      source={{ uri: item.profileImage }}
                      className="w-[40px] h-[40px] rounded-full"
                    />
                  </View>
                  <View>
                    <Text className="text-sm font-semibold">
                      {item.username}
                    </Text>
                  </View>
                </View>
                <View>
                  <Feather name="more-vertical" size={24} color="black" />
                </View>
              </View>
              <View>
                <Image
                  className="w-full h-[300px] object-cover"
                  source={{ uri: item.postAssets[0].imageUrl }}
                />
              </View>
              <View className="flex p-4 flex-row justify-between items-center">
                <View className="flex flex-row justify-start items-center gap-x-4">
                  <View className="flex gap-x-2 justify-start items-center flex-row">
                    <View>
                      <Feather name="heart" size={24} color="black" />
                    </View>
                    <View>
                      <Text>{item.likes}</Text>
                    </View>
                  </View>
                  <View className="flex gap-x-2 justify-start items-center flex-row">
                    <View>
                      <Feather name="message-circle" size={24} color="black" />
                    </View>
                    <View>
                      <Text>{item.comments}</Text>
                    </View>
                  </View>
                  <View className="flex gap-x-2 justify-start items-center flex-row">
                    <View>
                      <Feather name="share-2" size={24} color="black" />
                    </View>
                    <View>
                      <Text>{item.shares}</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <Feather name="bookmark" size={24} color="black" />
                </View>
              </View>
              <View className="px-4">
                <View className="flex flex-row justify-start items-center">
                  <Image
                    source={require("../assets/images/profile.png")}
                    className="w-[20px] h-[20px] rounded-full border border-white"
                  />
                  <Image
                    source={require("../assets/images/profile.png")}
                    className="w-[20px] h-[20px] rounded-full -ml-2 border border-white"
                  />
                  <Text className="ml-2 opacity-70">
                    Liked by <Text className="font-semibold">tangle</Text> and{" "}
                    <Text className="font-semibold">others</Text>
                  </Text>
                </View>
                <View>
                  <Text numberOfLines={2} className="my-2">
                    {item.description}
                  </Text>
                  <Text className="text-slate-500 text-sm">
                    {item.createdDate}
                  </Text>
                </View>
              </View>
            </View>
          );
        } else if (item.postType == "reel") {
          return (
            <View className="mb-3" key={item.id}>
              {/* <Text>Reel</Text> */}
            </View>
          );
        } else {
          return (
            <View key={item.id}>
              <View className="px-4 flex  flex-row py-2  w-full justify-between items-center">
                <View className="flex items-center justify-start flex-row gap-x-4">
                  <View>
                    <Image
                      source={{ uri: item.profileImage }}
                      className="w-[40px] h-[40px] rounded-full"
                    />
                  </View>
                  <View>
                    <Text className="text-sm font-semibold">
                      {item.username}
                    </Text>
                  </View>
                </View>
                <View>
                  <Feather name="more-vertical" size={24} color="black" />
                </View>
              </View>
              <HomeCarousel items={item.postAssets} />
              <View className="flex p-4 flex-row justify-between items-center">
                <View className="flex flex-row justify-start items-center gap-x-4">
                  <View className="flex gap-x-2 justify-start items-center flex-row">
                    <View>
                      <Feather name="heart" size={24} color="black" />
                    </View>
                    <View>
                      <Text>{item.likes}</Text>
                    </View>
                  </View>
                  <View className="flex gap-x-2 justify-start items-center flex-row">
                    <View>
                      <Feather name="message-circle" size={24} color="black" />
                    </View>
                    <View>
                      <Text>{item.comments}</Text>
                    </View>
                  </View>
                  <View className="flex gap-x-2 justify-start items-center flex-row">
                    <View>
                      <Feather name="share-2" size={24} color="black" />
                    </View>
                    <View>
                      <Text>{item.shares}</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <Feather name="bookmark" size={24} color="black" />
                </View>
              </View>
              <View className="px-4">
                <View className="flex flex-row justify-start items-center">
                  <Image
                    source={require("../assets/images/profile.png")}
                    className="w-[20px] h-[20px] rounded-full border border-white"
                  />
                  <Image
                    source={require("../assets/images/profile.png")}
                    className="w-[20px] h-[20px] rounded-full -ml-2 border border-white"
                  />
                  <Text className="ml-2 opacity-70">
                    Liked by <Text className="font-semibold">tangle</Text> and{" "}
                    <Text className="font-semibold">others</Text>
                  </Text>
                </View>
                <View>
                  <Text numberOfLines={2} className="my-2">
                    {item.description}
                  </Text>
                  <Text className="text-slate-500 text-sm">
                    {item.createdDate}
                  </Text>
                </View>
              </View>
            </View>
          );
        }
      })}
    </>
  );
};

export default PostCard;
