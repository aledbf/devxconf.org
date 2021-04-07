import { META_DESCRIPTION } from '@lib/constants';
import Opensource from '@components/pages/opensource';
import Page from '@components/page';

export default function Conf() {
  const meta = {
    title: 'Diversity, Equity & Inclusion | DevX Conf',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta} fullViewport>
      <Opensource />
    </Page>
  );
}
