import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { sanityImage } from '~/lib/components/sanityio';
import { useCelebContext } from '~/lib/components/StaticPropsContextProvider';
import s from './TopSection.module.scss';

export const TopSection = () => {
  const context = useCelebContext();
  const picture = context.celeb.picture || context.placeholderImage;

  return (
    <Container maxWidth="sm" className={s.TopSection}>
      <div className={s.imageContainer}>
        <Image
          className={s.image}
          layout="fill"
          width={2224}
          height={1848}
          objectFit="cover"
          objectPosition="top right"
          blurDataURL={picture.metadata.lqip}
          placeholder="blur"
          src="/images/elon-musk2.jpeg"
          priority
          alt={context.celeb.name}
        />
      </div>

      <div className={s.contentContainer}>
        <Typography variant="h1" className={s.title}>
          <span className={s.titleLessEmphasized}>
            Religion, politics, and ideas of
          </span>
          <br /> <span className={s.name}>{context.celeb.name}</span>
        </Typography>
      </div>
    </Container>
  );
};
