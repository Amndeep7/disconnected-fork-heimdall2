<template>
  <v-row class="foreground" :dense="dense">
    <v-col cols="12">
      <v-card color="grey darken-3" data-cy="controlRow" elevation="3">
        <ResponsiveRowSmall
          v-if="$vuetify.breakpoint.xsOnly"
          @toggle="$emit('toggle')"
        >
          <template #status>
            <slot name="status" />
          </template>
          <template #set>
            <slot name="set" />
          </template>
          <template #severity>
            <slot name="severity" />
          </template>
          <template #title>
            <slot name="title" />
          </template>
          <template #id>
            <slot name="id" />
          </template>
          <template #tags>
            <slot name="tags" />
          </template>
          <template #runTime>
            <slot name="runTime" />
          </template>
          <template #viewed>
            <slot name="viewed" />
          </template>
        </ResponsiveRowSmall>

        <ResponsiveRowMedium v-else-if="$vuetify.breakpoint.mdAndDown">
          <template #status>
            <slot name="status" />
          </template>
          <template #set>
            <slot name="set" />
          </template>
          <template #severity>
            <slot name="severity" />
          </template>
          <template #title>
            <slot name="title" />
          </template>
          <template #id>
            <slot name="id" />
          </template>
          <template #tags>
            <slot name="tags" />
          </template>
          <template #runTime>
            <slot name="runTime" />
          </template>
          <template #viewed>
            <slot name="viewed" />
          </template>
        </ResponsiveRowMedium>

        <ResponsiveRowLarge v-else>
          <template #status>
            <slot name="status" />
          </template>
          <template #set>
            <slot name="set" />
          </template>
          <template #severity>
            <slot name="severity" />
          </template>
          <template #title>
            <slot name="title" />
          </template>
          <template #id>
            <slot name="id" />
          </template>
          <template #tags>
            <slot name="tags" />
          </template>
          <template #runTime>
            <slot name="runTime" />
          </template>
          <template #viewed>
            <slot name="viewed" />
          </template>
        </ResponsiveRowLarge>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import ResponsiveRowLarge from '@/components/cards/controltable/ResponsiveRowLarge.vue';
import ResponsiveRowMedium from '@/components/cards/controltable/ResponsiveRowMedium.vue';
import ResponsiveRowSmall from '@/components/cards/controltable/ResponsiveRowSmall.vue';
import Vue from 'vue';
import Component from 'vue-class-component';
import {Prop} from 'vue-property-decorator';

@Component({
  components: {
    ResponsiveRowLarge,
    ResponsiveRowMedium,
    ResponsiveRowSmall
  }
})
export default class ResponsiveRowSwitch extends Vue {
  @Prop({type: Boolean, required: false, default: false}) dense!: boolean;
}
</script>
