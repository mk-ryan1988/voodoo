<template>
<div class="inline-flex w-12 h-12 overflow-hidden bg-no-repeat" :class="[computedRounding, computedBgSize]" :style="{ backgroundImage: `url(${bgImg})` }">
</div>
</template>

<script>
export default {
    name: 'VdooAvatar',
    props: {
        bgImg: {
            type: String,
            default: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
        },
        cover: {
            type: Boolean,
            default: false,
        },
        round: {
            type: Boolean,
            default: false
        },
        rounded: {
            type: Boolean,
            default: false
        },
    },
    computed: {
        computedRounding() {
            let rounding =  ''
            if (this.rounded) {
                rounding = 'rounded'
            }
            if (this.round) {
                rounding = 'rounded-full'
            }
            return rounding
        },
        computedBgSize() {
            return this.cover ? 'bg-cover' : 'bg-contain'
        }
    }
}
</script>

