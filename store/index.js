import Vuex from 'vuex';

import {
  CHANGE_FAMILY_NAME,
  CHANGE_FIRST_NAME,
  CHANGE_FAMILY_NAME_KANA,
  CHANGE_FIRST_NAME_KANA,
  CHANGE_EMAIL,
  CHECK_STATUS
} from './mutation-types';

import { isEmail, isKatakana } from '../utils/validation';

const state = {
  familyName: '',
  isErrorFamilyName: false,
  isSuccessFamilyName: false,
  // ------------------------
  firstName: '',
  isErrorFirstName: false,
  isSuccessFirstName: false,
  // ------------------------
  familyNameKana: '',
  familyNameKanaErrorMessage: '',
  isSuccessFamilyNameKana: false,
  // ------------------------
  firstNameKana: '',
  firstNameKanaErrorMessage: '',
  isSuccessFirstNameKana: false,
  // ------------------------
  email: '',
  emailErrorMessage: '',
  isSuccessEmail: false,
  // ------------------------
  isAllOk: false
};

const actions = {
  [CHANGE_FAMILY_NAME] ({ commit }, familyName) {
    commit(CHANGE_FAMILY_NAME, { familyName });
  },
  [CHANGE_FIRST_NAME] ({ commit }, firstName) {
    commit(CHANGE_FIRST_NAME, { firstName });
  },
  [CHANGE_FAMILY_NAME_KANA] ({ commit }, familyNameKana) {
    commit(CHANGE_FAMILY_NAME_KANA, { familyNameKana });
  },
  [CHANGE_FIRST_NAME_KANA] ({ commit }, firstNameKana) {
    commit(CHANGE_FIRST_NAME_KANA, { firstNameKana });
  },
  [CHANGE_EMAIL] ({ commit }, email) {
    commit(CHANGE_EMAIL, { email });
  },
  [CHECK_STATUS] ({ commit }) {
    commit(CHECK_STATUS);
  }
};

const mutations = {
  // 性のvalidationを行う
  [CHANGE_FAMILY_NAME] (state, { familyName }) {
    state.familyName = familyName;
    state.isErrorFamilyName = familyName.length <= 0;
    state.isSuccessFamilyName = familyName.length > 0;
  },
  // 名のvalidationを行う
  [CHANGE_FIRST_NAME] (state, { firstName }) {
    state.firstName = firstName;
    state.isErrorFirstName = firstName.length <= 0;
    state.isSuccessFirstName = firstName.length > 0;
  },
  // セイのvalidateを行う
  [CHANGE_FAMILY_NAME_KANA] (state, { familyNameKana }) {
    state.familyNameKana = familyNameKana;

    if (familyNameKana.length <= 0) {
      // requiredチェック
      state.familyNameKanaErrorMessage = '必須項目です。';
      state.isSuccessFamilyNameKana = false;
    } else if(familyNameKana.length > 0 && !isKatakana(familyNameKana)) {
      // typeチェック
      state.familyNameKanaErrorMessage = 'カタカナで入力してください。';
      state.isSuccessFamilyNameKana = false;
    } else {
      // ok
      state.familyNameKanaErrorMessage = '';
      state.isSuccessFamilyNameKana = true;
    }
  },
  // メイのvalidateを行う
  [CHANGE_FIRST_NAME_KANA] (state, { firstNameKana }) {
    state.firstNameKana = firstNameKana;
    if (firstNameKana.length <= 0) {
      // requiredチェック
      state.firstNameKanaErrorMessage = '必須項目です。';
      state.isSuccessFirstNameKana = false;
    } else if(firstNameKana.length > 0 && !isKatakana(firstNameKana)) {
      // typeチェック
      state.firstNameKanaErrorMessage = 'カタカナで入力してください。';
      state.isSuccessFirstNameKana = false;
    } else {
      // ok
      state.firstNameKanaErrorMessage = '';
      state.isSuccessFirstNameKana = true;
    }
  },
  // emailのvalidateを行う
  [CHANGE_EMAIL] (state, { email }) {
    state.email = email;
    if (email.length <= 0) {
      // requiredチェック
      state.emailErrorMessage = '必須項目です。';
      state.isSuccessEmail = false;
    } else if(email.length > 0 && !isEmail(email)) {
      // typeチェック
      state.emailErrorMessage = 'Emailの形式が間違ってます。';
      state.isSuccessEmail = false;
    } else {
      // ok
      state.emailErrorMessage = '';
      state.isSuccessEmail = true;
    }
  },
  // 全ての状態を監視
  [CHECK_STATUS] (state) {
    state.isAllOk = state.isSuccessFamilyName && state.isSuccessFirstName && state.isSuccessFamilyNameKana && state.isSuccessFirstNameKana && state.isSuccessEmail;
  }
};

const createStore = () => new Vuex.Store({
  state,
  actions,
  mutations
});

export default createStore;
