<template lang="en">
    <div>
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
};
</script>
