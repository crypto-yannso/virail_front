export interface Theme {
  fonts: {
    body: string;
    display: string;
  };
  colors: {
    primary: ColorScale;
    secondary: ColorScale;
    text: {
      primary: string;
      secondary: string;
    };
    background: {
      primary: string;
      secondary: string;
    };
  };
}

interface ColorScale {
  DEFAULT: string;
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}