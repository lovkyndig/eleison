<script lang="ts" setup>
// cource: https://github.com/damien-hl/nuxt3-auth-example
definePageMeta({
  middleware: ['admin-only'],
})

const { data: users } = await useAsyncData('users', () => $fetch('/api/users', { headers: useRequestHeaders(['cookie']) as HeadersInit }))

const currentUser = useAuthUser()
</script>

<template>
  <div>
    <NuxtLayout name="base">
      <LoginInfo :user="currentUser" />
      <div
        mb-3
        text-light-100
      >
        <div
          table
          w-full
        >
          <div
            table-header-group
            font-bold
          >
            <div table-row>
              <TableHeaderCell>ID</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell>Roles</TableHeaderCell>
            </div>
          </div>
          <div table-row-group>
            <div
              v-for="user in users"
              :key="user.id"
              table-row
            >
              <TableBodyCell>{{ user.id }}</TableBodyCell>
              <TableBodyCell>{{ user.email }}</TableBodyCell>
              <TableBodyCell>{{ user.roles.join(', ') }}</TableBodyCell>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
