import { Card } from "antd"
import useToken from "antd/es/theme/useToken";
import { ApplicationFormAttributes } from "@/services/openapi";
import QuestionsConfigArrayInput from "@/components/inputs/QuestionConfigInput";
import { InputProps } from "@/types";
import { useEffect } from "react";
import ProfileTemplateInput from "./ProfileTemplateInput";

type ScopeType = Required<ApplicationFormAttributes>['profile']

function ProfileInputCard(props: InputProps<ScopeType>) {
  const [_, token] = useToken()

  useEffect(() => {
    if (!props.value) props.onChange?.({
      education: { mandatory: false, show: false },
      experience: { mandatory: false, show: false },
      resume: { mandatory: false, show: false },
    })
  }, [])

  if (!props.value) return null

  function handleChange<K extends keyof ScopeType>(key: K, value: ScopeType[K]) {
    props.onChange?.({ ...props.value, [key]: value })
  }
  return (
    <Card title="Profile" bordered={false} style={{ width: 600 }} headStyle={{ background: token.colorInfo }}>
      <ProfileTemplateInput
        devider
        title="education"
        value={props.value.education}
        onChange={(v) => { handleChange('education', v)}}
      />
      <ProfileTemplateInput
        devider
        title="experience"
        value={props.value.experience}
        onChange={(v) => { handleChange('experience', v)}}
      />
      <ProfileTemplateInput
        devider
        title="resume"
        value={props.value.resume}
        onChange={(v) => { handleChange('resume', v)}}
      />
      <QuestionsConfigArrayInput
        devider
        value={props.value?.profileQuestions ?? []}
        onChange={(v) => { handleChange('profileQuestions', v) }}
      />
    </Card>
  )
}

export default ProfileInputCard