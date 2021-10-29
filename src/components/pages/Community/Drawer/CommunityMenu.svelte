<style lang="postcss">
  img {
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box;
    border-radius: 10px;
  }
</style>

<script lang="ts">
  import SelectIconButton from './SelectIconButton.svelte';
  import type {CommunityType} from '../../../../types';

  export let community: CommunityType;
  export let isSelected = false;
  export let selectCommunity: (id: string) => void;
</script>

<SelectIconButton
  selectValue={community.id}
  isSelected={isSelected}
  onSelect={selectCommunity}
>
  <img src={community.imageUrl} alt="icon" style="icon" />
</SelectIconButton>
