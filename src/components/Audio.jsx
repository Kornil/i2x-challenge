import React from 'react';
import PropTypes from 'prop-types';
import Rating from 'react-rating';
import ReactAudioPlayer from 'react-audio-player';
import moment from 'moment';

const Audio = ({ data, index }) => (
  <div className="center card">
    <h2>{`Sound File #${index + 1}`}</h2>
    <ReactAudioPlayer src={data.url} />
    <p>
      <strong>Date&nbsp;</strong>
      {moment(data.created, 'YYYY-MM-DDTHH:mm:ss.SSSSZ').format('YYYY/MM/DD HH:mm:ss').toString()}
      <strong>&nbsp;Rating&nbsp;</strong>
      <Rating
        empty="fa fa-star-o"
        full="fa fa-star"
        initialRate={data.rating}
        readonly
      />
    </p>
    <p>{data.final_script}</p>
    {/* duration is displayed directly on the audio player so we don't need this part */}
    {/* <p>
      {`${Math.floor(data.duration / 60)}:${(data.duration % 60 < 10) ?
      `0${data.duration % 60}` : data.duration % 60}`}
    </p> */}
  </div>
);

Audio.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape),
  index: PropTypes.number,
};

Audio.defaultProps = {
  data: {},
  index: 0,
};

export default Audio;
