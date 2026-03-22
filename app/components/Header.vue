<script lang="ts" setup>
</script>

<template>
    <header>
        <NavLink to="/" content="Home" />
        <NavLink to="/users" content="Users" />
        <NavLink to="/profile" content="Profile" /> 
    </header>
</template>

<style scoped>
header {
    display: flex;
    padding: 27px 117px;
    justify-content: end;
    align-items: center;
    gap: 24px;
}
</style>