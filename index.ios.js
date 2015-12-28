
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
  NavigatorIOS,
} = React;

var styles = require('./style');

var Tableless = React.createClass({

  getInitialState : function() {
    return {
      myText : "Hello, Tableless!"
    };
  },

  callNextScreen: function (inputText) {
    this.props.navigator.push({
      title: "The Next Screen",
      component: NextScreen,
      passProps: { 'inputText': inputText }
    });
  },

  textInputDidChange : function (event) {
    this.setState({ myText: event.nativeEvent.text });
  },

  render: function() {
    return (
      <View style={styles.container} >
        <TextInput style = {{ height: 50, padding: 6, fontSize: 16, borderColor: "lightblue", borderWidth: 1, margin: 10, borderRadius: 4 }}
                   placeholder="Type something..."
                   onChange={this.textInputDidChange}
                   onEndEditing={ event => this.callNextScreen(event.nativeEvent.text) } />
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

var MainNav = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Tableless,
          title: 'MyFirstProject'
        }}
        style={{ flex: 1 }} />
    );
  }
});

var NextScreen = React.createClass({
  render: function() {
    return (
      <View style = {{ backgroundColor: 'green', flex: 1, justifyContent: 'center', alignItems: 'center' }} >
        <Text style = {{ color: '#fff', fontSize: 22 }} >
          You entered: {this.props.inputText}
        </Text>
      </View>
    );
  }
});


AppRegistry.registerComponent('MyFirstProject', () => MainNav);
