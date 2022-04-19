import { Chip, Container, Typography } from '@mui/material';
import React from 'react';
import { useCelebContext } from '~/lib/components/StaticPropsContextProvider';
import s from './styles.module.scss';
import clsx from 'clsx';
import { Box } from '@mui/system';

export const TagCollection = () => {
  const tags = useCelebContext().celeb.tags!;

  return (
    <Container maxWidth="sm" className={s.TagCollection} disableGutters>
      <div className={s.tagsContainer}>
        {tags.regular.map((t) => (
          <Box key={t.tag.name} sx={{ boxShadow: 1 }} className={s.tag}>
            <Typography variant="body1">{t.tag.name}</Typography>
          </Box>
        ))}
      </div>

      {tags.lowConfidence.length > 0 && (
        <div className={clsx(s.lowConfidence, s.tagsContainer)}>
          <Typography component="p" variant="h3" className={s.maybe}>
            Maybe?
          </Typography>

          {tags.lowConfidence.map((t) => (
            <Box key={t.tag.name} sx={{ boxShadow: 1 }} className={s.tag}>
              <Typography variant="body1">{t.tag.name}</Typography>
            </Box>
          ))}
        </div>
      )}
    </Container>
  );

  // return <pre>{JSON.stringify(tags, null, 2)}</pre>;
};
