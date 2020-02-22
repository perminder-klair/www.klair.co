import React, { memo } from 'react'
import PropTypes from 'prop-types'
import loadable from '@loadable/component'
import LogoUnit from '../molecules/LogoUnit'
import Networks from '../molecules/Networks'
import styles from './Footer.module.scss'
import { useMeta } from '../../hooks/use-meta'

const LazyVcard = loadable(() => import('../atoms/Vcard'))

const FooterMarkup = ({ photography, meta, year }) => (
  <footer className={`h-card ${styles.footer}`}>
    <LogoUnit minimal />
    <Networks small />

    <p className={styles.actions}>
      <LazyVcard />
      <a className="u-key" href="/resume">
        Resume
      </a>
      <a href={photography}>Photography</a>
    </p>
    <p className={styles.copyright}>
      <small>
        &copy; {year}{' '}
        <a className="u-url" href={meta.url}>
          {meta.title}
        </a>{' '}
        &mdash; All Rights Reserved
      </small>
    </p>
  </footer>
)

FooterMarkup.propTypes = {
  pkg: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  year: PropTypes.number.isRequired
}

function Footer() {
  const metaYaml = useMeta()
  const year = new Date().getFullYear()

  return (
    <FooterMarkup
      year={year}
      photography="https://photography.klair.co/"
      meta={metaYaml}
    />
  )
}

export default memo(Footer)
