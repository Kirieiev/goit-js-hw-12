'use strict';

export function createPictureMarkup(hits, containerEl) {
  const markup = hits
    .map(
      ({
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
        largeImageURL,
      }) => `<a href="${largeImageURL}" class= "picture-link">
    <img src = "${webformatURL}" alt="${tags}">
    <div class= "picture-content">
        <div class= "picture-text">
            <span class= "picture-title">Likes</span>
            <span class= "picture-sub-title">${likes}</span>
        </div>
        <div class= "picture-text">
            <span class= "picture-title">Views</span>
            <span class= "picture-sub-title">${views}</span>
        </div>
        <div class= "picture-text">
            <span class= "picture-title">Comments</span>
            <span class= "picture-sub-title">${comments}</span>
        </div>
        <div class= "picture-text">
            <span class= "picture-title">Downloads</span>
            <span class= "picture-sub-title">${downloads}</span>
        </div>
    </div>
</a>`
    )
    .join('');
  containerEl.insertAdjacentHTML('beforeend', markup);
}
