# Project media

Place screenshots and the NURTURE I demonstration video in folders here, then update
`projectMedia` near the top of `src/app/components/Projects.tsx`.

The project keys are `crud`, `health`, and `nurture`. Example:

```tsx
nurture: {
  screenshots: [
    { src: "/projects/nurture/system.webp", alt: "NURTURE I fertilizer production and dispensing system" },
  ],
  videoSrc: "/projects/nurture/demo.mp4",
  posterSrc: "/projects/nurture/system.webp",
  captionsSrc: "/projects/nurture/captions.vtt",
},
```

Use actual filenames and descriptive image captions. `posterSrc` and
`captionsSrc` are optional; provide captions when a video includes speech.
All projects support screenshots; only NURTURE I displays a video area.
Leave `screenshots: []` to keep the image placeholder, or omit NURTURE I's
`videoSrc` to keep its video coming-soon placeholder.

For the NURTURE I demo, show tray identification, dispensing, and monitoring.
Only show behavior captured from the
actual project. Videos use native playback controls and do not autoplay.
