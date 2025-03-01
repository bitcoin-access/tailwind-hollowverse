import { Container, Link, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useCelebContext } from '~/lib/components/StaticPropsContextProvider';
import { Article } from './Article/Article';
import { InterestingProfiles } from './InterestingProfiles/InterestingProfiles';
import { Sources } from './Sources/Sources';

export const Md = () => {
  const [showSources, setShowSources] = useState(false);
  const context = useCelebContext();
  const oldContent = context.celeb.oldContent!;

  return (
    <section>
      {oldContent.article && <Article setShowSources={setShowSources} />}

      {oldContent.sources?.length > 0 && (
        <Sources showSources={showSources} setShowSources={setShowSources} />
      )}

      <InterestingProfiles />
    </section>
  );
};
