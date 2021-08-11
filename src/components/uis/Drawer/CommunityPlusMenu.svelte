<script lang="ts">
  import SelectIconButton from './SelectIconButton.svelte';
  import {SvgPlus} from '../../../utils/Icon';

  export let redirectUrl: string;
  export let onSelectAddCommunity: (id: string) => void;
</script>

<SelectIconButton
  selectValue={redirectUrl}
  style={`background-color: var(--gray20)`}
  onSelect={onSelectAddCommunity}
>
  <SvgPlus />
</SelectIconButton>
