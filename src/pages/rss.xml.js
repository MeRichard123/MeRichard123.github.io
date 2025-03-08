import rss from "@astrojs/rss";
import { link } from "@zenfs/core";

const getPosts = async () => {
    const resp = await fetch("https://dev.to/api/articles?username=merichard123");
    const posts = await resp.json();
    return posts;
}

export async function GET(context) {
    const posts = await getPosts();
    return rss({
        title: "Richard's Blog",
        description: "This is the feed to the merichard123 blog",
        feed_url: "https://merichard123.github.io/rss.xml",
        site_url: "https://merichard123.github.io",
        site: context.site,
        items: posts.map(post => ({
            title: post.title,
            description: post.description,
            url: post.url,
            pubDate: post.readable_publish_date,
            link: `/blog/${post.slug}`,
        })),
        customData: '<language>en</language>'
    });
}