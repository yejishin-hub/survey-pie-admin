import { Col, Input, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import OptionSection from '../components/OptionSection';
import PreviewSection from '../components/PreviewSection';
import MainLayout from '../layouts/MainLayout';
import {
  addQuestion,
  deleteQuestion,
  moveDownQuestion,
  moveUpQuestion,
  setTitle,
} from '../stores/survey/surveySlice';

function BuilderPage() {
  const survey = useSelector((state) => state.survey);
  console.log('survey', survey);
  const dispatch = useDispatch();

  return (
    <MainLayout selectedKeys={['builder']}>
      <Row>
        <Col flex="auto">
          <Input
            placeholder="설문 제목을 입력해주세요."
            value={survey.title}
            onChange={(e) => {
              dispatch(setTitle(e.target.value));
              // 1. 앞에서 배운 방법
              // setData((state) => ({ ...state, title: e.target.value }));

              // 2-1. immer js 라이브러리 사용
              // const newData = produce(data, (draft) => {
              //   draft.title = e.target.value;
              // });
              // setData(newData);

              // 2-2. immer js 라이브러리 사용 => setData에 전달해주면 알아서 data 생성해서 진행
              // setData(
              //   produce((draft) => {
              //     draft.title = e.target.value;
              //   }),
              // );
              // 3. Redux
            }}
          />
          <PreviewSection
            questions={survey.questions}
            addQuestion={() => {
              dispatch(addQuestion());
            }}
            moveUpQuestion={(index) => {
              if (index === 0) {
                return;
              }
              dispatch(moveUpQuestion(index));
            }}
            moveDownQuestion={(index) => {
              if (index === survey.questions.length - 1) {
                return;
              }
              dispatch(moveDownQuestion(index));
            }}
            deleteQuestion={(index) => {
              dispatch(deleteQuestion(index));
            }}
          />
        </Col>
        <Col flex="350px">
          <OptionSection />
        </Col>
      </Row>
    </MainLayout>
  );
}

export default BuilderPage;
