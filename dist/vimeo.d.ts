import { Node } from '@tiptap/core';
export interface VimeoOptions {
    addPasteHandler: boolean;
    autoplay: boolean;
    autopause?: boolean | number;
    background?: boolean | number;
    byline?: boolean | number;
    color?: string;
    colors?: string;
    controls: boolean | number;
    dnt?: boolean | number;
    keyboard?: boolean | number;
    loop: boolean | number;
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
    HTMLAttributes: Record<string, any>;
    inline: boolean;
    width: number;
    height: number;
}
type SetVimeoVideoOptions = {
    src: string;
    width?: number;
    height?: number;
};
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        vimeo: {
            setVimeoVideo: (options: SetVimeoVideoOptions) => ReturnType;
        };
    }
}
export declare const Vimeo: Node<VimeoOptions, any>;
export {};
