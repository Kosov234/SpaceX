import { useMutation } from '@apollo/client'
import { Button, Container } from '@toptal/picasso'
import { Form, FormSpy } from '@toptal/picasso-forms'
import React, { useState } from 'react'
import IUser from '../../types/IUser'
import { InsertUserQuery } from './queries'

interface IComponentProps {
  UpdateQuery: () => void
}

export const CreateUserForm: React.FC<IComponentProps> = (
  Props: IComponentProps
) => {
  const [formState, setFormState] = useState<IUser>({
    name: '',
    rocket: '',
    twitter: ''
  })
  const [displayForm, setDisplayForm] = useState('block')

  const [buttonIsActive, setButtonIsActive] = useState(true)

  const [insertUser] = useMutation(InsertUserQuery, {
    variables: {
      name: formState.name,
      rocket: formState.rocket,
      twitter: formState.twitter
    },
    onCompleted() {
      Props.UpdateQuery()
    }
  })

  const toggleForm = () => {
    if (displayForm === 'block') {
      setDisplayForm('none')
      setButtonIsActive(false)
    } else {
      setDisplayForm('block')
      setButtonIsActive(true)
    }
  }

  return (
    <Container padded="small">
      <Button fullWidth onClick={toggleForm} disabled={buttonIsActive}>
        Create User
      </Button>
      <Container padded="small" style={{ display: `${displayForm}` }}>
        <Form
          onSubmit={() => {
            insertUser()
          }}
          successSubmitMessage="Congratulations, new user has been created!"
        >
          <Form.Input
            required
            name="name"
            label="Name"
            width="full"
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setFormState({ ...formState, name: e.currentTarget.value })
            }}
          />
          <FormSpy>
            {({ values }) => (
              <Form.Input
                required
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                  setFormState({ ...formState, rocket: e.currentTarget.value })
                }}
                disabled={!values?.name}
                name="rocket"
                label="Rocket"
                width="full"
              />
            )}
          </FormSpy>

          <FormSpy>
            {({ values }) => (
              <Form.Input
                value={formState.twitter}
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                  setFormState({ ...formState, twitter: e.currentTarget.value })
                }}
                disabled={!values?.rocket}
                required
                name="twitter"
                label="Twitter"
                width="full"
              />
            )}
          </FormSpy>

          <Container top="small">
            <Form.SubmitButton variant="positive">Save</Form.SubmitButton>
            <Button variant="negative" onClick={toggleForm}>
              Close
            </Button>
          </Container>
        </Form>
      </Container>
    </Container>
  )
}
