
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
  TextInput,
} = React;

var Tableless = React.createClass({

  getInitialState : function() {
    return {
      myText : "Hello, Tableless!"
    };
  },

  textInputDidChange : function (event) {
    this.setState({ myText: event.nativeEvent.text });
  },

  render: function() {
    return (
      <View style={styles.container} >
        <TextInput style = {{ height: 50, padding: 6, fontSize: 16, borderColor: "lightblue", borderWidth: 1, margin: 10, borderRadius: 4 }}
                   placeholder="Type something..."
                   onChange={this.textInputDidChange} />
        <Text style={styles.myText}>
          {this.state.myText}
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

