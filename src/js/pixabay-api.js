import axios from 'axios';

export async function getPhotoBySearch(value, currentPage) {
  try {
    const KEY = '42516413-5d4d39fc32c8318bac1e6503b';
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
