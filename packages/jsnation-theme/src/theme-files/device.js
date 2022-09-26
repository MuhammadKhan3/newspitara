const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    mobileA10:'550px',
    mobile:'699px',
    tablet: '700px',
    laptopS:'1023px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }
  export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileA10: `(min-width: ${size.mobileS}) and (max-width:${size.mobileA10})`,
    mobileL: `(min-width: ${size.mobileL})`,
    mobile: `(min-width: ${size.mobileS}) and (max-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet}) and (max-width: ${size.laptopS})`,
    laptop: `(min-width: ${size.laptop}) and (max-width: ${size.laptopL})`,
    laptopL: ` (min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  };