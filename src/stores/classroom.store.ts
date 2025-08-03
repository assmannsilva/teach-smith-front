import { defineStore } from 'pinia';
import { ref } from 'vue';
import classroomService from '@/services/classroom.service';
import type { Classroom } from '@/types/classroom';

export const useClassroomsStore = defineStore('classrooms', () => {
  const classrooms = ref<Classroom[]>([]);
  const isLoadingList = ref(false);
  const error = ref<string | null>(null);

  // Pagination
  const currentPage = ref(1);
  const perPage = ref(15);
  const total = ref(0);
  const lastPage = ref(1);

  async function fetchClassrooms(page = 1) {
    isLoadingList.value = true;
    error.value = null;

    try {
      currentPage.value = page
      const response = await classroomService.list(page);
      classrooms.value = response.data ?? [];
      total.value = response.total ?? 0;
      lastPage.value = response.last_page ?? 1;
    } catch (err: any) {
      error.value = err?.message ?? 'Error fetching classrooms';
    } finally {
      isLoadingList.value = false;
    }
  }

  return {
    classrooms,
    isLoadingList,
    error,
    currentPage,
    perPage,
    total,
    lastPage,
    fetchClassrooms,
  };
});
