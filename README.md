# @fourwaves/tiptap-extension-vimeo

## Introduction

This project is a fork of [@tiptap/extension-youtube](https://github.com/ueberdosis/tiptap/tree/main/packages/extension-youtube) that has been modified to support embedding Vimeo videos instead of YouTube. It works with the Tiptap editor, which is a headless wrapper around ProseMirror – a toolkit for building rich text WYSIWYG editors.

## Official Documentation

For general Tiptap usage and setup, please refer to the [Tiptap website](https://tiptap.dev/).

## Installation

```bash
npm install @fourwaves/tiptap-extension-vimeo
```

## Usage

```
import { Vimeo } from '@fourwaves/tiptap-extension-vimeo'

const editor = new Editor({
  extensions: [Vimeo],
})

```

### Configuration Options

The following options can be passed to `Vimeo.configure` along with their default values:

- `addPasteHandler`: `true` – Enable or disable handling of pasted Vimeo URLs.
- `autoplay`: `false` – Enable or disable autoplay.
- `autopause`: `undefined` – Automatically pause other videos when playing this one.
- `background`: `undefined` – Play video as a background without sound.
- `byline`: `undefined` – Show or hide the byline on the video.
- `color`: `undefined` – Set a specific color for the video player.
- `colors`: `undefined` – Specify colors to use for the player interface.
- `controls`: `true` – Show or hide video controls.
- `dnt`: `undefined` – Disable tracking (Do Not Track).
- `keyboard`: `undefined` – Enable or disable keyboard shortcuts.
- `loop`: `false` – Enable or disable looping.
- `muted`: `undefined` – Mute or unmute the video.
- `pip`: `undefined` – Enable or disable picture-in-picture mode.
- `playsinline`: `undefined` – Play video inline on iOS devices.
- `portrait`: `undefined` – Show or hide the portrait on the video.
- `quality`: `undefined` – Set the quality of the video (e.g., '1080p').
- `speed`: `undefined` – Enable or disable playback speed controls.
- `texttrack`: `undefined` – Specify text track language for subtitles.
- `title`: `undefined` – Show or hide the title of the video.
- `transparent`: `undefined` – Enable or disable transparent background.
- `transcript`: `undefined` – Show or hide the transcript.
- `HTMLAttributes`: `{}` – Set additional HTML attributes for the player.
- `inline`: `false` – Enable or disable inline video display.
- `width`: `640` – Set the width of the video player.
- `height`: `480` – Set the height of the video player.
