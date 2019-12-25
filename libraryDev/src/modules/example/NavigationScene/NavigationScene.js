/**
 * 负责用户交互逻辑
 *
 * Created by erichua on 2019-09-07T07:37:00.320Z.
 */
import React from 'react'
import { View } from 'react-native'
import { AppNavigator, WeBaseScene, Button } from '@webank/trident'
import EntryList from '../../../bizComponents/EntryList'
import NavigationStackView from '../components/NavigationStackView'

export default class NavigationScene extends WeBaseScene {
  static navigationOptions = ({ navigation: { state: { params = {} } } }) => ({
    headerTitle: params.title || 'NavigationScene'
  })

  render () {
    return (
      <View>
        <EntryList>
          <Button
            text='Go NavAScene(with params)'
            onPress={() => {
              AppNavigator.example.NavAScene({
                foo: 'bar',
                time: {
                  ts: new Date().getTime()
                }
              })
            }}
          />
          <Button
            text='Back'
            onPress={() => {
              AppNavigator.goBack()
            }}
          />
        </EntryList>

        <NavigationStackView routes={AppNavigator.getCurrentRoutes()} />
      </View>
    )
  }
}
