/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Image from 'next/image';
import Link from 'next/link';
import Section from './layout/section';
import SectionHeader from './layout/section-header';
import { Speaker } from '@lib/types';
import cn from 'classnames';
import styles from './speakers-grid.module.css';

type Props = {
  speakers: Speaker[];
};

export default function SpeakersGrid({ speakers }: Props) {
  return (
    <Section className={styles.section} id="speakers">
      <div className="row">
        <SectionHeader className="wrapper-small">
          <h2 className="heading-secondary">Speakers</h2>
          <p>
            Our speakers deeply care about frictionless developer workflows and leverage automation
            to solve problems.
          </p>
        </SectionHeader>
        <div className={styles.grid}>
          {speakers.map(speaker => (
            <Link key={speaker.name} href={`/speakers/${speaker.slug}`}>
              <a role="button" tabIndex={0} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    alt={speaker.name}
                    src={speaker.image.url}
                    className={styles.image}
                    loading="lazy"
                    quality="50"
                    title={speaker.name}
                    width={300}
                    height={300}
                  />
                </div>
                <div className={styles.cardBody}>
                  <div>
                    <h3 className={cn(styles.name, 'heading-quadrary')}>{speaker.name}</h3>
                    <p className={styles.title}>
                      {`${speaker.title} @`}
                      <span className={styles.company}>{speaker.company}</span>
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
        <p className={cn(styles.more, 'footnote')}>More to be announced soon</p>
      </div>
    </Section>
  );
}
