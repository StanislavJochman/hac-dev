export const mockTestPipelinesData = [
  {
    apiVersion: 'tekton.dev/v1beta1',
    kind: 'PipelineRun',
    metadata: {
      generateName: 'test-application-dgkqg-',
      annotations: {
        'pipelinesascode.tekton.dev/on-target-branch': '[main,master]',
        'pipelinesascode.tekton.dev/repo-url': 'https://github.com/karthikjeeyar/test-nodeapp',
        'pipelinesascode.tekton.dev/sha-title': 'Appstudio update test-nodeapp',
        'results.tekton.dev/record':
          'jephilli/results/02ce3536-a06d-4900-ac9c-a891c0e31b42/records/02ce3536-a06d-4900-ac9c-a891c0e31b42',
        'pipelinesascode.tekton.dev/git-auth-secret': 'pac-gitauth-mpiw',
        'results.tekton.dev/result': 'jephilli/results/02ce3536-a06d-4900-ac9c-a891c0e31b42',
        'pipelinesascode.tekton.dev/max-keep-runs': '3',
        'pipelinesascode.tekton.dev/pull-request': '9',
        'pipelinesascode.tekton.dev/sha-url':
          'https://github.com/karthikjeeyar/test-nodeapp/commit/cd96b58bcf8199ae94873105fbdcd7b2ea53d2b5',
        'pipelinesascode.tekton.dev/on-event': '[pull_request]',
        'pipelinesascode.tekton.dev/installation-id': '29976162',
      },
      resourceVersion: '199210',
      name: 'test-application-dgkqg-xr5rn',
      uid: '02ce3536-a06d-4900-ac9c-a891c0e31b42',
      creationTimestamp: '2022-11-09T17:33:35Z',
      generation: 1,
      namespace: 'jephilli',
      ownerReferences: [
        {
          apiVersion: 'appstudio.redhat.com/v1alpha1',
          blockOwnerDeletion: true,
          controller: true,
          kind: 'Snapshot',
          name: 'test-application-dgkqg',
          uid: 'd35bae92-cdba-4030-b45a-5bf9a7871e4e',
        },
      ],
      finalizers: ['pipelinesascode.tekton.dev', 'chains.tekton.dev/pipelinerun'],
      labels: {
        'pipelinesascode.tekton.dev/state': 'started',
        'appstudio.openshift.io/snapshot': 'test-application-dgkqg',
        'pipelinesascode.tekton.dev/sender': 'karthikjeeyar',
        'test.appstudio.openshift.io/scenario': 'application-test-one',
        'appstudio.openshift.io/application': 'test-application',
        'tekton.dev/pipeline': 'component-pipeline-pass',
        'pipelinesascode.tekton.dev/branch': 'main',
        'pipelinesascode.tekton.dev/url-org': 'karthikjeeyar',
        'pipelinesascode.tekton.dev/original-prname': 'test-nodeapp-on-pull-request',
        'pipelines.appstudio.openshift.io/type': 'test',
        'pipelinesascode.tekton.dev/url-repository': 'test-nodeapp',
        'pipelinesascode.tekton.dev/repository': 'test-nodeapp',
        'pipelinesascode.tekton.dev/sha': 'cd96b58bcf8199ae94873105fbdcd7b2ea53d2b5',
        'pipelinesascode.tekton.dev/git-provider': 'github',
        'appstudio.openshift.io/component': 'test-nodeapp',
        'pipelinesascode.tekton.dev/event-type': 'pull_request',
      },
    },
    spec: {
      params: [
        {
          name: 'SNAPSHOT',
          value:
            '{"application":"test-application","components":[{"name":"test-nodeapp","containerImage":"quay.io/karthik_jk/test-nodeapp@sha256:882b783cb85b7fb95f1f297a8097045cd58bf0e6881cbf86ac3105eeaa4a8746"}],"artifacts":{}}',
        },
      ],
      pipelineRef: {
        bundle: 'quay.io/kpavic/test-bundle:component-pipeline-pass',
        name: 'component-pipeline-pass',
      },
      serviceAccountName: 'pipeline',
      timeout: '1h0m0s',
    },
    status: {
      completionTime: '2022-11-09T17:33:45Z',
      conditions: [
        {
          lastTransitionTime: '2022-11-09T17:33:45Z',
          message: 'Tasks Completed: 3 (Failed: 0, Cancelled 0), Skipped: 0',
          reason: 'Succeeded',
          status: 'True',
          type: 'Succeeded',
        },
      ],
      pipelineSpec: {
        tasks: [
          {
            name: 'task-success',
            params: [
              {
                name: 'RESULT',
                value: 'SUCCESS',
              },
            ],
            taskRef: {
              bundle: 'quay.io/kpavic/test-bundle:test-output',
              kind: 'Task',
              name: 'test-output',
            },
          },
          {
            name: 'task-success-2',
            params: [
              {
                name: 'RESULT',
                value: 'SUCCESS',
              },
            ],
            taskRef: {
              bundle: 'quay.io/kpavic/test-bundle:test-output',
              kind: 'Task',
              name: 'test-output',
            },
          },
          {
            name: 'task-skipped',
            params: [
              {
                name: 'RESULT',
                value: 'SKIPPED',
              },
            ],
            taskRef: {
              bundle: 'quay.io/kpavic/test-bundle:test-output',
              kind: 'Task',
              name: 'test-output',
            },
          },
        ],
      },
      startTime: '2022-11-09T17:33:35Z',
      taskRuns: {
        'test-application-dgkqg-xr5rn-task-skipped': {
          pipelineTaskName: 'task-skipped',
          status: {
            completionTime: '2022-11-09T17:33:44Z',
            conditions: [
              {
                lastTransitionTime: '2022-11-09T17:33:44Z',
                message: 'All Steps have completed executing',
                reason: 'Succeeded',
                status: 'True',
                type: 'Succeeded',
              },
            ],
            podName: 'test-application-dgkqg-xr5rn-task-skipped-pod',
            startTime: '2022-11-09T17:33:37Z',
            steps: [
              {
                container: 'step-unnamed-0',
                imageID:
                  'quay.io/redhat-appstudio/hacbs-test@sha256:581f9e27c748f9900e32a152293b6dffbaa3e390775f3c36c3860c6ed6c87b73',
                name: 'unnamed-0',
                terminated: {
                  containerID:
                    'cri-o://88d49e7dda27ed1567d754705066b8a24600e3514f064939a8fc50d908b8a7d2',
                  exitCode: 0,
                  finishedAt: '2022-11-09T17:33:44Z',
                  message:
                    '[{"key":"HACBS_TEST_OUTPUT","value":"{\\"result\\":\\"SKIPPED\\",\\"timestamp\\":\\"1668015224\\",\\"failures\\":[],\\"successes\\":0}\\n","type":1}]',
                  reason: 'Completed',
                  startedAt: '2022-11-09T17:33:44Z',
                },
              },
            ],
            taskResults: [
              {
                name: 'HACBS_TEST_OUTPUT',
                value:
                  '{"result":"SKIPPED","timestamp":"1668015224","failures":[],"successes":0}\n',
              },
            ],
            taskSpec: {
              params: [
                {
                  default: 'SUCCESS',
                  description: 'Test result to be generated',
                  name: 'RESULT',
                  type: 'string',
                },
              ],
              results: [
                {
                  description: 'Test output',
                  name: 'HACBS_TEST_OUTPUT',
                },
              ],
              steps: [
                {
                  image: 'quay.io/redhat-appstudio/hacbs-test:stable',
                  name: '',
                  resources: {},
                  script:
                    'HACBS_TEST_OUTPUT=$(jq -rc --arg date $(date +%s) --arg RESULT $(params.RESULT) --null-input \\\n  \'{result: $RESULT, timestamp: $date, failures: [], successes: 0}\')\necho "${HACBS_TEST_OUTPUT}" | tee $(results.HACBS_TEST_OUTPUT.path)\n',
                },
              ],
            },
          },
        },
        'test-application-dgkqg-xr5rn-task-success': {
          pipelineTaskName: 'task-success',
          status: {
            completionTime: '2022-11-09T17:33:45Z',
            conditions: [
              {
                lastTransitionTime: '2022-11-09T17:33:45Z',
                message: 'All Steps have completed executing',
                reason: 'Succeeded',
                status: 'True',
                type: 'Succeeded',
              },
            ],
            podName: 'test-application-dgkqg-xr5rn-task-success-pod',
            startTime: '2022-11-09T17:33:35Z',
            steps: [
              {
                container: 'step-unnamed-0',
                imageID:
                  'quay.io/redhat-appstudio/hacbs-test@sha256:581f9e27c748f9900e32a152293b6dffbaa3e390775f3c36c3860c6ed6c87b73',
                name: 'unnamed-0',
                terminated: {
                  containerID:
                    'cri-o://f73f6d2450091e6e7c111f7a83253ca87dd71c28790663453926308caa24e769',
                  exitCode: 0,
                  finishedAt: '2022-11-09T17:33:45Z',
                  message:
                    '[{"key":"HACBS_TEST_OUTPUT","value":"{\\"result\\":\\"SUCCESS\\",\\"timestamp\\":\\"1668015224\\",\\"failures\\":[],\\"successes\\":0}\\n","type":1}]',
                  reason: 'Completed',
                  startedAt: '2022-11-09T17:33:44Z',
                },
              },
            ],
            taskResults: [
              {
                name: 'HACBS_TEST_OUTPUT',
                value:
                  '{"result":"SUCCESS","timestamp":"1668015224","failures":[],"successes":0}\n',
              },
            ],
            taskSpec: {
              params: [
                {
                  default: 'SUCCESS',
                  description: 'Test result to be generated',
                  name: 'RESULT',
                  type: 'string',
                },
              ],
              results: [
                {
                  description: 'Test output',
                  name: 'HACBS_TEST_OUTPUT',
                },
              ],
              steps: [
                {
                  image: 'quay.io/redhat-appstudio/hacbs-test:stable',
                  name: '',
                  resources: {},
                  script:
                    'HACBS_TEST_OUTPUT=$(jq -rc --arg date $(date +%s) --arg RESULT $(params.RESULT) --null-input \\\n  \'{result: $RESULT, timestamp: $date, failures: [], successes: 0}\')\necho "${HACBS_TEST_OUTPUT}" | tee $(results.HACBS_TEST_OUTPUT.path)\n',
                },
              ],
            },
          },
        },
        'test-application-dgkqg-xr5rn-task-success-2': {
          pipelineTaskName: 'task-success-2',
          status: {
            completionTime: '2022-11-09T17:33:44Z',
            conditions: [
              {
                lastTransitionTime: '2022-11-09T17:33:44Z',
                message: 'All Steps have completed executing',
                reason: 'Succeeded',
                status: 'True',
                type: 'Succeeded',
              },
            ],
            podName: 'test-application-dgkqg-xr5rn-task-success-2-pod',
            startTime: '2022-11-09T17:33:36Z',
            steps: [
              {
                container: 'step-unnamed-0',
                imageID:
                  'quay.io/redhat-appstudio/hacbs-test@sha256:581f9e27c748f9900e32a152293b6dffbaa3e390775f3c36c3860c6ed6c87b73',
                name: 'unnamed-0',
                terminated: {
                  containerID:
                    'cri-o://7622933fd98a4aef09c4f1bf707165c65a392a5664e339dfcb54411363aa7c32',
                  exitCode: 0,
                  finishedAt: '2022-11-09T17:33:43Z',
                  message:
                    '[{"key":"HACBS_TEST_OUTPUT","value":"{\\"result\\":\\"SUCCESS\\",\\"timestamp\\":\\"1668015223\\",\\"failures\\":[],\\"successes\\":0}\\n","type":1}]',
                  reason: 'Completed',
                  startedAt: '2022-11-09T17:33:43Z',
                },
              },
            ],
            taskResults: [
              {
                name: 'HACBS_TEST_OUTPUT',
                value:
                  '{"result":"SUCCESS","timestamp":"1668015223","failures":[],"successes":0}\n',
              },
            ],
            taskSpec: {
              params: [
                {
                  default: 'SUCCESS',
                  description: 'Test result to be generated',
                  name: 'RESULT',
                  type: 'string',
                },
              ],
              results: [
                {
                  description: 'Test output',
                  name: 'HACBS_TEST_OUTPUT',
                },
              ],
              steps: [
                {
                  image: 'quay.io/redhat-appstudio/hacbs-test:stable',
                  name: '',
                  resources: {},
                  script:
                    'HACBS_TEST_OUTPUT=$(jq -rc --arg date $(date +%s) --arg RESULT $(params.RESULT) --null-input \\\n  \'{result: $RESULT, timestamp: $date, failures: [], successes: 0}\')\necho "${HACBS_TEST_OUTPUT}" | tee $(results.HACBS_TEST_OUTPUT.path)\n',
                },
              ],
            },
          },
        },
      },
    },
  },
  {
    apiVersion: 'tekton.dev/v1beta1',
    kind: 'PipelineRun',
    metadata: {
      generateName: 'test-application-dgkqg-',
      annotations: {
        'pipelinesascode.tekton.dev/on-target-branch': '[main,master]',
        'pipelinesascode.tekton.dev/repo-url': 'https://github.com/karthikjeeyar/test-nodeapp',
        'pipelinesascode.tekton.dev/sha-title': 'Appstudio update test-nodeapp',
        'results.tekton.dev/record':
          'jephilli/results/26ed93ba-cc4f-48de-bea3-3177305e8181/records/26ed93ba-cc4f-48de-bea3-3177305e8181',
        'pipelinesascode.tekton.dev/git-auth-secret': 'pac-gitauth-mpiw',
        'results.tekton.dev/result': 'jephilli/results/26ed93ba-cc4f-48de-bea3-3177305e8181',
        'pipelinesascode.tekton.dev/max-keep-runs': '3',
        'pipelinesascode.tekton.dev/pull-request': '9',
        'pipelinesascode.tekton.dev/sha-url':
          'https://github.com/karthikjeeyar/test-nodeapp/commit/cd96b58bcf8199ae94873105fbdcd7b2ea53d2b5',
        'pipelinesascode.tekton.dev/on-event': '[pull_request]',
        'pipelinesascode.tekton.dev/installation-id': '29976162',
      },
      resourceVersion: '199208',
      name: 'test-application-dgkqg-xs6t2',
      uid: '26ed93ba-cc4f-48de-bea3-3177305e8181',
      creationTimestamp: '2022-11-09T17:33:35Z',
      generation: 1,
      namespace: 'jephilli',
      ownerReferences: [
        {
          apiVersion: 'appstudio.redhat.com/v1alpha1',
          blockOwnerDeletion: true,
          controller: true,
          kind: 'Snapshot',
          name: 'test-application-dgkqg',
          uid: 'd35bae92-cdba-4030-b45a-5bf9a7871e4e',
        },
      ],
      finalizers: ['pipelinesascode.tekton.dev', 'chains.tekton.dev/pipelinerun'],
      labels: {
        'pipelinesascode.tekton.dev/state': 'started',
        'appstudio.openshift.io/snapshot': 'test-application-dgkqg',
        'pipelinesascode.tekton.dev/sender': 'karthikjeeyar',
        'test.appstudio.openshift.io/scenario': 'application-test-two',
        'appstudio.openshift.io/application': 'test-application',
        'tekton.dev/pipeline': 'component-pipeline-pass',
        'pipelinesascode.tekton.dev/branch': 'main',
        'pipelinesascode.tekton.dev/url-org': 'karthikjeeyar',
        'pipelinesascode.tekton.dev/original-prname': 'test-nodeapp-on-pull-request',
        'pipelines.appstudio.openshift.io/type': 'test',
        'pipelinesascode.tekton.dev/url-repository': 'test-nodeapp',
        'pipelinesascode.tekton.dev/repository': 'test-nodeapp',
        'pipelinesascode.tekton.dev/sha': 'cd96b58bcf8199ae94873105fbdcd7b2ea53d2b5',
        'pipelinesascode.tekton.dev/git-provider': 'github',
        'appstudio.openshift.io/component': 'test-nodeapp',
        'pipelinesascode.tekton.dev/event-type': 'pull_request',
      },
    },
    spec: {
      params: [
        {
          name: 'SNAPSHOT',
          value:
            '{"application":"test-application","components":[{"name":"test-nodeapp","containerImage":"quay.io/karthik_jk/test-nodeapp@sha256:882b783cb85b7fb95f1f297a8097045cd58bf0e6881cbf86ac3105eeaa4a8746"}],"artifacts":{}}',
        },
      ],
      pipelineRef: {
        bundle: 'quay.io/kpavic/test-bundle:component-pipeline-pass',
        name: 'component-pipeline-pass',
      },
      serviceAccountName: 'pipeline',
      timeout: '1h0m0s',
    },
    status: {
      completionTime: '2022-11-09T17:33:45Z',
      conditions: [
        {
          lastTransitionTime: '2022-11-09T17:33:45Z',
          message: 'Tasks Completed: 3 (Failed: 0, Cancelled 0), Skipped: 0',
          reason: 'Succeeded',
          status: 'True',
          type: 'Succeeded',
        },
      ],
      pipelineSpec: {
        tasks: [
          {
            name: 'task-success',
            params: [
              {
                name: 'RESULT',
                value: 'SUCCESS',
              },
            ],
            taskRef: {
              bundle: 'quay.io/kpavic/test-bundle:test-output',
              kind: 'Task',
              name: 'test-output',
            },
          },
          {
            name: 'task-success-2',
            params: [
              {
                name: 'RESULT',
                value: 'SUCCESS',
              },
            ],
            taskRef: {
              bundle: 'quay.io/kpavic/test-bundle:test-output',
              kind: 'Task',
              name: 'test-output',
            },
          },
          {
            name: 'task-skipped',
            params: [
              {
                name: 'RESULT',
                value: 'SKIPPED',
              },
            ],
            taskRef: {
              bundle: 'quay.io/kpavic/test-bundle:test-output',
              kind: 'Task',
              name: 'test-output',
            },
          },
        ],
      },
      startTime: '2022-11-09T17:33:35Z',
      taskRuns: {
        'test-application-dgkqg-xs6t2-task-skipped': {
          pipelineTaskName: 'task-skipped',
          status: {
            completionTime: '2022-11-09T17:33:45Z',
            conditions: [
              {
                lastTransitionTime: '2022-11-09T17:33:45Z',
                message: 'All Steps have completed executing',
                reason: 'Succeeded',
                status: 'True',
                type: 'Succeeded',
              },
            ],
            podName: 'test-application-dgkqg-xs6t2-task-skipped-pod',
            startTime: '2022-11-09T17:33:37Z',
            steps: [
              {
                container: 'step-unnamed-0',
                imageID:
                  'quay.io/redhat-appstudio/hacbs-test@sha256:581f9e27c748f9900e32a152293b6dffbaa3e390775f3c36c3860c6ed6c87b73',
                name: 'unnamed-0',
                terminated: {
                  containerID:
                    'cri-o://5655562cce7a95cfeca8abb2fe7bfce590c2ee3227d7ecb0a0302f594e1f09ec',
                  exitCode: 0,
                  finishedAt: '2022-11-09T17:33:45Z',
                  message:
                    '[{"key":"HACBS_TEST_OUTPUT","value":"{\\"result\\":\\"SKIPPED\\",\\"timestamp\\":\\"1668015225\\",\\"failures\\":[],\\"successes\\":0}\\n","type":1}]',
                  reason: 'Completed',
                  startedAt: '2022-11-09T17:33:45Z',
                },
              },
            ],
            taskResults: [
              {
                name: 'HACBS_TEST_OUTPUT',
                value:
                  '{"result":"SKIPPED","timestamp":"1668015225","failures":[],"successes":0}\n',
              },
            ],
            taskSpec: {
              params: [
                {
                  default: 'SUCCESS',
                  description: 'Test result to be generated',
                  name: 'RESULT',
                  type: 'string',
                },
              ],
              results: [
                {
                  description: 'Test output',
                  name: 'HACBS_TEST_OUTPUT',
                },
              ],
              steps: [
                {
                  image: 'quay.io/redhat-appstudio/hacbs-test:stable',
                  name: '',
                  resources: {},
                  script:
                    'HACBS_TEST_OUTPUT=$(jq -rc --arg date $(date +%s) --arg RESULT $(params.RESULT) --null-input \\\n  \'{result: $RESULT, timestamp: $date, failures: [], successes: 0}\')\necho "${HACBS_TEST_OUTPUT}" | tee $(results.HACBS_TEST_OUTPUT.path)\n',
                },
              ],
            },
          },
        },
        'test-application-dgkqg-xs6t2-task-success': {
          pipelineTaskName: 'task-success',
          status: {
            completionTime: '2022-11-09T17:33:45Z',
            conditions: [
              {
                lastTransitionTime: '2022-11-09T17:33:45Z',
                message: 'All Steps have completed executing',
                reason: 'Succeeded',
                status: 'True',
                type: 'Succeeded',
              },
            ],
            podName: 'test-application-dgkqg-xs6t2-task-success-pod',
            startTime: '2022-11-09T17:33:35Z',
            steps: [
              {
                container: 'step-unnamed-0',
                imageID:
                  'quay.io/redhat-appstudio/hacbs-test@sha256:581f9e27c748f9900e32a152293b6dffbaa3e390775f3c36c3860c6ed6c87b73',
                name: 'unnamed-0',
                terminated: {
                  containerID:
                    'cri-o://d1af15ee9484ad17ed61313eca51613c8018a3397f8531c7897756342504f00f',
                  exitCode: 0,
                  finishedAt: '2022-11-09T17:33:45Z',
                  message:
                    '[{"key":"HACBS_TEST_OUTPUT","value":"{\\"result\\":\\"SUCCESS\\",\\"timestamp\\":\\"1668015224\\",\\"failures\\":[],\\"successes\\":0}\\n","type":1}]',
                  reason: 'Completed',
                  startedAt: '2022-11-09T17:33:44Z',
                },
              },
            ],
            taskResults: [
              {
                name: 'HACBS_TEST_OUTPUT',
                value:
                  '{"result":"SUCCESS","timestamp":"1668015224","failures":[],"successes":0}\n',
              },
            ],
            taskSpec: {
              params: [
                {
                  default: 'SUCCESS',
                  description: 'Test result to be generated',
                  name: 'RESULT',
                  type: 'string',
                },
              ],
              results: [
                {
                  description: 'Test output',
                  name: 'HACBS_TEST_OUTPUT',
                },
              ],
              steps: [
                {
                  image: 'quay.io/redhat-appstudio/hacbs-test:stable',
                  name: '',
                  resources: {},
                  script:
                    'HACBS_TEST_OUTPUT=$(jq -rc --arg date $(date +%s) --arg RESULT $(params.RESULT) --null-input \\\n  \'{result: $RESULT, timestamp: $date, failures: [], successes: 0}\')\necho "${HACBS_TEST_OUTPUT}" | tee $(results.HACBS_TEST_OUTPUT.path)\n',
                },
              ],
            },
          },
        },
        'test-application-dgkqg-xs6t2-task-success-2': {
          pipelineTaskName: 'task-success-2',
          status: {
            completionTime: '2022-11-09T17:33:45Z',
            conditions: [
              {
                lastTransitionTime: '2022-11-09T17:33:45Z',
                message: 'All Steps have completed executing',
                reason: 'Succeeded',
                status: 'True',
                type: 'Succeeded',
              },
            ],
            podName: 'test-application-dgkqg-xs6t2-task-success-2-pod',
            startTime: '2022-11-09T17:33:36Z',
            steps: [
              {
                container: 'step-unnamed-0',
                imageID:
                  'quay.io/redhat-appstudio/hacbs-test@sha256:581f9e27c748f9900e32a152293b6dffbaa3e390775f3c36c3860c6ed6c87b73',
                name: 'unnamed-0',
                terminated: {
                  containerID:
                    'cri-o://c10ed551a0ba8b3da4f6b342fb0179c473a5b5f76722d8cb32ad4e3c5567c2e7',
                  exitCode: 0,
                  finishedAt: '2022-11-09T17:33:45Z',
                  message:
                    '[{"key":"HACBS_TEST_OUTPUT","value":"{\\"result\\":\\"SUCCESS\\",\\"timestamp\\":\\"1668015225\\",\\"failures\\":[],\\"successes\\":0}\\n","type":1}]',
                  reason: 'Completed',
                  startedAt: '2022-11-09T17:33:45Z',
                },
              },
            ],
            taskResults: [
              {
                name: 'HACBS_TEST_OUTPUT',
                value:
                  '{"result":"SUCCESS","timestamp":"1668015225","failures":[],"successes":0}\n',
              },
            ],
            taskSpec: {
              params: [
                {
                  default: 'SUCCESS',
                  description: 'Test result to be generated',
                  name: 'RESULT',
                  type: 'string',
                },
              ],
              results: [
                {
                  description: 'Test output',
                  name: 'HACBS_TEST_OUTPUT',
                },
              ],
              steps: [
                {
                  image: 'quay.io/redhat-appstudio/hacbs-test:stable',
                  name: '',
                  resources: {},
                  script:
                    'HACBS_TEST_OUTPUT=$(jq -rc --arg date $(date +%s) --arg RESULT $(params.RESULT) --null-input \\\n  \'{result: $RESULT, timestamp: $date, failures: [], successes: 0}\')\necho "${HACBS_TEST_OUTPUT}" | tee $(results.HACBS_TEST_OUTPUT.path)\n',
                },
              ],
            },
          },
        },
      },
    },
  },
  {
    apiVersion: 'tekton.dev/v1beta1',
    kind: 'PipelineRun',
    metadata: {
      generateName: 'test-application-dgkqg-',
      annotations: {
        'pipelinesascode.tekton.dev/on-target-branch': '[main,master]',
        'pipelinesascode.tekton.dev/repo-url': 'https://github.com/karthikjeeyar/test-nodeapp',
        'pipelinesascode.tekton.dev/sha-title': 'Appstudio update test-nodeapp',
        'results.tekton.dev/record':
          'jephilli/results/02ce3536-a06d-4900-ac9c-a891c0e31b42/records/02ce3536-a06d-4900-ac9c-a891c0e31b42',
        'pipelinesascode.tekton.dev/git-auth-secret': 'pac-gitauth-mpiw',
        'results.tekton.dev/result': 'jephilli/results/02ce3536-a06d-4900-ac9c-a891c0e31b42',
        'pipelinesascode.tekton.dev/max-keep-runs': '3',
        'pipelinesascode.tekton.dev/pull-request': '9',
        'pipelinesascode.tekton.dev/sha-url':
          'https://github.com/karthikjeeyar/test-nodeapp/commit/cd96b58bcf8199ae94873105fbdcd7b2ea53d2b5',
        'pipelinesascode.tekton.dev/on-event': '[pull_request]',
        'pipelinesascode.tekton.dev/installation-id': '29976162',
      },
      resourceVersion: '199210',
      name: 'test-application-dgkqg-xr5rn-xsdfv',
      uid: '02ce3536-a06d-4900-ac9c-a891c0e31b42',
      creationTimestamp: '2022-11-09T17:33:35Z',
      generation: 1,
      namespace: 'jephilli',
      ownerReferences: [
        {
          apiVersion: 'appstudio.redhat.com/v1alpha1',
          blockOwnerDeletion: true,
          controller: true,
          kind: 'Snapshot',
          name: 'test-application-dgkqg',
          uid: 'd35bae92-cdba-4030-b45a-5bf9a7871e4e',
        },
      ],
      finalizers: ['pipelinesascode.tekton.dev', 'chains.tekton.dev/pipelinerun'],
      labels: {
        'pipelinesascode.tekton.dev/state': 'started',
        'appstudio.openshift.io/snapshot': 'test-application-dgkqg',
        'pipelinesascode.tekton.dev/sender': 'karthikjeeyar',
        'test.appstudio.openshift.io/scenario': 'private-test',
        'appstudio.openshift.io/application': 'test-application',
        'tekton.dev/pipeline': 'component-pipeline-pass',
        'pipelinesascode.tekton.dev/branch': 'main',
        'pipelinesascode.tekton.dev/url-org': 'karthikjeeyar',
        'pipelinesascode.tekton.dev/original-prname': 'test-nodeapp-on-pull-request',
        'pipelines.appstudio.openshift.io/type': 'test',
        'pipelinesascode.tekton.dev/url-repository': 'test-nodeapp',
        'pipelinesascode.tekton.dev/repository': 'test-nodeapp',
        'pipelinesascode.tekton.dev/sha': 'cd96b58bcf8199ae94873105fbdcd7b2ea53d2b5',
        'pipelinesascode.tekton.dev/git-provider': 'github',
        'appstudio.openshift.io/component': 'test-nodeapp',
        'pipelinesascode.tekton.dev/event-type': 'pull_request',
      },
    },
    spec: {
      params: [
        {
          name: 'SNAPSHOT',
          value:
            '{"application":"test-application","components":[{"name":"test-nodeapp","containerImage":"quay.io/karthik_jk/test-nodeapp@sha256:882b783cb85b7fb95f1f297a8097045cd58bf0e6881cbf86ac3105eeaa4a8746"}],"artifacts":{}}',
        },
      ],
      pipelineRef: {
        bundle: 'quay.io/kpavic/test-bundle:component-pipeline-pass',
        name: 'component-pipeline-pass',
      },
      serviceAccountName: 'pipeline',
      timeout: '1h0m0s',
    },
    status: {
      completionTime: '2022-11-09T17:33:45Z',
      conditions: [
        {
          lastTransitionTime: '2022-11-09T17:33:45Z',
          message: 'Tasks Completed: 3 (Failed: 0, Cancelled 0), Skipped: 0',
          reason: 'Succeeded',
          status: 'True',
          type: 'Succeeded',
        },
      ],
      pipelineSpec: {
        tasks: [
          {
            name: 'task-success',
            params: [
              {
                name: 'RESULT',
                value: 'SUCCESS',
              },
            ],
            taskRef: {
              bundle: 'quay.io/kpavic/test-bundle:test-output',
              kind: 'Task',
              name: 'test-output',
            },
          },
          {
            name: 'task-success-2',
            params: [
              {
                name: 'RESULT',
                value: 'SUCCESS',
              },
            ],
            taskRef: {
              bundle: 'quay.io/kpavic/test-bundle:test-output',
              kind: 'Task',
              name: 'test-output',
            },
          },
          {
            name: 'task-skipped',
            params: [
              {
                name: 'RESULT',
                value: 'SKIPPED',
              },
            ],
            taskRef: {
              bundle: 'quay.io/kpavic/test-bundle:test-output',
              kind: 'Task',
              name: 'test-output',
            },
          },
        ],
      },
      startTime: '2022-11-09T17:33:35Z',
      taskRuns: {
        'test-application-dgkqg-xr5rn-task-skipped': {
          pipelineTaskName: 'task-skipped',
          status: {
            completionTime: '2022-11-09T17:33:44Z',
            conditions: [
              {
                lastTransitionTime: '2022-11-09T17:33:44Z',
                message: 'All Steps have completed executing',
                reason: 'Succeeded',
                status: 'True',
                type: 'Succeeded',
              },
            ],
            podName: 'test-application-dgkqg-xr5rn-task-skipped-pod',
            startTime: '2022-11-09T17:33:37Z',
            steps: [
              {
                container: 'step-unnamed-0',
                imageID:
                  'quay.io/redhat-appstudio/hacbs-test@sha256:581f9e27c748f9900e32a152293b6dffbaa3e390775f3c36c3860c6ed6c87b73',
                name: 'unnamed-0',
                terminated: {
                  containerID:
                    'cri-o://88d49e7dda27ed1567d754705066b8a24600e3514f064939a8fc50d908b8a7d2',
                  exitCode: 0,
                  finishedAt: '2022-11-09T17:33:44Z',
                  message:
                    '[{"key":"HACBS_TEST_OUTPUT","value":"{\\"result\\":\\"SKIPPED\\",\\"timestamp\\":\\"1668015224\\",\\"failures\\":[],\\"successes\\":0}\\n","type":1}]',
                  reason: 'Completed',
                  startedAt: '2022-11-09T17:33:44Z',
                },
              },
            ],
            taskResults: [
              {
                name: 'HACBS_TEST_OUTPUT',
                value:
                  '{"result":"SKIPPED","timestamp":"1668015224","failures":[],"successes":0}\n',
              },
            ],
            taskSpec: {
              params: [
                {
                  default: 'SUCCESS',
                  description: 'Test result to be generated',
                  name: 'RESULT',
                  type: 'string',
                },
              ],
              results: [
                {
                  description: 'Test output',
                  name: 'HACBS_TEST_OUTPUT',
                },
              ],
              steps: [
                {
                  image: 'quay.io/redhat-appstudio/hacbs-test:stable',
                  name: '',
                  resources: {},
                  script:
                    'HACBS_TEST_OUTPUT=$(jq -rc --arg date $(date +%s) --arg RESULT $(params.RESULT) --null-input \\\n  \'{result: $RESULT, timestamp: $date, failures: [], successes: 0}\')\necho "${HACBS_TEST_OUTPUT}" | tee $(results.HACBS_TEST_OUTPUT.path)\n',
                },
              ],
            },
          },
        },
        'test-application-dgkqg-xr5rn-task-success': {
          pipelineTaskName: 'task-success',
          status: {
            completionTime: '2022-11-09T17:33:45Z',
            conditions: [
              {
                lastTransitionTime: '2022-11-09T17:33:45Z',
                message: 'All Steps have completed executing',
                reason: 'Succeeded',
                status: 'True',
                type: 'Succeeded',
              },
            ],
            podName: 'test-application-dgkqg-xr5rn-task-success-pod',
            startTime: '2022-11-09T17:33:35Z',
            steps: [
              {
                container: 'step-unnamed-0',
                imageID:
                  'quay.io/redhat-appstudio/hacbs-test@sha256:581f9e27c748f9900e32a152293b6dffbaa3e390775f3c36c3860c6ed6c87b73',
                name: 'unnamed-0',
                terminated: {
                  containerID:
                    'cri-o://f73f6d2450091e6e7c111f7a83253ca87dd71c28790663453926308caa24e769',
                  exitCode: 0,
                  finishedAt: '2022-11-09T17:33:45Z',
                  message:
                    '[{"key":"HACBS_TEST_OUTPUT","value":"{\\"result\\":\\"SUCCESS\\",\\"timestamp\\":\\"1668015224\\",\\"failures\\":[],\\"successes\\":0}\\n","type":1}]',
                  reason: 'Completed',
                  startedAt: '2022-11-09T17:33:44Z',
                },
              },
            ],
            taskResults: [
              {
                name: 'HACBS_TEST_OUTPUT',
                value:
                  '{"result":"SUCCESS","timestamp":"1668015224","failures":[],"successes":0}\n',
              },
            ],
            taskSpec: {
              params: [
                {
                  default: 'SUCCESS',
                  description: 'Test result to be generated',
                  name: 'RESULT',
                  type: 'string',
                },
              ],
              results: [
                {
                  description: 'Test output',
                  name: 'HACBS_TEST_OUTPUT',
                },
              ],
              steps: [
                {
                  image: 'quay.io/redhat-appstudio/hacbs-test:stable',
                  name: '',
                  resources: {},
                  script:
                    'HACBS_TEST_OUTPUT=$(jq -rc --arg date $(date +%s) --arg RESULT $(params.RESULT) --null-input \\\n  \'{result: $RESULT, timestamp: $date, failures: [], successes: 0}\')\necho "${HACBS_TEST_OUTPUT}" | tee $(results.HACBS_TEST_OUTPUT.path)\n',
                },
              ],
            },
          },
        },
        'test-application-dgkqg-xr5rn-task-success-2': {
          pipelineTaskName: 'task-success-2',
          status: {
            completionTime: '2022-11-09T17:33:44Z',
            conditions: [
              {
                lastTransitionTime: '2022-11-09T17:33:44Z',
                message: 'All Steps have completed executing',
                reason: 'Succeeded',
                status: 'True',
                type: 'Succeeded',
              },
            ],
            podName: 'test-application-dgkqg-xr5rn-task-success-2-pod',
            startTime: '2022-11-09T17:33:36Z',
            steps: [
              {
                container: 'step-unnamed-0',
                imageID:
                  'quay.io/redhat-appstudio/hacbs-test@sha256:581f9e27c748f9900e32a152293b6dffbaa3e390775f3c36c3860c6ed6c87b73',
                name: 'unnamed-0',
                terminated: {
                  containerID:
                    'cri-o://7622933fd98a4aef09c4f1bf707165c65a392a5664e339dfcb54411363aa7c32',
                  exitCode: 0,
                  finishedAt: '2022-11-09T17:33:43Z',
                  message:
                    '[{"key":"HACBS_TEST_OUTPUT","value":"{\\"result\\":\\"SUCCESS\\",\\"timestamp\\":\\"1668015223\\",\\"failures\\":[],\\"successes\\":0}\\n","type":1}]',
                  reason: 'Completed',
                  startedAt: '2022-11-09T17:33:43Z',
                },
              },
            ],
            taskResults: [
              {
                name: 'HACBS_TEST_OUTPUT',
                value:
                  '{"result":"SUCCESS","timestamp":"1668015223","failures":[],"successes":0}\n',
              },
            ],
            taskSpec: {
              params: [
                {
                  default: 'SUCCESS',
                  description: 'Test result to be generated',
                  name: 'RESULT',
                  type: 'string',
                },
              ],
              results: [
                {
                  description: 'Test output',
                  name: 'HACBS_TEST_OUTPUT',
                },
              ],
              steps: [
                {
                  image: 'quay.io/redhat-appstudio/hacbs-test:stable',
                  name: '',
                  resources: {},
                  script:
                    'HACBS_TEST_OUTPUT=$(jq -rc --arg date $(date +%s) --arg RESULT $(params.RESULT) --null-input \\\n  \'{result: $RESULT, timestamp: $date, failures: [], successes: 0}\')\necho "${HACBS_TEST_OUTPUT}" | tee $(results.HACBS_TEST_OUTPUT.path)\n',
                },
              ],
            },
          },
        },
      },
    },
  },
];
