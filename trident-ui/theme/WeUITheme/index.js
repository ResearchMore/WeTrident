import Color from './Color'
import Size from './Size'
import Font from './Font'
import dimens from '../../utils/dimens'

const ThemeConst = {
  Color,
  Size,
  Font
}
const createComponentTheme = (Theme = ThemeConst) => ({
  Button: {
    style: {
      justifyContent: 'center',
      alignItems: 'center',
      height: Theme.Size.rowHeightM,

      paddingHorizontal: Theme.Size.spaceM,

      backgroundColor: Theme.Color.backgroundPrimary,
      borderRadius: Theme.Size.radiusM,
      borderWidth: Theme.Size.borderWidthS,
      borderColor: Theme.Color.borderPrimary
    },
    textStyle: {
      fontSize: Theme.Size.fontXL,
      color: Theme.Color.textLightPrimary,
      fontWeight: Theme.Font.weightL
    },
    activeColor: Theme.Color.backgroundPrimaryDark
  },
  List: {
    style: {
      borderColor: Theme.Color.borderPrimary,
      borderTopWidth: Theme.Size.borderWidthS,
      borderBottomWidth: Theme.Size.borderWidthS
    },
    separatorStyle: {
      backgroundColor: Theme.Color.borderPrimary,
      height: Theme.Size.borderWidthS,
      marginLeft: Theme.Size.spaceM
    }
  },
  'List.Item': {
    style: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: Theme.Size.spaceM,
      minHeight: Theme.Size.rowHeightM,
      borderColor: Theme.Color.borderPrimary
    },
    rightStyle: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    statusStyle: {
      color: Theme.Color.textSecondary,
      fontSize: Theme.Size.fontM
    },
    subStatusStyle: {
      fontSize: Theme.Size.fontS,
      color: Theme.Color.textInfo,
      marginTop: Theme.Size.spaceS,
      textAlign: 'right'
    },
    labelStyle: {
      color: Theme.Color.textPrimary,
      fontSize: Theme.Size.fontM
    },
    iconStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: 30,
      marginRight: Theme.Size.spaceM
    }
  },
  'List.Row': {
    normalText: {
      fontSize: Theme.Size.fontM,
      color: Theme.Color.textPrimary
    },
    primaryText: {
      fontSize: Theme.Size.fontM,
      color: Theme.Color.textPrimary
    },
    rowStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: Theme.Size.rowHeightM,
      paddingHorizontal: Theme.Size.spaceXL
    }
  },
  Checkbox: {
    style: {
      width: Theme.Size.iconS,
      height: Theme.Size.iconS,
      borderRadius: Theme.Size.iconS / 2,
      borderColor: Theme.Color.borderPrimary,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent'
    },
    activeStyle: {
      borderColor: Theme.Color.backgroundPrimary,
      backgroundColor: Theme.Color.backgroundPrimary
    },
    disabledStyle: {
      backgroundColor: Theme.Color.borderPrimary
    },
    iconStyle: {
      width: 10,
      height: 10,
      resizeMode: 'cover'
    }
  },
  Table: {
    style: {},
    borderStyle: {
      borderWidth: Theme.Size.borderWidthS,
      borderColor: Theme.Color.borderPrimary
    },
    textStyle: {
      lineHeight: Theme.Size.lineHeightM,
      fontSize: Theme.Size.fontM,
      textAlign: 'center',
      color: Theme.Color.textPrimary
    }
  },
  'Table.Tr': {
    style: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch'
    },
    textStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch'
    }
  },
  'Table.Th': {
    style: {
      padding: Theme.Size.spaceM
    },
    textStyle: {
      fontWeight: 'bold'
    }
  },
  'Table.Td': {
    style: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
      padding: Theme.Size.spaceM
    },
    textStyle: {}
  },

  Loading: {
    style: {
      width: 80,
      height: 80,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5
    }
  },
  Toast: {
    style: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      borderRadius: Theme.Size.radiusL,
      paddingHorizontal: Theme.Size.spaceL,
      paddingTop: Theme.Size.spaceM,
      paddingBottom: Theme.Size.spaceM
    },
    styleWithIcon: {
      paddingTop: 16,
      paddingBottom: Theme.Size.spaceM
    },
    iconStyle: {
      alignSelf: 'center',
      marginBottom: Theme.Size.spaceM
    },
    textStyle: {
      color: Theme.Color.textLightPrimary,
      fontSize: Theme.Size.fontM,
      lineHeight: Theme.Size.lineHeightM
    }
  },
  Dialog: {
    style: {
      width: 270,
      backgroundColor: Theme.Color.backgroundNormal,
      borderRadius: Theme.Size.radiusM,
      shadowColor: 'rgba(12, 2, 3, 0.6)',
      shadowRadius: 6,
      overflow: 'hidden'
    },
    titleTextStyle: {
      // color: Theme.Color.textPrimary,
      fontSize: Theme.Size.fontL,
      lineHeight: Theme.Size.lineHeightXL,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    contentTextStyle: {
      color: Theme.Color.textPrimary,
      fontSize: Theme.Size.fontL,
      lineHeight: Theme.Size.lineHeightL,
      textAlign: 'center',
      marginTop: Theme.Size.spaceXS
    },
    buttonTextStyle: {
      color: Theme.Color.backgroundPrimary,
      fontSize: Theme.Size.fontXL,
      textAlign: 'center'
    },
    borderStyle: {
      borderLeftWidth: Theme.Size.borderWidthS,
      borderColor: Theme.Color.borderPrimary
    },
    contentStyle: {
      minHeight: 96,
      padding: 20,
      justifyContent: 'center'
    }
  },
  ActionSheet: {
    style: {
      backgroundColor: Theme.Color.backgroundSecondary,
      paddingBottom: dimens.PORTRAIT_UNSAFE_AREA_BOTTOM_HEIGHT
    },
    headerStyle: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Theme.Color.backgroundNormal,
      paddingHorizontal: Theme.Size.spaceL,
      paddingVertical: Theme.Size.spaceM
    },
    headerTextStyle: {
      lineHeight: Theme.Size.lineHeightM,
      color: Theme.Color.textPrimary,
      fontSize: Theme.Size.fontL,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    itemStyle: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: Theme.Color.borderPrimary,
      borderTopWidth: Theme.Size.borderWidthS,
      backgroundColor: Theme.Color.backgroundNormal,
      height: 50,
      paddingHorizontal: Theme.Size.spaceL
    },
    itemTextStyle: {
      color: Theme.Color.textPrimary,
      fontSize: Theme.Size.fontM,
      textAlign: 'center'
    },
    itemSubTextStyle: {
      color: Theme.Color.textSecondary,
      fontSize: Theme.Size.fontS,
      lineHeight: Theme.Size.lineHeightS,
      textAlign: 'center'
    },
    footerStyle: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Theme.Color.backgroundNormal,
      height: 50,
      marginTop: Theme.Size.spaceS
    },
    footerTextStyle: {
      fontSize: Theme.Size.fontL,
      color: Theme.Color.textSecondary,
      textAlign: 'center'
    }
  },
  NavBar: {
    style: {
      backgroundColor: Theme.Color.backgroundPrimary,
      width: dimens.WINDOW_WIDTH,
      height: dimens.TOTAL_NAV_BAR_HEIGHT,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: dimens.STATUS_BAR_HEIGHT,
      paddingLeft: Theme.Size.spaceM,
      paddingRight: Theme.Size.spaceM
    },
    leftButtonStyle: {},
    leftButtonImageStyle: { width: 20, height: 20 },
    leftButtonTextStyle: {
      color: Theme.Color.textLightPrimary,
      fontSize: Theme.Size.fontM
    },
    titleStyle: {},
    titleTextStyle: {
      flex: 1,
      color: Theme.Color.textLightPrimary,
      backgroundColor: 'transparent',
      textAlign: 'center',
      fontSize: 17
    },
    rightButtonStyle: {},
    rightButtonImageStyle: { width: 20, height: 20 },
    rightButtonTextStyle: {
      color: Theme.Color.textLightPrimary,
      fontSize: Theme.Size.fontM
    }
  }
})

export default {
  ThemeConst,
  createComponentTheme
}
