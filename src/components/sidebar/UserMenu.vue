<script setup lang="ts">
import { LogOut, Plus, Settings } from 'lucide-vue-next'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { useLogout } from '@/composables/useLogout';

const props = defineProps<{
  user: {
    name: string | undefined,
    email: string | undefined,
  },
  organization: {
    name: string | undefined,
    logo: string | undefined
  }
}>()

const { isMobile } = useSidebar()

const { logout } = useLogout() 
</script>

<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <SidebarMenuButton
            size="lg"
            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div class="flex aspect-square size-10 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <img :src="organization.logo" class="size-10" />
            </div>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-semibold">
                {{ organization.name }}
              </span>
              <span class="truncate text-xs">{{ user.name }}</span>
            </div>
            <Settings class="ml-auto" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          class="w-[--reka-dropdown-menu-trigger-width] min-w-56 rounded-lg"
          align="start"
          :side="isMobile ? 'bottom' : 'right'"
          :side-offset="4"
        >
          <DropdownMenuItem class="gap-2 p-2"  @click="logout">
            <div class="flex size-6 items-center justify-center rounded-md border bg-background">
              <LogOut class="size-4" />
            </div>
            <span class="font-medium text-muted-foreground"> Logout </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>
</template>
