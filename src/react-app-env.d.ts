/// <reference types="react-scripts" />

declare module '*.mp3' {
  const src: string;
  export default src;
}

// module.exports = () => ({
//   ...module.exports,
//   resolve: {
//     fallback: {
//     module: "empty",
//     dgram: "empty",
//     dns: "mock",
//     fs: "empty",
//     http2: "empty",
//     net: "empty",
//     tls: "empty",
//     child_process: "empty",
//     process: require.resolve("process/browser"),
//     zlib: require.resolve("browserify-zlib"),
//     stream: require.resolve("stream-browserify"),
//     util: require.resolve("util"),
//     buffer: require.resolve("buffer"),
//     asset: require.resolve("assert"),
//     }
//   }
// });