import Typography from 'typography';
import Color from 'color';

import { secondary, textPrimary, textMuted, border } from './theme-colors';

import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants';
import verticalRhythm from 'compass-vertical-rhythm';

const baseFontFamily = 'Montserrat';
const codeFontFamily = 'Inconsolata';
const emphasizedFontFamily = 'Handlee';

const theme = {
  title: 'Ayhota',
  baseFontSize: '20px',
  baseLineHeight: 1.45,
  googleFonts: [
    {
      name: baseFontFamily,
      styles: ['400', '700'],
    },
    {
      name: codeFontFamily,
      styles: ['400', '400i'],
    },
    {
      name: emphasizedFontFamily,
      styles: ['400'],
    },
  ],
  headerFontFamily: [baseFontFamily, 'sans-serif'],
  bodyFontFamily: [baseFontFamily, 'sans-serif'],
  headerColor: textPrimary,
  bodyColor: textPrimary,
  headerWeight: '700',
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    const vr = verticalRhythm({
      baseFontSize: '17px',
      baseLineHeight: '24.65px',
    });

    return {
      a: {
        color: secondary,
        textDecoration: 'none',
      },
      'a:hover,a:active': {
        color: Color(secondary).lighten(0.25).toString(),
      },
      'h1,h2,h3,h4,h5,h6': {
        marginTop: rhythm(1.5),
        marginBottom: rhythm(0.5),
      },
      // Blockquote styles.
      blockquote: {
        ...scale(1 / 5),
        borderLeft: `${rhythm(6 / 16)} solid ${secondary}`,
        color: textMuted,
        paddingLeft: rhythm(10 / 16),
        fontFamily: `${emphasizedFontFamily}, ${baseFontFamily}`,
        fontStyle: 'italic',
        fontSize: '1.14em', // bump up size to match body font
        marginLeft: 0,
        marginRight: 0,
      },
      'blockquote > :last-child': {
        marginBottom: 0,
      },
      'blockquote cite': {
        ...adjustFontSizeTo(options.baseFontSize),
        color: options.bodyColor,
        fontStyle: 'normal',
        fontWeight: options.bodyWeight,
      },
      'blockquote cite:before': {
        content: '"— "',
      },
      code: {
        fontFamily: `${codeFontFamily}, monospace`,
        border: `1px solid ${border}`,
        padding: '2px 5px',
        borderRadius: '4px',
        fontSize: '1em',
        whiteSpace: 'nowrap',
      },
      '.gatsby-highlight code': {
        // undo all of the fancy `code` styles if we're inside of .gatsby-highlight
        border: 'none',
        padding: 0,
        borderRadius: 'unset',
      },
      '.gatsby-highlight': {
        marginBottom: '30px',
      },
      em: {
        fontFamily: `${emphasizedFontFamily}, ${baseFontFamily}`,
        fontSize: '1.14em', // bump up size to match body font
      },
      [MOBILE_MEDIA_QUERY]: {
        html: {
          ...vr.establishBaseline(),
        },
      },
    };
  },
};

const typography = new Typography(theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
