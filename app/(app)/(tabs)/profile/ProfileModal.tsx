import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Modal,
} from "react-native";

export default function App() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <Button title="Show Modal" onPress={toggleModal} />

      <Modal
        visible={isModalVisible}
        transparent={true}
        className="bg-slate-50"
      >
        <View style={styles.overlay} onTouchEnd={toggleModal} />
        <View className="flex bg-white  border absolute bottom-0 h-[400px] rounded-t-3xl p-6 w-full">
          <Text style={styles.modalText}>
            This is a modal 300px from the bottom!
          </Text>
          <Button title="Close" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    position: "absolute",
    bottom: 0, // Position modal 300px from the bottom
    left: 20,
    right: 20,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Light black background with transparency
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
