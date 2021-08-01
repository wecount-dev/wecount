<style lang="postcss">
  .carousel {
    display: flex;
    flex-direction: column;
    max-width: 800px;
  }

  .place-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navigation-btn {
    cursor: pointer;
    padding: 5px;
  }

  .dots {
    display: flex;
    justify-content: center;
  }

  .dot {
    background-color: #72e6ff;
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }
</style>

<script lang="ts">
  import Item from './Item.svelte';
  import ItemContainer from './ItemContainer.svelte';
  import {SvgLeftAngleBracket, SvgRightAngleBracket} from '../../../utils/Icon';

  function moveToPreviousItem() {
    console.log('Click previous button');
  }

  function moveToNextItem() {
    console.log('Click next button');
  }
</script>

<div>
  <div class="carousel">
    <div class="place-navigation">
      <div class="navigation-btn" on:click={moveToPreviousItem}>
        <SvgLeftAngleBracket />
      </div>
      <div style="flex-grow: 1;">
        <ItemContainer>
          <Item
            slot="left"
            user={{
              name: 'Jay-flow',
              imageUrl: 'https://source.unsplash.com/random/50x50',
              role: '최고 관리자',
            }}
            community={{name: 'dooboolab', introduction: 'PREMIUM ACCOUNT'}}
            selectedColor="#72E6FF"
          />
          <Item
            slot="center"
            user={{
              name: 'Jay-flow',
              imageUrl: 'https://source.unsplash.com/random/50x50',
              role: '최고 관리자',
            }}
            community={{name: 'dooboolab', introduction: 'PREMIUM ACCOUNT'}}
            selectedColor="#72E6FF"
          />
          <Item
            slot="right"
            user={{
              name: 'Jay-flow',
              imageUrl: 'https://source.unsplash.com/random/50x50',
              role: '최고 관리자',
            }}
            community={{name: 'dooboolab', introduction: 'PREMIUM ACCOUNT'}}
            selectedColor="#72E6FF"
          />
        </ItemContainer>
      </div>
      <div class="navigation-btn" on:click={moveToNextItem}>
        <SvgRightAngleBracket />
      </div>
    </div>
    <div class="dots">
      <div class="dot" />
    </div>
  </div>
</div>
