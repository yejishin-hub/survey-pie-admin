import { Button } from 'antd';

import putSurvey from '../../services/putSurvey';
import { useSelector } from 'react-redux';

function FloatingButton() {
  const survey = useSelector((state) => state.survey.data);
  return (
    <FloatingButtonWrapper>
      <Button onClick={() => putSurvey(survey)}>저장</Button>
    </FloatingButtonWrapper>
  );
}

const FloatingButtonWrapper = styled.div`
  position: fixed;
  right: 10px;
  bottom: 10px;
  box-shadow: 2px 2px 5px -2px #cacaca;
`;

export default FloatingButton;
