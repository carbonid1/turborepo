import type { Story, Meta } from '@storybook/react'
import { AppWrapper } from 'lib/components/AppWrapper'
import { SignedOut } from '../../AppHeader/index.stories'
import SignInPage, { SignInPageProps } from '.'

export default {
  title: 'modules/SignInPage',
  component: SignInPage,
  parameters: {
    chromatic: { viewports: [320, 414, 1200] },
    layout: 'fullscreen',
  },
} as Meta

const Template: Story<SignInPageProps> = props => (
  <div
    style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <SignedOut />
    <AppWrapper>
      <SignInPage {...props} />
    </AppWrapper>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  providers: {
    google: {
      id: 'Google',
      callbackUrl: '',
      name: '',
      signinUrl: '',
      type: 'oauth',
    },
    github: {
      id: 'GitHub',
      callbackUrl: '',
      name: '',
      signinUrl: '',
      type: 'oauth',
    },
    twitter: {
      id: 'Twitter',
      callbackUrl: '',
      name: '',
      signinUrl: '',
      type: 'oauth',
    },
  },
}
Default.parameters = {
  ...SignedOut.parameters,
}
