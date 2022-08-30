import { PipelineRunKind } from './pipelineRun';

export type Commit = {
  metadata: {
    name: string;
    uid: string;
  };
  sha: string;
  shaURL: string;
  user: string;
  components: string[];
  repoURL?: string;
  repoOrg?: string;
  gitProvider?: string;
  branch?: string[];
  creationTime?: string;
  pipelineRuns: PipelineRunKind[];
};