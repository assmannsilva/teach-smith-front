<script setup lang="ts">
import FileUploadCard from '@/components/invite/FileUploadCard.vue';
import InviteTeacherCard from '@/components/invite/InviteTeacherCard.vue';
import MainLayout from '@/layouts/MainLayout.vue';
</script>

<template>
  <MainLayout>
      <div class="grid grid-cols-2 gap-6">
        <div>
          <FileUploadCard type="teacher"/>
        </div>
        <InviteTeacherCard />
      </div>
  </MainLayout>
</template>