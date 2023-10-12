import { Card } from "antd"
import useToken from "antd/es/theme/useToken";
import { ApplicationFormAttributes } from "@/services/openapi";
import QuestionsConfigArrayInput from "@/components/inputs/QuestionConfigInput";
import { InputProps } from "@/types";

type ScopeType = ApplicationFormAttributes['customisedQuestions']

function AdditionalQuestionsInputCard(props: InputProps<ScopeType>) {
  const [_, token] = useToken()

  return (
    <Card title="Additional Quesions" bordered={false} style={{ width: 600 }} headStyle={{ background: token.colorInfo }}>
      <QuestionsConfigArrayInput
        devider
        value={props.value ?? []}
        onChange={props.onChange}
      />
    </Card>
  )
}

export default AdditionalQuestionsInputCard