import {
  AppBar as MuiAppBar,
  Container,
  IconButton,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from '~/lib/components/Icon';
import SearchIcon from '~/public/images/icons/search-regular.svg';
import TimesIcon from '~/public/images/icons/times-regular.svg';
import s from './styles.module.scss';
import Link from 'next/link';

export const AppBar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <MuiAppBar
      elevation={1}
      color="transparent"
      position="static"
      className={s.AppBar}
    >
      <Container maxWidth="sm" className={s.container} disableGutters>
        <div className={s.logo}>
          <div style={{ display: showSearch ? 'block' : 'none' }}>
            <div title="Google search results" className="gcse-search" />
          </div>

          <div
            style={{ display: showSearch ? 'none' : 'block' }}
            className={s.image}
          >
            <Link passHref href="/">
              <a>
                <Image
                  src="/images/logo.svg"
                  width={250}
                  height={30}
                  alt="Hollowverse"
                />
              </a>
            </Link>
          </div>
        </div>

        <div className={s.search}>
          <IconButton
            aria-label="Search"
            onClick={() => setShowSearch(!showSearch)}
            style={{ opacity: showSearch ? 0.5 : 1 }}
          >
            <Icon
              component={showSearch ? TimesIcon : SearchIcon}
              fontSize="large"
            />
          </IconButton>
        </div>
      </Container>
    </MuiAppBar>
  );
};
