import axios from 'axios';

import { value } from '../main.js';
import { page } from '../main.js';

export async function getPhotoBySearch(value, currentPage) {
  try {
    const KEY = '42516413-5d4d39fc32c8318bac1e6503b';
    const response = await axios.get('https://pixabay.com/app/', {
      params: {
        key: KEY,
        q: value,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: currentPage,
        per_page: '15',
      },
    });

    if (response.data.total === 0) {
      throw new Error('Found no images');
    }

    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchMoreImages(value, currentPage) {
  try {
    const params = new URLSearchParams({
      key: '42516413-5d4d39fc32c8318bac1e6503b',
      q: value,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: '15',
      page: currentPage,
    });

    let images = await axios.get(`https://pixabay.com/app/?${params}`);
    if (images.data.total === 0) {
      throw new Error('Found no images');
    }

    return images.data;
  } catch (error) {
    throw error;
  }
}
