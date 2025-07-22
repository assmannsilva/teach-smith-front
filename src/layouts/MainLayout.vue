<script setup lang="ts">
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/sidebar/AppSidebar.vue";
import Separator from "@/components/ui/separator/Separator.vue";
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset >
      <header class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger />
          <Separator orientation="vertical" class="mr-2 h-4" />
        </div>
      </header>
      <div class="p-12">
        <slot />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>