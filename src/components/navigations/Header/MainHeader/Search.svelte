<style lang="postcss">
  .search-layout {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--paper);
    height: 27px;
    border-radius: 1000px;
    padding: 8px 12px;
  }
  input {
    background-color: transparent;
    border: none;
    margin-bottom: 0px;
    width: 170px;
    font-size: 0.875rem;
    color: var(--gray60);

    &:focus {
      outline: none;
    }
  }

  .search-button {
    cursor: pointer;
    padding: 3px;
  }
</style>

<script lang="ts">
  import {_} from 'svelte-i18n';

  import {SvgSearch} from '../../../../utils/Icon';
</script>

<div class="search-layout">
  <input type="text" placeholder={$_('Header.explore_community')} />
  <div class="search-button">
    <SvgSearch />
  </div>
</div>
