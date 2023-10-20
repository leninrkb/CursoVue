<template lang="en">
    <div class="bg-cyan-500 rounded-lg p-2 transition ease-in-out duration-500 hover:bg-teal-500">
        <div class="p-2 text-gray-50">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:"CardV1"
}
</script>