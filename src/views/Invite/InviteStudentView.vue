<script setup lang="ts">
import FileUploadCard from '@/components/invite/FileUploadCard.vue';
import MainLayout from '@/layouts/MainLayout.vue';
</script>

<template>
  <MainLayout>
      <div class="grid grid-cols-2 h-full">
        <FileUploadCard type="student"/>
      </div>
  </MainLayout>
</template>