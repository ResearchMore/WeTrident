/**
 * Created by erichua on 26/04/2017.
 */
import React from 'react'
import {
  View,
  Text,
  Keyboard
} from 'react-native'
import PropTypes from 'prop-types'
import { PopupStub } from '@unpourtous/react-native-popup-stub'
import WeTouchable from '../../lib/WeTouchable'
import ThemeableComponent from '../../theme/ThemeableComponent'

// 每个popup都有一个静态的show和hide方法，以及一个render
export default class ActionSheet extends ThemeableComponent {
  namespace = 'ActionSheet'

  themeStyleKeys = [
    'style',
    'headerStyle',
    'headerTextStyle',
    'itemStyle',
    'itemTextStyle',
    'itemSubTextStyle',
    'footerStyle',
    'footerTextStyle'
  ]

  static _id

  static propTypes = {
    header: PropTypes.oneOfType([
      // 一般是一个字符串
      PropTypes.string,
      // 也可以传入一个Text节点
      PropTypes.element
    ]),
    footer: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      subText: PropTypes.string,
      text: PropTypes.string,
      onItemPress: PropTypes.func
    }))
  }

  static defaultProps = {
    footer: 'Cancel'
  }

  // 每个弹层决定它自身的层级、位置和动画形式
  static show (option = {}) {
    let height = 55
    height += option.header ? 33 : 0
    height += option.items ? option.items.length * 50 : 0

    const keyframes = {
      from: { translateY: height },
      to: { translateY: 0 }
    }

    Keyboard.dismiss()
    ActionSheet._id = PopupStub.addPopup(
      <ActionSheet header={option.header} items={option.items} footer={option.footer} />,
      {
        mask: true,
        zIndex: 100,
        delay: 0,
        duration: 200,
        animation: keyframes,
        easing: 'ease-in-out',
        position: 'bottom',
        wrapperStyle: { alignSelf: 'stretch', minHeight: height }
      }
    )

    return ActionSheet._id
  }

  static hide (id) {
    PopupStub.removePopup(id || ActionSheet._id)
  }

  render () {
    const {
      style
    } = this.getComponentTheme()

    return (
      <View style={style}>
        {this._renderHeader()}
        {this._renderBody()}
        {this._renderFooter()}
      </View>
    )
  }

  _renderHeader () {
    const {
      header,
      headerStyle,
      headerTextStyle
    } = this.getComponentTheme()

    if (header) {
      return <View style={headerStyle}>
        <Text style={[headerTextStyle]}>{header}</Text>
      </View>
    }
  }

  _renderBody () {
    const {
      items,
      itemStyle,
      itemTextStyle,
      itemSubTextStyle
    } = this.getComponentTheme()
    return items.map((item, index) => (
      <WeTouchable pressMode='highlight' key={index} onPress={() => { item.onPress(item, index) }}>
        <View style={itemStyle}>
          <Text style={[itemTextStyle, item.textStyle]}>{item.text}</Text>
          {item.subText ? <Text style={itemSubTextStyle}>{item.subText}</Text> : null}
        </View>
      </WeTouchable>
    ))
  }

  _renderFooter () {
    const {
      footer,
      footerStyle,
      footerTextStyle
    } = this.getComponentTheme()

    if (footer) {
      return <WeTouchable pressMode='highlight' onPress={() => ActionSheet.hide(ActionSheet._id)}>
        <View style={footerStyle}>
          <Text style={footerTextStyle}>{footer}</Text>
        </View>
      </WeTouchable>
    }
  }
}
