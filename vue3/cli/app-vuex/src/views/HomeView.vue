<template>
  <div class="py-1">
    <div>
      <Card>
        barra de navegacion
      </Card>
    </div>
    <div class="mt-1">
      <Card>
        renderizo segun de al boton
      </Card>
    </div>
  </div>
  
</template>

<script>
import Card from '@/components/ui/Card.vue';
import CardV1 from '@/components/ui/CardV1.vue';

export default {
  name: 'HomeView',
  components: {
    Card, CardV1
  },
}
</script>
