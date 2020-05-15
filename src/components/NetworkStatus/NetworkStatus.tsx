import React, {FunctionComponent} from 'react';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';
import {AppState} from 'src/redux/createStore';
import styles from './styles';

type Props = {
  isConnected: boolean;
};

const NetworkStatus: FunctionComponent<Props> = ({isConnected}: Props) => {
  return (
    <View style={[styles.container, isConnected && styles.connected]}>
      <Text style={styles.text}>
        {isConnected ? 'Connected...' : 'Disconnected...'}
      </Text>
    </View>
  );
};

export default connect((state: AppState) => ({
  isConnected: state.network.isConnected,
}))(NetworkStatus);
