export const needToReply = [
  {
    id: 0,
    user: {
      id: '1',
      name: 'Lorem Ipsum Title',
      avatar: 'avatar1.jpeg',
      shop: {
        name: 'Tokopedia',
        icon: 'tokopediaIcon.png',
      },
      tag: {
        text: 'Beauty Lovers',
        color: 'green.90'
      },
    },
    chats: [
      {
        id: '1',
        chat: 'This is the preview of text we received from the buyers',
        detail: 'Just now',
      },
    ],
    createdTime: 'Thu Oct 20 2022 00:00:00 GMT+0700 (Western Indonesia Time)',
    time: 'Today',
    unread: 1,
  },
  {
    id: 1,
    user: {
      id: 5,
      name: 'Lorem Ipsum Title',
      avatar: 'avatar5.jpeg',
      shop: {
        name: 'Tokopedia',
        icon: 'tokopediaIcon.png',
      },
      tag: {
        text: 'Beauty Lovers',
        color: 'green.90'
      },
    },
    chats: [
      {
        id: '5',
        chat: 'This is the preview of text we received from the buyers',
        detail: 'Just now',
      },
      {
        id: '5',
        chat: 'This is the preview of text we received from the buyers',
        detail: 'Just now',
      },
    ],
    createdTime: 'Thu Oct 20 2022 00:00:00 GMT+0000',
    time: 'Today',
    unread: 20,
  },
  {
    id: 2,
    user: {
      id: 2,
      name: 'Penggemar Pitu Chat',
      avatar: 'avatar2.jpeg',
      shop: {
        name: 'Tokopedia',
        icon: 'tokopediaIcon.png',
      },
      tag: {
        text: 'Beauty Lovers',
        color: 'green.90'
      },
    },
    chats: [
      {
        id: '2',
        chat: 'Halo admin',
        detail: 'Just now',
      },
      {
        id: '3',
        chat: 'Lorem Ipsum',
        detail: 'Sent · Just now',
      },
    ],
    createdTime: 'Thu Oct 20 2022 00:00:00 GMT+0000',
    time: 'Today',
    unread: 3,
  },
  {
    id: 3,
    user: {
      id: 5,
      name: 'Lorem Ipsum Title',
      avatar: 'avatar5.jpeg',
      shop: {
        name: 'Tokopedia',
        icon: 'tokopediaIcon.png',
      },
      tag: {
        text: 'Beauty Lovers',
        color: 'green.90'
      },
    },
    chats: [
      {
        id: '5',
        chat: 'This is the preview of text we received from the buyers',
        detail: 'Just now',
      },
      {
        id: '5',
        chat: 'This is the preview of text we received from the buyers',
        detail: 'Just now',
      },
    ],
    createdTime: 'Thu Oct 20 2022 00:00:00 GMT+0000',
    time: 'Today',
    unread: 2,
  },
  {
    id: 4,
    user: {
      id: 4,
      name: 'Christina Lee',
      avatar: 'avatar4.jpg',
      shop: {
        name: 'Tokopedia',
        icon: 'tokopediaIcon.png',
      },
      tag: {
        text: 'Beauty Lovers',
        color: 'green.90'
      },
    },
    chats: [
      {
        id: '4',
        chat: 'Lorem ipsum',
        detail: 'Just now',
      },
      {
        id: '3',
        chat: 'Lorem Ipsum',
        detail: 'Sent · Just now',
      },
    ],
    createdTime: 'Thu Oct 20 2022 00:00:00 GMT+0000',
    time: 'Yesterday',
    unread: 2,
  },
]

export const replied = []

export const allChat = []

export const getChatById = (id, arr) => {
  return arr.find((chat) => chat.id === id)
}