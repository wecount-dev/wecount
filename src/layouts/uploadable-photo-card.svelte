<style lang="postcss">
  .uploadable-photo-card {
    background-color: var(--background);
    width: 72px;
    height: 72px;
    border: 1px solid var(--border);
    position: relative;

    img {
      width: 16px;
      height: 16px;

      position: absolute;
      right: 2px;
      top: 2px;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }
  }
</style>

<script>
  import {SvgClose} from '../utils/icons';
</script>

<div class="uploadable-photo-card">
  <img src={SvgClose} class="close" alt="" />
</div>
