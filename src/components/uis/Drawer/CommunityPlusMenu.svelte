<style lang="postcss">
  .icon {
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
  }
</style>

<script lang="ts">
  import SelectIconButton from './SelectIconButton.svelte';
  import {SvgPlus} from '../../../utils/Icon';

  export let redirectUrl: string;
  export let onSelectAddCommunity: (id: string) => void;
</script>

<SelectIconButton
  selectValue={redirectUrl}
  style={'background-color: #F3F4F5'}
  onSelect={onSelectAddCommunity}
>
  <SvgPlus />
</SelectIconButton>
