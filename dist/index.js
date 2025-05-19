import { Node, nodePasteRule, mergeAttributes } from '@tiptap/core';

const VIMEO_REGEX = /^(https?:\/\/)?(www\.)?(vimeo\.com\/\d+|player\.vimeo\.com\/video\/\d+)(\/?.*)?$/;
const VIMEO_REGEX_GLOBAL = /^(https?:\/\/)?(www\.)?(vimeo\.com\/\d+|player\.vimeo\.com\/video\/\d+)(\/?.*)?$/g;
const isValidVimeoUrl = (url) => {
    return url.match(VIMEO_REGEX);
};
const getEmbedUrlFromVimeoUrl = (options) => {
    const { url, autoplay, autopause, background, byline, color, colors, controls, dnt, keyboard, loop, muted, pip, playsinline, portrait, quality, speed, texttrack, title, transparent, transcript, } = options;
    if (!isValidVimeoUrl(url)) {
        return null;
    }
    const videoIdRegex = /(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)(?:\/([a-f0-9]+))?/;
    const matches = videoIdRegex.exec(url);
    if (!matches || !matches[1]) {
        return null;
    }
    let outputUrl = `https://player.vimeo.com/video/${matches[1]}`;
    const params = [];
    if (matches[2]) {
        params.push(`h=${matches[2]}`);
    }
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

const Vimeo = Node.create({
    name: 'vimeo',
    addOptions() {
        return {
            addPasteHandler: true,
            autoplay: false,
            autopause: undefined,
            background: undefined,
            byline: undefined,
            color: undefined,
            colors: undefined,
            controls: true,
            dnt: undefined,
            keyboard: undefined,
            loop: false,
            muted: undefined,
            pip: undefined,
            playsinline: undefined,
            portrait: undefined,
            quality: undefined,
            speed: undefined,
            texttrack: undefined,
            title: undefined,
            transparent: undefined,
            transcript: undefined,
            HTMLAttributes: {},
            inline: false,
            width: 640,
            height: 480,
        };
    },
    inline() {
        return this.options.inline;
    },
    group() {
        return this.options.inline ? 'inline' : 'block';
    },
    draggable: true,
    addAttributes() {
        return {
            src: {
                default: null,
            },
            width: {
                default: this.options.width,
            },
            height: {
                default: this.options.height,
            },
        };
    },
    parseHTML() {
        return [
            {
                tag: 'div[data-vimeo-video] iframe',
            },
        ];
    },
    addCommands() {
        return {
            setVimeoVideo: (options) => ({ commands }) => {
                if (!isValidVimeoUrl(options.src)) {
                    return false;
                }
                return commands.insertContent({
                    type: this.name,
                    attrs: options,
                });
            },
        };
    },
    addPasteRules() {
        if (!this.options.addPasteHandler) {
            return [];
        }
        return [
            nodePasteRule({
                find: VIMEO_REGEX_GLOBAL,
                type: this.type,
                getAttributes: (match) => {
                    return { src: match.input };
                },
            }),
        ];
    },
    renderHTML({ HTMLAttributes }) {
        const embedUrl = getEmbedUrlFromVimeoUrl({
            url: HTMLAttributes.src,
            autoplay: this.options.autoplay,
            autopause: this.options.autopause,
            background: this.options.background,
            byline: this.options.byline,
            color: this.options.color,
            colors: this.options.colors,
            controls: this.options.controls,
            dnt: this.options.dnt,
            keyboard: this.options.keyboard,
            loop: this.options.loop,
            muted: this.options.muted,
            pip: this.options.pip,
            playsinline: this.options.playsinline,
            portrait: this.options.portrait,
            quality: this.options.quality,
            speed: this.options.speed,
            texttrack: this.options.texttrack,
            title: this.options.title,
            transparent: this.options.transparent,
            transcript: this.options.transcript,
        });
        HTMLAttributes.src = embedUrl;
        return [
            'div',
            {
                'data-vimeo-video': '',
                style: 'padding:56.25% 0 0 0; position:relative;',
            },
            [
                'iframe',
                mergeAttributes(this.options.HTMLAttributes, {
                    src: embedUrl,
                    frameborder: '0',
                    width: this.options.width,
                    height: this.options.height,
                    allow: 'autoplay; fullscreen; picture-in-picture; clipboard-write',
                    style: 'position:absolute; top:0; left:0; width:100%; height:100%;',
                }, HTMLAttributes),
            ],
        ];
    },
});

export { Vimeo, Vimeo as default };
//# sourceMappingURL=index.js.map
