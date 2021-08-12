<style lang="postcss">
  :global(.community-plus-menu) {
    background-color: var(--gray20);
    background-position: center;
    transition: background 0.8s;
  }
  :global(.community-plus-menu):hover {
    background: var(--gray30)
      radial-gradient(circle, transparent 1%, var(--gray30) 1%) center/15000%;
  }
  :global(.community-plus-menu):active {
    background-color: var(--gray20);
    background-size: 100%;
    transition: background 0s;
  }
</style>

<script lang="ts">
  import SelectIconButton from './SelectIconButton.svelte';
  import {SvgPlus} from '../../../utils/Icon';

  export let redirectPath: string;
  export let onSelectAddCommunity: (id: string) => void;
</script>

<SelectIconButton
  class="plus-menu"
  selectValue={redirectPath}
  onSelect={onSelectAddCommunity}
>
  <SvgPlus />
</SelectIconButton>
