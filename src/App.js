import { useRef, useState } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Modal from './components/Modal';
import Homepage from './pages/Homepage';

function App() {
  const [openModal, setOpenModal] = useState(false)
  const [videoUrl, setVideoUrl] = useState(null); // Store the video URL
  const [fileName, setFileName] = useState(""); // Store the file name
  const fileInputRef = useRef(null); // Ref for the file input element

  // Handle file upload
  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
      setFileName(file.name); // Set the file name
    }
  };
  return (
    <Layout setOpenModal={setOpenModal}>
      <>
        <Homepage videoUrl={videoUrl} setVideoUrl={setVideoUrl} fileName={fileName} setFileName={setFileName} fileInputRef={fileInputRef} handleVideoUpload={handleVideoUpload} />
        {openModal && <Modal handleVideoUpload={handleVideoUpload} fileInputRef={fileInputRef} setOpenModal={setOpenModal} />}
      </>
    </Layout>
  );
}

export default App;
