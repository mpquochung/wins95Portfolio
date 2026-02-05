import UseContext from '../Context';
import { useContext } from "react";
import Draggable from 'react-draggable';
import { motion } from 'framer-motion';
import '../css/PublicationsFolder.css';
import folderIcon from '../assets/regFolder.png';
import defaultThumb from '../assets/tech.png';

function PublicationsFolder() {
  const {
    themeDragBar,
    PublicationsExpand, setPublicationsExpand,
    publicationEntries,
    openPublicationPdf,
    openPublicationLink,
    imageMapping,
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
    setPublicationsExpand(prev => ({
      ...prev,
      x: positionX,
      y: positionY
    }));
  }

  function handleExpandStateToggle() {
    setPublicationsExpand(prevState => ({
      ...prevState,
      expand: !prevState.expand
    }));
  }

  function handleExpandStateToggleMobile() {
    const now = Date.now();
    if (now - (PublicationsExpand.lastTapTime || 0) < 300) {
      setPublicationsExpand(prevState => ({
        ...prevState,
        expand: !prevState.expand
      }));
    }
    setPublicationsExpand(prev => ({ ...prev, lastTapTime: now }));
  }

  return (
    <Draggable
      axis="both"
      handle=".folder_dragbar-publications"
      grid={[1, 1]}
      scale={1}
      disabled={PublicationsExpand.expand}
      bounds={{ top: 0 }}
      defaultPosition={{
        x: window.innerWidth <= 500 ? 20 : 80,
        y: window.innerWidth <= 500 ? 40 : 120,
      }}
      onStop={(event, data) => handleDragStop(event, data)}
      onStart={() => handleSetFocusItemTrue('Publications')}
    >
      <motion.div
        className="publications_folder"
        onClick={(e) => {
          e.stopPropagation();
          handleSetFocusItemTrue('Publications');
        }}
        style={PublicationsExpand.expand ? inlineStyleExpand('Publications') : inlineStyle('Publications')}
      >
        <div
          className="folder_dragbar-publications"
          onDoubleClick={handleExpandStateToggle}
          onTouchStart={handleExpandStateToggleMobile}
          style={{ background: PublicationsExpand.focusItem ? themeDragBar : '#757579' }}
        >
          <div className="folder_barname-publications">
            <img src={folderIcon} alt="Publications" />
            <span>Publications</span>
          </div>
          <div className="folder_barbtn-publications">
            <div
              onClick={!isTouchDevice ? (e) => {
                e.stopPropagation();
                setPublicationsExpand(prev => ({ ...prev, hide: true, focusItem: false }));
                StyleHide('Publications');
              } : undefined}
              onTouchEnd={(e) => {
                e.stopPropagation();
                setPublicationsExpand(prev => ({ ...prev, hide: true, focusItem: false }));
                StyleHide('Publications');
              }}
              onTouchStart={(e) => e.stopPropagation()}
            >
              <p className="dash-publications"></p>
            </div>
            <div
              onClick={!isTouchDevice ? handleExpandStateToggle : undefined}
              onTouchEnd={handleExpandStateToggle}
            >
              <motion.div className={`expand-publications ${PublicationsExpand.expand ? 'full' : ''}`}></motion.div>
              {PublicationsExpand.expand ? <div className="expand_2-publications"></div> : null}
            </div>
            <div>
              <p
                className="x-publications"
                onClick={!isTouchDevice ? () => deleteTap('Publications') : undefined}
                onTouchEnd={() => deleteTap('Publications')}
              >×</p>
            </div>
          </div>
        </div>

        <div className="publications_content">
          {publicationEntries.map((entry) => (
            <div className="publication_row" key={entry.key}>
              <div className="publication_body">
                <h3 className="publication_title">{entry.title}</h3>
                {Array.isArray(entry.authors) && entry.authors.length > 0 ? (
                  <div className="publication_authors">
                    {entry.authors.map((author, idx) => {
                      const name = author?.name || '';
                      const content = author?.bold ? <strong>{name}</strong> : name;
                      const node = author?.url
                        ? <a href={author.url} target="_blank" rel="noreferrer">{content}</a>
                        : content;
                      return (
                        <span className="publication_author" key={`${name}-${idx}`}>
                          {node}{idx < entry.authors.length - 1 ? ', ' : ''}
                        </span>
                      );
                    })}
                  </div>
                ) : null}
                {entry.publication ? (
                  <div className="publication_venue">{entry.publication}</div>
                ) : null}
                {entry.abstract ? (
                  <p className="publication_abstract">{entry.abstract}</p>
                ) : null}
                <div className="publication_links">
                  <button
                    className="publication_link"
                    onClick={() => openPublicationPdf(entry)}
                    title="PDF"
                  >
                    <img src={imageMapping('PdfDoc')} alt="PDF" />
                    <span>PDF</span>
                  </button>
                  {entry.url ? (
                    <button
                      className="publication_link"
                      onClick={() => openPublicationLink(entry.url, 'URL')}
                      title="URL"
                    >
                      <img src={imageMapping('Website')} alt="URL" />
                      <span>URL</span>
                    </button>
                  ) : null}
                  {entry.github ? (
                    <button
                      className="publication_link"
                      onClick={() => openPublicationLink(entry.github, 'Github')}
                      title="Github"
                    >
                      <img src={imageMapping('Github')} alt="Github" />
                      <span>Github</span>
                    </button>
                  ) : null}
                  {entry.project ? (
                    <button
                      className="publication_link"
                      onClick={() => openPublicationLink(entry.project, 'Project')}
                      title="Project Page"
                    >
                      <img src={imageMapping('ProjectPage')} alt="Project Page" />
                      <span>Project</span>
                    </button>
                  ) : null}
                </div>
              </div>
              <div className="publication_image">
                <img src={entry.image || defaultThumb} alt={entry.title} />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Draggable>
  );
}

export default PublicationsFolder;
