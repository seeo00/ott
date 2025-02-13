// src/components/main/content1/Contents3Item.jsx
import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 264px;
  height: 396px;
  object-fit: fill;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Contents3Item = ({ imgurl, desc }) => {
  return (
    <div className="Contents3-item">
      <Img src={imgurl} alt={desc || '콘텐츠 이미지'} />
      {/* <p>{desc}</p> 설명용 */}
    </div>
  );
};

export default Contents3Item;
