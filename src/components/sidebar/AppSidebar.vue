<script setup lang="ts">
import { Send } from "lucide-vue-next"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar'
import MainSidebarContent from "./MainSidebarContent.vue";
import { useAuthStore } from "@/stores/auth.store";
import UserMenu from "./UserMenu.vue";
import SidebarFooter from "../ui/sidebar/SidebarFooter.vue";
import { useRoute } from "vue-router";

const route = useRoute()
const auth = useAuthStore()

// Menu items.
const sidebarData = {
  user: {
    name: auth.loggedUser?.first_name + " " + auth.loggedUser?.surname,
    email: auth.loggedUser?.email,
  },
  organization: {
    name: auth.loggedOrganization?.name,
    logo: import.meta.env.VITE_API_URL + "organization_logo"
  },
  navMain: [
    {
      title: 'Invites',
      url: '#',
      icon: Send,
      isActive: route.path.includes("invite"),
      items: [
        {
          title: 'Invite Teachers',
          url: '/invite/teachers',
        },
        {
          title: 'Invite Students',
          url: '/invite/students',
        },
      ],
    },
  ],
}
</script>

<template>
   <Sidebar>
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <UserMenu :user="sidebarData.user" :organization="sidebarData.organization"/>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent>
      <MainSidebarContent :items="sidebarData.navMain" />
    </SidebarContent>
     <SidebarFooter>
      Teach Smith
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>