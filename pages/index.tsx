import type { NextPage } from "next";
import Head from "next/head";
import { WordSwitcher } from "../modules/layout/WordSwitcher";
import { motion } from "framer-motion";
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import { NextLink } from "@mantine/next";
import useHomeStyle from "../modules/jss/home_styles"
import ColorModeSwitcher from "../modules/layout/ColorModeSwitcher";

const Home: NextPage = () => {
  const styles = useHomeStyle();

  return (
    <div className={styles.fullPage}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ColorModeSwitcher />
      <div className={styles.splashContainer}>
        <motion.div
          className={styles.splashText}
        >
          <h1>FireChat</h1>
          <h2>Connect to friends, {<WordSwitcher />}</h2>
          <p>
            Connect with friends and family from any location. FireChat is a free,
            open source chat application that allows you to communicate with others.
            Join today!
          </p>

          <div className={styles.button}>
            <NextLink href="/register">
              <Button size="lg">Get Started</Button>
            </NextLink>
          </div>
          <div className={styles.button}>
            <NextLink href="/login">
              <Button variant="unstyled">
                Returning users log in here.
              </Button>
            </NextLink>
          </div>
        </motion.div>
        <div className={styles.splashImage}>
          
          <Image
            src="/gummy-wfh.svg"
            layout="fill"
            alt="Chat Splash"
          />
        </div>
      </div>
    </div>
  );
};



export default Home;
