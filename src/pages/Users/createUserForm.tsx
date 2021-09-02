import { useMutation } from '@apollo/client'
import { Button, Container } from '@toptal/picasso'
import { Form, FormSpy } from '@toptal/picasso-forms'
import React, { useState } from 'react'
import { GetUsersQuery, InsertUserQuery } from './queries'

export const CreateUserForm: React.FC<{}> = () => {
  const [displayForm, setDisplayForm] = useState('block')

  const [buttonIsActive, setButtonIsActive] = useState(true)

  const [insertUser, { error }] = useMutation(InsertUserQuery)

  const toggleForm = () => {
    if (displayForm === 'block') {
      setDisplayForm('none')
      setButtonIsActive(false)
    } else {
      setDisplayForm('block')
      setButtonIsActive(true)
    }
  }

  if (error) return <p>Error : {error.message}(</p>

  return (
    <Container padded="small">
      <Button fullWidth onClick={toggleForm} disabled={buttonIsActive}>
        Create User
      </Button>
      <Container padded="small" style={{ display: `${displayForm}` }}>
        <Form
          onSubmit={user => {
            insertUser({
              variables: {
                name: user.name,
                rocket: user.rocket,
                twitter: user.twitter
              },
              update: (cache, { data: { insertUser } }) => {
                const data: any = cache.readQuery({
                  query: GetUsersQuery,
                  variables: { limit: 20 }
                })
                cache.writeQuery({
                  query: GetUsersQuery,
                  variables: { limit: 20 },
                  data: {
                    ...data,
                    users: [
                      ...data.users,
                      { __typename: 'users', ...insertUser }
                    ]
                  }
                })
              }
            })
          }}
          successSubmitMessage="Congratulations, new user has been created!"
        >
          <Form.Input required name="name" label="Name" width="full" />
          <FormSpy>
            {({ values }) => (
              <Form.Input
                required
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
