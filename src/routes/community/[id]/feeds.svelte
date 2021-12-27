<style lang="postcss">
  .container {
    display: grid;
    justify-items: center;

    .wrapper {
      width: 90%;
      max-width: 800px;

      display: grid;
      row-gap: 20px;
      grid-template-rows: 80px 1fr;

      .header {
        display: grid;
        justify-items: right;
        align-items: center;

        .text {
          margin: 0 12px;
          color: white;
        }
      }

      .content {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: min-content;
        row-gap: 20px;
        grid-auto-flow: row-dence;
        grid-auto-rows: min-content;
      }
    }
  }
</style>

<script lang="ts">
  import type {definitions} from '../../../types/supabase';
  import {_} from 'svelte-i18n';
  import Button from '../../../layouts/button.svelte';
  import FeedItem from '../../../layouts/feed-item.svelte';

  const feeds: definitions['Feed'][] = [
    {
      id: 'feed1234',
      price: 300000,
      title: 'Feed 1',
      isPublic: true,
      communityId: 'community1',
      userId: 'user1',
      createdAt: new Date().toISOString(),
      content:
        // eslint-disable-next-line max-len
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis turpis est, ut consectetur velit dapibus id. Duis id congue tortor, ac blandit eros. Curabitur elementum lobortis arcu eget lobortis. Aenean eu sapien convallis arcu vulputate ultrices at sed elit. In efficitur augue vitae metus luctus ultrices. Morbi porta neque velit, in sagittis lacus rutrum sed. Suspendisse faucibus, neque ac consequat lobortis, leo arcu semper orci, sed luctus odio leo in ipsum. Duis mollis, dolor vel fermentum lobortis, enim dolor semper sapien, ut finibus enim sem vel nibh. Sed volutpat nisi lacus, vitae vitae vitae ...',
    },
    {
      id: 'feed1234',
      price: 300000,
      title: 'Feed 2',
      isPublic: true,
      communityId: 'community1',
      userId: 'user1',
      content:
        // eslint-disable-next-line max-len
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis turpis est, ut consectetur velit dapibus id. Duis id congue tortor, ac blandit eros. Curabitur elementum lobortis arcu eget lobortis. Aenean eu sapien convallis arcu vulputate ultrices at sed elit. In efficitur augue vitae metus luctus ultrices. Morbi porta neque velit, in sagittis lacus rutrum sed. Suspendisse faucibus, neque ac consequat lobortis, leo arcu semper orci, sed luctus odio leo in ipsum. Duis mollis, dolor vel fermentum lobortis, enim dolor semper sapien, ut finibus enim sem vel nibh. Sed volutpat nisi lacus, vitae vitae vitae ...',
    },
    {
      id: 'feed1234',
      price: 300000,
      title: 'Feed 3',
      isPublic: true,
      communityId: 'community1',
      userId: 'user1',
      content:
        // eslint-disable-next-line max-len
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis turpis est, ut consectetur velit dapibus id. Duis id congue tortor, ac blandit eros. Curabitur elementum lobortis arcu eget lobortis. Aenean eu sapien convallis arcu vulputate ultrices at sed elit. In efficitur augue vitae metus luctus ultrices. Morbi porta neque velit, in sagittis lacus rutrum sed. Suspendisse faucibus, neque ac consequat lobortis, leo arcu semper orci, sed luctus odio leo in ipsum. Duis mollis, dolor vel fermentum lobortis, enim dolor semper sapien, ut finibus enim sem vel nibh. Sed volutpat nisi lacus, vitae vitae vitae ...',
    },
  ];
</script>

<div class="container">
  <div class="wrapper">
    <div class="header">
      <Button primary>
        <div class="text">
          {$_('feed.write')}
        </div>
      </Button>
    </div>
    <div class="content">
      {#each feeds as feed, i}
        <FeedItem feed={feed} />
      {/each}
    </div>
  </div>
</div>
