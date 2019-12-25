/**
 * 负责用户交互逻辑
 *
 * Created by rcrabwu on 2019-10-24T08:41:53.929Z.
 */
import React from 'react'
import { View } from 'react-native'
import { WeBaseScene, NavBar, Theme } from '@webank/trident'
import TridentUIDemo from './components/TridentUIDemo'

export default class UITab extends WeBaseScene {
  render () {
    return (
      <View style={{ backgroundColor: Theme.Color.backgroundNormal }}>
        <NavBar title='UITab' hideLeftButton />
        <TridentUIDemo />
      </View>
    )
  }
}
