import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutMeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giới thiệu bản thân</Text>
      <Text style={styles.text}>Tên: Nguyễn Quốc Long</Text>
      <Text style={styles.text}>Tuổi: 21</Text>
      <Text style={styles.text}>Quê quán: Chàm Chim, Đồng Tháp</Text>
      <Text style={styles.text}>Người yêu: Trần Hậu Phương Chi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default AboutMeScreen;
