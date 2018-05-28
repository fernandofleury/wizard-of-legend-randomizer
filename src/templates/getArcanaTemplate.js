export default ({ imageUrl, name, type }) => `<div class="base-item">
<div class=" arcana-item${type === 'signature' ? ' signature' : ''} ">
  <figure class="item-image-wrapper ">
    <img class="item-image " src="${imageUrl} " alt="${name} ">
  </figure>
</div>
</div>`;
