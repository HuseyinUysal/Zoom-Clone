import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faVideo,
  faDesktop,
  faVideoSlash,
  faMicrophoneSlash,
  faThumbsUp,
  faThumbsDown,
  faIcons,
  faExclamation,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";
import "./MeetingFooter.css";
const MeetingFooter = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [IsThumbsUpClicked,setIsThumbsUpClicked] = useState(false)
  const [showThumbsUpIcon, setShowThumbsUpIcon] = useState(false);
  
  const [streamState, setStreamState] = useState({
    mic: true,
    video: false,
    screen: false,
    thumbs_up:false,
    thumbs_down:false,
    agree:false,
    disagree:false,
    emojis:false,
  });
  const micClick = () => {
    setStreamState((currentState) => {
      return {
        ...currentState,
        mic: !currentState.mic,
      };
    });
  };

  const onVideoClick = () => {
    setStreamState((currentState) => {
      return {
        ...currentState,
        video: !currentState.video,
      };
    });
  };
  const onEmojisClick = () => {
    setIsMenuOpen((prevOpen) => !prevOpen);
    setStreamState((currentState) => {
      return {
        ...currentState,
        emojis: !currentState.emojis,
      };
    });
    
  };
  const onThumbsUpClick = () => {
    setIsThumbsUpClicked(prevState => !prevState);
    setShowThumbsUpIcon(true);
    setTimeout(() => {
      setShowThumbsUpIcon(false);
    }, 10000);
    setStreamState((currentState) => {
      return {
        ...currentState,
        thumbs_up: !currentState.thumbs_up,
      };
    });
  };
  const onThumbsDownClick = () => {
    setStreamState((currentState) => {
      return {
        ...currentState,
        thumbs_down: !currentState.thumbs_down,
      };
    });
  };
  const onAgreeClick = () => {
    setStreamState((currentState) => {
      return {
        ...currentState,
        agree: !currentState.agree,
      };
    });
  };
  const onDisagreeClick = () => {
    setStreamState((currentState) => {
      return {
        ...currentState,
        disagree: !currentState.disagree,
      };
    });
  };

  const onScreenClick = () => {
    props.onScreenClick(setScreenState);
  };

  const setScreenState = (isEnabled) => {
    setStreamState((currentState) => {
      return {
        ...currentState,
        screen: isEnabled,
      };
    });
  };
  useEffect(() => {
    props.onMicClick(streamState.mic);
  }, [streamState.mic]);
  useEffect(() => {
    props.onVideoClick(streamState.video);
  }, [streamState.video]);

  return (
    <div className="meeting-footer">
      <div
        className={"meeting-icons " + (!streamState.mic ? "active" : "")}
        data-tip={streamState.mic ? "Mute Audio" : "Unmute Audio"}
        onClick={micClick}
      >
        <FontAwesomeIcon
          icon={!streamState.mic ? faMicrophoneSlash : faMicrophone}
          title="Mute"
        />
      </div>
      <div
        className={"meeting-icons " + (!streamState.video ? "active" : "")}
        data-tip={streamState.video ? "Hide Video" : "Show Video"}
        onClick={onVideoClick}
      >
        <FontAwesomeIcon icon={!streamState.video ? faVideoSlash : faVideo} />
      </div>
      <div
        className="meeting-icons"
        data-tip="Share Screen"
        onClick={onScreenClick}
        disabled={streamState.screen}
      >
        <FontAwesomeIcon icon={faDesktop} />
      </div>
      <div
       className={"meeting-icons " + (streamState.emojis ? "active-emojis" : "")}
       data-tip={!streamState.emojis ? "Show Emojis" : "Hide Emojis"}
       onClick={onEmojisClick} >
      <FontAwesomeIcon icon={faIcons} />
      </div>
      <ReactTooltip />
      {isMenuOpen && (
        <div className="emojis">
          <div
           className={"emojis-icons " + (streamState.thumbs_up ? "active-emojis" : "")}
           onClick={onThumbsUpClick} title="ThumpsUp">
          <FontAwesomeIcon icon={!IsThumbsUpClicked ? faThumbsUp : faThumbsUp}/>
          </div>
          <div
          className={"emojis-icons " + (streamState.thumbs_down ? "active-emojis" : "")}
          onClick={onThumbsDownClick} title="ThumpsDown">
          <FontAwesomeIcon icon={faThumbsDown} />
          </div>
          <div
          className={"emojis-icons " + (streamState.agree ? "active-emojis" : "")} 
          onClick={onAgreeClick}>
          <FontAwesomeIcon icon={faCheck} title="Agree" />
          </div>
          <div 
          className={"emojis-icons " + (streamState.disagree ? "active-emojis" : "")}
          onClick={onDisagreeClick}>
            <FontAwesomeIcon icon={faExclamation} title="DisAgree" />
            </div>
        </div>
      )}
      {showThumbsUpIcon && (
        <div className="thumbs-up-icon">
          <FontAwesomeIcon icon={faThumbsUp} />
        </div>
      )}
    </div>
  );
};

export default MeetingFooter;
