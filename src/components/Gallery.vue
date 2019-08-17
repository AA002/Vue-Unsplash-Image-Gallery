<template>
<div class="container-fluid">
    <Draggable v-infinite-scroll="getPhotos" class="row justify-content-center" v-model="images" @start="drag=true" @end="drag=false">
        <div class="col-xs-2" style="padding: 10px" v-for="image in images" :key="image.id">
            <PictureCard :url="image.urls" :desc="image.description" :user="image.user"></PictureCard>
        </div>
    </Draggable>
</div>
</template>

<script>
    import PictureCard from './PictureCard'
    import Draggable from 'vuedraggable'
    export default {
        name: 'Gallery',
        data() {
            return {
                images: [],
                page: 0,
                perPage: 40,
                busy: false
            }
        },
        components: {
            PictureCard,
            Draggable
        },
        mounted() {
            this.getPhotos()
        },
        methods: {
            getPhotos() {
                this.page++
                this.$axios.get(`https://api.unsplash.com/photos?page=${this.page}&per_page=${this.perPage}&client_id=${this.$unsplash._applicationId}`)
                    .then(res => {
                        let merge = this.images.concat(res.data);
                        this.images = merge.filter((image, index, self) => self.findIndex(t => t.id === image.id && t.created_at === image.created_at) === index)
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>