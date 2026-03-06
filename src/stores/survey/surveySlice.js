import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: 1,
  title: '명절 선물 선호도 조사1',
  questions: [
    {
      title: '설날에 받고 싶은 선물은 무엇인가요? (최대 3개)',
      desc: '특별히 받고 싶은 선물이 없다면 선택하지 말고 넘어가세요.',
      type: 'select',
      required: true,
      options: {
        max: 3,
        items: ['식품', '전자기기', '도서', '의류', '돈'],
      },
    },
    {
      title: '추석에 받고 싶은 선물은 무엇인가요?',
      desc: '특별히 받고 싶은 선물이 없다면 입력하지 말고 넘어가세요.',
      type: 'text',
      required: true,
      options: {
        max: 10,
        placeholder: '10자 이내로 입력해주세요.',
      },
    },
    {
      title: '입력한 선물을 받고 싶은 이유가 무엇인가요? (필수)',
      desc: '',
      type: 'textarea',
      required: true,
      options: {
        max: 100,
        placeholder: '100자 이내로 입력해주세요.',
      },
    },
  ],
  createdAt: 1647160914620,
};

export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      // action(데이터 수정 요청서)객체의 payload :
      // +) action.type : 어떤 Reducer한테 가야되는 action인지를 알려줌
      // [불변성] createSlice는 기본적으로 immur js의 라이브러리를 사용함
      state.title = action.payload;
    },
    addQuestion: (state) => {
      state.questions.push({
        title: 'Untitled',
        desc: '',
        type: 'text',
        required: false,
        options: {
          max: 20,
          placeholder: '',
        },
      });
    },
    moveUpQuestion: (state, action) => {
      const index = action.payload;
      const temp = state.questions[index];
      state.questions[index] = state.questions[index - 1];
      state.questions[index - 1] = temp;
    },
    moveDownQuestion: (state, action) => {
      const index = action.payload;
      const temp = state.questions[index];
      state.questions[index] = state.questions[index + 1];
      state.questions[index + 1] = temp;
    },
    deleteQuestion: (state, action) => {
      state.questions.splice(action.payload, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setTitle,
  addQuestion,
  moveUpQuestion,
  moveDownQuestion,
  deleteQuestion,
} = surveySlice.actions;

export default surveySlice.reducer;
