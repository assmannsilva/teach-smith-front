<script lang="ts" setup>
import CreateClassroomCard from '@/components/classroom/CreateClassroomCard.vue';
import MainLayout from '@/layouts/MainLayout.vue';

</script>
<template>
    <MainLayout>
      <div class="mb-6">
        <h1 class="text-2xl font-semibold text-gray-800">Create Classroom</h1>
      </div>
      <div class="grid grid-cols-1 gap-6 mx-auto max-w-4xl">
        <CreateClassroomCard />
      </div>
    </MainLayout>
</template>