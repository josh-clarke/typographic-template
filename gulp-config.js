'use strict'

import globbing from 'node-sass-globbing'

const paths = {
  src : 'src',            // source parent folder
  out : 'dist',           // output parent folder
  assets : 'assets',      // source assets folder
  templates : 'templates' // source templates folder
}

const config = {
  sass : {
    outputStyle: 'compressed',
    importer: globbing
  }
}

module.exports = {
  paths,
  config
}
