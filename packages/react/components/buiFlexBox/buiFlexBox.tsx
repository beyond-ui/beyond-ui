import React, { CSSProperties, FC, ReactNode, useMemo } from 'react'
import { BuiRootComponent, BuiRootComponentCommonTypes } from '../buiStyled'

export interface BuiFlexBoxProps extends BuiRootComponentCommonTypes {
  children?: ReactNode
  direction?: 'row' | 'column' | 'rowReverse' | 'columnReverse' | undefined
  alignItems?: 'center' | 'baseline' | 'stretch' | 'flexStart' | 'flexEnd' | undefined
  spaceSize?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'none' | undefined
  justifyContent?:
    | 'center'
    | 'flexStart'
    | 'flexEnd'
    | 'spaceBetween'
    | 'spaceAround'
    | 'spaceEvenly'
    | undefined
  wrap?: boolean | undefined
}

export const BuiFlexBox: FC<BuiFlexBoxProps> = ({
  children,
  direction,
  alignItems,
  spaceSize,
  justifyContent,
  wrap,
  ...rest
}: BuiFlexBoxProps) => {
  const getFlexDirection = useMemo(() => {
    const flexWrap = wrap === undefined ? '' : wrap ? ' wrap' : ''
    if (direction === 'row' || direction === undefined) {
      return { flexFlow: 'row' + flexWrap }
    } else if (direction === 'column') {
      return { flexFlow: 'column' + flexWrap }
    } else if (direction === 'rowReverse') {
      return { flexFlow: 'row-reverse' + flexWrap }
    } else if (direction === 'columnReverse') {
      return { flexFlow: 'column-reverse' + flexWrap }
    }
  }, [direction])

  const getAlignItems = useMemo(() => {
    if (alignItems === 'stretch' || alignItems === undefined) {
      return { alignItems: 'stretch' }
    } else if (alignItems === 'center') {
      return { alignItems: 'center' }
    } else if (alignItems === 'baseline') {
      return { alignItems: 'baseline' }
    } else if (alignItems === 'flexStart') {
      return { alignItems: 'flex-start' }
    } else if (alignItems === 'flexEnd') {
      return { alignItems: 'flex-end' }
    }
  }, [alignItems])

  const getSpaceSize = useMemo(() => {
    /* xs:4 s:8 m:12 l:24 xl:36 TODO:: take values from theme  */
    if (spaceSize === 'l' || alignItems === undefined) {
      return { gap: '24px' }
    } else if (spaceSize === 'xs') {
      return { gap: '4px' }
    } else if (spaceSize === 's') {
      return { gap: '8px' }
    } else if (spaceSize === 'm') {
      return { gap: '12px' }
    } else if (spaceSize === 'xl') {
      return { gap: '36px' }
    }
  }, [spaceSize])

  const getJustifyContent = useMemo(() => {
    if (justifyContent === 'flexStart' || alignItems === undefined) {
      return { justifyContent: 'flex-start' }
    } else if (justifyContent === 'center') {
      return { justifyContent: 'center' }
    } else if (justifyContent === 'flexEnd') {
      return { justifyContent: 'flex-end' }
    } else if (justifyContent === 'spaceBetween') {
      return { justifyContent: 'space-between' }
    } else if (justifyContent === 'spaceAround') {
      return { justifyContent: 'space-around' }
    } else if (justifyContent === 'spaceEvenly') {
      return { justifyContent: 'space-evenly' }
    }
  }, [justifyContent])

  return (
    <BuiRootComponent
      preStyle={{
        display: 'flex',
        ...(getFlexDirection as CSSProperties),
        ...(getAlignItems as CSSProperties),
        ...(getSpaceSize as CSSProperties),
        ...(getJustifyContent as CSSProperties),
      }}
      {...rest}
    >
      {children}
    </BuiRootComponent>
  )
}

BuiFlexBox.defaultProps = {
  direction: 'row',
  alignItems: 'stretch',
  wrap: false,
  spaceSize: 'l',
  justifyContent: 'flexStart',
}
