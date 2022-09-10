const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    mobileA10:'400px',
    mobile:'680px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }
  export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileA10: `(min-width: ${size.mobileM}) and (max-width:${size.mobileL})`,
    mobileL: `(min-width: ${size.mobileL})`,
    mobile: `(min-width: ${size.mobileS}) and (max-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop}) and (max-width: ${size.laptopL})`,
    laptopL: ` (min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  };