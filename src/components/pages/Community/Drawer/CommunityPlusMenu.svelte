<script lang="ts">
  import SelectIconButton from './SelectIconButton.svelte';
  import {SvgPlus} from '../../../../utils/Icon';

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
