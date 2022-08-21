import type { NextPage } from "next";
import Head from "next/head";
import { WordSwitcher } from "../modules/layout/WordSwitcher";
import { motion } from "framer-motion";
import { Button, useChakra, Center } from "@chakra-ui/react";
import Image from "next/image";
import { NextLink } from "@mantine/next";
import { createUseStyles } from "react-jss";
import * as admin from "firebase-admin";
import { firebaseAdminConfig } from "../config/FirebaseApp";
import nookies from "nookies";
import {
  GetServerSidePropsContext,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";
import InitAdminApp from "../modules/auth/InitAdminApp";
import useHomeStyle from "../modules/jss/home_styles"


const Home: NextPage = () => {
  const styles = useHomeStyle();

  return (
    <div className={styles.fullPage}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.splashContainer}>
        <motion.div>
          <h1>Welcome to Remy&apos;s Chat App.</h1>
          <h2>For my {<WordSwitcher />}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            illum voluptates dolorum nobis unde ullam vero eligendi cumque
            exercitationem, consequuntur laudantium ratione eius doloremque
            cupiditate quas voluptatem laboriosam. Enim, voluptatem?
          </p>

          <div className={styles.button}>
            <NextLink href="/register">
              <Button size="lg">Register Today!</Button>
            </NextLink>
          </div>
          <div className={styles.button}>
            <NextLink href="/login">
              <Button>
                If you already have an account, click here to log in.
              </Button>
            </NextLink>
          </div>
        </motion.div>
        <div className={styles.splashImage}>
          <Image
            src="/gummy-wfh.svg"
            width={1000}
            height={1000}
            alt="Chat Splash"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
