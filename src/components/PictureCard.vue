<template>
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="url.regular">
        <div class="card-body">
            <h5 class="card-title">{{desc || 'No Description'}}</h5>
            <p class="card-text">By: {{user.name}}</p>
            <a :href="user.links.html" class="btn btn-primary">Visit</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PictureCard',
        props: ['url', 'desc', 'user']
    }
</script>

<style lang="scss" scoped>

</style>