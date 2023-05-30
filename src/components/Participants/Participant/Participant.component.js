import React  from "react";
import Card from "../../Shared/Card/Card.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Participant.css";
import {
  faMicrophoneSlash,
  faThumbsUp,
  faThumbsDown,
  faExclamation,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

export const Participant = (props) => {
  const {
    curentIndex,
    currentParticipant,
    hideVideo,
    videoRef,
    showAvatar,
    currentUser,
  } = props;
  if (!currentParticipant) return <></>;
  console.log(currentParticipant)
  return (
    <div className={`participant ${hideVideo ? "hide" : ""}`}>
      <Card>
        <video
          ref={videoRef}
          className="video"
          id={`participantVideo${curentIndex}`}
          autoPlay
          playsInline
        ></video>
        {!currentParticipant.audio && (
          <FontAwesomeIcon
            className="muted"
            icon={faMicrophoneSlash}
            title="Muted"
          />
        ) }
       
        {showAvatar && (
          <div
            style={{ background: currentParticipant.avatarColor }}
            className="avatar"
          >
            { currentParticipant.name[0] }
          </div>
        )}
        <div className="name">
          
          {currentParticipant.thumbs_up && (
            <div className="thumbs-up-icon">
              <FontAwesomeIcon icon={faThumbsUp} />
            </div>
          ) }
          {currentParticipant.thumbs_down && (
            <div className="thumbs-up-icon">
              <FontAwesomeIcon icon={faThumbsDown} />
            </div>
          ) }
          {currentParticipant.agree && (
            <div className="thumbs-up-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          ) }
          {currentParticipant.disagree && (
            <div className="thumbs-up-icon">
              <FontAwesomeIcon icon={faExclamation} />
            </div>
            
          ) }
          { currentParticipant.name }
          {currentUser ? "(You)" : ""}
        </div>
      </Card>
    </div>
  );
};
