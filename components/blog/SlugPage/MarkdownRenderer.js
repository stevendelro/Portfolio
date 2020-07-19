import { makeStyles } from '@material-ui/core/styles'
import Markdown from 'markdown-to-jsx'
import CodeBlock from './CodeBlock'

/**
 * I used the styles from the Material-UI's documentation markdown component as the initial boilerplate for this.
 * https://github.com/mui-org/material-ui/blob/master/docs/src/modules/components/MarkdownElement.js
 */

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

    /**
     * >>>>> BLOCK CODE *CONTAINER* <<<<<
     */

    '& code': {
      direction: 'ltr',
      lineHeight: 1.4,
      backgroundColor: '#272822',
      display: 'inline-block',
      fontFamily: 'Fira Code, "Liberation Mono", Menlo, Courier, monospace',
      WebkitFontSmoothing: 'subpixel-antialiased',
      fontSize: '.85em',
      borderRadius: 2,
    },
    '& code[class*="language-"]': {
      backgroundColor: '#272822',
      color: '#fff',
      lineHeight: 1.5, // Avoid layout jump after hydration (style injected by prism)
    },
    '& pre code': {
      /*    Overkill Responsiveness   */
      [theme.breakpoints.up(1920)]: {
        fontSize: theme.typography.pxToRem(10),
      },
      [theme.breakpoints.between(1700, 1920)]: {
        fontSize: theme.typography.pxToRem(14),
      },
      [theme.breakpoints.between(1500, 1700)]: {
        fontSize: theme.typography.pxToRem(13),
      },
      [theme.breakpoints.between(1400, 1500)]: {
        fontSize: theme.typography.pxToRem(12),
      },
      [theme.breakpoints.between(1280, 1400)]: {
        fontSize: theme.typography.pxToRem(10),
      },
      [theme.breakpoints.between(1150, 1280)]: {
        fontSize: theme.typography.pxToRem(15),
      },
      [theme.breakpoints.between(1050, 1150)]: {
        fontSize: theme.typography.pxToRem(13),
      },
      [theme.breakpoints.between(950, 1050)]: {
        fontSize: theme.typography.pxToRem(12),
      },
      [theme.breakpoints.between(850, 950)]: {
        fontSize: theme.typography.pxToRem(11),
      },
      [theme.breakpoints.between(750, 850)]: {
        fontSize: theme.typography.pxToRem(10),
      },
      [theme.breakpoints.between(600, 750)]: {
        fontSize: theme.typography.pxToRem(9),
      },
      [theme.breakpoints.between(500, 600)]: {
        fontSize: theme.typography.pxToRem(8),
      },
      [theme.breakpoints.down(500)]: {
        fontSize: theme.typography.pxToRem(6),
      },
    },
    '& .token.operator': {
      background: 'transparent',
    },

    /**
     * >>>>> BLOCK CODE ITSELF <<<<<
     */

    '& pre': {
      margin: theme.spacing(3, 'auto'),
      padding: theme.spacing(2),
      backgroundColor: '#272822',
      color: '#fff',
      direction: 'ltr',
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

    /**
     * >>>>> INLINE CODE <<<<<
     */

    '& p code': {
      direction: 'ltr',
      lineHeight: 1.4,
      display: 'inline-block',
      fontFamily: 'Fira Code, "Liberation Mono", Menlo, Courier, monospace',
      WebkitFontSmoothing: 'subpixel-antialiased',
      padding: '0px 5px',
      backgroundColor:
        theme.palette.type === 'dark' ? '#272822' : theme.palette.grey[300],
      color:
        theme.palette.type === 'dark'
          ? theme.palette.secondary.main
          : theme.palette.primary.main,
      fontSize: '.85em',
      fontStyle: 'bold',
      borderRadius: 4,
      boxShadow: theme.shadows[1],
    },

    /**
     * >>>>> MARKDOWN <<<<<
     */

    '& h1': {
      ...theme.typography.h3,
      fontFamily: 'Roboto Slab',
      fontWeight: 500,
      fontSize: theme.typography.pxToRem(40),
      margin: '16px 0',
    },
    '& .description': {
      ...theme.typography.h5,
      margin: '0 0 40px',
    },
    '& h2': {
      ...theme.typography.h4,
      fontFamily: 'Roboto Slab',
      fontWeight: 500,
      fontSize: theme.typography.pxToRem(30),
      margin: '40px 0 16px',
    },
    '& h3': {
      ...theme.typography.h5,
      fontFamily: 'Roboto Slab',
      fontWeight: 500,
      margin: '40px 0 16px',
    },
    '& h4': {
      ...theme.typography.h6,
      margin: '32px 0 16px',
      fontFamily: 'Roboto Slab',
      fontWeight: 500,
      color: theme.palette.type === 'dark' ? '#ff9100' : '#144d53',
    },
    '& h5': {
      ...theme.typography.subtitle2,
      margin: '32px 0 16px',
      fontFamily: 'Roboto Slab',
      fontWeight: 500,
      color: theme.palette.type === 'dark' ? '#ff9100' : '#144d53',
    },
    '& h6': {
      ...theme.typography.caption,
      margin: '32px 0 16px',
      fontFamily: 'Roboto Slab',
      fontWeight: 500,
      color: theme.palette.type === 'dark' ? '#ff9100' : '#144d53',
    },
    '& p, & ul, & ol': {
      marginTop: 0,
      marginBottom: 16,

      maxWidth: '560px',
      [theme.breakpoints.up(730)]: {
        marginLeft: 'auto', // <<< Psuedo Text Container - 1 of 4
        marginRight: 'auto',
      },
    },
    '& ul': {
      paddingLeft: 30,
      maxWidth: '560px',
      [theme.breakpoints.up(730)]: {
        marginLeft: 'auto', // <<< Psuedo Text Container - 2 of 4
        marginRight: 'auto',
      },
    },
    '& h1, & h2, & h3, & h4, & h5, & h6': {
      maxWidth: '560px',
      [theme.breakpoints.up(730)]: {
        marginLeft: 'auto', // Psuedo Text Container - 3 of 4
        marginRight: 'auto',
      },
      '& code': {
        fontSize: 'inherit',
        lineHeight: 'inherit',
        wordBreak: 'break-all', // Remove scroll on small screens.
      },
      '& .anchor-link-style': {
        display: 'none', // To prevent the link to get the focus.
      },
      '&:hover .anchor-link-style': {
        display: 'inline-block',
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

    /**
     * >>>>> TABLES <<<<<
     */

    '& table': {
      maxWidth: '560px',
      [theme.breakpoints.up(730)]: {
        marginLeft: 'auto', // <<< Psuedo Text Container - 4 of 4
        marginRight: 'auto',
      },
      display: 'block', // Trade display table for scroll overflow
      wordBreak: 'normal',
      fontFamily: 'Roboto',
      width: '100%',
      overflowX: 'auto',
      WebkitOverflowScrolling: 'touch', // iOS momentum scrolling.
      borderCollapse: 'collapse',
      marginBottom: '16px',
      borderSpacing: 0,
      overflow: 'hidden',
      '& .prop-name': {
        fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace',
      },
      '& .required': {
        color: theme.palette.type === 'light' ? '#006500' : '#a5ffa5',
      },
      '& .prop-type': {
        fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace',
        color: theme.palette.type === 'light' ? '#932981' : '#ffb6ec',
      },
      '& .prop-default': {
        fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace',
        borderBottom: `1px dotted ${theme.palette.divider}`,
      },
    },
    '& tr': {
      width: '100%',
    },
    '& td': {
      ...theme.typography.body2,
      borderBottom: `1px solid ${theme.palette.divider}`,
      fontWeight: theme.typography.fontWeightLight,
      padding: 16,
      color: theme.palette.text.primary,
      fontFamily: 'Roboto',
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

    /**
     *  >>>>> BLOCKQUOTE <<<<<
     */

    '& blockquote': {
      borderLeft: `5px solid ${theme.palette.grey[700]}`,
      backgroundColor: 'rgba(189, 189, 189, 0.2)',
      padding: '4px 24px',
      [theme.breakpoints.up(900)]: {
        padding: '4px 0', // remove 24px left and right padding
      },
      margin: '24px 0',
      '& p': {
        marginTop: '16px',
      },
    },

    /**
     * >>>>> LINKS <<<<<
     */

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

    /**
     *  >>>>> IMAGES <<<<<
     */

    '& img, video': {
      maxWidth: '100%',
    },
    '& img': {
      display: 'inline-block', // Avoid layout jump
      textAlign: 'center',
    },

    /**
     *  >>>>> OTHER <<<<<
     */

    '& hr': {
      height: 1,
      margin: theme.spacing(6, 0),
      border: 'none',
      flexShrink: 0,
      backgroundColor: theme.palette.divider,
    },
    '& kbd': {
      // Style taken from GitHub
      padding: '2px 5px',
      font: '11px Consolas,Liberation Mono,Menlo,monospace',
      lineHeight: '10px',
      color: '#444d56',
      verticalAlign: 'middle',
      backgroundColor: '#fafbfc',
      border: '1px solid #d1d5da',
      borderRadius: 3,
      boxShadow: 'inset 0 -1px 0 #d1d5da',
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
          },
        }}
      />
    </div>
  )
}
