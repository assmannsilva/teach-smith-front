<script setup lang="ts">
import { Send } from "lucide-vue-next"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'
import MainSidebarContent from "./MainSidebarContent.vue";


// Menu items.
const sidebarData = {
  user: {
    name: 'Cauê',
    email: 'caue@example.com',
  },
  navMain: [
    {
      title: 'Invites',
      url: '#',
      icon: Send,
      isActive: true,
      items: [
        {
          title: 'Invite Teachers',
          url: '#',
        },
        {
          title: 'Invite Students',
          url: '#',
        },
      ],
    },
  ],
}
</script>

<template>
   <Sidebar>
    <SidebarHeader>
      Teste
    </SidebarHeader>
    <SidebarContent>
      <MainSidebarContent :items="sidebarData.navMain" />
    </SidebarContent>
    <SidebarFooter>
      Teste
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>