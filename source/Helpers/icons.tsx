import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

/* Use this if you are using Expo
  import * as Svg from 'react-native-svg';
  const { Circle, Rect } = Svg;
  */

import React from 'react';
import {SVGProps} from './types';

export const CopyIcon = (props: SVGProps) => (
  <Svg width={props.size} height={props.size} viewBox="0 0 48 48">
    <Path
      fill={props.color}
      d="M 18.5 5 C 15.467 5 13 7.467 13 10.5 L 13 32.5 C 13 35.533 15.467 38 18.5 38 L 34.5 38 C 37.533 38 40 35.533 40 32.5 L 40 10.5 C 40 7.467 37.533 5 34.5 5 L 18.5 5 z M 11 10 L 9.78125 10.8125 C 8.66825 11.5545 8 12.803625 8 14.140625 L 8 33.5 C 8 38.747 12.253 43 17.5 43 L 30.859375 43 C 32.197375 43 33.4465 42.33175 34.1875 41.21875 L 35 40 L 17.5 40 C 13.91 40 11 37.09 11 33.5 L 11 10 z"></Path>
  </Svg>
);

export const BackIcon = (props: SVGProps) => (
  <Svg width={props.size} height={props.size} viewBox="0 0 20 20">
    <Path
      fill={props.color}
      d="M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0
L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109
c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483
c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788
S18.707,9.212,18.271,9.212z"></Path>
  </Svg>
);

export const DeleteIcon = (props: SVGProps) => (
  <Svg height={props.size} viewBox="0 0 515.556 515.556" width={props.size}>
    <Path
      fill={props.color}
      d="m64.444 451.111c0 35.526 28.902 64.444 64.444 64.444h257.778c35.542 0 64.444-28.918 64.444-64.444v-322.222h-386.666z"
    />
    <Path
      fill={props.color}
      d="m322.222 32.222v-32.222h-128.889v32.222h-161.111v64.444h451.111v-64.444z"
    />
  </Svg>
);
