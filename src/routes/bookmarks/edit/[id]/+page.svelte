<script lang="ts">
  import type { ActionData, PageData } from "./$types";
  import BookmarkForm from "$lib/components/BookmarkForm.svelte";
  import { enhance } from "$app/forms";

  export let data: PageData
  export let form: ActionData
</script>

<div class="w-full flex justify-center">
  <div class="container max-w-md">
    <form use:enhance method="POST">
      <BookmarkForm 
        form={form}
        title={data?.bookmark?.title}
        url={data?.bookmark?.url}
      />
    </form>
  </div>
</div>
