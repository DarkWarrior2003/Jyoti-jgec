export default {
    title: 'Notice',
    name: 'notice',
    type: 'document',
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      
      {
        title : 'Filename',
        name : 'filename',
        type : 'file'
      },
      {
        title: 'Release date',
        name: 'releaseDate',
        type: 'date',
        options: {
          dateFormat: 'YYYY-MM-DD',
          calendarTodayLabel: 'Today'
        }
      }
      
     
    ],
    
  }
  