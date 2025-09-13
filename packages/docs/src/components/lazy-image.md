---
title: LazyImage
nav: Components
---

# LazyImage

A component for lazy loading images with a fade-in animation and error handling.

## Basic Usage

<code src="./demo/lazy-image/basic.tsx"></code>

## Error Fallback

You can provide a custom component to render when the image fails to load.

<code src="./demo/lazy-image/error.tsx"></code>

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| src | Image source | `string` | - |
| alt | Image alt text | `string` | - |
| placeholder | Placeholder to show while loading. | `React.ReactNode` | `<Skeleton />` |
| errorFallback | Fallback to show on error. | `React.ReactNode` | `<div>Failed to load image</div>` |
| root | The element that is used as the viewport for checking visibility. Defaults to the browser viewport. | `Element \| null` | `null` |
| rootMargin | Margin around the root. Can be used to preload images. | `string` | `200px` |
| threshold | Percentage of the target's visibility the observer's callback should be executed. | `number \| number[]` | `0` |