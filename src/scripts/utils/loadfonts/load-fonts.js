import WebFont from 'webfontloader';

export default function loadFonts(families) {
  WebFont.load({
    google: { families },
  });
}
