<script lang="ts">
  import Carousel from '../uis/Carousel/Carousel.svelte';

  let string = `This is <strong>Temp!</strong>`;
</script>

<div>
  <p>{@html string}</p>

  <div style="padding: 10px;">
    <Carousel />
  </div>
</div>
