<script setup lang="ts">
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination'

import { onMounted } from 'vue';
import { useClassroomsStore } from '@/stores/classroom.store';

const store = useClassroomsStore();
onMounted(() => {
  store.fetchClassrooms();
});

</script>
<template>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead> Grade </TableHead>
        <TableHead> Education Level</TableHead>
        <TableHead> Section </TableHead>
        <TableHead> Year </TableHead>
        <TableHead> Created At </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="classroom in store.classrooms" :key="classroom.id">
        <td>{{ classroom.grade }}</td>
        <td>{{ classroom.education_stage }}</td>
        <td>{{ classroom.section }}</td>
        <td>{{ classroom.year }}</td>
        <td>{{ new Date(classroom.created_at).toLocaleString('en-US') }}</td>
      </TableRow>
    </TableBody>
  </Table>

  <Pagination v-slot="{ page }"
    :items-per-page="store.perPage"
    :total="store.total"
    :default-page="store.currentPage"
  >
  <PaginationContent v-slot="{ items }">
    <PaginationPrevious @click="store.fetchClassrooms(page - 1)" />

    <template v-for="(item, index) in items" :key="index">
      <PaginationItem
        v-if="item.type === 'page'"
        :value="item.value"
        :is-active="item.value === page"
        @click="store.fetchClassrooms(item.value)"
      >
        {{ item.value }}
      </PaginationItem>
    </template>

    <PaginationNext @click="store.fetchClassrooms(page + 1)" />
  </PaginationContent>
</Pagination>

</template>