import aiOrchestrationMiddlewareImg from '../assets/ai-orchestration-middleware.png'
import offlineFirstBrowserRuntimeImg from '../assets/offline-first-browser-runtime.png'
import websocketAudioSyncImg from '../assets/websocket-audio-sync.png'
import browserArRuntimeImg from '../assets/browser-ar-runtime.png'

export const featuredRepos = [
  {
    title: "AI Orchestration Middleware",
    slug: "ai-orchestration-middleware",
    description: "Routes requests across multiple LLMs with deterministic fallback logic and Redis-backed session state.",
    tags: ["Node.js", "TypeScript", "Redis", "Multi-model routing"],
    liveUrl: "https://goalawareai.vercel.app",
    githubUrl: "https://github.com/sujoymondal87/ai-orchestration-middleware",
    videoUrl: "https://github.com/user-attachments/assets/69655b19-8a24-4817-93b3-430d8c7a9729",
    thumbnailUrl: aiOrchestrationMiddlewareImg,
    hasVideo: true
  },
  {
    title: "Offline-First Browser Runtime",
    slug: "offline-first-browser-runtime",
    description: "A browser runtime that keeps working with no connection, queuing writes locally and syncing the moment it's back.",
    tags: ["IndexedDB", "Service Worker", "Sync Queue"],
    liveUrl: "https://offlineguide.vercel.app",
    githubUrl: "https://github.com/sujoymondal87/offline-first-browser-runtime",
    videoUrl: "https://github.com/user-attachments/assets/39cec19c-424b-4e6c-8e09-2e8e7b5dd54c",
    thumbnailUrl: offlineFirstBrowserRuntimeImg,
    hasVideo: true
  },
  {
    title: "WebSocket Audio Sync",
    slug: "websocket-audio-sync",
    description: "Keeps audio playback synchronized across multiple devices in real time over WebSockets.",
    tags: ["WebSockets", "Real-time sync"],
    liveUrl: "https://realtimesync.onrender.com",
    githubUrl: "https://github.com/sujoymondal87/websocket-audio-sync",
    videoUrl: "https://github.com/user-attachments/assets/ee1bac52-d08b-4fe9-a013-0ffcfaf706ed",
    thumbnailUrl: websocketAudioSyncImg,
    hasVideo: true
  },
  {
    title: "Browser AR Runtime",
    slug: "browser-ar-runtime",
    description: "Markerless augmented reality running entirely in the browser — no app install required.",
    tags: ["Jeeliz", "MindAR", "Browser AR"],
    liveUrl: "https://webar-studio.vercel.app",
    githubUrl: "https://github.com/sujoymondal87/browser-ar-runtime",
    videoUrl: "https://github.com/user-attachments/assets/6e525a4f-cb34-46c5-9db1-82581bda91d6",
    thumbnailUrl: browserArRuntimeImg,
    hasVideo: true
  }
]
