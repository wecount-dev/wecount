<style lang="postcss">
  .carousel {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 600px;
  }

  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 210px;
  }

  .dot-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
  }

  .dot {
    background-color: gray;
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }

  .card-layout {
    position: relative;
    height: 100%;
    flex-grow: 1;
    margin: 15.5px;
  }

  .left-card {
    margin: auto;
    position: absolute;
    height: 82%;
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
    height: 82%;
    top: 0px;
    bottom: 0px;
    right: 0px;
  }
</style>

<script lang="ts">
  import Card from './Card.svelte';
  import ArrowButton from './ArrowButton.svelte';
  import type {CarouselItemType} from '../../types/index.svelte';

  export let item: CarouselItemType;
  export let onChange: (selectedColor: string) => void;
  export let carouselStyle: string | undefined = undefined;
  export let cardLayoutStyle: string | undefined = undefined;
  export let cardStyle: string | undefined = undefined;
  export let dotStyle: string | undefined = undefined;

  const colors = item.colors as string[];

  type PositionType = {
    [key: string]: number;
  };

  const position: PositionType = {
    left: -1,
    center: 0,
    right: 1,
  };

  function moveToPreviousItem() {
    Object.keys(position).map((key) =>
      position['right'] === 1 ? position[key] : (position[key] -= 1),
    );

    onChange(item.colors[position.center]);
  }

  function moveToNextItem() {
    Object.keys(position).map((key) =>
      position['right'] === colors.length
        ? position[key]
        : (position[key] += 1),
    );

    onChange(item.colors[position.center]);
  }
</script>

<div class="carousel" style={carouselStyle}>
  <div class="wrap" style={cardLayoutStyle}>
    <ArrowButton
      direction={'left'}
      hidden={position['right'] === 1}
      onClick={moveToPreviousItem}
    />
    <div class="card-layout">
      {#each colors as color, i}
        {#if i === position.left || i === position.center || i === position.right}
          <div
            class:left-card={position.left === i}
            class:center-card={position.center === i}
            class:right-card={position.right === i}
          >
            <Card
              user={item.user}
              community={item.community}
              cardStyle={`background-color:${color}; height:100%; ${
                cardStyle ? cardStyle : ''
              }`}
            />
          </div>
        {/if}
      {/each}
    </div>
    <ArrowButton
      direction={'right'}
      hidden={position['right'] === colors.length}
      onClick={moveToNextItem}
    />
  </div>
  <div class="dot-container" style={dotStyle}>
    <div style={`background-color: ${colors[position.center]}`} class="dot" />
  </div>
</div>
