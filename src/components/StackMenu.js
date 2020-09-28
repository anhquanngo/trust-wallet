import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

const StackMenu = ({ lists }) => {
  return <View style={styles.container}>
    {
      lists && lists.map(({ title }) => <TouchableHighlight
        key={title}
        style={styles.buttonContainer}
      >
        <Text
          style={styles.buttonItem}
        >
          {title}
        </Text>
      </TouchableHighlight>)
    }
  </View>
}


StackMenu.defaultProps = {
  lists: [
    { title: 'button 1' },
    { title: 'button 2' },
    { title: 'button 3' }
  ]
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#2664a5",
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 10,
    paddingRight: 10
  },
  buttonContainer: {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#3375bb',
    borderRadius: 3,
  },
  buttonItem: {
    color: "#ffffff"
  }
})

export default StackMenu;