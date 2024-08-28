// SongContext.tsx
import React, { createContext, useState, ReactNode } from "react";

// Định nghĩa kiểu dữ liệu cho một bài hát
interface Song {
  img: string;
  name: string;
  artist: string;
  audioUrl: string;
}

// Định nghĩa kiểu dữ liệu cho context
interface SongPlaylistContextType {
  playlist: Song[];
  addSongToPlaylist: (song: Song) => void;
  removeSongFromPlaylist: (audioUrl: string) => void;
}

// Tạo context với giá trị mặc định
export const SongPlaylistContext = createContext<
  SongPlaylistContextType | undefined
>(undefined);

// Tạo provider
export const SongPlaylistProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [playlist, setPlaylist] = useState<Song[]>([]);

  const addSongToPlaylist = (song: Song) => {
    const isSongInPlaylist = playlist.some(
      (playlistSong) => playlistSong.audioUrl === song.audioUrl
    );

    if (!isSongInPlaylist) {
      setPlaylist((prevPlaylist) => [...prevPlaylist, song]);
    }
  };

  const removeSongFromPlaylist = (audioUrl: string) => {
    setPlaylist((prevPlaylist) =>
      prevPlaylist.filter((playlistSong) => playlistSong.audioUrl !== audioUrl)
    );
  };

  return (
    <SongPlaylistContext.Provider
      value={{ playlist, addSongToPlaylist, removeSongFromPlaylist }}
    >
      {children}
    </SongPlaylistContext.Provider>
  );
};
