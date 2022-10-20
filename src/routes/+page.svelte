<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData

  function handleDelete(id: number) {
    // send request to api
    fetch(`/api/bookmark/${id}`, {
      method: 'DELETE'
    })
  }

</script>

Bookmarks


<form method="POST">
  <input name="url" type="text" placeholder="link"/>
  <button type="submit">Add Bookmark</button>
</form>

{#each data.bookmarks as link}
  <div>
    <a href={link.url}>{link.url}</a>
    <button on:click={() => handleDelete(link.id)}>Delete bookmark</button>
  </div>

{/each}

