<style lang="postcss">
  .icon {
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
  }
</style>

<script lang="ts">
  import SelectIconButton from './SelectIconButton.svelte';
  import type {CommunityType} from '../../../types';

  export let community: CommunityType;
  export let isSelected = false;
  export let selectCommunity: (id: string) => void;
</script>

<SelectIconButton
  selectValue={community.id}
  isSelected={isSelected}
  onSelect={selectCommunity}
>
  <img class="icon" src={community.imageUrl} alt="icon" style="icon" />
</SelectIconButton>
