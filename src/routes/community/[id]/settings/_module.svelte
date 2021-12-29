<style lang="postcss">
  ul.breadcrumb {
    padding: 10px 16px;
    list-style: none;
  }

  ul.breadcrumb li {
    display: inline;
    font-size: 18px;

    a {
      text-decoration: none;
      color: var(--disabled);

      &:hover {
        color: var(--text);
        text-decoration: underline;
      }
    }

    a.active {
      color: var(--main) !important;
    }
  }

  ul.breadcrumb li + li:before {
    padding: 8px;
    color: var(--text);
    content: '/\00a0';
  }
</style>

<script lang="ts">
  import {_} from 'svelte-i18n';
  import {params, isActive, url} from '@roxi/routify';

  const communityId = $params.id;
</script>

<ul class="breadcrumb">
  <li>
    <a
      class={!$isActive(
        $url('/community/[id]/settings/members', {id: communityId}),
      )
        ? 'active'
        : ''}
      href="/community/{communityId}/settings">{$_('settings.community')}</a
    >
  </li>
  <li>
    <a
      class={$isActive(
        $url('/community/[id]/settings/members', {id: communityId}),
      )
        ? 'active'
        : ''}
      href="/community/{communityId}/settings/members"
      >{$_('settings.members')}</a
    >
  </li>
</ul>
<slot />
