import { describe, vi, test } from 'vitest'
import { render } from '@testing-library/react'
import ToDoTask from './index.tsx'

describe('ToDoTask Tests', () => {
  test('renders ToDoTask', () => {
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
        }
      }

      return { useServicesAPI }
    })

    const task = {
      id: 1,
      title: 'Finish React Project',
      description: 'Complete the frontend part of the React project.',
      done: false,
      dueAt: '2023-12-12T00:00:00.000Z',
      createdAt: '2023-11-30T00:00:00.000Z',
      priority: 3,
      tags: [{ id: 1, name: 'Work', background: '#4287F5', createdAt: '2023-11-01T00:00:00.000Z' }, { id: 2, name: 'Urgent', background: '#ff0000', createdAt: '2023-11-01T00:00:00.000Z' }]
    }

    const tags = {
      id: 1,
      name: 'Urgent',
      background: '#ff0000',
      createdAt: '2023-11-01T00:00:00.000Z'
    }

    const allTags = [tags]

    render(<ToDoTask task={task} allTags={allTags} updateTask={() => { }} deleteTask={() => { }} editTags={() => { }} />)
  })
})
