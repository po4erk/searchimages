import React from 'react';
import {
  StyleSheet,
  FlatList,
  Button,
  View,
  Image,
  ListItem,
  Text,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getImages from '../actions';
import { styles, imageStyles } from '../styles';

class ImagesSearch extends React.Component {
  state = {
    item: null,
  };

  componentDidMount() {
    this.props.getImages();
  }

  onScroll = () => {
    const { images } = this.props;
    this.props.getImages(images);
  };

  selectItem = item => {
    this.setState({
      item,
    });
  };

  render() {
    const { images } = this.props;
    const { item } = this.state;
    const name = (item
      ? `${item.name.first} ${item.name.last}`
      : 'Search Image').toUpperCase();
      
    return (
      <View>
        <Text style={styles.text}>{name}</Text>
        <FlatList
          columnWrapperStyle={styles.container}
          numColumns={2}
          onEndReached={this.onScroll}
          data={this.props.images}
          extraData={this.state}
          keyExtractor={(item, index) => item.name.first}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={this.selectItem.bind(this, item)}>
              <View>
                <Image
                  style={
                    item.name === (this.state.item && this.state.item.name)
                      ? styles.selectedImage
                      : styles.images
                  }
                  source={{ uri: item.picture.large }}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { images: state.images.images };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getImages: getImages,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagesSearch);
