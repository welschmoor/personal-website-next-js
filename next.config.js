module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/blog/:path",
        destination: "/newblog/:path",
        permanent: false,
      }
    ]
  }
}
