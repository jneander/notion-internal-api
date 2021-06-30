export function setObjectPath(object, path, value) {
  const reducePath = path.slice(0, path.length - 1)
  const lastPathKey = path[path.length - 1]

  const objectCopy = {...object}
  let lastObj = objectCopy

  reducePath.forEach(key => {
    lastObj[key] = {...(lastObj[key] || {})}
    lastObj = lastObj[key]
  })

  lastObj[lastPathKey] = value

  return objectCopy
}

export function updateObjectPath(object, path, value) {
  const reducePath = path.slice(0, path.length - 1)
  const lastPathKey = path[path.length - 1]

  const objectCopy = {...object}
  let lastObj = objectCopy

  reducePath.forEach(key => {
    lastObj[key] = {...(lastObj[key] || {})}
    lastObj = lastObj[key]
  })

  lastObj[lastPathKey] = {
    ...(lastObj[lastPathKey] || {}),
    ...value
  }

  return objectCopy
}
