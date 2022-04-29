# T6e: scaffold any local template into a custom file

T6e is a small tool (no dependencies, 50 lines of code) to scaffold any local template and 
speed up the creation of files in a project using your custom templates or templates from the community. 

It will make you save seconds at every file scaffolding, minutes every day. hours every month.

And you will not need to copy/past/delete anymore to duplicate a file.

## The problem

We developers are lazy and we love our way of writing code.

Everytime we create new file, we already have its template in mind.

Now you can write that template once, and use it anytime with your custom params.

## How does it work?

Suppose you love _Svelte_ (or any other framework).

Suppose you love _tailwind_ (or any other custom library you want to always integrate in your files).

You can **save your perfect template into a file**. With your custom libraries and your custom snippets.

Then you can **re-use it to scaffold your components based on your template**.

## Example

Let's look at the Svelte example. Here I'm creating a template with a `$name` parameter.

This parameter can be used in the **file name** and in the **file content**.

And you may have as many parameters as you like.

They will all be replaced properly.

Here is a template example for svelte:

```sveltehtml

<script lang="ts">
  // saved as $name.svelte somewhere
  import { createEventDispatcher } from 'svelte';
  import { writable } from 'svelte/store';

  const dispatch = createEventDispatcher();

  const store = writable({
    hello: ""
  });


</script>

<div class="$name">
    {$store.hello}
</div>

<style lang="scss">
    .$name {
        @apply block
    }
</style>
```

Suppose you save it in `templates/$name.svelte`

Now run

```
npx t6e templates/$name.svelte src/components name=counter
```

And boom!!

You now have a new svelte component in `src/components/counter.svelte`.

`$name` was replaced with "counter".

The content is as follows:

```sveltehtml

<script lang='ts'>
  import { createEventDispatcher } from "svelte";
  import { writable } from "svelte/store";

  const dispatch = createEventDispatcher();

  const store = writable({
    hello: "",
  });
</script>

<div class='counter'>
  {$store.hello}
</div>

<style lang='scss'>
  .counter {
    @apply block;
  }
</style>
```
