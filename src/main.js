'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { serchPicture, ggg } from './js/pixabay-api.js';
import { createPictureMarkup } from './js/render-functions.js';

const form = document.querySelector('.form-inline');
const containerEl = document.querySelector('.card-container');
const loadMoreBtn = document.querySelector('.label');
const preloader = document.getElementById('preloader');

const queryParams = {
  q: '',
  page: 1,
  maxPage: 0,
  per_page: 20,
};

let currentSearchQuery = '';
const hiddenClass = 'is-hidden';
function hide(button) {
  button.classList.add(hiddenClass);
}

function show(button) {
  button.classList.remove(hiddenClass);
}

function enable(button, preloader) {
  preloader.classList.add(hiddenClass);
  button.disabled = false;
}

function disable(button, preloader) {
  preloader.classList.remove(hiddenClass);
  button.disabled = true;
}
function showLoadingIndicator() {
  containerEl.innerHTML = '<div class="loader"></div>';
}
function hideLoadingIndicator() {
  const loadingElement = containerEl.querySelector('.loader');
  if (loadingElement) {
    loadingElement.remove();
  }
}

form.addEventListener('submit', handleSearch);
async function handleSearch(event) {
  event.preventDefault();
  containerEl.innerHTML = '';
  const form = event.currentTarget;
  const picture = form.elements.picture.value.trim();
  currentSearchQuery = picture;
  queryParams.page = 1;
  if (picture === '' || picture === null) {
    iziToast.error({
      title: 'Error',
      message: `❌ Sorry, there are no images matching your search query. Please, try again!`,
      maxWidth: 300,
      progressBar: true,
      progressBarEasing: false,
      position: 'topRight',
      backgroundColor: '#ff6d60',
    });
    containerEl.innerHTML = '';
    hide(loadMoreBtn);
    return;
  }

  showLoadingIndicator();
  try {
    const { hits, totalHits } = await serchPicture(picture);
    console.log(hits);
    console.log(totalHits);
    if (hits.length < maxElementPage) {
      iziToast.error({
        title: 'Error',
        message: `"We're sorry, but you've reached the end of search results."`,
        maxWidth: 300,
        progressBar: true,
        progressBarEasing: false,
        position: 'topRight',
        backgroundColor: '#ff6d60',
      });
    }
    if (hits && hits.length > 0) {
      queryParams.maxPage = Math.ceil(totalHits / queryParams.per_page);
      createPictureMarkup(hits, containerEl);
      const lightbox = new SimpleLightbox('.card-container a', {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
      });
      lightbox.refresh();
      if (hits && hits.length > 0 && hits.length !== totalHits) {
        show(loadMoreBtn);
        loadMoreBtn.removeEventListener('click', handleLoadMore);
        loadMoreBtn.addEventListener('click', handleLoadMore);
      } else {
        hide(loadMoreBtn);
      }
    } else {
      containerEl.innerHTML = '';
      iziToast.error({
        title: 'Error',
        message: `❌ Sorry, there are no images matching your search query. Please, try again!`,
        maxWidth: 300,
        progressBar: true,
        progressBarEasing: false,
        position: 'topRight',
        backgroundColor: '#ff6d60',
      });
      hide(loadMoreBtn);
    }
  } catch (err) {
    console.log(err);
  } finally {
    hideLoadingIndicator();
    form.reset();
  }
}

async function handleLoadMore() {
  queryParams.page += 1;
  disable(loadMoreBtn, preloader);
  try {
    const { hits } = await serchPicture(currentSearchQuery, queryParams.page);
    createPictureMarkup(hits, containerEl);
    const cardHeight = containerEl
      .querySelector('.picture-link')
      .getBoundingClientRect().height;
    window.scrollBy({ top: cardHeight * 3, behavior: 'smooth' });
    const lightbox = new SimpleLightbox('.card-container a', {
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    });
    lightbox.refresh();
  } catch (err) {
    console.log(err);
  } finally {
    enable(loadMoreBtn, preloader);
    console.log(queryParams.page);
    console.log(queryParams.maxPage);
    if (queryParams.page >= queryParams.maxPage) {
      hide(loadMoreBtn);
      iziToast.error({
        title: 'Error',
        message: `"We're sorry, but you've reached the end of search results."`,
        maxWidth: 300,
        progressBar: true,
        progressBarEasing: false,
        position: 'topRight',
        backgroundColor: '#ff6d60',
      });
      loadMoreBtn.removeEventListener('click', handleLoadMore);
    } else {
      show(loadMoreBtn);
      loadMoreBtn.removeEventListener('click', handleLoadMore);
      loadMoreBtn.addEventListener('click', handleLoadMore);
    }
  }
}
