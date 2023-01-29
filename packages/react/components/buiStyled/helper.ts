export const removeObjMemberHelper = (obj: any, key: string) => {
  const newObject = { ...obj }
  delete newObject[key]
  return newObject
}

export const getObjectValueHelper = (obj: any, key: string) => {
  return obj[key] || null
}

export const replaceObjectKeyHelper = (obj: object, oldKey: string, newKey: string) => {
  let newObject = { ...obj }
  newObject = {
    ...newObject,
    [newKey]: getObjectValueHelper(obj, oldKey),
  }
  newObject = removeObjMemberHelper(newObject, oldKey)
  return newObject
}
