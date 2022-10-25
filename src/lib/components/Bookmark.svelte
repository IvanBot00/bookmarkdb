<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatcher = createEventDispatcher()

  export let id: number
  export let mode = 'Row'
  export let title = ''
  export let url = ''

  function handleDelete() {
    dispatcher('delete', id)
  }

  function stripHttp(url: string): string {
    const res = url.split('//')
    return res[1]
  } 

</script>

<div class='bg-zinc-800 rounded-md p-2 text-gray-300'>
  {#if mode === 'Row'}
    <div class='flex justify-between'>
      <div>
        <div class='flex items-end space-x-4 mb-1'>
          <h2 class='text-4xl text-white font-semibold'>{title}</h2>
        </div>

        <div>
          <a href={url} class='text-gray-400'>{stripHttp(url)}</a>
        </div>

        <div class='flex space-x-2 mt-2 items-center'>
          <a href={url}>
            <i class="fa-solid fa-arrow-up-right-from-square fa-xl text-slate-200"></i>
          </a>
          <button on:click={handleDelete}>
            <i class="fa-solid fa-trash fa-lg text-slate-200"></i>
          </button>
        </div>
      </div>

      <div>
        <a href={`/bookmarks/edit/${id}`}>
          <i class="fa-solid fa-pen-to-square"></i>
        </a>
      </div>

    </div>
  {/if}
</div>