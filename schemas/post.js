// schemas/pet.js
export default {
    name: 'post',
    type: 'document',
      title: 'Post',
    fields: [
        { name: 'caption',
        type: 'string',
        title: 'Caption'
    },
      {
        name: 'video',
        type: 'file',
        title: 'Video',
        option: {
            hotspot:true,
        },
      },
      {
        name: 'userId',
        type: 'string',
        title: 'UserId',
      },
      {
        name: 'postedBy',
        type: 'string',
        title: 'PostedBy',
      },
      {
        name: 'likes',
        type: 'array',
        title: 'Likes',
        of:[
            {type: 'reference',
        to: [{type: 'user'}],
    },
        ],
      },
      {
        name: 'comment',
        type: 'array',
        title: 'Comment',
        of:[{type: 'user'}],
      },
      {
        name: 'topic',
        type: 'string',
        title: 'Topic'
      },
    ],
  };