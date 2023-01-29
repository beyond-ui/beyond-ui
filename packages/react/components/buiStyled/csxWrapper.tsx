import React, { ComponentType, CSSProperties, ElementType, ReactElement, ReactNode } from 'react'
import { getObjectValueHelper, removeObjMemberHelper, replaceObjectKeyHelper } from './helper'
import { BuiInterpolationType, BuiStyled } from './buiStyled'

enum CustomCssKey {
  // padding
  P = 'p',
  PT = 'pt',
  PR = 'pr',
  PB = 'pb',
  PL = 'pl',
  PY = 'py',
  PX = 'px',

  // margin
  M = 'm',
  MT = 'mt',
  MR = 'mr',
  MB = 'mb',
  ML = 'ml',
  MY = 'my',
  MX = 'mx',
}

const originalCssValues = {
  // padding
  [CustomCssKey.P]: 'padding',
  [CustomCssKey.PT]: 'paddingTop',
  [CustomCssKey.PR]: 'paddingRight',
  [CustomCssKey.PB]: 'paddingBottom',
  [CustomCssKey.PL]: 'paddingLeft',

  // margin
  [CustomCssKey.M]: 'margin',
  [CustomCssKey.MT]: 'marginTop',
  [CustomCssKey.MR]: 'marginRight',
  [CustomCssKey.MB]: 'marginBottom',
  [CustomCssKey.ML]: 'marginLeft',
}

interface CsxCustomProps extends CSSProperties {
  // padding
  [CustomCssKey.P]?: string | number | undefined
  [CustomCssKey.PT]?: string | number | undefined
  [CustomCssKey.PR]?: string | number | undefined
  [CustomCssKey.PB]?: string | number | undefined
  [CustomCssKey.PL]?: string | number | undefined

  // margin
  [CustomCssKey.M]?: string | number | undefined
  [CustomCssKey.MT]?: string | number | undefined
  [CustomCssKey.MR]?: string | number | undefined
  [CustomCssKey.MB]?: string | number | undefined
  [CustomCssKey.ML]?: string | number | undefined
}

export type BuiCsxType = BuiInterpolationType<CsxCustomProps>
export type BuiComponentAsType = (ElementType<any> & (string | ComponentType<any>)) | undefined

export interface BuiRootComponentCommonTypes {
  as?: BuiComponentAsType
  children?: ReactNode
  csx?: BuiCsxType
  className?: string
}

export interface CsxWrapperProps extends BuiRootComponentCommonTypes {
  preStyle?: BuiInterpolationType<CSSProperties>
}

export interface StyledCsxProps extends CsxCustomProps {
  $preStyle?: BuiInterpolationType<CSSProperties>
  $csx?: BuiInterpolationType<CsxCustomProps>
}

const Component = BuiStyled.div<StyledCsxProps>`
  ${({ $preStyle }) => $preStyle};
  ${({ $csx }) => $csx};
`

const getCsx = (csx: BuiInterpolationType<CsxCustomProps>) => {
  if (typeof csx === 'object') {
    let newCsxObject = { ...csx }
    Object.keys(newCsxObject).map((key: string) => {
      if (
        key === CustomCssKey.P ||
        key === CustomCssKey.PT ||
        key === CustomCssKey.PR ||
        key === CustomCssKey.PB ||
        key === CustomCssKey.PL ||
        key === CustomCssKey.M ||
        key === CustomCssKey.MT ||
        key === CustomCssKey.MR ||
        key === CustomCssKey.MB ||
        key === CustomCssKey.ML
      ) {
        newCsxObject = replaceObjectKeyHelper(newCsxObject, key, originalCssValues[key])
      } else if (key === CustomCssKey.PY) {
        const keyValue = getObjectValueHelper(newCsxObject, CustomCssKey.PY)
        newCsxObject = {
          ...newCsxObject,
          [originalCssValues[CustomCssKey.PT]]: keyValue,
          [originalCssValues[CustomCssKey.PB]]: keyValue,
        }
        newCsxObject = removeObjMemberHelper(newCsxObject, key)
      } else if (key === CustomCssKey.PX) {
        const keyValue = getObjectValueHelper(newCsxObject, CustomCssKey.PX)
        newCsxObject = {
          ...newCsxObject,
          [originalCssValues[CustomCssKey.PL]]: keyValue,
          [originalCssValues[CustomCssKey.PR]]: keyValue,
        }
        newCsxObject = removeObjMemberHelper(newCsxObject, key)
      } else if (key === CustomCssKey.MY) {
        const keyValue = getObjectValueHelper(newCsxObject, CustomCssKey.MY)
        newCsxObject = {
          ...newCsxObject,
          [originalCssValues[CustomCssKey.MT]]: keyValue,
          [originalCssValues[CustomCssKey.MB]]: keyValue,
        }
        newCsxObject = removeObjMemberHelper(newCsxObject, key)
      } else if (key === CustomCssKey.MX) {
        const keyValue = getObjectValueHelper(newCsxObject, CustomCssKey.MX)
        newCsxObject = {
          ...newCsxObject,
          [originalCssValues[CustomCssKey.ML]]: keyValue,
          [originalCssValues[CustomCssKey.MR]]: keyValue,
        }
        newCsxObject = removeObjMemberHelper(newCsxObject, key)
      }
    })
    return newCsxObject
  }
  return {}
}

export const BuiRootComponent = ({
  as,
  children,
  csx,
  className,
  preStyle,
  ...rest
}: CsxWrapperProps): ReactElement => {
  const asComponent = as ? as : 'div'
  return (
    <Component
      $preStyle={preStyle}
      $csx={getCsx(csx)}
      as={asComponent}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  )
}
