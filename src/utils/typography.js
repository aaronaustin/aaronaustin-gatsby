import Typography from "typography"
import { MOBILE_MEDIA_QUERY, TABLET_MEDIA_QUERY } from "typography-breakpoint-constants"

const options = {
  // baseFontSize: `18px`,
  // baseLineHeight: 1.45,
  // blockMarginBottom: 0.75,
  // scaleRatio: 2.15,

  googleFonts: [
    { name: 'Lora', styles: ['700', '400', '400i'], },
    { name: 'Oswald', styles: ['300'], },
    { name: 'Playfair Display', styles: ['400', '400i', '900'], }
  ],
  headerFontFamily: ['Playfair Display', 'serif'],
  bodyFontFamily: ['Lora', 'serif'],

  overrideStyles: ({ rhythm, scale }, options, styles) => {
    return {
      [TABLET_MEDIA_QUERY]: {
        // Make baseFontSize on mobile 17px.
        html: {
          fontSize: `${17 / 16 * 100}%`,
        },
      },
      [MOBILE_MEDIA_QUERY]: {
        // Make baseFontSize on mobile 16px.
        html: {
          fontSize: `${16 / 16 * 100}%`,
        },
      },
      '.hero h1': {
        color: '#888',
        marginBottom: rhythm(1 / 2),
        marginTop: 0,
        fontWeight: 400,
        // fontSize: rhythm(1.5),
      },
      '.headline h1': {
        color: '#888',
        marginBottom: rhythm(1 / 2),
        marginTop: 0,
        // fontWeight: 400,
        fontSize: rhythm(2),
      },
      '.card h6': {
        color: '#888',
        marginBottom: rhythm(1 / 4),
        marginTop: 0,
        fontWeight: 400,
        fontFamily: 'Oswald',
        // letterSpacing: '2px',
        fontSize: rhythm(.6),
      },
      '.card h3': {
        marginBottom: rhythm(1 / 2),
        marginTop: rhythm(1 / 8),
        // textTransform: 'uppercase',
        fontSize: rhythm(1.2),
      },
      '.listItem h6': {
        color: '#888',
        marginBottom: rhythm(1 / 2),
        marginTop: rhythm(1 / 2),
        fontWeight: 400,
        fontFamily: 'Oswald',
        // letterSpacing: '2px',
        fontSize: rhythm(.6),
      },
      '.listItem h3': {
        marginBottom: rhythm(1 / 2),
        marginTop: rhythm(1 / 8),
        // textTransform: 'uppercase',
        fontSize: rhythm(1.2),
      },
      '.listItem div': {
        marginTop: rhythm(1 / 8),
        marginBottom: rhythm(1 / 8),
      },
      'p.lead': {
        fontSize: rhythm(.8),
        lineHeight: rhythm(1.2),
      },
      // '.hero a': {
      //   fontFamily: 'Playfair Display',
      //   fontWeight: 400,
      //   fontSize: rhythm(.8),
      // },
      'footer a': {
        fontFamily: 'Oswald',
        fontWeight: 400,
        fontSize: rhythm(.6),
      },
      'footer': {
        fontFamily: 'Lora',
        fontWeight: 400,
        fontSize: rhythm(.6),
      },
      '.btn': {
        fontFamily: 'Oswald',
        fontWeight: 400,
        fontSize: rhythm(.6),
      },
      '.textCircle': {
        fontFamily: 'Oswald',
        fontWeight: 400
      },
      '.meta': {
        display: 'flex'
      },
      '.meta h6': {
        color: '#888',
        marginBottom: rhythm(1 / 2),
        marginTop: 0,
        fontWeight: 400,
        fontFamily: 'Oswald',
        fontSize: rhythm(.6),
      },
      '.author': {
        color: '#888',
        marginTop: 0,
        fontWeight: 400,
        fontFamily: 'Oswald',
        fontSize: rhythm(.5),
        textTransform: 'uppercase'
      },
      'h1.title': {
        marginBottom: rhythm(1 / 3),
      },
      '.highlight h2, .highlight h3': {
        marginTop: rhythm(1 / 2),
        marginBottom: rhythm(1 / 2),
        fontSize: rhythm(1.3),
        fontStyle: 'italic',
      },
      '.highlight p': {
        marginBottom: 0,
        
      },
      'a.big': {
        fontFamily: 'Playfair Display',
        fontStyle: 'italic',
        marginBottom: rhythm(1 / 2),
        marginTop: rhythm(1 / 2),
        fontSize: rhythm(.9),
        color: 'inherit',
      },
      'label': {
        fontFamily: 'Oswald',
      },

    }
  },
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
