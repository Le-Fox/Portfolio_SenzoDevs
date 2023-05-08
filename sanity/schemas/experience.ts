import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string',
    }),

    defineField({
      name: 'heroImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
        }
    }),
    defineField({
      name: 'backgroundInformation',
      title: 'BackgroundInformation',
      type: 'string',
    }),
    defineField({
      name: 'profilePicture',
      title: 'ProfilePicture',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'phoneNumber',
      title: 'PhoneNumber',
      type: 'string',
    }),
    defineField({
      name: 'emailAddress',
      title: 'EmailAddress',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of:[{type: 'reference',to:{type:"social"}}],
    }),

  ],


})
