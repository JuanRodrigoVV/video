import {
    createStyles,
    Title,
    Container,
    Accordion,
    ThemeIcon,
    MantineProvider,
    getStylesRef,
    rem,
  } from '@mantine/core';
  import { IconPlus } from '@tabler/icons-react';
  
  const useStyles = createStyles((theme) => ({

    
    wrapper: {
      
      minHeight: rem(820),
      
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top left',
      position: 'relative',
      color: 'black',
    },
    
  
    title: {
      color: '#07273d',
      fontSize: 42,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
      marginTop: "20px"
    },
  
    item: {
      backgroundColor: theme.white,
      borderBottom: 0,
      borderRadius: theme.radius.md,
      boxShadow: theme.shadows.lg,
      overflow: 'hidden',
      border: 'grey solid 0.5px'
    },
  
    control: {
      fontSize: theme.fontSizes.lg,
      padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
      color: theme.black,
  
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  
    content: {
      paddingLeft: theme.spacing.xl,
      lineHeight: 1.6,
      color: theme.black,
    },
  
    icon: {
      ref: getStylesRef('icon'),
      marginLeft: theme.spacing.md,
    },
  
    gradient: {
      backgroundImage: `radial-gradient(${theme.colors[theme.primaryColor][6]} 0%, ${
        theme.colors[theme.primaryColor][5]
      } 100%)`,
    },
  
    itemOpened: {
      [`& .${getStylesRef('icon')}`]: {
        transform: 'rotate(45deg)',
      },
    },
  
    button: {
      display: 'block',
      marginTop: theme.spacing.md,
  
      [theme.fn.smallerThan('sm')]: {
        display: 'block',
        width: '100%',
      },
    },
    '@media (max-width: 768px)': {
    title: {
      fontSize: 36,
    },
    control: {
      fontSize: theme.fontSizes.md,
    },
    content: {
      fontSize: theme.fontSizes.sm,
    },
  },
  }))
  
  ;
  
  const placeholder =
    'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';
  
  export function FaqWithBg() {
    const { classes } = useStyles();
    return (
      <MantineProvider inherit theme={{ colorScheme: 'light' }}>
        <div className={classes.wrapper}>
          <Container size="sm">
            <Title align="center" className={classes.title}>
              Frequently Asked Questions
            </Title>
  
            <Accordion
              chevronPosition="right"
              defaultValue="reset-password"
              chevronSize={50}
              variant="separated"
              disableChevronRotation
              chevron={
                <ThemeIcon radius="xl" className={classes.gradient} size={32}>
                  <IconPlus size="1.05rem" stroke={1.5} />
                </ThemeIcon>
              }
            >
              <Accordion.Item className={classes.item} value="reset-password">
                <Accordion.Control>What Services Do We Offer?</Accordion.Control>
                <Accordion.Panel>At Media Morphe, we specialize in professional video editing. Our expertise extends to editing tutorials, refining digital content, enhancing media ads, optimizing digital course lessons, and catering to all your digital business needs."</Accordion.Panel>
              </Accordion.Item>
  
              <Accordion.Item className={classes.item} value="another-account">
                <Accordion.Control>What's the process like? </Accordion.Control>
                <Accordion.Panel>Simply schedule a call with one of our representatives to discuss the essential aspects of your project.</Accordion.Panel>
              </Accordion.Item>
  
              <Accordion.Item className={classes.item} value="newsletter">
                <Accordion.Control>What Types of Videos Do We Edit?</Accordion.Control>
                <Accordion.Panel>We specialize in a wide range of video formats, including social media ads, tutorials, video blogs, YouTube content, Instagram ads, and Facebook ads. If you can name it, we can edit it.</Accordion.Panel>
              </Accordion.Item>
  
              <Accordion.Item className={classes.item} value="credit-card">
                <Accordion.Control>What if I need a page for my product? </Accordion.Control>
                <Accordion.Panel>We also offer web design services tailored to showcase your products. Fill out your details in the Contact section, and one of our representatives will reach out to you shortly."</Accordion.Panel>
              </Accordion.Item>
  
              <Accordion.Item className={classes.item} value="payment">
                <Accordion.Control>What is the price? </Accordion.Control>
                <Accordion.Panel>Prices vary based on several key factors: the type of content you provide to us, the desired length and format of the video, as well as any specific design requirements you may have. Schedule a call to discuss your needs and receive a personalized quote.</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Container>
        </div>
      </MantineProvider>
    );
  }