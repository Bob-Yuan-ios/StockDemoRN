import React, {Component} from 'react';

import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

export class BaseFlatListFooter extends Component {
  render() {
    const isFooterLoading = this.props.isFooterLoading;
    const reachLast = this.props.reachLast;

    const tipTxt = reachLast ? '已经全部加载' : '加载更多...';
    return (
      <View>
        <ActivityIndicator animating={isFooterLoading} />
        <Text style={styles.tipTextStyle}>{tipTxt}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tipTextStyle: {
    textAlign: 'center',
    fontSize: 18,
  },
});
