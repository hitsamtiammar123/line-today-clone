export const onLoad = (payload) => ({
  type: 'MAIN_ONLOAD',
  payload,
});

export const onLoadSuccess = (payload) => ({
  type: 'MAIN_SUCCESS',
  payload,
});

export const onLoadFailed = (payload) => ({
  type: 'MAIN_FAILED',
  payload,
})