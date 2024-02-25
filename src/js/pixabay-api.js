import axios from 'axios';

import { value } from '../main.js';
import { page } from '../main.js';

export async function getPhotoBySearch(value, currentPage) {
  try {
    const KEY = '42424645-ecd3f1048329df1dec069e6a8';
    const response = await axios.get('https://pixabay.com/api/', {
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
      throw new Error('No images found');
    }

    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchMoreImages(value, currentPage) {
  try {
    const params = new URLSearchParams({
      key: '42424645-ecd3f1048329df1dec069e6a8',
      q: value,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: '15',
      page: currentPage,
    });

    let images = await axios.get(`https://pixabay.com/api/?${params}`);
    if (images.data.total === 0) {
      throw new Error('No images found');
    }

    return images.data;
  } catch (error) {
    throw error;
  }
}
