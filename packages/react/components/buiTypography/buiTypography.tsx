import React, { FC } from 'react'
import {
  BuiRootComponent,
  BuiRootComponentCommonTypes,
  BuiThemeTypes,
  useBuiTheme,
} from '../buiStyled'

export interface BuiTypographyProps extends BuiRootComponentCommonTypes {
  variant?: string | undefined
}

const getThemeConfig = (variant: string, theme: BuiThemeTypes) => {
  return theme.typography.variants[variant] || theme.typography.variants.default
}

export const BuiTypography: FC<BuiTypographyProps> = ({
  children,
  variant,
  ...rest
}: BuiTypographyProps) => {
  const theme: BuiThemeTypes = useBuiTheme()

  const { fontFamily, fontSize, fontWeight, lineHeight, letterSpacing } = getThemeConfig(
    variant || 'default',
    theme,
  )

  return (
    <BuiRootComponent
      preStyle={{
        fontFamily,
        fontWeight,
        fontSize,
        lineHeight,
        letterSpacing,
        display: 'block',
        margin: 0,
      }}
      {...rest}
    >
      {children}
    </BuiRootComponent>
  )
}

BuiTypography.defaultProps = {
  as: 'span',
  variant: 'default',
}
