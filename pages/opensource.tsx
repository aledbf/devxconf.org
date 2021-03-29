import OpenSource from '../components/pages/opensource';
import { META_DESCRIPTION } from '@lib/constants';
import Page from '@components/page';

export default function Conf() {
  const meta = {
    title: 'Open Source | DevX Conf',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta} fullViewport>
        <OpenSource />
    </Page>
  );
}
