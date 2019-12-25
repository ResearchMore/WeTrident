import React, { Component } from 'react'
import { View } from 'react-native'
import _ from 'lodash'
import { Theme } from '@webank/trident'

export default class EntryList extends Component {
  render () {
    if (!_.isArray(this.props.children)) {
      return (
        <View style={{
          marginVertical: Theme.Size.spaceM,
          paddingHorizontal: 16
        }}
        >
          {this.props.children}
        </View>
      )
    }
    return (
      <View style={{
        flexDirection: 'column',
        paddingHorizontal: 16
      }}>
        {this.props.children.map((child, index) => {
          return (
            <View
              key={'i' + index}
              style={{
                marginTop: Theme.Size.spaceM
              }}>
              {child}
            </View>
          )
        })}
      </View>
    )
  }
}
