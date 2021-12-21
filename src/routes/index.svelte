<script lang="ts">
  import {goto, url} from '@roxi/routify';

  import {onMount} from 'svelte';

  onMount(() => {
    /** Check authentication */
    $goto($url('/onboard'));
  });
</script>
