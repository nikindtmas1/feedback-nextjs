import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import Head from "next/head";
import Layout from "../../../components/layout";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { TomiFeedback } from "../../../components/TomiFeedback";
import { Card, Box, Typography, Avatar, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

export async function getServerSideProps() {
  const tomiData = await fetch("http://localhost:5000/tomifeedbacks");
  const jsonData = await tomiData.json();

  const allTomiData = Object.values(jsonData);

  return {
    props: {
      allTomiData,
    },
  };
}

export default function TomiPosts({ allTomiData }) {
  return (
    <>
      <Head>
        <title>Tomi Page</title>
      </Head>
      <div className={styles.newfeedback}>
        <h2>This is Tomi Data Page</h2>
      </div>
      <TomiFeedback />
      <main className={styles.main}>
        <div className={styles.description}>
          {allTomiData.map(({ text, rating, peopleName, userName }) => (
            <Card>
              <Box sx={{ p: 2, display: "flex" }}>
                <Stack spacing={0.5}>
                  <div className={styles.card}>
                    <div>{peopleName}</div>
                    <div className={""}>{rating}</div>
                    <div>{text}</div>
                    <div>{userName}</div>
                    <Stack direction="row" spacing={2}>
                      <Button variant="outlined" startIcon={<DeleteIcon />}>
                        Delete
                      </Button>
                    </Stack>
                  </div>
                </Stack>
              </Box>
            </Card>
          ))}
        </div>
        <Layout>
          <Link href="/">
            <Button variant="contained" endIcon={<SendIcon />}>
              Home page
            </Button>
          </Link>
        </Layout>
      </main>
    </>
  );
}
