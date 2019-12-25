import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native'
import PropTypes from 'prop-types'
import WeWarningBar from './lib/WeWarningBar'
import { RenderUtils } from '../../utils'
import CurrencySymbols from './CurrencySymbols'
import { Theme } from '../../theme'

class FinancialInput extends Component {
  static propTypes = {
    currencyCode: PropTypes.oneOf(Object.keys(CurrencySymbols)),
    autoFocus: PropTypes.bool, // 自动聚焦，拉起键盘
    disabled: PropTypes.bool, // 是否不可更改

    amount: PropTypes.string,
    placeholder: PropTypes.string,

    topInfo: PropTypes.oneOfType([PropTypes.string, PropTypes.element]), // 输入框头部提示信息
    bottomInfo: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    warning: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClear: PropTypes.func,

    style: PropTypes.object
  }

  static defaultProps = {
    amount: '',
    autoFocus: false,
    disabled: false,
    currencyCode: 'CNY'
  }

  onFocus = () => {
    this.props.onFocus && this.props.onFocus()
  }

  onBlur = () => {
    this.props.onBlur && this.props.onBlur()
  }

  onChange = (value) => {
    if (this.props.onChange) {
      this.props.onChange(value)
    }
  }

  onClear = () => {
    if (this.props.onClear) {
      this.props.onClear()
    }
  }

  render () {
    const {
      amount,
      topInfo,
      disabled = false,
      warning,
      bottomInfo,
      autoFocus,
      placeholder,
      currencyCode
    } = this.props

    const unit = this.getAmountInputUnit(amount)

    const isShowPlaceholder = placeholder && amount === ''

    return (
      <View style={[
        { paddingTop: Theme.Size.spaceM, backgroundColor: Theme.Color.backgroundNormal },
        this.props.style
      ]}
      >
        {topInfo ? <View style={{ minHeight: Theme.Size.lineHeightM }}>
          {RenderUtils.switch([
            [typeof topInfo === 'string',
              <View style={{
                flexDirection: 'row',
                paddingLeft: Theme.Size.spaceL,
                alignItems: 'center'
              }}
              >
                <Text style={{
                  color: Theme.Color.textSecondary,
                  fontSize: Theme.Size.fontM,
                  lineHeight: Theme.Size.lineHeightM
                }}
                >{topInfo}
                </Text>
              </View>],
            [topInfo, topInfo]
          ])}
        </View> : null}
        <View style={{
          flexDirection: 'row',
          height: 70,
          alignItems: 'center',
          paddingLeft: Theme.Size.spaceL,
          paddingRight: Theme.Size.spaceL,
          paddingBottom: 10
        }}
        >
          <TouchableWithoutFeedback>
            <View style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: Theme.Size.spaceM
            }}
            >
              <Text style={{
                fontSize: 40,
                color: disabled ? Theme.Color.textSecondary : Theme.Color.textPrimary,
                marginRight: Theme.Size.spaceM
              }}
              >{CurrencySymbols[currencyCode]}
              </Text>
              <TextInput
                style={{
                  flex: 1,
                  fontSize: amount && amount.length > 10 ? 35 : 40,
                  color: isShowPlaceholder ? '#00000000' : (disabled ? Theme.Color.textSecondary : Theme.Color.textPrimary),
                  paddingVertical: 0
                }}
                autoFocus={autoFocus && !disabled}
                editable={!disabled}
                placeholderTextColor={Theme.Color.textInfo}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                onChangeText={this.onChange}
                keyboardType='numeric'
                value={amount}
                underlineColorAndroid='transparent'
              />
              {isShowPlaceholder
                ? <View
                  pointerEvents='none'
                  style={{
                    height: 70,
                    position: 'absolute',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      paddingLeft: 38,
                      color: Theme.Color.textInfo,
                      backgroundColor: '#FFFFFF00'
                    }}
                  >{placeholder}
                  </Text>
                </View>
                : null}
            </View>
          </TouchableWithoutFeedback>

          {/* 有内容时显示清除按钮 */}
          {/* {isShowClearButton */}
          {/*  ? <TouchableHighlight hitSlop={{top: 10, bottom: 10, left: 10, right: 10}} onPress={this.onClear}> */}
          {/*    <Icon name={Icon.Names.clear} /> */}
          {/*  </TouchableHighlight> */}
          {/*  : null} */}

          {unit ? <View style={{
            alignItems: 'center',
            position: 'absolute',
            bottom: 3,
            left: 35 + Theme.Size.spaceL - (unit.length > 1 ? 5 : 0)
          }}
          >
            <View style={{
              width: 3,
              height: 3,
              top: 0,
              position: 'absolute',
              backgroundColor: Theme.Color.backgroundNormal,
              borderColor: Theme.Color.borderImportant,
              borderRightWidth: Theme.Size.borderWidthS,
              borderTopWidth: Theme.Size.borderWidthS,
              transform: [{ rotate: '-45deg' }],
              zIndex: 1
            }}
            />
            <View style={{
              marginTop: 1.5,
              borderRadius: Theme.Size.radiusS,
              borderColor: Theme.Color.borderImportant,
              borderWidth: Theme.Size.borderWidthS,
              paddingHorizontal: Theme.Size.spaceS,
              paddingVertical: 1
            }}
            >
              <Text style={{ fontSize: 10, color: Theme.Color.textImportant }}>{unit}</Text>
            </View>
          </View> : null}
        </View>

        <View accessibilityLiveRegion='assertive'>
          <WeWarningBar content={warning} />
        </View>

        {bottomInfo // 如果小于起购金额，则不展示info
          ? <View>
            {RenderUtils.switch([
              [typeof bottomInfo === 'string',
                <View style={{
                  paddingTop: Theme.Size.spaceS,
                  paddingHorizontal: Theme.Size.spaceL,
                  paddingBottom: Theme.Size.spaceM
                }}
                >
                  <Text style={{
                    fontSize: Theme.Size.fontS,
                    lineHeight: Theme.Size.lineHeightS,
                    color: Theme.Color.textSecondary
                  }}
                  >{bottomInfo}
                  </Text>
                </View>],
              [bottomInfo, bottomInfo]
            ])}
          </View>
          : null}
      </View>
    )
  }

  getAmountInputUnit (amount) {
    let unit
    if (amount) {
      const length = parseInt(amount).toString().length
      switch (length) {
        case 5:
          unit = '万'
          break
        case 6:
          unit = '十万'
          break
        case 7:
          unit = '百万'
          break
        case 8:
          unit = '千万'
          break
        case 9:
          unit = '亿'
          break
        case 10:
          unit = '十亿'
          break
        case 11:
          unit = '百亿'
          break
        case 12:
          unit = '千亿'
          break
        case 13:
          unit = '万亿'
          break
      }
    }
    return unit
  }
}

export default FinancialInput
