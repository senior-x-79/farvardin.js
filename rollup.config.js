import babel from 'rollup-plugin-babel';
import filesize from 'rollup-plugin-filesize';
import { uglify } from 'rollup-plugin-uglify';
import license from 'rollup-plugin-license';
import pkg from './package.json';

export default [
  {
    input: 'src/farvardin.js',
    output: {
      name: pkg.name,
      file: pkg.main,
      format: 'umd'
    },
    plugins: [
      license({
        banner:
          '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
          '<%= moment().format("YYYY-MM-DD") + "\\n" %>' +
          '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
          '* Copyright (c) <%= moment().format("YYYY") %> <%= pkg.author.name %>;' +
          ' Licensed <%= _.map(pkg.licenses, "type").join(", ") %> */\n\n'
      }),
      babel({
        babelrc: false,
        presets: [
          [
            'env',
            {
              modules: false
            }
          ],
          'stage-0'
        ]
      }),
      filesize()
    ]
  },
  {
    input: 'src/farvardin.js',
    output: {
      name: pkg.name,
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [
      license({
        banner:
          '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
          '<%= moment().format("YYYY-MM-DD") + "\\n" %>' +
          '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
          '* Copyright (c) <%= moment().format("YYYY") %> <%= pkg.author.name %>;' +
          ' Licensed <%= _.map(pkg.licenses, "type").join(", ") %> */\n\n'
      }),
      babel({
        babelrc: false,
        presets: [
          [
            'env',
            {
              modules: false
            }
          ],
          'stage-0'
        ]
      }),
      uglify({
        output: {
          comments: true
        }
      }),
      filesize()
    ]
  },

  {
    input: 'src/farvardin.js',
    output: [
      { file: pkg.module, format: 'es' }
    ],
    plugins: [
      license({
        banner:
          '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
          '<%= moment().format("YYYY-MM-DD") + "\\n" %>' +
          '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
          '* Copyright (c) <%= moment().format("YYYY") %> <%= pkg.author.name %>;' +
          ' Licensed <%= _.map(pkg.licenses, "type").join(", ") %> */\n\n'
      }),
      filesize()
    ]
  }
];