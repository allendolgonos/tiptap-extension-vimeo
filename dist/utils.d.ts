export declare const VIMEO_REGEX: RegExp;
export declare const VIMEO_REGEX_GLOBAL: RegExp;
export declare const isValidVimeoUrl: (url: string) => RegExpMatchArray;
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
export declare const getEmbedUrlFromVimeoUrl: (options: GetEmbedUrlOptions) => string;
