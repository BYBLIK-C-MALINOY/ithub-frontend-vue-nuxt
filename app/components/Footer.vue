<script lang="ts" setup>
import IconLink from './IconLink.vue';
import Typography from './Typography.vue';
</script>

<template>
    <footer>
        <nav>
            <IconLink link="fb"/>
            <IconLink link="insta" />
            <IconLink link="twitter" />
            <IconLink link="linkedin" />
        </nav>
        <Typography type="small">
            Copyright ©2026 All rights reserved 
        </Typography>
    </footer>
</template>

<style scoped>
footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 26px;
    padding: 51px 0 54px;
}

nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 35px;
    margin-top: 500px;
}
</style>