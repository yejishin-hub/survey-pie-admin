// GET : 데이터를 가져온다.
// POST : 데이터를 저장한다. [생성]
// PUT : 기존에 있는 데이터를 수정한다. [수정]
// DELETE : 데이터를 삭제한다.

import axios from 'axios';

function putSurvey(survey) {
  axios.put(`/surveys/${survey.surveyId}`, survey).then('저장되었습니다.');
}

export default putSurvey;
