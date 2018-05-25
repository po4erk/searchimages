import { StyleSheet } from 'react-native';

export const imagesStyle = {
  width: 160,
  height: 160,
  margin: 5,
  borderRadius: 10,
};

export const styles = StyleSheet.create({
  images: imagesStyle,
  selectedImage: Object.assign(
    {
      borderWidth: 2,
      borderColor: 'aquamarine',
    },
    imagesStyle
  ),
  text: {
    height: 70,
    fontSize: 25,
    textAlign: 'center',
    paddingTop: 25,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});