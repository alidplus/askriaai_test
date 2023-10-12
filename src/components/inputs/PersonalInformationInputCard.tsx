import { Card } from "antd"
import useToken from "antd/es/theme/useToken";
import PersonalInformationTemplateInput from "@/components/inputs/PersonalInformationTemplateInput";
import ProfileTemplateInput from "@/components/inputs/ProfileTemplateInput";
import { ApplicationFormAttributes, ApplicationTemplateService, PersonalInformationTemplate, QuestionTemplate } from "@/services/openapi";
import { useEffect, useRef, useState } from "react";
import QuestionsConfigArrayInput from "@/components/inputs/QuestionConfigInput";
import { InputProps } from "@/types";

type ScopeType = ApplicationFormAttributes['personalInformation']


function PersonalInformationInputCard(props: InputProps<ScopeType>) {
  const [_, token] = useToken()

  function handleChange<K extends keyof ScopeType>(key: K, value: ScopeType[K]) {
    props.onChange?.({ ...props.value, [key]: value })
  }
  return (
    <Card title="Personal information" bordered={false} style={{ width: 600 }} headStyle={{ background: token.colorInfo }}>
      <PersonalInformationTemplateInput
        devider
        disabled
        title="firstName"
        value={props.value.firstName}
        onChange={(v) => { handleChange('firstName', v)}}
      />
      <PersonalInformationTemplateInput
        devider
        disabled
        title="lastName"
        value={props.value.lastName}
        onChange={(v) => { handleChange('lastName', v)}}
      />
      <PersonalInformationTemplateInput
        devider
        disabled
        title="emailId"
        value={props.value.emailId}
        onChange={(v) => { handleChange('emailId', v)}}
      />
      <PersonalInformationTemplateInput
        devider
        title="phoneNumber"
        value={props.value.phoneNumber}
        onChange={(v) => { handleChange('phoneNumber', v)}}
      />
      <PersonalInformationTemplateInput
        devider
        title="nationality"
        value={props.value.nationality}
        onChange={(v) => { handleChange('nationality', v)}}
      />
      <PersonalInformationTemplateInput
        devider
        title="currentResidence"
        value={props.value.currentResidence}
        onChange={(v) => { handleChange('currentResidence', v)}}
      />
      <PersonalInformationTemplateInput
        devider
        title="idNumber"
        value={props.value.idNumber}
        onChange={(v) => { handleChange('idNumber', v)}}
      />
      <PersonalInformationTemplateInput
        devider
        title="dateOfBirth"
        value={props.value.dateOfBirth}
        onChange={(v) => { handleChange('dateOfBirth', v)}}
      />
      <PersonalInformationTemplateInput
        devider
        title="gender"
        value={props.value.gender}
        onChange={(v) => { handleChange('gender', v)}}
      />
      {/* <ProfileTemplateInput
        devider
        title="education"
        value={{ mandatory: false, show: true }}
        onChange={(value) => { handleChange('education', value)}}
      /> */}
      <QuestionsConfigArrayInput
        devider
        value={props.value.personalQuestions ?? []}
        onChange={(v) => { handleChange('personalQuestions', v) }}
      />
    </Card>
  )
}

export default PersonalInformationInputCard