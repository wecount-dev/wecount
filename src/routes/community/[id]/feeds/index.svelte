<style lang="postcss">
  .container {
    display: grid;
    justify-items: center;

    .wrapper {
      width: 90%;
      max-width: 800px;
      padding-bottom: 40px;

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
  import type {FeedWithUserAndImages} from '../../../../services/feedService';
  import {_} from 'svelte-i18n';
  import FeedAdd from './add.svelte';
  import Button from '../../../../layouts/button.svelte';
  import FeedItem from '../../../../layouts/feed-item.svelte';
  import Modal from '../../../../layouts/modal.svelte';

  const feeds: FeedWithUserAndImages[] = [
    {
      id: 'feed128',
      price: 300000,
      title: 'Feed 1',
      isPublic: true,
      content:
        // eslint-disable-next-line max-len
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis turpis est, ut consectetur velit dapibus id. Duis id congue tortor, ac blandit eros. Curabitur elementum lobortis arcu eget lobortis. Aenean eu sapien convallis arcu vulputate ultrices at sed elit. In efficitur augue vitae metus luctus ultrices. Morbi porta neque velit, in sagittis lacus rutrum sed. Suspendisse faucibus, neque ac consequat lobortis, leo arcu semper orci, sed luctus odio leo in ipsum. Duis mollis, dolor vel fermentum lobortis, enim dolor semper sapien, ut finibus enim sem vel nibh. Sed volutpat nisi lacus, vitae vitae vitae ...',
      user: {
        id: 'user1',
        displayName: 'HackaTalk',
        name: 'Hyo',
        avatarUrl:
          'https://bagkmjbbwtdjwrsrcdgd.supabase.co/storage/v1/object/public/public/images/1640614331794@_qS4.png',
      },
      images: [
        {
          id: 'image5',
          url: 'https://images.unsplash.com/photo-1532085755448-a67fd3b518b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80',
        },
      ],
    },
    {
      id: 'feed1236',
      price: 300000,
      title: 'Feed 2',
      isPublic: true,
      content:
        // eslint-disable-next-line max-len
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis turpis est, ut consectetur velit dapibus id. Duis id congue tortor, ac blandit eros. Curabitur elementum lobortis arcu eget lobortis. Aenean eu sapien convallis arcu vulputate ultrices at sed elit. In efficitur augue vitae metus luctus ultrices. Morbi porta neque velit, in sagittis lacus rutrum sed. Suspendisse faucibus, neque ac consequat lobortis, leo arcu semper orci, sed luctus odio leo in ipsum. Duis mollis, dolor vel fermentum lobortis, enim dolor semper sapien, ut finibus enim sem vel nibh. Sed volutpat nisi lacus, vitae vitae vitae ...',
      user: {
        id: 'user1',
        displayName: 'HackaTalk',
        name: 'Hyo',
        avatarUrl:
          'https://bagkmjbbwtdjwrsrcdgd.supabase.co/storage/v1/object/public/public/images/1640614331794@_qS4.png',
      },
      images: [
        {
          id: 'image7',
          url: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        },
        {
          id: 'image7',
          url: 'https://images.unsplash.com/photo-1554040305-68021c3fc4f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
      ],
    },
    {
      id: 'feed1235',
      price: 300000,
      title: 'Feed 3',
      isPublic: true,
      content:
        // eslint-disable-next-line max-len
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis turpis est, ut consectetur velit dapibus id. Duis id congue tortor, ac blandit eros. Curabitur elementum lobortis arcu eget lobortis. Aenean eu sapien convallis arcu vulputate ultrices at sed elit. In efficitur augue vitae metus luctus ultrices. Morbi porta neque velit, in sagittis lacus rutrum sed. Suspendisse faucibus, neque ac consequat lobortis, leo arcu semper orci, sed luctus odio leo in ipsum. Duis mollis, dolor vel fermentum lobortis, enim dolor semper sapien, ut finibus enim sem vel nibh. Sed volutpat nisi lacus, vitae vitae vitae ...',
      user: {
        id: 'user1',
        displayName: 'HackaTalk',
        name: 'Hyo',
        avatarUrl:
          'https://bagkmjbbwtdjwrsrcdgd.supabase.co/storage/v1/object/public/public/images/1640614331794@_qS4.png',
      },
      images: [
        {
          id: 'image6',
          url: 'https://images.unsplash.com/photo-1546874177-9e664107314e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
        },
        {
          id: 'image7',
          url: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        },
        {
          id: 'image7',
          url: 'https://images.unsplash.com/photo-1554040305-68021c3fc4f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
      ],
    },
    {
      id: 'feed127',
      price: 300000,
      title: 'Feed 4',
      isPublic: true,
      content:
        // eslint-disable-next-line max-len
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis turpis est, ut consectetur velit dapibus id. Duis id congue tortor, ac blandit eros. Curabitur elementum lobortis arcu eget lobortis. Aenean eu sapien convallis arcu vulputate ultrices at sed elit. In efficitur augue vitae metus luctus ultrices. Morbi porta neque velit, in sagittis lacus rutrum sed. Suspendisse faucibus, neque ac consequat lobortis, leo arcu semper orci, sed luctus odio leo in ipsum. Duis mollis, dolor vel fermentum lobortis, enim dolor semper sapien, ut finibus enim sem vel nibh. Sed volutpat nisi lacus, vitae vitae vitae ...',
      user: {
        id: 'user1',
        displayName: 'HackaTalk',
        name: 'Hyo',
        avatarUrl:
          'https://bagkmjbbwtdjwrsrcdgd.supabase.co/storage/v1/object/public/public/images/1640614331794@_qS4.png',
      },
      images: [
        {
          id: 'image5',
          url: 'https://images.unsplash.com/photo-1532085755448-a67fd3b518b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80',
        },
        {
          id: 'image6',
          url: 'https://images.unsplash.com/photo-1546874177-9e664107314e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
        },
        {
          id: 'image7',
          url: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        },
        {
          id: 'image7',
          url: 'https://images.unsplash.com/photo-1554040305-68021c3fc4f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
      ],
    },
    {
      id: 'feed222',
      price: 300000,
      title: 'Feed 5',
      isPublic: true,
      createdAt: new Date().toISOString(),
      content:
        // eslint-disable-next-line max-len
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis turpis est, ut consectetur velit dapibus id. Duis id congue tortor, ac blandit eros. Curabitur elementum lobortis arcu eget lobortis. Aenean eu sapien convallis arcu vulputate ultrices at sed elit. In efficitur augue vitae metus luctus ultrices. Morbi porta neque velit, in sagittis lacus rutrum sed. Suspendisse faucibus, neque ac consequat lobortis, leo arcu semper orci, sed luctus odio leo in ipsum. Duis mollis, dolor vel fermentum lobortis, enim dolor semper sapien, ut finibus enim sem vel nibh. Sed volutpat nisi lacus, vitae vitae vitae ...',
      user: {
        id: 'user1',
        displayName: 'HackaTalk',
        name: 'Hyo',
        avatarUrl:
          'https://bagkmjbbwtdjwrsrcdgd.supabase.co/storage/v1/object/public/public/images/1640614331794@_qS4.png',
      },
      images: [
        {
          id: 'image1',
          url: 'https://media.istockphoto.com/photos/seoul-downtown-cityscape-with-fortress-and-namsan-seoul-tower-on-picture-id950579008?b=1&k=20&m=950579008&s=170667a&w=0&h=Ka-FcKS6dM33_hf0IkGfykKuRD-rSzwKUadWLqKemck=',
        },
        {
          id: 'image2',
          url: 'https://media.istockphoto.com/photos/aerial-view-of-city-seoul-at-night-south-korea-picture-id849740668?b=1&k=20&m=849740668&s=170667a&w=0&h=5MECxyN8zKQu8m2wjhU2CqHCQlNbWanTN44Yg_kesM4=',
        },
        {
          id: 'image3',
          url: 'https://media.istockphoto.com/photos/sunset-at-seoul-city-skylinesouth-korea-picture-id621371796?b=1&k=20&m=621371796&s=170667a&w=0&h=6qfZvdg08Y9511NMWMGGh6gBqlncAybUQRmZ8i2PlRI=',
        },
        {
          id: 'image4',
          url: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=674&q=80',
        },
        {
          id: 'image5',
          url: 'https://images.unsplash.com/photo-1532085755448-a67fd3b518b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80',
        },
      ],
    },
    {
      id: 'feed1234',
      price: 300000,
      title: 'Feed 5+',
      isPublic: true,
      createdAt: new Date().toISOString(),
      content:
        // eslint-disable-next-line max-len
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis turpis est, ut consectetur velit dapibus id. Duis id congue tortor, ac blandit eros. Curabitur elementum lobortis arcu eget lobortis. Aenean eu sapien convallis arcu vulputate ultrices at sed elit. In efficitur augue vitae metus luctus ultrices. Morbi porta neque velit, in sagittis lacus rutrum sed. Suspendisse faucibus, neque ac consequat lobortis, leo arcu semper orci, sed luctus odio leo in ipsum. Duis mollis, dolor vel fermentum lobortis, enim dolor semper sapien, ut finibus enim sem vel nibh. Sed volutpat nisi lacus, vitae vitae vitae ...',
      user: {
        id: 'user1',
        displayName: 'HackaTalk',
        name: 'Hyo',
        avatarUrl:
          'https://bagkmjbbwtdjwrsrcdgd.supabase.co/storage/v1/object/public/public/images/1640614331794@_qS4.png',
      },
      images: [
        {
          id: 'image1',
          url: 'https://media.istockphoto.com/photos/seoul-downtown-cityscape-with-fortress-and-namsan-seoul-tower-on-picture-id950579008?b=1&k=20&m=950579008&s=170667a&w=0&h=Ka-FcKS6dM33_hf0IkGfykKuRD-rSzwKUadWLqKemck=',
        },
        {
          id: 'image2',
          url: 'https://media.istockphoto.com/photos/aerial-view-of-city-seoul-at-night-south-korea-picture-id849740668?b=1&k=20&m=849740668&s=170667a&w=0&h=5MECxyN8zKQu8m2wjhU2CqHCQlNbWanTN44Yg_kesM4=',
        },
        {
          id: 'image3',
          url: 'https://media.istockphoto.com/photos/sunset-at-seoul-city-skylinesouth-korea-picture-id621371796?b=1&k=20&m=621371796&s=170667a&w=0&h=6qfZvdg08Y9511NMWMGGh6gBqlncAybUQRmZ8i2PlRI=',
        },
        {
          id: 'image4',
          url: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=674&q=80',
        },
        {
          id: 'image5',
          url: 'https://images.unsplash.com/photo-1532085755448-a67fd3b518b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80',
        },
        {
          id: 'image6',
          url: 'https://images.unsplash.com/photo-1546874177-9e664107314e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
        },
        {
          id: 'image7',
          url: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        },
        {
          id: 'image7',
          url: 'https://images.unsplash.com/photo-1554040305-68021c3fc4f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
      ],
    },
  ];

  let showModal = false;
  const onToggle = () => (showModal = !showModal);
</script>

<div class="container">
  <div class="wrapper">
    <div class="header">
      <Button primary on:click={onToggle}>
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
  <Modal visible={showModal} on:close={() => (showModal = false)}>
    <FeedAdd
      user={{
        id: 'id',
        displayName: 'User1',
      }}
      on:close={() => (showModal = false)}
    />
  </Modal>
</div>
