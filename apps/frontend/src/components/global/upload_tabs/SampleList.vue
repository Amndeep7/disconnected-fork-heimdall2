<template>
  <v-card class="elevation-0">
    <v-card-subtitle>
      Samples to show the power of the Heimdall application and supported HDF
      formats
    </v-card-subtitle>
    <v-container class="mx-0 px-0">
      <LoadFileList
        :headers="headers"
        :files="samples"
        file-key="filename"
        sort-by="filename"
        :sort-desc="false"
        :loading="loading"
        @load-results="load_samples($event)"
      />
    </v-container>
  </v-card>
</template>

<script lang="ts">
import LoadFileList from '@/components/global/upload_tabs/LoadFileList.vue';
import {FileID, InspecIntakeModule} from '@/store/report_intake';
import {SnackbarModule} from '@/store/snackbar';
import {Sample, samples} from '@/utilities/sample_util';
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {
    LoadFileList
  }
})
export default class SampleList extends Vue {
  samples: Sample[] = samples;
  headers: Object[] = [
    {
      text: 'Filename',
      align: 'start',
      sortable: true,
      value: 'filename'
    }
  ];

  loading = false;

  load_samples(sampleArray: Sample[]) {
    this.loading = true;
    Promise.all(
      sampleArray.map((arrayItem) => {
        return arrayItem.data().then((data: JSON) => {
          return InspecIntakeModule.loadText({
            text: JSON.stringify(data),
            filename: arrayItem.filename
          });
        });
      })
    )
      .then((fileIds: FileID[]) => {
        this.$emit('got-files', fileIds);
      })
      .catch((err) => {
        SnackbarModule.failure(String(err));
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
</script>
