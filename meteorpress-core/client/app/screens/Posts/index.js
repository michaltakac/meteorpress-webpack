module.exports = {
  path: 'posts',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Posts'))
    })
  }
}