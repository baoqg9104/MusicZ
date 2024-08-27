import React, { createContext, useState, ReactNode } from "react";

interface Song {
  img: string;
  name: string;
  artist: string;
  audioUrl: string;
}

interface SongContextType {
  selectedSong: Song | null;
  setSelectedSong: (song: Song) => void;
}

export const SongContext = createContext<SongContextType | undefined>(undefined);

interface SongProviderProps {
  children: ReactNode;
}

export const SongProvider: React.FC<SongProviderProps> = ({ children }) => {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);

  return (
    <SongContext.Provider value={{ selectedSong, setSelectedSong }}>
      {children}
    </SongContext.Provider>
  );
};
