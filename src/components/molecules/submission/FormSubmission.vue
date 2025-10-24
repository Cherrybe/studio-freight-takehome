<template>
  <Headline
    label="Thanks for reaching out"
    size="base"
    variant="tertiary"
    className="group-hover:text-(--color-text-dark)"
  />
  <Text
    tag="p"
    class="leading-relaxed tracking-wide inline text-[--color-cream]"
    label="While you anxiously await our reply, you can play this game we built for Lunchbox, create ASCII art with Aniso, or get in the zone with our latest playlist. We’ll be in touch soon."
  />
</template>

<script setup lang="ts">
import Headline from '@/components/atoms/headline/HeadlineComponent.vue'
import Text from '@/components/atoms/text/TextComponent.vue'
</script>
