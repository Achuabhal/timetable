import React, { useState, useEffect, useRef } from 'react';
import './App.css';  // Ensure the correct path to your CSS file
import data from './assets/data';
import StartPage from './assets/StartPage';
import timersound from './assets/timer-sound.mp3';
import endSound from './assets/end.mp3'; // Import your end sound
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ParticleBackground from './ParticleBackground'; 

const CircularProgressWithLabel = ({ value }) => {
  const progressColor = value >= 50 ? 'white' : 'red'; 
  const shadowColor = value >= 50 ? '#3f82e8' : 'red';  

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
      }}
    >
      <CircularProgress
        size={60}
        variant="determinate"
        value={value}
        sx={{
          color: progressColor,
          boxShadow: `0 0 35px ${shadowColor}`,
          borderRadius: '50%',
          transition: 'box-shadow 0.3s ease, color 0.3s ease',
        }}
      />
    </Box>
  );
};

const TimerAnimation = ({ seconds }) => {
  return (
    <div className="timer">
      <CircularProgressWithLabel value={(seconds / 15) * 100} />
      <h2>{seconds}</h2>
    </div>
  );
};

const App = () => {
  const [questionData, setQuestionData] = useState(data.imagequestions[1]);
  const [options, setOptions] = useState(data.imagequestions[1].options);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const [previousQuestionIndex, setPreviousQuestionIndex] = useState(null);
  const [seconds, setSeconds] = useState(15);
  const [isActive, setIsActive] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [quizStarted, setQuizStarted] = useState(false);
  const [answerVisible, setAnswerVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [clickedWrongAnswers, setClickedWrongAnswers] = useState([]);
  

  const audioRef = useRef(null);
  const endAudioRef = useRef(null); // New audio reference for the end sound

  useEffect(() => {
    let interval = null;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      if (endAudioRef.current) { // Play end sound when timer finishes
        endAudioRef.current.play();
      }
    }

    if (audioRef.current && isActive && seconds > 0) {
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  useEffect(() => {
    if (quizStarted) {
      startTimer();
    }
  }, [quizStarted]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(15);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const startTimer = () => {
    setIsActive(true);
    setSeconds(15);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const handleNextClick = () => {
    const nextIndex = currentQuestionIndex + 1;

    if (data.imagequestions[nextIndex]) {
      options.forEach(option => {
        const optionElement = document.getElementById(option);
        if (optionElement) {
          optionElement.style.boxShadow = 'none';
        }
      });

      setClickedWrongAnswers([]);

      setPreviousQuestionIndex(currentQuestionIndex);
      setCurrentQuestionIndex(nextIndex);
      setQuestionData(data.imagequestions[nextIndex]);
      setOptions(data.imagequestions[nextIndex].options);
      setFilteredOptions(data.imagequestions[nextIndex].options);
      
      setAnswerVisible(false);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      alert("You have reached the end of the quiz.");
    }
  };

  const handleBackClick = () => {
    if (previousQuestionIndex !== null) {
      setCurrentQuestionIndex(previousQuestionIndex);
      setQuestionData(data.imagequestions[previousQuestionIndex]);
      setOptions(data.imagequestions[previousQuestionIndex].options);
      setFilteredOptions(data.imagequestions[previousQuestionIndex].options);
      const newPreviousQuestionIndex = previousQuestionIndex - 1;
      setPreviousQuestionIndex(newPreviousQuestionIndex >= 0 ? newPreviousQuestionIndex : null);
      resetTimer();
      setAnswerVisible(false);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      alert("No previous questions.");
    }
  };

  const handle5050 = () => {
    const correctAnswer = questionData.answer.trim();
    const incorrectOptions = options.filter(option => option.trim() !== correctAnswer);

    const optionsToRemove = [];
    while (optionsToRemove.length < 2 && incorrectOptions.length > 0) {
      const randomIndex = Math.floor(Math.random() * incorrectOptions.length);
      const option = incorrectOptions[randomIndex];
      if (!optionsToRemove.includes(option)) {
        optionsToRemove.push(option);
      }
    }

    const remainingOptions = options.map(option => 
      optionsToRemove.includes(option) ? "" : option
    );

    setFilteredOptions(remainingOptions);
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const toggleAnswerVisibility = () => {
    setAnswerVisible(!answerVisible);

    if (!answerVisible) {
      setFilteredOptions([questionData.answer]);
    } else {
      setFilteredOptions(options);
    }
  };

  const handleOptionClick = (option) => {
    const correctAnswer = questionData.answer.trim();
    setSelectedOption(option);
    const isOptionCorrect = option.trim() === correctAnswer;
    setIsCorrect(isOptionCorrect);
  
    if (isOptionCorrect) {
      const incorrectOptions = filteredOptions.filter(opt => opt.trim() !== correctAnswer);
      incorrectOptions.forEach(incorrectOption => {
        const optionElement = document.getElementById(incorrectOption);
        if (optionElement) {
          optionElement.style.boxShadow = '0px 0px 35px red';
        }
      });
    } else {
      setClickedWrongAnswers([...clickedWrongAnswers, option]);
      const optionElement = document.getElementById(option);
      if (optionElement) {
        optionElement.style.boxShadow = '0px 0px 35px red';
      }
  
    
    }
  };

  return (
    <div className="container">
       <ParticleBackground />
      {!quizStarted ? (
        <StartPage startQuiz={startQuiz} />
      ) : (
        <>
          <div className='next'>
            <button className="btn-5" onClick={handleNextClick}>
              <span>Next</span>
            </button>
          </div>
          <button className="backclick" onClick={handleBackClick}>
            <span>Back</span>
          </button>

          <TimerAnimation seconds={seconds} />

          <div className="question-bo">
            <h2>{questionData.question}</h2>
          </div>

          <div className="question-box">
            <img src={questionData.image} alt="Question" className="question-image" />
          </div>

          <div className="hii">
            <div className="options">
              {filteredOptions.length === 1 ? (
                <button
                  className={`option-single ${selectedOption === filteredOptions[0] ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
                  onClick={() => handleOptionClick(filteredOptions[0])}
                  style={{
                    boxShadow: selectedOption === filteredOptions[0]
                      ? isCorrect
                        ? '0px 0px 35px green'
                        : '0px 0px 35px red'
                      : 'none',
                    transition: 'box-shadow 0.3s ease',
                  }}
                >
                  <span>{filteredOptions[0]}</span>
                </button>
              ) : (
                filteredOptions.map((option, index) => (
                  <button
                    id={option}  // Add this id to identify each button
                    className={`option ${selectedOption === option ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    style={{
                      boxShadow: selectedOption === option
                        ? isCorrect
                          ? '0px 0px 35px green'
                          : '0px 0px 35px red'
                        : 'none',
                      transition: 'box-shadow 0.3s ease',
                    }}
                  >
                    <span>{option}</span>
                  </button>
                ))
              )}
            </div>
          </div>

          {!answerVisible && (
            <button className="fifty" onClick={handle5050}>
              <span>50:50</span>
            </button>
          )}
  
          <button className="optiontwo" onClick={toggleTimer}>
            <span>{isActive ? String.fromCharCode(10074, 10074) : String.fromCharCode(9654)}</span>
          </button>
  
          <button className="optiontworeset" onClick={resetTimer}>
            <span>&#x21bb;</span>
          </button>
  
          <div className="buttonBox">
            <button className="btn6" onClick={toggleAnswerVisibility}>
              <span>{answerVisible ? 'Hide' : 'Show'}</span>
              <div className="border"></div>
              <div className="border"></div>
            </button>
          </div>
  
          <audio ref={audioRef}>
            <source src={timersound} type="audio/mp3" />
          </audio>
          <audio ref={endAudioRef}>
            <source src={endSound} type="audio/mp3" />
          </audio>
        </>
      )}
    </div>
  );
};

export default App;
