import { makeStyles } from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox'
import Markdown from 'markdown-to-jsx'

import { primaryColor, secondaryColor } from '../pages/_app'
import CenteredImage from './CenteredImage'
import CodeBlock from './CodeBlock'

/**
 * Initial boilerplate styles came from Material-UI's documentation markdown component.
 *
 *    See the source code here:
 *    https://github.com/mui-org/material-ui/blob/master/docs/src/modules/components/MarkdownElement.js
 */

// Quick Variables to change if needed:
const headingFontFamily = 'Roboto Slab'
const headerFontWeight = 500
const bodyTextFontFamily = undefined // if undefined, use Material UI theme 'body2' styles. => 'Roboto Slab[200]'
const bodyTextFontWeight = 300
const tableFontFamily = 'Roboto'
const maxWidthBodyText = '590px'

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.typography.body2,
    color: theme.palette.text.primary,
    wordBreak: 'break-word',
    fontFamily: 'Roboto Slab',
    fontWeight: 200,
    '& .anchor-link': {
      marginTop: -96, // Offset for the anchor.
      position: 'absolute',
    },

    /**********************************
     ****** BLOCK CODE CONTAINER ******
     **********************************/

    // NOTE: Colors for code block syntax highlighting are
    // located in: /public/syntaxHighlighting.css

    '& code': {
      direction: 'ltr',
      lineHeight: 1.4,
      backgroundColor: '#272822',
      display: 'inline-block',
      fontFamily: 'Operator Mono, Fira Code, "Liberation Mono", monospace',
      WebkitFontSmoothing: 'subpixel-antialiased',
      fontSize: '.85em',
      borderRadius: 2,
    },
    '& pre code': {
      [theme.breakpoints.up(1150)]: {
        fontSize: theme.typography.pxToRem(13.5),
      },
      [theme.breakpoints.between(1050, 1150)]: {
        fontSize: theme.typography.pxToRem(13),
      },
      [theme.breakpoints.between(950, 1050)]: {
        fontSize: theme.typography.pxToRem(12),
      },
      [theme.breakpoints.between(750, 950)]: {
        fontSize: theme.typography.pxToRem(11),
      },
      [theme.breakpoints.down(750)]: {
        fontSize: theme.typography.pxToRem(10),
      },
    },

    '& .token a': {
      color: '#91b859', // override the mui-theme link color with proper string syntax color.
      textDecoration: 'underline',
    },

    /**********************************
     ******** BLOCK CODE ITSELF *******
     **********************************/

    '& pre': {
      direction: 'ltr',
      margin: theme.spacing(3, 'auto'),
      padding: theme.spacing(),
      backgroundColor: '#272822',
      border: 0,
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[8],
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch', // iOS momentum scrolling.
      maxWidth: 'calc(100vw - 32px)',
      [theme.breakpoints.up('md')]: {
        maxWidth: 'calc(100vw - 32px - 16px)',
      },
    },

    /**********************************
     ****** INLINE CODE - P TAGS ******
     **********************************/

    // variable names
    '& p code[class*=" language-"]': {
      textShadow: theme.palette.type === 'dark' ? '#000' : 'none',
      fontStyle: 'bold',
      color: theme.palette.type === 'dark' ? '#fff' : '#5e5e5e',
      backgroundColor: theme.palette.type === 'dark' ? '#292929' : '#e4e4e4',
      lineHeight: 1.5, // Avoid layout jump after hydration (style injected by prism)
    },

    // Font styles
    '& p code': {
      direction: 'ltr',
      lineHeight: 1.4,
      display: 'inline-block',
      fontFamily: 'Operator Mono Bold, Fira Code, "Liberation Mono", monospace',
      WebkitFontSmoothing: 'subpixel-antialiased',
      padding: '0px 3px',
      fontSize: '.85em',
      fontStyle: 'bold',
      border: 0,
      borderRadius: 1,
    },

    // Operators
    '& p code span.token.operator': {
      color: theme.palette.type === 'dark' ? '#89ddff' : '#5e5e5e',
      backgroundColor: theme.palette.type === 'dark' ? '#292929' : '#e4e4e4',
    },

    // Keywords
    '& p code span.token.keyword': {
      fontFamily: 'Operator Mono Bold Italic',
      color: theme.palette.type === 'dark' ? '#c792ea' : '#6f42c1',
    },

    // Strings
    '& p code span.token.string': {
      color: theme.palette.type === 'dark' ? '#91b859' : '#28a745',
    },

    // Numbers
    '& p code span.token.number': {
      color: theme.palette.type === 'dark' ? '#ff5370' : '#d73a49',
    },

    // Booleans
    '& p code span.token.boolean': {
      color: theme.palette.type === 'dark' ? '#ff9100' : '#ff8000',
    },

    // Functions
    '& p code span.token.function': {
      color: theme.palette.type === 'dark' ? '#82aaff' : '#0366d6',
    },

    // Punctuation Marks
    '& p code span.token.punctuation': {
      color: theme.palette.type === 'dark' ? '#fff' : '#5e5e5e',
    },

    /**********************************
     ***** INLINE CODE - li TAGS ******
     **********************************/

    // variable names
    '& li code[class*=" language-"]': {
      textShadow: theme.palette.type === 'dark' ? '#000' : 'none',
      fontStyle: 'bold',
      color: theme.palette.type === 'dark' ? '#fff' : '#5e5e5e',
      backgroundColor: theme.palette.type === 'dark' ? '#292929' : '#e4e4e4',
      lineHeight: 1.5, // Avoid layout jump after hydration (style injected by prism)
    },

    // Font styles
    '& li code': {
      direction: 'ltr',
      lineHeight: 1.4,
      display: 'inline-block',
      fontFamily: 'Operator Mono Bold, Fira Code, "Liberation Mono", monospace',
      WebkitFontSmoothing: 'subpixel-antialiased',
      padding: '0px 3px',
      fontSize: '.85em',
      fontStyle: 'bold',
      border: 0,
      borderRadius: 1,
    },

    // Operators
    '& li code span.token.operator': {
      color: theme.palette.type === 'dark' ? '#89ddff' : '#5e5e5e',
      backgroundColor: theme.palette.type === 'dark' ? '#292929' : '#e4e4e4',
    },

    // Keywords
    '& li code span.token.keyword': {
      fontFamily: 'Operator Mono Bold Italic',
      color: theme.palette.type === 'dark' ? '#c792ea' : '#6f42c1',
    },

    // Strings
    '& li code span.token.string': {
      color: theme.palette.type === 'dark' ? '#91b859' : '#28a745',
    },

    // Numbers
    '& li code span.token.number': {
      color: theme.palette.type === 'dark' ? '#ff5370' : '#d73a49',
    },

    // Booleans
    '& li code span.token.boolean': {
      color: theme.palette.type === 'dark' ? '#ff9100' : '#ff8000',
    },

    // Functions
    '& li code span.token.function': {
      color: theme.palette.type === 'dark' ? '#82aaff' : '#0366d6',
    },

    // Punctuation Marks
    '& li code span.token.punctuation': {
      color: theme.palette.type === 'dark' ? '#fff' : '#5e5e5e',
    },

    /**********************************
     ************* TEXT ***************
     **********************************/

    '& h1': {
      ...theme.typography.h3,
      fontFamily: `${headingFontFamily}, "Courier New", "serif"`,
      fontWeight: headerFontWeight,
      fontSize: theme.typography.pxToRem(40),
      margin: '16px 0',
    },
    '& .description': {
      ...theme.typography.h5,
      margin: '0 0 40px',
    },
    '& h2': {
      ...theme.typography.h4,
      fontFamily: `${headingFontFamily}, "Courier New", "serif"`,
      fontWeight: headerFontWeight,
      fontSize: theme.typography.pxToRem(30),
      margin: '40px 0 16px',
    },
    '& h3': {
      ...theme.typography.h5,
      fontFamily: `${headingFontFamily}, "Courier New", "serif"`,
      fontWeight: headerFontWeight,
      margin: '40px 0 16px',
    },
    '& h4': {
      ...theme.typography.h6,
      margin: '32px 0 16px',
      fontFamily: `${headingFontFamily}, "Courier New", "serif"`,
      fontWeight: headerFontWeight,
      color: theme.palette.type === 'dark' ? secondaryColor : primaryColor,
    },
    '& h5': {
      ...theme.typography.subtitle2,
      margin: '32px 0 16px',
      fontFamily: `${headingFontFamily}, "Courier New", "serif"`,
      fontWeight: headerFontWeight,
    },
    color: theme.palette.type === 'dark' ? secondaryColor : primaryColor,
    '& h6': {
      ...theme.typography.caption,
      margin: '-16px 0 32px',
      fontFamily: `${headingFontFamily}, "Courier New", "serif"`,
      fontWeight: headerFontWeight,
      color: theme.palette.type === 'dark' ? secondaryColor : primaryColor,
    },
    '& p, & ul, & ol': {
      ...theme.typography.body2,
      fontFamily: bodyTextFontFamily
        ? `${bodyTextFontFamily}, "Courier New", "serif"`
        : undefined,
      fontWeight: bodyTextFontWeight,
      lineHeight: 1.5,
      marginTop: 0,
      marginBottom: 16,
      color: theme.palette.type === 'dark' ? '#fff' : '#000',

      maxWidth: maxWidthBodyText, // <<< Psuedo Text Container - 1 of 4
      [theme.breakpoints.up(730)]: {
        marginLeft: 'auto', // <<< Psuedo Text Container - 1 of 4
        marginRight: 'auto', // <<< Psuedo Text Container - 1 of 4
      },
    },
    '& ul': {
      paddingLeft: 30,
      maxWidth: maxWidthBodyText, // <<< Psuedo Text Container - 2 of 4
      [theme.breakpoints.up(730)]: {
        marginLeft: 'auto', // <<< Psuedo Text Container - 2 of 4
        marginRight: 'auto', // <<< Psuedo Text Container - 2 of 4
      },
    },
    '& h1, & h2, & h3, & h4, & h5, & h6': {
      maxWidth: maxWidthBodyText, // Psuedo Text Container - 3 of 4
      [theme.breakpoints.up(730)]: {
        marginLeft: 'auto', // Psuedo Text Container - 3 of 4
        marginRight: 'auto', // Psuedo Text Container - 3 of 4
      },
      '& code': {
        fontSize: 'inherit',
        lineHeight: 'inherit',
        wordBreak: 'break-all',
      },
      '& .anchor-link-style': {
        display: 'none', // To prevent the link to capture focus.
      },
      '&:hover .anchor-link-style': {
        display: 'inline-block', // Hyperlink styles within main body text
        padding: '0 8px',
        color: theme.palette.text.secondary,
        '&:hover': {
          color: theme.palette.text.primary,
        },
        '& svg': {
          width: '0.7em',
          height: '0.7em',
          fill: 'currentColor',
        },
      },
    },

    /**********************************
     ************ TABLES **************
     **********************************/

    '& table': {
      maxWidth: maxWidthBodyText, // <<< Psuedo Text Container - 4 of 4
      [theme.breakpoints.up(730)]: {
        marginLeft: 'auto', // <<< Psuedo Text Container - 4 of 4
        marginRight: 'auto', // <<< Psuedo Text Container - 4 of 4
      },
      display: 'block', // Trade display table for scroll overflow
      wordBreak: 'normal',
      fontFamily: tableFontFamily,
      width: '100%',
      overflowX: 'auto',
      WebkitOverflowScrolling: 'touch', // iOS momentum scrolling.
      borderCollapse: 'collapse',
      marginBottom: '16px',
      borderSpacing: 0,
      overflow: 'hidden',
    },
    '& tr': {
      flexGrow: 1,
      width: '100%',
    },
    '& td': {
      ...theme.typography.body2,
      borderBottom: `1px solid ${theme.palette.divider}`,
      fontWeight: theme.typography.fontWeightLight,
      padding: 16,
      color: theme.palette.text.primary,
      fontFamily: tableFontFamily,
    },
    '& td code': {
      lineHeight: 1.6,
    },
    '& th': {
      lineHeight: theme.typography.pxToRem(24),
      fontWeight: theme.typography.fontWeightRegular,
      color: theme.palette.text.primary,
      whiteSpace: 'pre',
      borderBottom: `1px solid ${theme.palette.divider}`,
      padding: 16,
    },

    /**********************************
     ********** BLOCKQUOTE ************
     **********************************/

    '& blockquote': {
      borderLeft: `5px solid ${theme.palette.grey[700]}`,
      backgroundColor: 'rgba(189, 189, 189, 0.2)',
      padding: '4px 24px',
      margin: '24px 0',
      '& p': {
        marginTop: '16px',
      },
    },

    /**********************************
     ************* LINKS **************
     **********************************/

    '& a, & a code': {
      color:
        theme.palette.type === 'dark'
          ? theme.palette.secondary.main
          : theme.palette.primary.main,
      fontWeight: 500,
      textDecoration: 'none',
      '&:hover': {
        color:
          theme.palette.type === 'dark'
            ? theme.palette.common.white
            : theme.palette.secondary.main,
      },
    },

    /**********************************
     ************* IMAGES *************
     **********************************/

    '& img, video': {
      maxWidth: '100%',
      boxShadow: theme.shadows[7],
    },
    '& img': {
      display: 'inline-block', // Avoid layout jump
    },

    /**********************************
     ************ DIVIDER *************
     **********************************/

    '& hr': {
      height: 1,
      margin: theme.spacing(6, 0),
      border: 'none',
      flexShrink: 0,
      backgroundColor: theme.palette.divider,
    },
  },
}))

export default function MarkdownRenderer({ children }) {
  const classes = useStyles()
  return (
    <div>
      <Markdown
        children={children}
        className={classes.root}
        options={{
          overrides: {
            code: {
              component: CodeBlock, // inject className for syntax highlighting
            },
            img: {
              component: CenteredImage, // center images
            },
            input: {
              component: Checkbox, // use Material UI style checkbox
            },
          },
        }}
      />
    </div>
  )
}
