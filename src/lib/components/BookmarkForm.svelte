<script lang="ts">
  import type { ActionData } from "./$types";
  export let form: ActionData
  export let title = ""
  export let url = ""
</script>

<div>
  <div class="form-group">
    <label for="title">Title</label>
    <input 
      id="title" 
      name="title" 
      type="text" 
      value={title}
      class="input" 
    />
    {#if form?.missing?.title}<div>Missing title</div>{/if}
  </div>

  <div class="form-group">
    <label for="url">URL</label>
    <input 
      id="url" 
      name="url" 
      type="text" 
      value={url}  
      class="input" 
    />
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</div>