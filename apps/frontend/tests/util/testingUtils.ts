import {InspecDataModule} from '@/store/data_store';
import {InspecIntakeModule} from '@/store/report_intake';
import {Sample, samples} from '@/utilities/sample_util';
import {readFileSync} from 'fs';
import 'jest';
import {AllRaw} from '../util/fs';

export function loadSample(sampleName: string) {
  const sample: Sample | undefined = samples.find(
    (samp) => samp.filename === sampleName
  );
  if (sample === undefined) {
    return null;
  }
  const data: string = require(`../../public${sample.path}`);
  return InspecIntakeModule.loadText({
    filename: sampleName,
    text: JSON.stringify(data)
  });
}

export function loadAll(): void {
  const data = AllRaw();
  Object.values(data).forEach((fileResult) => {
    // Do intake
    InspecIntakeModule.loadText({
      filename: fileResult.name,
      text: fileResult.content
    });
  });
}

export function removeAllFiles(): void {
  const ids = InspecDataModule.allFiles.map((f) => f.uniqueId);
  for (const id of ids) {
    InspecDataModule.removeFile(id);
  }
}

// When using Vuetify v-dialog's this is necessary in order to avoid a
// warning on the console when running tests.
export function addElemWithDataAppToBody() {
  const app = document.createElement('div');
  app.setAttribute('data-app', 'true');
  document.body.append(app);
}

export function expectedCount(
  status: 'failed' | 'passed' | 'notReviewed' | 'notApplicable' | 'profileError'
) {
  const statuses = {
    failed: 0,
    passed: 0,
    notReviewed: 0,
    notApplicable: 0,
    profileError: 0
  };

  // For each, we will filter then count
  InspecDataModule.executionFiles.forEach((file) => {
    // Get the corresponding count file
    const countFilename = `tests/hdf_data/counts/${file.filename}.info.counts`;
    const countFileContent = readFileSync(countFilename, 'utf-8');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const counts: Record<string, any> = JSON.parse(countFileContent);

    statuses['failed'] += counts.failed.total;
    statuses['passed'] += counts.passed.total;
    statuses['notReviewed'] += counts.skipped.total;
    statuses['notApplicable'] += counts.no_impact.total;
    statuses['profileError'] += counts.error.total;
  });

  return statuses[status];
}
