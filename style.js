var React = require('react-native');
var { StyleSheet } = React;

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

});

module.exports = styles;