import React from 'react';
import {TouchableOpacity} from 'react-native';
import {shallow} from 'enzyme';
import FastImage from 'react-native-fast-image';
import Photo from 'src/components/Photo/Photo';
import {PhotoType} from 'src/types';

const photo: PhotoType = {
  id: 1,
  url: 'https://',
  description: 'Description',
};

describe('Photo component', () => {
  const wrapper = shallow(<Photo photo={photo} />);

  test('Is clickable', () => {
    expect(wrapper.find(TouchableOpacity)).toExist();

    expect(
      wrapper
        .find(TouchableOpacity)
        .findWhere((node) => node.prop('activeOpacity') === 0.8),
    ).toExist();

    expect(
      wrapper
        .find(TouchableOpacity)
        .findWhere((node) => node.prop('onPress') === undefined),
    ).toExist();
  });

  test('Display photo with FastImage', () => {
    expect(wrapper.find(FastImage)).toExist();

    expect(
      wrapper.find(FastImage).findWhere((node) => node.prop('source')),
    ).toExist();
  });
});
