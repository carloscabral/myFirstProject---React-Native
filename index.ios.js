
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
} = React;

var Tableless = React.createClass({

  render: function() {
    return (
      <View style={styles.container} >
        <Text style={styles.myText}>
          Hello, Tableless!
        </Text>
        <TouchableHighlight onPress={() => AlertIOS.alert(
            'Simple Title',
            'Hi, I am a native iOS alert component in action.'
          )}>
          <View style={styles.button}>
            <Text style={{color: '#fff'}}>An Alert Message</Text>
          </View>
        </TouchableHighlight>
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
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 20,
    borderRadius: 5,
  },

})

AppRegistry.registerComponent('MyFirstProject', () => Tableless);

