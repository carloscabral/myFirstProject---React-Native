
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Tableless = React.createClass({

  render: function() {
    return (
      <View style={styles.container} >
        <Text style={styles.myText}>
          Hello, Tableless!
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  myText: {
    borderWidth: 2,
    borderColor: 'ff0000',
    borderRadius: 4,
    textAlign: 'center',
    padding: 10,
    marginBottom: 10,
    color: 'green',
  }

})

AppRegistry.registerComponent('MyFirstProject', () => Tableless);

