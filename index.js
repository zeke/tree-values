module.exports = objectValues

function objectValues (obj) {
  var ret = []
  Object.keys(obj).forEach(key => {
		const val = obj[key]
    if (val && typeof val === 'object' && Object.keys(val).length) {
      ret = ret.concat(objectValues(val))
    } else {
      ret.push(val)
    }
  })
  return ret
}
