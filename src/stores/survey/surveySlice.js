import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      // action(데이터 수정 요청서)객체의 payload :
      // +) action.type : 어떤 Reducer한테 가야되는 action인지를 알려줌
      // [불변성] createSlice는 기본적으로 immur js의 라이브러리를 사용함
      state.data.title = action.payload;
    },
    addQuestion: (state, action) => {
      const type = action.payload;

      let options = {};
      if (type === 'text' || type === 'textarea') {
        options = {
          max: 20,
          placeholder: '',
        };
      } else if (type === 'select') {
        options = {
          max: 1,
          items: ['가', '나', '다'],
        };
      }

      state.data.questions.push({
        title: 'Untitled',
        desc: '',
        type,
        required: false,
        options,
      });
    },
    moveUpQuestion: (state, action) => {
      const index = action.payload;
      const temp = state.data.questions[index];
      state.data.questions[index] = state.data.questions[index - 1];
      state.data.questions[index - 1] = temp;
    },
    moveDownQuestion: (state, action) => {
      const index = action.payload;
      const temp = state.data.questions[index];
      state.data.questions[index] = state.data.questions[index + 1];
      state.data.questions[index + 1] = temp;
    },
    deleteQuestion: (state, action) => {
      state.data.questions.splice(action.payload, 1);
    },
    setSurvey: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setQuestion: (state, action) => {
      const index = action.payload.index;
      state.data.questions[index] = action.payload.data;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setTitle,
  setSurvey,
  addQuestion,
  moveUpQuestion,
  moveDownQuestion,
  deleteQuestion,
  setLoading,
  setError,
  setQuestion,
} = surveySlice.actions;

export default surveySlice.reducer;
