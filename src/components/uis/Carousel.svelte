<style lang="postcss">
  .carousel {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 600px;

    @media (--mobile) {
      width: 100%;
    }
  }
  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 210px;
  }
  .card-layout {
    position: relative;
    height: 100%;
    flex-grow: 1;
    margin: 15.5px;
  }
  .center-card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    z-index: 3;
  }
  .left-card,
  .right-card {
    @media (--mobile) {
      visibility: hidden;
    }
  }
  .left-card {
    margin: auto;
    position: absolute;
    height: 82%;
    top: 0px;
    bottom: 0px;
    left: 0px;
  }
  .right-card {
    margin: auto;
    position: absolute;
    height: 82%;
    top: 0px;
    bottom: 0px;
    right: 0px;
  }
  .arrow-right,
  .arrow-left {
    z-index: 5;
    @media (--mobile) {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      width: 35px;
      height: 40px;
      background-color: var(--gray90);
    }
  }
  .arrow-right {
    @media (--mobile) {
      padding-left: 5px;
    }
  }
  .arrow-left {
    @media (--mobile) {
      padding-right: 5px;
    }
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
  .hidden {
    visibility: hidden;
  }
</style>

<script lang="ts">
  import ArrowButton from './ArrowButton.svelte';
  import CommunityCard from './CommunityCard.svelte';
  import type {CarouselItemType} from '../../types';

  export let item: CarouselItemType;
  export let onChange: (selectedColor: string) => void;
  export let carouselStyle: string | undefined = undefined;
  export let cardLayoutStyle: string | undefined = undefined;
  export let dotStyle: string | undefined = undefined;

  const colors = item.colors;

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
    <div class="arrow-left" class:hidden={position['right'] === 1}>
      <ArrowButton direction={'left'} onClick={moveToPreviousItem} />
    </div>
    <div class="card-layout">
      {#each colors as color, i}
        {#if i === position.left || i === position.center || i === position.right}
          <div
            class:left-card={position.left === i}
            class:center-card={position.center === i}
            class:right-card={position.right === i}
          >
            <CommunityCard
              name="dooboolab"
              currency="KRW"
              description="dooboolab card"
              color={color}
              style="height:100%;"
            />
          </div>
        {/if}
      {/each}
    </div>
    <div class="arrow-right" class:hidden={position['right'] === colors.length}>
      <ArrowButton direction={'right'} onClick={moveToNextItem} />
    </div>
  </div>
  <div class="dot-container" style={dotStyle}>
    <div style={`background-color: ${colors[position.center]}`} class="dot" />
  </div>
</div>
