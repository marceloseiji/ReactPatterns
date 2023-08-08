import type { Meta, StoryObj } from '@storybook/react'

import WithAuth, { User } from '.'

const UserStatus = ({ isLogged }: User) => {
  const logInText = isLogged ? 'User is logged!' : 'You need to log in!!!'

  return <p>{logInText}</p>
}

const meta = {
  title: 'Design Patterns/Higher Order Components/WithAuth',
  component: WithAuth(UserStatus),
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} satisfies Meta<typeof WithAuth>

export default meta
type Story = StoryObj<typeof meta>

export const RandomLogin: Story = {}
