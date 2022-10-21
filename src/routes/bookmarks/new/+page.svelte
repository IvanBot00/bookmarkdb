<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData } from './$types'

  export let form: ActionData
</script>

<div class="w-full flex flex-col items-center mt-40">
  <form method="POST" use:enhance class="flex flex-col gap-4 w-full max-w-md mx-2">

    <div class="form-group">
      <label for="title">Title</label>
      <input id="title" name="title" class="input" type="text" placeholder="Title" />
      {#if form?.missingTitle}<div>Please add a title</div>{/if}
    </div>

    <div class="form-group">
      <label for="url">URL</label>
      <input id="url" name="url" class="input" type="text" placeholder="URL" />
      {#if form?.missingUrl}<div>Please add a URL</div>{/if}
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea class="input" rows="2" placeholder="Description" />
    </div>

    <div class="form-group">
      <label for="category">Category</label>
      <select class="input">
        <option value="none">None</option>
      </select>
    </div>

    <div class="form-group">
      <label for="tags">Tags</label>
    </div>

    <button type="submit" class="btn btn-primary">Add Bookmark</button>

  </form>
</div>