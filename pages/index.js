import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import React from 'react'

import { AboutDark, AboutLight } from '../components/svg/About'
import { ExploreDark, ExploreLight } from '../components/svg/Explore'
import { HangoutDark, HangoutLight } from '../components/svg/Hangout'
import { PartyDark, PartyLight } from '../components/svg/Party'
import { WorkDark, WorkLight } from '../components/svg/Work'
import PageIntro from '../components/PageIntro'
import TextPictureItem from '../components/home/TextPictureItem'

const useStyles = makeStyles(theme => ({
  rootMainIndex: {
    minHeight: '100vh',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.common.defaultDarkBackground
        : theme.palette.common.defaultLightBackground,
  },
  mainContainer: {
    paddingBottom: theme.spacing(20),
    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(5),
    },
  },
}))

const heroParagraph = `
You just found the front page of my life. Chances are, if you're reading
this—it may already be too late. Or maybe not. Maybe this is the right
time and it was all meant to be. Regardless, I made this all for you.
`
const aboutText = `
I’m Steven. I’m the guy who designed and developed this site. Im pretty
proud of the Work page. Click on a project and you’ll see that I’m rendering
the markdown from the same README.md file that’s posted on that project’s
Github. Also, I’ve got my blog hooked up to parse content from Contentful.
Fun stuff. Down below, you’ll find a little more info on who I am. Enjoy.
`
const partyText = `
I’m a people person. Whether it’s on the phone, through text/email, or
in-person—I’m fascinated with trying to understand people. Some of the
best work that I’ve done has come from working within a relatively small
teams. If the vibe is right and the support is there, the possibility for
the group to enter a state of "flow” is a huge motivator for me.
`
const exploreText =`
I always find a way to balance out the time I spend sitting at a desk
with doing something active. Back before all the travel restrictions, my
girlfriend and I would routinely make plans to visit different cities and
check out all the national parks. Some couples don’t travel well, but her
and I love it. Give us a couple funny podcasts, some good books, a long
road—and we’re good to go.
`
const hangoutText =`
I’m an inquisitive guy. If something piques my interest, my curiosity has
a way to really feed itself. When it comes to having discussions, I’m
definitely someone who strives for depth, rather than just skimming surface
layer topics. This has led me to have some of the most interesting
conversations. This world is built on the stories we share.
`
const workText =`
And here I am now. I’ve spent the past ten or so years of my life working
some interesting jobs, meeting a ton of people and having some great
conversations. Two years ago, I got into web development and I made a couple
apps. Now, with the pandemic in full swing, I’ve been making the most of it.
The hours seem to literally melt away as I solve problem after problem. It's
unlike anything I've ever done.
`

const defaultParagraph = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.
Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
gravida rutrum quisque non tellus. Convallis convallis tellus id
interdum velit laoreet id donec ultrices. Odio morbi quis commodo
odio aenean sed adipiscing.
`

const imageTextArray = [
  [<AboutDark />, <AboutLight />, aboutText],
  [<PartyDark />, <PartyLight />, partyText],
  [<ExploreDark />, <ExploreLight />, exploreText],
  [<HangoutDark />, <HangoutLight />, hangoutText],
  [<WorkDark />, <WorkLight />, workText],
]

export default function Index() {
  const classes = useStyles()

  return (
    <article id='MainIndexBody' className={classes.rootMainIndex}>
      <PageIntro title='Hello' paragraph={heroParagraph} />
      <Container className={classes.mainContainer} maxWidth='lg'>
        {imageTextArray.map((item, index) => {
          return (
            <TextPictureItem
              key={index}
              darkModeImage={item[0]}
              lightModeImage={item[1]}
              text={item[2] ? item[2] : defaultParagraph}
              imageOrientation={index % 2 === 0 ? 'left' : 'right'}
            />
          )
        })}
      </Container>
    </article>
  )
}
