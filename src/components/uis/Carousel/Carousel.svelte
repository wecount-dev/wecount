<style lang="postcss">
  .carousel {
    display: flex;
    flex-direction: column;
    max-width: 600px;
  }

  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 210px;
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

  .card-layout {
    position: relative;
    flex-grow: 1;
    height: 100%;
    margin: 15.5px;
  }

  .left-card {
    margin: auto;
    position: absolute;
    height: calc(100% - 15%);
    top: 0px;
    bottom: 0px;
    left: 0px;
  }

  .center-card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    z-index: 3;
  }

  .right-card {
    margin: auto;
    position: absolute;
    height: calc(100% - 15%);
    top: 0px;
    bottom: 0px;
    right: 0px;
  }
</style>

<script lang="ts">
  import Card from './Card.svelte';
  import ArrowButton from './ArrowButton.svelte';
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
    <div class="wrap">
      <ArrowButton
        direction={'left'}
        hidden={position['right'] === 1}
        onClick={moveToPreviousItem}
      />
      <div class="card-layout">
        {#each items as item, i}
          {#if i === position.left || i === position.center || i === position.right}
            <div
              class:left-card={position.left === i}
              class:center-card={position.center === i}
              class:right-card={position.right === i}
            >
              <Card
                user={item.user}
                community={item.community}
                selectedColor={item.selectedColor}
              />
            </div>
          {/if}
        {/each}
      </div>
      <ArrowButton
        direction={'right'}
        hidden={position['right'] === items.length}
        onClick={moveToNextItem}
      />
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
