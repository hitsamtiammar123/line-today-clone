export const getImageSrc = (d) => {
  return d?.thumbnail?.hash ? `https://obs.line-scdn.net/${d?.thumbnail?.hash}` : 'https://eagle-sensors.com/wp-content/uploads/unavailable-image.jpg';
}

export const getUrl = (d) => {
  return `https://today.line.me/id/v2/article/${d?.url?.hash}`
}