<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

interface tocItem {
  id: string,
  title: string,
}

const toc = ref<tocItem[]>([]);
const activeId = ref<string>('');
let observer: IntersectionObserver | null = null;

const HEADER_OFFSET = 88;

onMounted(() => {
  const sections = document.querySelectorAll('main section[id]');

  sections.forEach(section => {
    const titleEl = section.querySelector('.section-title');

    if (titleEl && titleEl.textContent)
    toc.value.push({
      id: section.id,
      title: titleEl.textContent
    })
  })

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeId.value = entry.target.id;
      }
    });
  }, {
    rootMargin: `-${HEADER_OFFSET}px 0px -60% 0px`
  });

  sections.forEach(sec => observer!.observe(sec));
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
})

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - HEADER_OFFSET - 20;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};
</script>

<template>
  <aside class="sidebar">
    <h2>Nesta página</h2>
    <nav>
      <ul class="toc-list">
        <li
        v-for="item in toc"
          :key="item.id"
          class="toc-item"
          :class="{ 'is-active': activeId === item.id }"
          @click="scrollToSection(item.id)"
        >
          {{ item.title }}
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  position: sticky;
  top: calc(var(--header-height) + var(--sticky-offset));
  align-self: start;
}

h2 {
  font-size: 1.25rem;
  color: var(--clr-text-alt);
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
}

.toc-list {
  list-style: none;
  padding: 0;
  margin: 0;
  padding-left: 1rem;

  &::after {
    content: "";
  position: absolute;
  width: 4px;
  background-color: var(--clr-primary);
  border-radius: 2px;

  position-anchor: --active-toc-item;

  top: anchor(top);
  bottom: anchor(bottom);

  left: -2px;

  transition: top 0.3s ease-out, bottom 0.3s ease-out;
  }
}

.toc-item {
  color: var(--clr-text-muted);
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: var(--clr-text);
  }

  &.is-active {
    color: var(--clr-text);
    font-weight: 600;
    anchor-name: --active-toc-item;
  }
}



</style>
