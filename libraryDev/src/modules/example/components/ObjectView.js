import React from 'react'
import JSONTree from 'react-native-json-tree'
import { ScrollView } from 'react-native'
import { ThemeableComponent, Theme } from '@webank/trident'

export default class extends ThemeableComponent {
  static defaultProps = {
    ignoreKeys: ['navigation', 'screenProps']
  }

  render () {
    const theme = {
      base00: Theme.Color.backgroundNormal
    }

    const filtered = Object.keys(this.props)
      .filter(key => !this.props.ignoreKeys.includes(key) &&
        !['ignoreKeys'].includes(key) &&
        typeof this.props[key] !== 'function')
      .reduce((obj, key) => {
        obj[key] = this.props[key]
        return obj
      }, {})
    return (
      <ScrollView style={{ marginHorizontal: Theme.Size.spaceXL, marginTop: Theme.Size.spaceM }}>
        <JSONTree
          theme={theme}
          shouldExpandNode={() => true}
          data={filtered}
          invertTheme={false}
          hideRoot
        />
      </ScrollView>
    )
  }
}
