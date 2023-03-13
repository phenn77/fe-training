import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../style/common.css";

import Navbar from "../container/util/navbar";
import Index from "../container/common/index";
import ArtistView from "../container/artist/view";
import AlbumView from "../container/album/view";

function App() {
  return (
    <div className="container mx-auto px-8 py-8 min-h-full">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact />

          <Route path="/artist" element={<Index title="ARTIST" />} />
          <Route path="/artist/view" element={<ArtistView />} />

          <Route path="/album" element={<Index title="ALBUM" />} />
          <Route path="/album/view" element={<AlbumView />} />

          <Route path="/single" element={<Index title="SINGLE" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
