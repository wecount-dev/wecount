<style global lang="postcss">
  .link-layout {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 2;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none !important;
    font-size: 0.75rem;
    color: var(--link);
    margin-right: 5px;
    text-decoration: none !important;
  }
</style>

<script lang="ts">
  import {SvgSmallRightAngleBracket} from '../../../utils/Icon';
  import {link} from 'svelte-spa-router';

  export let name: string;
  export let href: string;

  const redirect = () => {};
</script>

<div class="link-layout" on:click={redirect}>
  <a class="link-text" href={href} use:link>
    {name}
  </a>
  <SvgSmallRightAngleBracket />
</div>
