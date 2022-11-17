import React from 'react';
import './App.css';
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {Streamer} from "./streamer";
import {baseUrl} from "./conts";
import {chunk} from "./utils";
import {Header} from "./header";

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
  // console.log(data)
  const streamers  = data.map((item: any) => <Streamer streamerEvent={item} />)
    const parts = chunk(streamers, 3).map((group, idx) => <div className={"row"} key={idx}>{group as any}</div>)

  return (
      <React.Fragment>
          <Header/>
          <div className={'app-container'}>
              {parts}
              <div>{isFetching ? "Updating..." : ""}</div>
          </div>
      </React.Fragment>
  );
}

export default App;
