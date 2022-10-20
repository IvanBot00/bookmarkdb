<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData, PageData } from "./$types";

  export let data: PageData
  export let form: ActionData

  function handleDelete(id: number) {
    fetch(`/api/bookmark/${id}`, { method: 'DELETE' })
    fetchBookmarks()
  }

  async function fetchBookmarks() {
    const bookmarks = await fetch('/api/bookmark').then(res => res.json())
    data.bookmarks = bookmarks
  } 

</script>

Bookmarks

<form method="POST" use:enhance>
  <input name="url" type="text" placeholder="link"/>
  <button type="submit">Add Bookmark</button>
</form>
{#if form?.missing}<div>Please add a url</div>{/if}

{#each data.bookmarks as link}
  <div>
    <a href={link.url}>{link.url}</a>
    <button on:click={() => handleDelete(link.id)}>Delete bookmark</button>
  </div>
{/each}

