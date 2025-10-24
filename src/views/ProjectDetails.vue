<template>
  <section class="mb-6 text-text">
    <HeadlineComponent
      tag="h1"
      class="mb-6"
      size="base"
      variant="secondary"
      label="PROJECT INQUIRY"
    />

    <div v-for="(item, index) in inquiries" :key="index" class="flex flex-col space-y-1 mb-4">
      <div>
        <HeadlineComponent
          v-if="item.title"
          tag="h3"
          size="base"
          class="tracking-wide font-bold inline"
          :label="item.title + '.'"
        />
        <TextComponent
          tag="p"
          class="leading-relaxed tracking-wide inline text-[--color-cream]"
          :label="' ' + item.content"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import HeadlineComponent from '@/components/atoms/headline/HeadlineComponent.vue'
import TextComponent from '@/components/atoms/text/TextComponent.vue'

const inquiries = [
  {
    content:
      "Hey! We’d love to learn about what you're working towards to ensure we're a good fit. As a next step, please review the details below and submit our LFG form.",
  },
  {
    title: 'Timing',
    content:
      "We're an independent creative studio dedicated to top-caliber outcomes, so we work with full devotion for a few select clients at a time such that inquiries with rushed timelines are generally not possible.",
  },
  {
    title: 'Scope',
    content:
      "We mostly focus on brand strategy, visual identity, website design and development, and campaign. We're open to other requests (!) but generally want to work on the biggest opportunities — we don't often take on projects needing quick fixes or incremental improvements.",
  },
  {
    title: 'Budget',
    content:
      "While budgets vary based on deliverables, timelines, and stakes, our smallest engagements typically begin at $80k and more comprehensive offerings can extend up to $250k+. If your expectations are different, please don't be discouraged from continuing the conversation and sharing any budget limitations.",
  },
]
</script>
