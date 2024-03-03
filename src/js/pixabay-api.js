'use strict';

import axios from 'axios';

const API_KEY = '42516548-e76607dce4d0f5a31ac9147e6';
const URL = 'https://pixabay.com/api/';

export function serchPicture(picture, page = 1) {
  return axios
    .get(URL, {
      params: {
        key: API_KEY,
        q: picture,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page,
      },
    })
    .then(res => {
      return res.data;
    });
}
