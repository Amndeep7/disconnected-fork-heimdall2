<template>
  <Base
    :show-toolbar="false"
    :show-topbar="serverMode"
    :minimal-topbar="true"
    :topbar-z-index="1000"
  >
    <v-row>
      <v-col center xl="8" md="8" sm="12" xs="12">
        <UploadNexus retain-focus :persistent="true" />
      </v-col>
    </v-row>
  </Base>
</template>

<script lang="ts">
import UploadNexus from '@/components/global/UploadNexus.vue';
import ServerMixin from '@/mixins/ServerMixin';
import Base from '@/views/Base.vue';
import Component, {mixins} from 'vue-class-component';
@Component({
  components: {
    UploadNexus,
    Base
  }
})
export default class Landing extends mixins(ServerMixin) {}
</script>
