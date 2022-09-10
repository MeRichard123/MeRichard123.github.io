<!-- <script>
import {onMount} from "@astrojs/svelte"

let data;

onMount(async () => {
     const response = await fetch("https://dev.to/api/articles?username=merichard123")
     const responseData = await response.json();
     data = responseData;
})

</script>

<div>
    {#if data.length}
        <div>
            {#each data as post}
                <a href={post.url} target="_blank" rel="noreferrer noopener" key={post.id}>
                    <div class="blog">
                        <h2 class="blog__title">{post.title}</h2>
                        <h4 class="blog__date">{post.readable_publish_date}</h4>
                        <p class="blog__desc">{post.description}</p>
                        <div class="ui-tag__wrapper tags">
                            {#each post.tag_list.slice(0,2) as tag}
                                <div class="ui-tag">
                                    <span class="tag-title">{tag}</span>
                                </div>
                            {/each}
                        </div>                
                    </div>
                </a>
            {/each}
        </div>
    {:else}
        <h2 class="post-loader">Loading Posts...</h2>
    {/if}
</div> -->