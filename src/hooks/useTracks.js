import axios from "axios";
import { API_URL } from "../constants/api";
import { useState, useEffect } from "react";

export const useTracks = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      const response = await axios.get(`${API_URL}/tracks`);
      setTracks(response.data);
    };

    fetchTracks();
  }, []);

  return tracks;
};
