import { describe, vi, test } from 'vitest'
import { render } from '@testing-library/react'
import { TagPicker, Tag } from './index.tsx'

describe('tag/tagpicker test Tests', () => {
  test('renders TagPicker', () => {
    vi.mock('../../services/services-hook.ts', () => {
      const useServicesAPI = ({ testId }: { testId: string }): Array<(() => unknown) | null> | undefined => {
        switch (testId) {
          case 'list-tasks':
            return [
              () => {
                return [{
                  id: 1,
                  title: 'test!',
                  description: 'Just a simple description with some long text!',
                  done: false,
                  dueAt: '2023-10-11T19:10:00.000Z',
                  priority: 5,
                  createdAt: '2023-12-06T15:03:11.000Z',
                  updatedAt: '2023-12-06T15:03:11.000Z',
                  tags: []
                }]
              },
              null
            ]
          case 'list-tags':
            return [
              async () => {
                return [{
                  id: 1,
                  name: 'Test Tag',
                  background: '#4287F5',
                  createdAt: '2023-12-06T15:14:57.000Z',
                  updatedAt: '2023-12-06T15:14:57.000Z'
                }]
              },
              null
            ]
          case 'update-task':
            return [
              () => {
                return {
                  id: 1,
                  title: 'test!',
                  description: 'Just a simple description with some long text!',
                  done: false,
                  dueAt: '2023-10-11T19:10:00.000Z',
                  priority: 1,
                  createdAt: '2023-12-06T15:03:11.000Z',
                  updatedAt: '2023-12-06T15:18:34.875Z',
                  tags: []
                }
              },
              null
            ]
          case 'delete-task':
            return [
              () => { return {} },
              null
            ]
          case 'add-tag-to-task':
            return [
              () => { return {} },
              null
            ]
          case 'remove-tag-from-task':
            return [
              () => { return {} },
              null
            ]
          case 'create-tag':
            return [
              () => { return {} },
              null
            ]
          case 'delete-tag':
            return [
              () => { return {} },
              null
            ]
        }
      }

      return { useServicesAPI }
    })

    const fakeTags = [
      {
        id: 1,
        name: 'Fake Tag 1',
        background: '#000000',
        createdAt: '2023-12-06T15:14:57.000Z'
      },
      {
        id: 2,
        name: 'Fake Tag 2',
        background: '#FFFFFF',
        createdAt: '2023-12-06T15:14:57.000Z'
      }
    ]

    interface tagsProps {
      id: number
      name: string
      background: string
      createdAt: string
    }

    render(
      <TagPicker
        tags={fakeTags as tagsProps[]}
        onAdd={() => {} }
        onRemove={() => {}}
      />
    )
  })

  test('renders Tag', () => {
    vi.mock('../../services/services-hook.ts', () => {
      const useServicesAPI = ({ testId }: { testId: string }): Array<(() => unknown) | null> | undefined => {
        switch (testId) {
          case 'list-tasks':
            return [
              () => {
                return [{
                  id: 1,
                  title: 'test!',
                  description: 'Just a simple description with some long text!',
                  done: false,
                  dueAt: '2023-10-11T19:10:00.000Z',
                  priority: 5,
                  createdAt: '2023-12-06T15:03:11.000Z',
                  updatedAt: '2023-12-06T15:03:11.000Z',
                  tags: []
                }]
              },
              null
            ]
          case 'list-tags':
            return [
              async () => {
                return [{
                  id: 1,
                  name: 'Test Tag',
                  background: '#4287F5',
                  createdAt: '2023-12-06T15:14:57.000Z',
                  updatedAt: '2023-12-06T15:14:57.000Z'
                }]
              },
              null
            ]
          case 'update-task':
            return [
              () => {
                return {
                  id: 1,
                  title: 'test!',
                  description: 'Just a simple description with some long text!',
                  done: false,
                  dueAt: '2023-10-11T19:10:00.000Z',
                  priority: 1,
                  createdAt: '2023-12-06T15:03:11.000Z',
                  updatedAt: '2023-12-06T15:18:34.875Z',
                  tags: []
                }
              },
              null
            ]
          case 'delete-task':
            return [
              () => { return {} },
              null
            ]
          case 'add-tag-to-task':
            return [
              () => { return {} },
              null
            ]
          case 'remove-tag-from-task':
            return [
              () => { return {} },
              null
            ]
          case 'create-tag':
            return [
              () => { return {} },
              null
            ]
          case 'delete-tag':
            return [
              () => { return {} },
              null
            ]
        }
      }

      return { useServicesAPI }
    })

    const fakeTags = [
      {
        id: 1,
        name: 'Fake Tag 1',
        background: '#000000',
        createdAt: '2023-12-06T15:14:57.000Z'
      },
      {
        id: 2,
        name: 'Fake Tag 2',
        background: '#FFFFFF',
        createdAt: '2023-12-06T15:14:57.000Z'
      }
    ]

    interface tagsProps {
      id: number
      name: string
      background: string
      createdAt: string
    }

    render(
      <Tag
        tag={fakeTags[0] as tagsProps}
        onRemove={() => {} }
      />
    )
  })
})
