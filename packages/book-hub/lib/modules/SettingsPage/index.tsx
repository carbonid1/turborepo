import type { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { CustomHead } from 'lib/components/CustomHead'
import { ROUTE } from 'lib/consts/routes'
import { useUpdateProfile } from 'lib/hooks/updateProfile'
import useProfile from 'lib/hooks/useProfile'
import { TextField } from 'lib/components/@controls/TextField'
import { Button } from 'lib/components/@controls/Button'

interface FormData {
  name: string | null
}

const SettingsPage: NextPage = () => {
  const { profile } = useProfile()
  const { updateProfile, loading } = useUpdateProfile()
  const { register, handleSubmit } = useForm<FormData>({ defaultValues: { name: profile?.name } })
  const onSubmit = handleSubmit(variables => {
    updateProfile({ variables })
  })

  return (
    <>
      <CustomHead title="Settings" />
      <div className="flex items-center justify-center flex-1">
        <form onSubmit={onSubmit} className="grid flex-1 max-w-xs gap-4" noValidate={false}>
          <TextField
            label="Name"
            inputProps={{
              id: 'name',
              type: 'text',
              ...register('name', { required: true }),
            }}
          />
          <Button type="submit" className="justify-self-end" loading={loading}>
            Save
          </Button>
        </form>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context)

  if (!session) {
    return {
      props: {},
      redirect: {
        destination: `/${ROUTE.signIn}`,
      },
    }
  }

  return {
    props: {},
  }
}

export default SettingsPage
