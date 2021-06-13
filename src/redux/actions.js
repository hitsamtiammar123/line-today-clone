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
});

export const setBookmark = (payload) => ({
  type: 'SET_BOOKMARK',
  payload,
});

export const removeBookmark = (payload) => ({
  type: 'REMOVE_BOOKMARK',
  payload,
})