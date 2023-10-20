<template>
  <CardV1 :card="card">
    <div class="">
      hola mundo
    </div>
  </CardV1>
</template>

<script>
import Card from '@/components/ui/Card.vue';
import CardV1 from '@/components/ui/CardV1.vue';
export default {
  name: 'HomeView',
  components: {
    Card, CardV1
  },
  data() {
    return {
      card: { titulo: "Este es un card" }
    }
  },
}
</script>
