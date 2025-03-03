<!-- Component A -->
<script>
import { EventBus } from './eventbus.vue';
export default {
  methods: {
    sendMessage() {
      EventBus.$emit('messageEvent', 'Hello from A');
    },
  },
};
</script>

//component b
<!-- Component B -->
<script>
import { EventBus } from './EventBus';
export default {
  created() {
    EventBus.$on('messageEvent', (message) => {
      console.log('Received:', message);
    });
  },
};
</script>
