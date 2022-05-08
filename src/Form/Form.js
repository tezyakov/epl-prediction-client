import React from "react";
import { Form as FinalForm, Field } from "react-final-form";
import {
  teamsForForm,
  daysOfWeekForForm,
  refereesForForm,
  formDefaultValues,
} from "../constants";
import {Container, Description, Title} from "./Styles";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
  // Simple POST request with a JSON body using fetch
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values)
};
fetch('https://localhost:3000/api/predict', requestOptions)
    .then(response => response.json())
    .then(data => this.setState({ postId: data.id }));

};

export const Form = () => {
  const [defaultValues, setDefaultValues] = React.useState(false);
  return (
    <Container>
      <h1>EPL matches prediction</h1>
      <FinalForm
        onSubmit={onSubmit}
        initialValues={ defaultValues ? formDefaultValues : {}}
        render={({ handleSubmit, form, submitting, pristine, values }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <label>Default values</label>
                <Field
                  name="defaultValues"
                  component="input"
                  type="checkbox"
                  onClick={() => setDefaultValues(!defaultValues)}
                  checked={defaultValues}
                />
              </div>
              <div>
                <label>Day of week</label>
                <Field name="dayOfWeek" component="select">
                  {daysOfWeekForForm}
                </Field>
              </div>
              <div>
                <label>Referee</label>
                <Field name="referee" component="select">
                  {refereesForForm}
                </Field>
              </div>
              <div>
                <label>Home Team</label>
                <Field name="homeTeam" component="select">
                  {teamsForForm}
                </Field>
              </div>
              <div>
                <label>Away Team</label>
                <Field name="awayTeam" component="select">
                  {teamsForForm}
                </Field>
              </div>
              <Description>
                Please, use string with length = 5, example: WWLDL, where W -
                Win, D - Draw, L - Lose in fields below:
              </Description>
              <div>
                <label>{`${values.homeTeam ?? ""} form (W/L/D)`}</label>
                <Field
                  name="homeForm"
                  component="input"
                  type="text"
                  placeholder="Home Form"
                />
              </div>
              <div>
                <label>{`${values.awayTeam ?? ""} form (W/L/D)`}</label>
                <Field
                  name="awayForm"
                  component="input"
                  type="text"
                  placeholder="Away Form"
                />
              </div>
              <Description>
                Please, input additional information about last 10 matches of
                teams in the following format: '1 2 3 4 5 6 7 8 9 10'
                from old to new below:
              </Description>
              <Title>Goals:</Title>
              <div>
                <label>{`Goals scored by ${values.homeTeam ?? ""}`}</label>
                <Field
                  name="goalsScoredHome"
                  component="input"
                  type="text"
                  placeholder="Goals Scored Home"
                />
              </div>
              <div>
                <label>{`Goals conceded by ${values.homeTeam ?? ""}`}</label>
                <Field
                  name="goalsConcededHome"
                  component="input"
                  type="text"
                  placeholder="Goals Conceded Home"
                />
              </div>
              <div>
                <label>{`Goals scored by ${values.homeTeam ?? ""} 1 time`}</label>
                <Field
                  name="goalsScoredHome1time"
                  component="input"
                  type="text"
                  placeholder="Goals Scored Home 1 time"
                />
              </div>
              <div>
                <label>{`Goals conceded by ${values.homeTeam ?? ""} 1 time`}</label>
                <Field
                  name="goalsConcededHome1time"
                  component="input"
                  type="text"
                  placeholder="Goals Conceded Home 1 time"
                />
              </div>
              <div>
                <label>{`Goals scored by ${values.awayTeam ?? ""}`}</label>
                <Field
                  name="goalsScoredAway"
                  component="input"
                  type="text"
                  placeholder="Goals Scored Away"
                />
              </div>
              <div>
                <label>{`Goals conceded by ${values.awayTeam ?? ""}`}</label>
                <Field
                  name="goalsConcededAway"
                  component="input"
                  type="text"
                  placeholder="Goals Conceded Away"
                />
              </div>
              <div>
                <label>{`Goals scored by ${values.awayTeam ?? ""} 1 time`}</label>
                <Field
                  name="goalsScoredAway1time"
                  component="input"
                  type="text"
                  placeholder="Goals Scored Away 1 time"
                />
              </div>
              <div>
                <label>{`Goals conceded by ${values.awayTeam ?? ""} 1 time`}</label>
                <Field
                  name="goalsConcededAway1time"
                  component="input"
                  type="text"
                  placeholder="Goals Conceded Away 1 time"
                />
              </div>
              <Title>Shots:</Title>
              <div>
                <label>{`Shots made by ${values.homeTeam ?? ""}`}</label>
                <Field
                  name="shotsMadeHome"
                  component="input"
                  type="text"
                  placeholder="Shots Made Home"
                />
              </div>
              <div>
                <label>{`Shots allowed by ${values.homeTeam ?? ""}`}</label>
                <Field
                  name="shotsAllowedHome"
                  component="input"
                  type="text"
                  placeholder="Shots Allowed Home"
                />
              </div>
              <div>
                <label>{`Shots on target made by ${values.homeTeam ?? ""}`}</label>
                <Field
                  name="shotsTargetMadeHome"
                  component="input"
                  type="text"
                  placeholder="Shots Target Made Home"
                />
              </div>
              <div>
                <label>{`Shots on target allowed by ${values.homeTeam ?? ""}`}</label>
                <Field
                  name="shotsTargetAllowedHome"
                  component="input"
                  type="text"
                  placeholder="Shots Target Allowed Home"
                />
              </div>
              <div>
                <label>{`Shots made by ${values.awayTeam ?? ""}`}</label>
                <Field
                  name="shotsMadeAway"
                  component="input"
                  type="text"
                  placeholder="Shots Made Away"
                />
              </div>
              <div>
                <label>{`Shots allowed by ${values.awayTeam ?? ""}`}</label>
                <Field
                  name="shotsAllowedAway"
                  component="input"
                  type="text"
                  placeholder="Shots Allowed Away"
                />
              </div>
              <div>
                <label>{`Shots on target made by ${values.awayTeam ?? ""}`}</label>
                <Field
                  name="shotsTargetMadeAway"
                  component="input"
                  type="text"
                  placeholder="Shots Target Made Away"
                />
              </div>
              <div>
                <label>{`Shots on target allowed by ${values.awayTeam ?? ""}`}</label>
                <Field
                  name="shotsTargetAllowedAway"
                  component="input"
                  type="text"
                  placeholder="Shots Target Allowed Away"
                />
              </div>
              <Title>Corners:</Title>
              <div>
                <label>{`Corners made by ${values.homeTeam ?? ""}`}</label>
                <Field
                  name="cornersMadeHome"
                  component="input"
                  type="text"
                  placeholder="Corners Made Home"
                />
              </div>
              <div>
                <label>{`Corners allowed by ${values.homeTeam ?? ""}`}</label>
                <Field
                  name="cornersAllowedHome"
                  component="input"
                  type="text"
                  placeholder="Corners Allowed Home"
                />
              </div>
              <div>
                <label>{`Corners made by ${values.awayTeam ?? ""}`}</label>
                <Field
                  name="cornersMadeAway"
                  component="input"
                  type="text"
                  placeholder="Corners Made Away"
                />
              </div>
              <div>
                <label>{`Corners allowed by ${values.awayTeam ?? ""}`}</label>
                <Field
                  name="cornersAllowedAway"
                  component="input"
                  type="text"
                  placeholder="Corners Allowed Away"
                />
              </div>
              <Title>Fouls:</Title>
              <div>
                <label>{`Fouls made by ${values.homeTeam ?? ""}`}</label>
                <Field
                  name="foulsMadeHome"
                  component="input"
                  type="text"
                  placeholder="Fouls Made Home"
                />
              </div>
              <div>
                <label>{`Fouls allowed by ${values.homeTeam ?? ""}`}</label>
                <Field
                  name="foulsAllowedHome"
                  component="input"
                  type="text"
                  placeholder="Fouls Allowed Home"
                />
              </div>
              <div>
                <label>{`Fouls made by ${values.awayTeam ?? ""}`}</label>
                <Field
                  name="foulsMadeAway"
                  component="input"
                  type="text"
                  placeholder="Fouls Made Away"
                />
              </div>
              <div>
                <label>{`Fouls allowed by ${values.awayTeam ?? ""}`}</label>
                <Field
                  name="foulsAllowedAway"
                  component="input"
                  type="text"
                  placeholder="Fouls Allowed Away"
                />
              </div>
              <Title>Cards:</Title>
              <div>
                <label>{`Yellow cards by ${values.homeTeam ?? ""}`}</label>
                <Field
                  name="yellowCardsHome"
                  component="input"
                  type="text"
                  placeholder="Yellow Cards Home"
                />
              </div>
              <div>
                <label>{`Red cards by ${values.homeTeam ?? ""}`}</label>
                <Field
                  name="redCardsHome"
                  component="input"
                  type="text"
                  placeholder="Red Cards Home"
                />
              </div>
              <div>
                <label>{`Yellow cards by ${values.awayTeam ?? ""}`}</label>
                <Field
                  name="yellowCardsAway"
                  component="input"
                  type="text"
                  placeholder="Yellow Cards Away"
                />
              </div>
              <div>
                <label>{`Red cards by ${values.awayTeam ?? ""}`}</label>
                <Field
                  name="redCardsAway"
                  component="input"
                  type="text"
                  placeholder="Red Cards Away"
                />
              </div>
              <div className="buttons">
                <button type="submit" disabled={(submitting || pristine) && !defaultValues}>
                  Submit
                </button>
                <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          );
        }}
      />
    </Container>
  );
};
