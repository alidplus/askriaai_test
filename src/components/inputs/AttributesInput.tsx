import { ApplicationFormAttributes } from "@/services/openapi";
import { InputProps } from "@/types";
import { Space } from "antd";
import CoverImageInputCard from "./CoverImageInputCard";
import PersonalInformationInputCard from "./PersonalInformationInputCard";
import ProfileInputCard from "./ProfileInputCard";
import AdditionalQuestionsInputCard from "./AdditionalQuestionsInputCard";


function AttributesInput(props: InputProps<ApplicationFormAttributes>) {
  function handleChange<K extends keyof ApplicationFormAttributes>(key: K, value: ApplicationFormAttributes[K]) {
    props.onChange?.({ ...props.value, [key]: value })
  }
  function handleDiscard<K extends keyof ApplicationFormAttributes>(key: K) {
    props.onChange?.({ ...props.value, [key]: undefined })
  }
  return (
    <Space direction="vertical" size="large">
      <CoverImageInputCard
        value={props.value.coverImage ?? ''}
        onChange={v => v ? handleChange('coverImage', v) : handleDiscard('coverImage')}
      />
      <PersonalInformationInputCard
        value={props.value.personalInformation}
        onChange={v => handleChange('personalInformation', v)} 
      />
      <ProfileInputCard
        value={props.value.profile!}
        onChange={v => handleChange('profile', v)}
      />
      <AdditionalQuestionsInputCard
        value={props.value.customisedQuestions}
        onChange={v => handleChange('customisedQuestions', v)}
      />
    </Space>
  )
}

export default AttributesInput