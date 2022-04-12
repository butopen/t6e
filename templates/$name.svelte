<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { writable } from "svelte/store";
  const dispatch = createEventDispatcher();

  const store = writable({
    hello: "",
  });
</script>

<div class="$name">
  {$store.hello}
</div>

<style lang="scss">
  .$name {
    @apply block;
  }
</style>
