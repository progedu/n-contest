import styles from './Home.module.css'

import { OpenInNew } from '@mui/icons-material'
import { Link } from '@mui/material'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import * as React from 'react'

export default function AwardContentCard(props: any): any {
  return (
    <div className={`${styles.award_content_card}`}>
      <img
        className={`${styles.header}`}
        src={props.img_url}
        style={{ borderBottom: '1px solid #6bd6fa' }}
      />
      <Typography gutterBottom variant='h5' component='div'>
        {props.title}
      </Typography>
      <Typography variant='body2' color='text.secondary'>
        {props.author}
      </Typography>
      <Link target='_blank' href={props.website_url}>
        <Button
          variant='contained'
          component='label'
          color='success'
          style={{ whiteSpace: 'nowrap' }}
        >
          Webサイト
          <OpenInNew />
        </Button>
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link target='_blank' href={props.github_url}>
        <Button variant='contained' component='label' color='info' style={{ whiteSpace: 'nowrap' }}>
          <img src='/GitHub-Mark-64px.png' height={25} />
          &nbsp;
          <img src='/GitHub_Logo_White.png' height={25} />
          <OpenInNew />
        </Button>
      </Link>
    </div>
  )
}
