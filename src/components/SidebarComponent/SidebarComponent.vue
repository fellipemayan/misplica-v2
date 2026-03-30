<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import SignComponent from '../SignComponent/SignComponent.vue';

interface TocHeading {
  id: string,
  title: string,
  level: number
}

interface TocSection {
  id: string;
  title: string;
  isOpen: boolean;
  children: TocHeading[];
}

const toc = ref<TocSection[]>([]);
const activeSectionId = ref<string>('');
const activeChildId = ref<string>('');

let observer: IntersectionObserver | null = null;
const isClickScrolling = ref(false);
let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

const HEADER_OFFSET = 88;

onMounted(() => {
  const sections = document.querySelectorAll('main section[id]');
  const elementsToObserve: Element[] = [];

  sections.forEach(section => {
    const titleEl = section.querySelector('.section-title');
    if (!titleEl || !titleEl.textContent) return;

    const sectionData: TocSection = {
      id: section.id,
      title: titleEl.textContent,
      isOpen: false,
      children: []
    };

    elementsToObserve.push(section);

    const subHeadings = section.querySelectorAll('h3[id]');
    subHeadings.forEach(heading => {
      sectionData.children.push({
        id: heading.id,
        title: heading.textContent || '',
        level: parseInt(heading.tagName.substring(1))
      });
      elementsToObserve.push(heading);
    });

    toc.value.push(sectionData);
  });

  observer = new IntersectionObserver((entries) => {
    if (isClickScrolling.value) return;

    entries.forEach(entry => {
      if (entry.isIntersecting) {

        const activeSection = toc.value.find(sec =>
          sec.id === entry.target.id || sec.children.some(child => child.id === entry.target.id)
        );

        if (activeSection) {
          activeSectionId.value = activeSection.id;

          if (activeSection.id === entry.target.id) {
            activeChildId.value = '';
          } else {
            activeChildId.value = entry.target.id;
          }

          toc.value.forEach(sec => {
            sec.isOpen = (sec.id === activeSection.id);
          });
        }
      }
    });
}, {
  rootMargin: `-${HEADER_OFFSET}px 0px -60% 0px`
});

  elementsToObserve.forEach(el => observer!.observe(el));
})

onUnmounted(() => {
  if (observer) observer.disconnect();
})

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  isClickScrolling.value = true;

  const targetSection = toc.value.find(sec =>
    sec.id === id || sec.children.some(child => child.id === id)
  );

  if (targetSection) {
    activeSectionId.value = targetSection.id;
    activeChildId.value = (targetSection.id === id) ? '' : id;

    toc.value.forEach(sec => {
      sec.isOpen = (sec.id === targetSection.id);
    });
  }

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - HEADER_OFFSET - 20;

  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });

  const mobileDrawer = document.getElementById('drawer-sidebar');
  if (mobileDrawer?.matches(':popover-open')) {
    mobileDrawer.hidePopover();
  }

  if (scrollTimeout) clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    isClickScrolling.value = false;
  }, 1200);
};

const toggleSection = (toggledSection: TocSection) => {
  if (toggledSection.isOpen) {
    toggledSection.isOpen = false;
    return;
  }

  toc.value.forEach(sec => {
    sec.isOpen = (sec.id === toggledSection.id);
  });
};
</script>

<template>
    <h2>Nesta página</h2>
    <SignComponent id="signo-sumario" tag="div">
      <nav>
        <ul class="toc-list">
          <li v-for="section in toc" :key="section.id" class="toc-section-group">

          <div
            class="toc-item toc-section-title"
            :class="{ 'is-active': activeSectionId === section.id }"
          >
            <span
              class="toc-link"
              :class="{ 'is-section-anchor': activeSectionId === section.id }"
              @click="scrollToSection(section.id)"
            >
              {{ section.title }}
            </span>
            <button
              v-if="section.children.length > 0"
              class="btn-collapse"
              @click="toggleSection(section)"
              :aria-expanded="section.isOpen"
            >
              <span class="material-symbols-outlined">
                {{ section.isOpen ? 'expand_less' : 'expand_more' }}
              </span>
            </button>
          </div>

          <div
            class="toc-sublist-wrapper"
            :class="{ 'is-open': section.isOpen }"
          >
            <ul
              class="toc-sublist"
              :class="{ 'has-active-child': section.children.some(c => c.id === activeChildId) }"
            >
              <li
                v-for="child in section.children"
                :key="child.id"
                class="toc-item toc-child"
                :class="[
                  { 'is-active': activeChildId === child.id },
                  `level-${child.level}`
                ]"
                @click="scrollToSection(child.id)"
              >
                <span :class="{ 'is-child-anchor': activeChildId === child.id }">
                  {{ child.title }}
                </span>
              </li>
            </ul>
          </div>

          </li>
        </ul>
      </nav>
    </SignComponent>
</template>

<style scoped>

h2 {
  font-size: 1.25rem;
  color: var(--clr-text-alt);
  margin-bottom: 1rem;
}

.toc-item {
  color: var(--clr-text-muted);
  transition: color 0.2s ease;
  border-radius: var(--base-radius);
  border-radius: 0.25rem;
  padding-block: 0.25rem;

  &:has(.btn-collapse) {
    padding-block: 0;
  }
}

.toc-item.is-active {
  color: var(--clr-text);
  font-weight: 600;
}

.is-section-anchor {
  anchor-name: --active-section-item;
}

.is-child-anchor {
  anchor-name: --active-child-item;
}

.toc-section-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  padding-left: 0.5rem;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--clr-bg-hover);
  }
}

.toc-link {
  cursor: pointer;
  flex: 1;
}

.toc-link:hover {
  color: var(--clr-text);
}

.btn-collapse {
  background: transparent;
  border: none;
  color: var(--clr-text-muted);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: var(--base-radius);
  transition: background-color 0.2s, color 0.2s;
  inset: 0.25rem;

  &:hover {
    background-color: var(--clr-bg-alt-hover);
    color: var(--clr-text);
  }
}

.btn-collapse .material-symbols-outlined {
  font-size: 1.25rem;
}

.toc-child {
  cursor: pointer;
}

.toc-child:hover {
  color: var(--clr-text);
}

.level-3 {
  padding-left: 1rem;
  font-size: 0.95rem;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--clr-bg-alt-hover);
  }
}

.toc-list {
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0;
  border-left: 2px solid var(--clr-border-muted);
  padding-left: 0.5rem;
}

.toc-list::after {
  content: "";
  position: absolute;
  width: 3px;
  background-color: var(--clr-primary);
  border-radius: 2px;

  position-anchor: --active-section-item;
  top: anchor(top);
  height: 1.5rem;
  left: -2px;

  transition: top 0.3s ease-out 0.15s, bottom 0.3s ease-out 0.15s;
}

.toc-sublist {
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0;
  min-height: 0;
  border-left: 2px solid var(--clr-border-muted);
  margin-left: 0.5rem;
}

.toc-sublist::after {
  content: "";
  position: absolute;
  width: 3px;

  background-color: var(--clr-primary);
  border-radius: 2px;

  position-anchor: --active-child-item;
  top: anchor(top);
  bottom: anchor(bottom);
  left: -2px;

  opacity: 0;

  transition:
    top 0.3s ease-out 0.1s,
    bottom 0.3s ease-out 0.1s,
    opacity 0.2s;
}

.toc-sublist.has-active-child::after {
  opacity: 1;
}

.toc-sublist-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s var(--ease-squish) 0.1s;
  overflow: hidden;
}

.toc-sublist-wrapper.is-open {
  grid-template-rows: 1fr;
}
</style>
