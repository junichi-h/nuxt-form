<template lang="pug">
    .container
        NameKanji(
            :changeFamilyName="CHANGE_FAMILY_NAME"
            :changeFirstName="CHANGE_FIRST_NAME"
            :checkStatus="CHECK_STATUS"
            :isErrorFamilyName="isErrorFamilyName"
            :isErrorFirstName="isErrorFirstName"
            :isSuccessFamilyName="isSuccessFamilyName"
            :isSuccessFirstName="isSuccessFirstName"
        )
        NameKana(
            :changeFamilyName="CHANGE_FAMILY_NAME_KANA"
            :changeFirstName="CHANGE_FIRST_NAME_KANA",
            :checkStatus="CHECK_STATUS"
            :familyNameKanaErrorMessage="familyNameKanaErrorMessage"
            :isSuccessFamilyNameKana="isSuccessFamilyNameKana"
            :firstNameKanaErrorMessage="firstNameKanaErrorMessage"
            :isSuccessFirstNameKana="isSuccessFirstNameKana"
        )
        Email(
            :changeEmail="CHANGE_EMAIL"
            :checkStatus="CHECK_STATUS"
            :emailErrorMessage="emailErrorMessage"
            :isSuccessEmail="isSuccessEmail"
        )
        SendButton(:disabled="!isAllOk")
</template>

<script>
import { mapActions, mapState } from 'vuex';

import NameKanji from '../name/name-kanji';
import NameKana from '../name/name-kana';
import Email from '../email/email';
import SendButton from '../button/send-button';

import {
  CHANGE_FAMILY_NAME,
  CHANGE_FIRST_NAME,
  CHANGE_FAMILY_NAME_KANA,
  CHANGE_FIRST_NAME_KANA,
  CHANGE_EMAIL,
  CHECK_STATUS
} from '../../store/mutation-types';

export default {
  name: 'form-container',
  components: {
    NameKanji,
    NameKana,
    Email,
    SendButton
  },
  computed: {
    ...mapState([
        'isErrorFamilyName',
        'isErrorFirstName',
        'isSuccessFamilyName',
        'isSuccessFirstName',
        'familyNameKanaErrorMessage',
        'isSuccessFamilyNameKana',
        'firstNameKanaErrorMessage',
        'isSuccessFirstNameKana',
        'emailErrorMessage',
        'isSuccessEmail',
        'isAllOk'
    ])
  },
  methods: {
    ...mapActions({
      CHANGE_FAMILY_NAME,
      CHANGE_FIRST_NAME,
      CHANGE_FAMILY_NAME_KANA,
      CHANGE_FIRST_NAME_KANA,
      CHANGE_EMAIL,
      CHECK_STATUS
    })
  }
}
</script>

<style lang="sass" scoped>
    .container
        width: 90%
        margin: 30px auto
</style>
