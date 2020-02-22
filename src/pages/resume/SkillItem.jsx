/* eslint react/prop-types: "off" */

import React from 'react'
import styles from './ResumeItem.module.scss'

export default function SkillItem({ skill }) {
  const { name, level, keywords } = skill || {}

  return (
    <div className={styles.resumeItem}>
      <h4 className={styles.title}>{name}</h4>
      <h5 className={styles.subTitle}>{level}</h5>
      <p>
        {keywords &&
          keywords.map(item => (
            <a key={item} href={`#${item}`}>
              {item},{' '}
            </a>
          ))}
      </p>
    </div>
  )
}
