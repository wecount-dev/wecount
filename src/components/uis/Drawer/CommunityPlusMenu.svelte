<script lang="ts">
  import SelectIconButton from './SelectIconButton.svelte';
  import {SvgPlus} from '../../../utils/Icon';

  export let redirectUrl: string;
  export let onSelectAddCommunity: (id: string) => void;
</script>

<SelectIconButton
  class="plus-menu"
  selectValue={redirectUrl}
  onSelect={onSelectAddCommunity}
>
  <SvgPlus />
</SelectIconButton>
