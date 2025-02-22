// Detail.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { InnerContainer } from '../../common/layout/InnerContainer';
import { color } from '../../styled/common';
import { Button } from '../../ui/Button';
import CircleButton from '../../ui/CircleButton';
import CloseIcon from '../../ui/icon/CloseIcon';
import FavoriteIcon from '../../ui/icon/FavoriteIcon';
import VideoPlayIcon from '../../ui/icon/VideoPlayIcon';
import * as S from './style';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getDetails } from '../../store/modules/thunks/getDetails';
import { NavPopularIcon } from '../../ui/icon';
import Thumbnail from '../../ui/card/Thumbnail';
import DetailCard from '../../components/detail/DetailCard';
import DetailTabButtons from '../../ui/button/TapButton';
import LoadingSpinner from '../../ui/LoadingSpinner';
// import DetailImageCard from '../../components/detail/DetailImageCard';

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { detailsData, loading, error } = useSelector((state) => state.detailsR);
  // const { detailType, detailID } = useParams();
  const { category, detailID } = useParams();

  // useEffect(() => {
  //   dispatch(getDetails({ id: detailID, contentType: detailType }));
  // }, [dispatch, detailID, detailType]);

  useEffect(() => {
    if (!category || !detailID) return;
    dispatch(getDetails({ id: detailID, contentType: category }));
  }, [dispatch, detailID, category]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite((prev) => !prev);
  };

  if (loading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  if (error) return <div>에러가 발생했습니다</div>;
  if (!detailsData) return null;

  return (
    <S.Overlay>
      <S.Wrap>
        <S.VisualWrap>
          <Thumbnail backdropPath={detailsData.backdrop_path} full />
          <S.VisualContent>
            <S.TitleImg>{detailsData.name}</S.TitleImg>
            <S.ButtonControl>
              <Button width="120px">
                <VideoPlayIcon color={color.white} />
                재생
              </Button>
              <CircleButton border onClick={handleFavoriteClick}>
                <FavoriteIcon fill={isFavorite ? 'red' : 'none'} />
                <span className="icon-txt">관심</span>
              </CircleButton>
              <CircleButton border>
                <NavPopularIcon fill={color.yellow} color={color.yellow} />
                <span className="icon-txt">{detailsData.vote_average.toFixed(1)}</span>
              </CircleButton>
            </S.ButtonControl>
          </S.VisualContent>
          <S.ButtonWrap onClick={() => navigate(-1)}>
            <CircleButton size="56px" bgColor={color.primary[300]}>
              <CloseIcon width={36} height={36} />
            </CircleButton>
          </S.ButtonWrap>
        </S.VisualWrap>
        <S.ContentWrap>
          <S.InnerContainerd>
            <DetailCard />
            <DetailTabButtons tvId={detailID} />
          </S.InnerContainerd>
        </S.ContentWrap>
      </S.Wrap>
    </S.Overlay>
  );
};

export default Detail;
