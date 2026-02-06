import UseContext from '../Context'
import { useContext, useState } from "react";
import Draggable from 'react-draggable'
import { motion } from 'framer-motion';
import About from '../assets/ipng.png'
import bioPC from '../assets/avt.png'
import tech from '../assets/tech.png'
import hobby from '../assets/hobby.png'
import '../css/MyBioFolder.css'


function MyBioFolder() {

  const [generalTap, setGenerapTap] = useState(true)
  const [aboutMeTap, setAboutMeTap] = useState(false)
  const [technologyTap, setTechnologyTap] = useState(false)
  const [hobbTap, setHobbTap] = useState(false)

  const { 
    themeDragBar,
    MybioExpand, setMybioExpand,
    StyleHide,
    isTouchDevice,
    handleSetFocusItemTrue,
    inlineStyleExpand,
    inlineStyle,
    deleteTap,
   } = useContext(UseContext);

  const aboutMeText = (
    <>
        As of Feb. 2026
        <br />
        <br />
        I am a senior undergraduate student at the National Economics University (NEU) Vietnam, majoring in Data Science.
        Currently, I work as an AI Scientist at N2TP, where I focus on machine learning and AI-driven research projects.
        My research interests include <span>multimodal learning</span> and <span>hardware-aware optimization</span>.
        <br />
        <br />
        Previously, I was a visiting student at Yuan Ze University, Taiwan, where I conducted a research project on robotics imitation learning under the supervision of <a href="https://www.cse.yzu.edu.tw/en/people/professor?name=Naeem%20Ul%20Islam" target="_blank" rel="noreferrer">Asst. Prof. Naeem Ul Islam</a>.
        <br />
        <br />
        I began my research journey in my sophomore year at the NEU Codelab, under the supervision of <a href="https://scholar.google.com/citations?user=KhEo3bsAAAAJ&hl=en" target="_blank" rel="noreferrer">Xuan Lam Pham, PhD</a>, Dean of the Faculty of Information Technology, 
        and in collaboration with <a href="https://scholar.google.com/citations?user=KB9_4rgAAAAJ&hl=en" target="_blank" rel="noreferrer">Toan Luu, Phd</a>.
        When in NEU, I research in NLP, AI for education, Machine Learning.
        <br />
        <br />
        <span style={{ color: 'green' }}>
        I am actively seeking PhD positions in Machine Learning, AI, or related fields for the Fall 2027 intake.
        </span>
    </>
  );

  const technologyText = ( // don't have to use DangerousHTML
    <>
        I primarily work with <span>Python</span> for research, 
        focusing on designing and running large-scale experiments, 
        training machine learning models, and building reproducible pipelines 
        for empirical studies in <span>multimodal learning</span>. 
        My current work is research-driven, with an emphasis on model analysis, 
        experimental rigor, and producing results for academic publication. 
        I also have prior experience with <span>JavaScript</span> and <span>React</span> 
        from coursework projects, but my present focus is firmly on 
        Python-based research and advancing core machine learning methodologies.
    </>
  );

  const bioText = ( // don't have to use DangerousHTML
    <>
        <strong>Objective:</strong>
        <br />
        <span>Research scientist in AI and Machine Learning.</span>
        <br />
        <br />
        <strong>Information:</strong>
        <br />
        <span>Martin (Hung) Mai</span>
        <br />
        <span>AI Scientist</span>
        <br />
        <span>+84 78five33four804 </span>
        <br />
        <span>maphquochung[at]gmail.com</span>
        <br />
        <span>pqhung.mai[at]n2tp[dot]com</span>
        <br />
        <br />
        <strong>Location: </strong>
        <br />
        <span>Hanoi City, Vietnam</span>
        <br />
        <span>Open to PhD position</span>
    </>
  );

  const hobbyText = ( // don't have to use DangerousHTML
    <>
        In my free time, I love gaming with friends & watching Arsenal 
        (though Arsenal brings so much pain). 
        When I'm not at my computer, I play sport, go to café, 
        discover new restaurants, or text to random people. 
        I play music (frequently), football (regularly) , badminton (sporadically) and go to bar (occasionally but the occasion happens regularly).
    </>
  );

      function handleDragStop(event, data) {
        const positionX = data.x 
        const positionY = data.y
        setMybioExpand(prev => ({
          ...prev,
          x: positionX,
          y: positionY
        }))

      }


  function handleBiotap(name) {
    setGenerapTap(name === 'general');
    setAboutMeTap(name === 'about');
    setTechnologyTap(name === 'technology');
    setHobbTap(name === 'hobby');
  }

  const activeBtnStyle = {
    bottom: '2px',
    outline: '1px dotted black',
    outlineOffset: '-5px',
    borderBottomColor: '#c5c4c4',
    zIndex: '3'
  };


  return (
    <>
      <Draggable
        axis="both" 
        handle={'.folder_dragbar'}
        grid={[1, 1]}
        scale={1}
        disabled={MybioExpand.expand}
        position={MybioExpand.show ? { x: MybioExpand.x, y: MybioExpand.y } : undefined}
        bounds={{top: 0}}
        defaultPosition={{ 
          x: window.innerWidth <= 500 ? 35 : 70,
          y: window.innerWidth <= 500 ? 35 : 40,
        }}
        onStop={(event, data) => handleDragStop(event, data)}
        onDrag={(event, data) => {
          setMybioExpand(prev => ({
            ...prev,
            x: data.x,
            y: data.y
          }))
        }}
        onStart={() => handleSetFocusItemTrue('About')}
      >
        <motion.div className='bio_folder' 
            onClick={(e) => {
              e.stopPropagation();
              handleSetFocusItemTrue('About');
            }}
            style={ MybioExpand.expand ? inlineStyleExpand('About') : inlineStyle('About')}>
          <div className="folder_dragbar"
             style={{ background: MybioExpand.focusItem? themeDragBar : '#757579'}}
          >
            <div className="bio_barname">
              <img src={About} alt="About" />
              <span>About</span>
            </div>
            <div className="bio_barbtn">
              <div onClick={ !isTouchDevice ? (e) => {
                e.stopPropagation()
                setMybioExpand(prev => ({...prev, hide: true, focusItem: false}))
                StyleHide('About')
              } : undefined
              }   
                onTouchEnd={(e) => {
                e.stopPropagation()
                setMybioExpand(prev => ({...prev, hide: true, focusItem: false}))
                StyleHide('About')
              }}
              onTouchStart={(e) => e.stopPropagation()}
              >
                <p className='dash'></p>
              </div>

                <div>
                <p className='x'
                  onClick={!isTouchDevice ? () => {
                    deleteTap('About')
                    handleBiotap('general')
                  }: undefined}
                  onTouchEnd={() => {
                    deleteTap('About')
                    handleBiotap('general')
                  }}
                >×
                </p>
              </div>
            </div>
          </div>
          <div className="file_tap_container-bio">
          <p  onClick={() => handleBiotap('general')}
              style={generalTap ? activeBtnStyle : {}}
          >General
          </p>
          <p onClick={() => handleBiotap('about')}
              style={aboutMeTap ? activeBtnStyle : {}}
          >About me
          </p>
          <p onClick={() => handleBiotap('technology')}
              style={technologyTap ? activeBtnStyle : {}}
          >Technology
          </p>
          <p onClick={() => handleBiotap('hobby')}
                  style={hobbTap ? activeBtnStyle : {}}
          >Hobby
          </p>
          </div>
          <div className="folder_content">
            <div className="folder_content-bio"
              style={{ display: generalTap ? 'grid' : 'block' }}
            >
            <img
              alt="bioPC"
              className={generalTap ? 'bio_img' : 'bio_img_other'}
              src={generalTap? bioPC : (technologyTap ? tech : hobby)}
            />
            <div
              className="biotext_container">

              <p className={generalTap? 'bio_text_1' : 'bio_text_1_other'}>
                {generalTap
                  ? bioText
                  : aboutMeTap
                  ? aboutMeText
                  : technologyTap
                  ? technologyText
                  : hobbyText}
              </p>   
            </div>
              
            </div>
            <div className="bio_btn_container">
              <div className="bio_btn_ok"
              onClick={!isTouchDevice ? () => {
                deleteTap('About')
                handleBiotap('general')
              } : undefined}
              onTouchEnd={() => {
                deleteTap('About')
                handleBiotap('general')
              }}
              >
                <span>
                  OK
                </span>
              </div>
              <div className="bio_btn_cancel"
              onClick={!isTouchDevice ? () => {
                deleteTap('About')
                handleBiotap('general')
              } : undefined}
              onTouchEnd={() => {
                deleteTap('About')
                handleBiotap('general')
              }}
              ><span>Cancel</span></div>
            </div>
          </div>
        </motion.div>
      </Draggable>
    </>
  )
}          

export default MyBioFolder
