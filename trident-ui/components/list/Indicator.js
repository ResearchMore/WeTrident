/**
 * Created by vengeanliu on 2017/8/7.
 */
import {
  ActivityIndicator,
  ViewPropTypes
} from 'react-native'
import React, { Component } from 'react'
import { Theme } from '../../theme/ThemeProvider'

export default class Indicator extends Component {
  static propTypes = {
    style: ViewPropTypes.style
  }

  render () {
    return <ActivityIndicator color={Theme.Color.textInfo} style={this.props.style} />
  }
}
