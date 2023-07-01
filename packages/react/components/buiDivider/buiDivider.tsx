import React, { FC, useMemo } from 'react'
import { BuiRootComponent, BuiRootComponentCommonTypes } from '../buiStyled'

export interface BuiDividerProps extends BuiRootComponentCommonTypes {
  size?: 'full' | 'half' | 'quarter'
  vMargin?: 'none' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
}

export const BuiDivider: FC<BuiDividerProps> = ({ size, vMargin, ...rest }: BuiDividerProps) => {
  const getWidth = useMemo(() => {
    if (size === 'full' || size === undefined) {
      return '100%'
    } else if (size === 'half') {
      return (100 / 2).toString() + '%'
    } else if (size === 'quarter') {
      return (100 / 3).toString() + '%'
    }
  }, [size])
  const getVMargin = useMemo(() => {
    if (vMargin === 'l' || size === undefined) {
      return '24px'
    } else if (vMargin === 'none') {
      return '0px'
    } else if (vMargin === 'xs') {
      return '8px'
    } else if (vMargin === 's') {
      return '12px'
    } else if (vMargin === 'm') {
      return '16px'
    } else if (vMargin === 'xl') {
      return '32px'
    } else if (vMargin === 'xxl') {
      return '40px'
    }
  }, [vMargin])
  return (
    <BuiRootComponent
      preStyle={{
        border: 0,
        borderStyle: 'solid',
        borderBottomWidth: '1px',
        width: getWidth,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginInline: 'auto',
        marginBlock: getVMargin,
        /* TODO:: take color value from theme */
        borderColor: '#f2f2f2',
      }}
      as='hr'
      {...rest}
    />
  )
}

BuiDivider.defaultProps = {
  size: 'full',
  vMargin: 'l',
}
