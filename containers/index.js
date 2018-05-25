import React from 'react';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import getImages from '../actions';
import { bindActionCreators } from 'redux';

class ImagesSearch extends React.Component{

    componentDidMount(){
        this.props.getImages();
    }

    render(){
        console.log(this.props);
        const {images} = this.props;
        const imagesList = images.map((image,i) => 
            <Image
                key={i}
                style={{width: 300, height: 300}}
                source={{uri: image.picture.large}}
            />
        );
        return(
        <ScrollView contentContainerStyle={styles.container}>
            {imagesList}
        </ScrollView>
        )
    }
}

function mapStateToProps(state){
    return{images: state.images.images}
};
function mapDispatchToProps(dispatch){
    return bindActionCreators({
      getImages: getImages
    }, dispatch)
  }

export default connect(mapStateToProps,mapDispatchToProps)(ImagesSearch);

const styles = StyleSheet.create({
    container: {
      height: "100%",
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  