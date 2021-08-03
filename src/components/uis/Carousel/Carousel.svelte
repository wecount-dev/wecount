<style lang="postcss">
  .carousel {
    display: flex;
    flex-direction: column;
    width: 700px;
    height: 250px;
  }

  .place-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  .navigation-btn {
    cursor: pointer;
    padding: 10px;
  }

  .dots {
    margin-top: 15px;
    display: flex;
    justify-content: center;
  }

  .dot {
    background-color: gray;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin: 0px 5px;
  }

  .layout {
    position: relative;
    flex-grow: 1;
    height: 100%;
    margin: 25px;
  }

  .left {
    margin: auto;
    position: absolute;
    height: calc(100% - 50px);
    top: 0px;
    bottom: 0px;
    left: 0px;
  }

  .center {
    position: absolute;
    height: 100%;
    top: 0px;
    left: 25%;
    z-index: 3;
  }

  .right {
    margin: auto;
    position: absolute;
    height: calc(100% - 50px);
    top: 0px;
    bottom: 0px;
    right: 0px;
  }

  .hidden {
    visibility: hidden;
  }
</style>

<script lang="ts">
  import Item from './Item.svelte';
  import {SvgLeftAngleBracket, SvgRightAngleBracket} from '../../../utils/Icon';
  import type {ItemType} from './types.svelte';

  export let items: ItemType[];

  type PositionType = {
    [key: string]: number;
  };

  let position: PositionType = {
    left: -1,
    center: 0,
    right: 1,
  };

  function moveToPreviousItem() {
    Object.keys(position).map((key) =>
      position['right'] === 1 ? position[key] : (position[key] -= 1),
    );
  }

  function moveToNextItem() {
    Object.keys(position).map((key) =>
      position['right'] === items.length ? position[key] : (position[key] += 1),
    );
  }
</script>

<div>
  <div class="carousel">
    <div class="place-navigation">
      <div
        class="navigation-btn"
        class:hidden={position['right'] === 1}
        on:click={moveToPreviousItem}
      >
        <SvgLeftAngleBracket />
      </div>

      <div class="layout">
        {#each items as item, i}
          {#if i === position.left || i === position.center || i === position.right}
            <div
              class:left={position.left === i}
              class:center={position.center === i}
              class:right={position.right === i}
            >
              <Item
                user={item.user}
                community={item.community}
                selectedColor={item.selectedColor}
              />
            </div>
          {/if}
        {/each}
      </div>

      <div
        class="navigation-btn"
        class:hidden={position['right'] === items.length}
        on:click={moveToNextItem}
      >
        <SvgRightAngleBracket />
      </div>
    </div>
    <div class="dots">
      {#each items as {selectedColor}, i}
        <div
          style={position.center === i
            ? `background-color: ${selectedColor}`
            : 'background-color: gray'}
          class="dot"
        />
      {/each}
    </div>
  </div>
</div>
