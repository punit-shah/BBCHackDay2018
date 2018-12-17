import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';
import Icons from '@expo/vector-icons';

export default class ExperienceScreen extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 0.2,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
              >
                <Icons.Ionicons name="md-flash" size={30} color="white" />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flex: 1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={this.takePicture.bind(this)}
              >
                <Icons.MaterialCommunityIcons
                  name="camera-iris"
                  size={80}
                  color="white"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 0.2,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }}
              >
                <Icons.Ionicons
                  name="md-reverse-camera"
                  size={30}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  onPictureSaved = async photo => {
    await React.FileSystem.moveAsync({
      from: photo.uri,
      to: `${FileSystem.documentDirectory}photos/${Date.now()}.jpg`,
    });
    this.setState({ newPhotos: true });
  };
}
