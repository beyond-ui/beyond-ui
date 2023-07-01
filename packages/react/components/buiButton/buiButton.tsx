import React, { FC, ReactNode, ReactElement } from 'react'
import { BuiRootComponent, BuiRootComponentCommonTypes } from '../buiStyled'
import { BuiBox } from '../buiBox'

/**
 * TODO::
 * Size : done
 * Variants : 'outline', 'solid' , 'ghost'
 * LeftIcon
 * RightIcon
 * Loading
 * Loading Side : 'left' | 'right'
 * LoadingIcon
 * RippleEffect : Boolean
 * Icon Buttons
 * Typography
 *
 * Themes
 * */

export interface BuiButtonProps extends BuiRootComponentCommonTypes {
  children?: ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg' | string
  variant?: 'outline' | 'solid' | 'ghost'
  leftIcon?: ReactElement
  rightIcon?: ReactElement
}

export const BuiButton: FC<BuiButtonProps> = ({
  children,
  size = 'md',
  variant = 'solid',
  leftIcon,
  rightIcon,
  ...rest
}: BuiButtonProps) => {
  const getButtonSize = () => {
    if (size === 'xs') {
      return {
        minWidth: 24,
        minHeight: 24,
        paddingLeft: 8,
        paddingRight: 8,
      }
    } else if (size === 'sm') {
      return {
        minWidth: 32,
        minHeight: 32,
        paddingLeft: 12,
        paddingRight: 12,
      }
    } else if (size === 'md') {
      return {
        minWidth: 40,
        minHeight: 40,
        paddingLeft: 16,
        paddingRight: 16,
      }
    } else if (size === 'lg') {
      return {
        minWidth: 60,
        minHeight: 60,
        paddingLeft: 24,
        paddingRight: 24,
      }
    }
  }
  const getButtonVariant = () => {
    const solidStyles = {
      backgroundColor: '#319795',
      color: '#FFF',
      borderWidth: 0,
    }
    if (variant === 'solid') {
      return solidStyles
    } else if (variant === 'outline') {
      return {
        backgroundColor: 'transparent',
        color: '#319795',
        border: '1px solid #319795',
      }
    } else if (variant === 'ghost') {
      return {
        backgroundColor: 'transparent',
        color: '#319795',
        border: 'none',
      }
    } else {
      return solidStyles
    }
  }
  return (
    <BuiRootComponent
      as='button'
      preStyle={{
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        cursor: 'pointer',
        outline: '2px solid transparent',
        ...getButtonSize(),
        ...getButtonVariant(),
      }}
      {...rest}
    >
      {leftIcon && (
        <BuiBox as='span' csx={{ mr: 8 }}>
          {leftIcon}
        </BuiBox>
      )}
      {children}
      {rightIcon && (
        <BuiBox as='span' csx={{ ml: 8 }}>
          {rightIcon}
        </BuiBox>
      )}
    </BuiRootComponent>
  )
}
