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
    fill: none;
  }
  .frame {
    stroke: var(--gray80);
  }
  .bar {
    stroke: var(--stroke-color);
    stroke-linecap: round;
    stroke-dashoffset: var(--stroke-dashoffset);
    stroke-dasharray: var(--stroke-dasharray);
  }
</style>

<script lang="ts">
  export let completed = 30;
  export let Circlediameter = 200;
  export let strokeWidth = 14;
  export let strokeColor: string | undefined = '#28db98';

  const radius = Circlediameter / 2;
  const strokeHalfWidth = strokeWidth / 2;
  const progress = completed / 100;

  const strokeDasharray = 2 * Math.PI * (radius - strokeHalfWidth);
  const strokeDashOffset = strokeDasharray * (1 - progress);
</script>

<div class="circle-progress-wrap" style={`--circle-size: ${Circlediameter}px`}>
  <svg
    class="circle-progress"
    width={Circlediameter}
    height={Circlediameter}
    viewBox="0 0 {Circlediameter} {Circlediameter}"
  >
    <circle
      class="frame"
      cx={radius}
      cy={radius}
      r={radius - strokeHalfWidth}
      stroke-width={strokeWidth}
    />
    <circle
      class="bar"
      cx={radius}
      cy={radius}
      r={radius - strokeHalfWidth}
      stroke-width={strokeWidth}
      style="
        --stroke-dashoffset: {strokeDashOffset};
        --stroke-dasharray: {strokeDasharray};
        --stroke-color: {strokeColor};
      "
    />
  </svg>
</div>
