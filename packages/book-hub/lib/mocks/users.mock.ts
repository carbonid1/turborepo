import type gg from 'lib/generated'

type UserName = 'ivan' | 'john'

const usersMock: Record<UserName, gg.User> = {
  ivan: {
    id: '1',
    email: 'ivan@test.com',
    name: 'Ivan',
    createdAt: '',
    updatedAt: '',
    image: 'https://i.pravatar.cc/150?img=3',
  },
  john: {
    id: '2',
    email: 'john@test.com',
    name: 'John Doe',
    createdAt: '',
    updatedAt: '',
    image: null,
  },
}

export default usersMock
