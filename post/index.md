---
layout: home

title: OpenSIN-AI Engineering Blog
description: Deep dives into AI agent architecture, multi-agent orchestration, security, and autonomous AI from the OpenSIN-AI organization.
---

<script setup>
import { posts } from './posts'
</script>

<div class="vp-doc">
  <h1>OpenSIN-AI Engineering Blog</h1>
  <p class="lead">Official engineering stories from the OpenSIN-AI organization — autonomous agents, A2A protocol, fleet architecture, deployment, and operations.</p>

  <div class="posts">
    <article v-for="post in posts" :key="post.slug" class="post-item">
      <h2>
        <a :href="post.url">{{ post.title }}</a>
      </h2>
      <p class="post-meta">
        <time>{{ post.date }}</time>
        <span class="tags">
          <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
        </span>
      </p>
      <p class="excerpt">{{ post.excerpt }}</p>
      <a :href="post.url" class="read-more">Read more →</a>
    </article>
  </div>
</div>

<style scoped>
.lead {
  font-size: 1.2rem;
  color: var(--vp-c-text-2);
  margin-bottom: 2rem;
}
.post-item {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--vp-c-bg-soft);
}
.post-item h2 {
  margin: 0 0 0.5rem;
  font-size: 1.4rem;
}
.post-item h2 a {
  color: var(--vp-c-text-1);
  text-decoration: none;
}
.post-item h2 a:hover {
  color: var(--vp-c-brand);
}
.post-meta {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin-bottom: 0.75rem;
}
.tags {
  margin-left: 0.5rem;
}
.tag {
  display: inline-block;
  padding: 0.125rem 0.5rem;
  margin: 0.125rem;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-dark);
  border-radius: 4px;
  font-size: 0.75rem;
}
.excerpt {
  color: var(--vp-c-text-2);
  margin-bottom: 0.75rem;
}
.read-more {
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: 500;
}
.read-more:hover {
  text-decoration: underline;
}
</style>
