export const VIMEO_REGEX = /^(https?:\/\/)?(www\.)?(vimeo\.com\/\d+|player\.vimeo\.com\/video\/\d+)(\/?.*)?$/;
export const VIMEO_REGEX_GLOBAL = /^(https?:\/\/)?(www\.)?(vimeo\.com\/\d+|player\.vimeo\.com\/video\/\d+)(\/?.*)?$/g;

export const isValidVimeoUrl = (url: string) => {
  return url.match(VIMEO_REGEX);
};

export interface GetEmbedUrlOptions {
  url: string;
  autoplay?: boolean;
  autopause?: boolean | number;
  background?: boolean | number;
  byline?: boolean | number;
  color?: string;
  colors?: string;
  controls?: boolean | number;
  dnt?: boolean | number;
  keyboard?: boolean | number;
  loop?: boolean | number;
  muted?: boolean | number;
  pip?: boolean | number;
  playsinline?: boolean | number;
  portrait?: boolean | number;
  quality?: string;
  speed?: boolean | number;
  texttrack?: string;
  title?: boolean | number;
  transparent?: boolean | number;
  transcript?: boolean | number;
}

export const getEmbedUrlFromVimeoUrl = (options: GetEmbedUrlOptions) => {
  const {
    url,
    autoplay,
    autopause,
    background,
    byline,
    color,
    colors,
    controls,
    dnt,
    keyboard,
    loop,
    muted,
    pip,
    playsinline,
    portrait,
    quality,
    speed,
    texttrack,
    title,
    transparent,
    transcript,
  } = options;

  if (!isValidVimeoUrl(url)) {
    return null;
  }
  const videoIdRegex = /(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/;
  const matches = videoIdRegex.exec(url);

  if (!matches || !matches[1]) {
    return null;
  }

  let outputUrl = `https://player.vimeo.com/video/${matches[1]}`;

  const params: string[] = [];

  if (autopause !== undefined) {
    params.push(`autopause=${autopause ? 1 : 0}`);
  }

  if (autoplay !== undefined) {
    params.push(`autoplay=${autopause ? 1 : 0}`);
  }

  if (background !== undefined) {
    params.push(`background=${background ? 1 : 0}`);
  }

  if (byline !== undefined) {
    params.push(`byline=${byline ? 1 : 0}`);
  }

  if (color) {
    params.push(`color=${color}`);
  }

  if (colors) {
    params.push(`colors=${colors}`);
  }

  if (controls !== undefined) {
    params.push(`controls=${controls ? 1 : 0}`);
  }

  if (dnt !== undefined) {
    params.push(`dnt=${dnt ? 1 : 0}`);
  }

  if (keyboard !== undefined) {
    params.push(`keyboard=${keyboard ? 1 : 0}`);
  }

  if (loop !== undefined) {
    params.push(`loop=${loop ? 1 : 0}`);
  }

  if (muted !== undefined) {
    params.push(`muted=${muted ? 1 : 0}`);
  }

  if (pip !== undefined) {
    params.push(`pip=${pip ? 1 : 0}`);
  }

  if (playsinline !== undefined) {
    params.push(`playsinline=${playsinline ? 1 : 0}`);
  }

  if (portrait !== undefined) {
    params.push(`portrait=${portrait ? 1 : 0}`);
  }

  if (quality) {
    params.push(`quality=${quality}`);
  }

  if (speed !== undefined) {
    params.push(`speed=${speed ? 1 : 0}`);
  }

  if (texttrack) {
    params.push(`texttrack=${texttrack}`);
  }

  if (title !== undefined) {
    params.push(`title=${title ? 1 : 0}`);
  }

  if (transparent !== undefined) {
    params.push(`transparent=${transparent ? 1 : 0}`);
  }

  if (transcript !== undefined) {
    params.push(`transcript=${transcript ? 1 : 0}`);
  }

  if (params.length) {
    outputUrl += `?${params.join('&')}`;
  }

  return outputUrl;
};
