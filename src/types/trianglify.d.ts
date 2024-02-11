interface Polygon {
  vertexIndices: number[];
  color: ChromaColor;
}

interface Pattern {
  polys: Polygon[];
  opts: TrianglifyOptions;
  svg: (svgOpts?: SVGOpts) => SVGElement;
  canvas: (canvas?: HTMLCanvasElement) => HTMLCanvasElement;
  png: () => string;
}

interface SVGOpts {
  includeNamespace?: boolean;
}

type colorbrews =
  | "YlGn"
  | "YlGnBu"
  | "GnBu"
  | "BuGn"
  | "PuBuGn"
  | "PuBu"
  | "BuPu"
  | "RdPu"
  | "PuRd"
  | "OrRd"
  | "YlOrRd"
  | "YlOrBr"
  | "Purples"
  | "Blues"
  | "Greens"
  | "Oranges"
  | "Reds"
  | "Greys"
  | "PuOr"
  | "BrBG"
  | "PRGn"
  | "PiYG"
  | "RdBu"
  | "RdGy"
  | "RdYlBu"
  | "Spectral"
  | "RdYlGn";

interface TrianglifyOptions {
  width: number;
  height: number;
  cell_size?: number;
  variance?: number;
  seed?: string | number | null;
  x_colors?: string | string[] | false;
  y_colors?: string | string[] | false;
  palette?: colorbrews;
  color_space?: string;
  color_function?: (x: number, y: number) => string;
  stroke_width?: number;
  points?: [number, number][];
}

function Trianglify(options?: TrianglifyOptions): Pattern;

export default Trianglify;
