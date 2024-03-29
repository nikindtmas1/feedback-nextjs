import * as React from "react";
import * as services from "../../../utils/api";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import Head from "next/head";
import Layout from "../../../components/layout";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { TomiFeedback } from "../../../components/TomiFeedback";
import { Card, Box, Typography, Avatar, IconButton } from "@mui/material";


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

  const handleDelete = async (e) => {
    const itemId = e.currentTarget.id;
   

    try {
      // Call fetchDeleteToAPI function to send a DELETE request
      await services.fetchDeleteTomiDataToAPI(itemId);

      // Handle the successful deletion (if needed)
      console.log('Data deleted successfully');
      
      // Perform additional actions after deletion, such as updating state or showing a message
    } catch (error) {
      // Handle errors if the API request fails
      console.error('Error deleting data:', error);
    }
  };


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
          {allTomiData.map(({ text, rating, peopleName, userName, _id }) => (
            <Card>
              <Box sx={{ p: 2, display: "flex" }}>
                <Stack spacing={0.5}>
                  <div className={styles.card}>
                    <div>{peopleName}</div>
                    <div className={""}>{rating}</div>
                    <div>{text}</div>
                    <div>{userName}</div>
                    <Stack direction="row" spacing={2}>
                      <Button id={_id} variant="outlined" startIcon={<DeleteIcon />} onClick={handleDelete}>
                        Delete
                      </Button>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                      <Button id={_id} variant="outlined" startIcon={<EditIcon />}>
                        Edit
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
