<style lang="postcss">
  .circle-progress-wrap {
    position: relative;
    width: var(--circle-size);
    height: var--(circle-size);
  }
  .circle-progress {
    transform: rotate(-90deg);
  }
  .frame,
  .bar {
    fill: transparent;
  }
  .frame {
    stroke: var(--shading);
  }
  .bar {
    stroke: var(--stroke-color);
    stroke-linecap: round;
    stroke-dashoffset: var(--stroke-dashoffset);
    stroke-dasharray: var(--stroke-dasharray);
  }
</style>

<script lang="ts">
  export let completed: number;
  export let circlediameter = 200;
  export let strokeWidth = 14;
  export let strokeColor: string | undefined = 'var(--green40)';
  export let circleStyle = '';

  const radius = circlediameter / 2;
  const strokeHalfWidth = strokeWidth / 2;
  const progress = completed / 100;

  const strokeDasharray = 2 * Math.PI * (radius - strokeHalfWidth);
  const strokeDashOffset = strokeDasharray * (1 - progress);
</script>

<div
  class="circle-progress-wrap"
  style={`--circle-size: ${circlediameter}px; ${circleStyle}`}
>
  <svg
    class="circle-progress"
    width={circlediameter}
    height={circlediameter}
    viewBox="0 0 {circlediameter} {circlediameter}"
  >
    <circle
      class="frame"
      cx={radius}
      cy={radius}
      r={radius - strokeHalfWidth}
      stroke-width={strokeWidth - 1}
      shape-rendering="geometricPrecision"
    />
    <circle
      class="bar"
      cx={radius}
      cy={radius}
      r={radius - strokeHalfWidth}
      stroke-width={strokeWidth}
      shape-rendering="geometricPrecision"
      style="
        --stroke-dashoffset: {strokeDashOffset};
        --stroke-dasharray: {strokeDasharray};
        --stroke-color: {strokeColor};
      "
    />
  </svg>
</div>
