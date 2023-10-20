<template lang="en">
    <div>
        <label class="font-medium text-lg capitalize" for="card">{{card.titulo}}</label>
        <div id="card">
            <div class="text-gray-50 border-2 border-gray-500 bg-gray-400 rounded-lg p-2">
               <slot></slot> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    card: Object,
  },
};
</script>
