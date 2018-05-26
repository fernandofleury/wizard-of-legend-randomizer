export default ({ imageUrl, name, type }) => `<div class="item ${type === 'signature' ? 'signature' : ''}">
<figure class="item-image-wrapper">
  <img class="item-image" src="${imageUrl}"
    alt="${name}">
</figure>
</div>`;
