import React from 'react'
import { View, Text } from 'react-native'
import { List, Column, Theme, ThemeableComponent } from '@webank/trident'
import PropTypes from 'prop-types'

export default class extends ThemeableComponent {
  static defaultProps = {
    ignoreKeys: ['navigation', 'screenProps'],
    routes: PropTypes.array
  }

  render () {
    let { routes = [] } = this.props
    if (routes === null) {
      routes = []
    }
    return (
      <Column.MainStart.CrossStart style={[{
        paddingHorizontal: Theme.Size.spaceXL,
        marginTop: Theme.Size.spaceM
      }]}>
        <View style={{
          borderWidth: Theme.Size.borderWidthS,
          borderColor: Theme.Color.borderPrimary,
          alignSelf: 'stretch'
        }}>
          <Text style={{
            fontSize: 16,
            padding: Theme.Size.spaceM,
            fontWeight: Theme.Font.weightL
          }}>
            Navigation Stack
          </Text>
          <List style={{
            alignSelf: 'stretch',
            borderBottomWidth: 0
          }}>
            {[...routes].reverse().map((item, index) => {
              return (
                <Text
                  key={'key' + index}
                  style={{ paddingVertical: Theme.Size.spaceM, paddingLeft: Theme.Size.spaceM }}
                >{routes.length - index - 1}. {item.routeName}
                </Text>
              )
            })}
          </List>
        </View>
      </Column.MainStart.CrossStart>
    )
  }
}
