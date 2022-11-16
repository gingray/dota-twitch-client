import React from 'react';
import './App.css';
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {Streamer} from "./streamer";
import {baseUrl} from "./conts";

function App() {
  const { isLoading, error, data, isFetching } = useQuery([], () => {
      const url = `${baseUrl}/api/events`
      return axios
          .get(url)
          .then((res) => {

              return res.data as any
          })
  });
  if (isLoading) return <div>Loading...</div>;

  if (error) return <div className={"error"}>An error has occurred: </div>;
  console.log(data)
  const streamers = data.map((item: any) => <Streamer streamerEvent={item} />)

  return (

      <div>
        {streamers}
        <div>{isFetching ? "Updating..." : ""}</div>
      </div>
  );
}

export default App;
