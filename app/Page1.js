'use strict';
var React = require('react');
var ReactNative = require('react-native');

var {
  StyleSheet,
  View,
  Text,
} = ReactNative;

var Page1 = React.createClass ({
  render: function() {
    return(
        <View style={styles.container}>
          <Text style={styles.pagetext}>page1Content: {this.props.text}</Text>
        </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagetext: {
    fontSize: 16,
     fontWeight: '500',
  }
});

module.exports = Page1;
