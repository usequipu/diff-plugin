import type { PluginApi, Tab } from './plugin-types';
import DiffViewer from './DiffViewer';

export function init(api: PluginApi): void {
  api.register({
    id: 'diff-plugin',
    canHandle: (tab: Tab & { type?: string }) => tab.type === 'diff',
    priority: 90,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: DiffViewer as any,
  });
}
