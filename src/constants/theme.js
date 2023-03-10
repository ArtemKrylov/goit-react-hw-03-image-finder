export const theme = Object.freeze({
  colors: {
    white: '#ffffff',
    grey: `#dddddd`,
    darkGrey: '#565656',
    black: '#161616',
    accent: '#ff6a00',
    blue: '#3f51b5',
  },
  media: {
    tablet: `@media screen and (min-width: 768px)`,
    desktop: `@media screen and (min-width: 1024px)`,
    huge: `@media screen and (min-width: 1281px)`,
  },
  shadows: {
    fontBlack: `1px 1px #161616`,
    fontAccent: `1px 1px #ff6a00`,
    boxAccent: `0 1px 1px #ff006e, 0 2px 3px #ff004e, 1px 3px 5px #ff6a00;`,
    boxDark: `0 1px 1px rgb(0 0 0 / 12%), 0 1px 1px rgb(0 0 0 / 6%), 1px 2px 3px rgb(0 0 0 / 16%);`,
    boxDarkHover: `0 1px 1px rgb(0 0 0 / 12%), 0 2px 2px rgb(0 0 0 / 6%), 1px 3px 4px rgb(0 0 0 / 16%);`,
  },
  cubic: `250ms cubic-bezier(0.4, 0, 0.2, 1)`,
  modalTimeOut: 250,
  borderRadius: '5px',
  visuallyHidden: `position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    border: 0;
    clip: rect(0 0 0 0);`,
});
