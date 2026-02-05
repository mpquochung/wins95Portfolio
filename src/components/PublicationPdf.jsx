import UseContext from '../Context'
import { useContext } from "react";
import Draggable from 'react-draggable'
import { motion } from 'framer-motion';
import pdfIcon from '../assets/file4download.png'
import '../css/PublicationPdf.css'

function PublicationPdf() {
  const {
    themeDragBar,
    publicationPdfExpand, setPublicationPdfExpand,
    currentPublicationPdf,
    lastTapTime, setLastTapTime,
    setCurrentPublicationPdf,
    StyleHide,
    isTouchDevice,
    handleSetFocusItemTrue,
    inlineStyleExpand,
    inlineStyle,
    deleteTap,
  } = useContext(UseContext);

  function handleDragStop(event, data) {
    const positionX = data.x;
    const positionY = data.y;
    setPublicationPdfExpand(prev => ({
      ...prev,
      x: positionX,
      y: positionY
    }));
  }

  function handleExpandStateToggle() {
    setPublicationPdfExpand(prevState => ({
      ...prevState,
      expand: !prevState.expand
    }));
  }

  function closeWindow() {
    deleteTap('PublicationPdf');
    setCurrentPublicationPdf(null);
  }

  function handleExpandStateToggleMobile() {
    const now = Date.now();
    if (now - lastTapTime < 300) {
      setPublicationPdfExpand(prevState => ({
        ...prevState,
        expand: !prevState.expand
      }));
    }
    setLastTapTime(now);
  }

  if (!currentPublicationPdf) {
    return null;
  }

  const title = currentPublicationPdf.title || 'Publication';
  const pdfUrl = currentPublicationPdf.pdfUrl || '';

  return (
    <>
      <Draggable
        axis="both"
        handle={'.folder_dragbar-pubpdf'}
        grid={[1, 1]}
        scale={1}
        disabled={publicationPdfExpand.expand}
        bounds={{ top: 0 }}
        defaultPosition={{
          x: window.innerWidth <= 500 ? 5 : 120,
          y: window.innerWidth <= 500 ? 100 : 120,
        }}
        onStop={(event, data) => handleDragStop(event, data)}
        onStart={() => handleSetFocusItemTrue('PublicationPdf')}
      >
        <div
          className='folder_folder-pubpdf'
          onClick={(e) => {
            e.stopPropagation();
            handleSetFocusItemTrue('PublicationPdf');
          }}
          style={publicationPdfExpand.expand ? inlineStyleExpand('PublicationPdf') : inlineStyle('PublicationPdf')}
        >
          <div
            className="folder_dragbar-pubpdf"
            onDoubleClick={handleExpandStateToggle}
            onTouchStart={handleExpandStateToggleMobile}
            style={{ background: publicationPdfExpand.focusItem ? themeDragBar : '#757579' }}
          >
            <div className="folder_barname-pubpdf">
              <img src={pdfIcon} alt="pdf" />
              <span>{title}</span>
            </div>
            <div className="folder_barbtn-pubpdf">
              <div
                onClick={!isTouchDevice ? (e) => {
                  e.stopPropagation();
                  setPublicationPdfExpand(prev => ({ ...prev, hide: true, focusItem: false }));
                  StyleHide('PublicationPdf');
                } : undefined}
                onTouchEnd={(e) => {
                  e.stopPropagation();
                  setPublicationPdfExpand(prev => ({ ...prev, hide: true, focusItem: false }));
                  StyleHide('PublicationPdf');
                }}
                onTouchStart={(e) => e.stopPropagation()}
              >
                <p className='dash-pubpdf'></p>
              </div>
              <div
                onClick={!isTouchDevice ? handleExpandStateToggle : undefined}
                onTouchEnd={handleExpandStateToggle}
              >
                <motion.div className={`expand-pubpdf ${publicationPdfExpand.expand ? 'full' : ''}`}></motion.div>
                {publicationPdfExpand.expand ? (
                  <div className="expand_2-pubpdf"></div>
                ) : null}
              </div>
              <div>
                <p
                  className='x-pubpdf'
                  onClick={!isTouchDevice ? closeWindow : undefined}
                  onTouchEnd={closeWindow}
                >×</p>
              </div>
            </div>
          </div>

          <div
            className="folder_content-pubpdf"
            style={publicationPdfExpand.expand ? { height: 'calc(100svh - 72px)' } : {}}
          >
            {pdfUrl ? (
              <iframe src={pdfUrl} frameBorder="0"></iframe>
            ) : (
              <div className="pubpdf_empty">PDF not found.</div>
            )}
          </div>
        </div>
      </Draggable>
    </>
  );
}

export default PublicationPdf
