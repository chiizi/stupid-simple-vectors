const V2 = function(x, y) {
  this.x = x
  this.y = y
}
V2.prototype.add = function(v, out) {
  out.x = this.x + v.x
  out.y = this.y + v.y
  return out
}
v2.prototype.selfAdd = function(v) {
  return this.add(v, this)
}
V2.scale = function(n, v) {
  v.x *= n
  v.y *= n
  return v
}
