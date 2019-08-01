import React from 'react'
import {ScrollView, StyleSheet, Text, View} from 'react-native'
import {connect} from 'react-redux'

class LinksScreen extends React.Component {
  render() {
    return (
      <View>
        <ScrollView>
          <Text>This is a tab bar. You can edit it in</Text>
        </ScrollView>
      </View>
    )
  }
}

LinksScreen.navigationOptions = {
  header: null,
}

const styles = StyleSheet.create({
})

export default connect(state => ({}), {})(LinksScreen)
